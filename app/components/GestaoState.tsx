"use client";

import { useEffect } from "react";

const TASK_ID = /^s[1-9]\d{0,3}-t[1-9]\d{0,3}$/;
const SYNC_OK = "Os checks valem para todo mundo que entra com a senha.";
const SYNC_FAIL = "Não foi possível sincronizar os checks. Recarregue a página.";

function legacyKey(project: string) {
  return `melive-gestao-${project}-v1`;
}

function seededKey(project: string) {
  return `melive-gestao-seeded-${project}`;
}

function readLegacy(project: string) {
  try {
    const parsed = JSON.parse(localStorage.getItem(legacyKey(project)) ?? "[]");
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item): item is string => typeof item === "string" && TASK_ID.test(item));
  } catch {
    return [];
  }
}

function taskBoxes() {
  return [...document.querySelectorAll<HTMLInputElement>("[data-gestao-task]")];
}

function refresh() {
  const boxes = taskBoxes();
  const checked = new Set(
    boxes.filter((box) => box.checked).map((box) => box.dataset.gestaoTask ?? ""),
  );
  const progress = document.querySelector<HTMLElement>("[data-gestao-progress]");
  const status = document.querySelector<HTMLElement>("[data-gestao-status]");
  if (progress) progress.textContent = `${checked.size} de ${boxes.length}`;
  if (status) {
    status.textContent =
      checked.size === 0 ? "Não iniciado" : checked.size === boxes.length ? "Concluído" : "Pendente";
  }

  document.querySelectorAll<HTMLElement>("[data-gestao-blocker]").forEach((card) => {
    const ids = (card.dataset.tasks ?? "").split(" ").filter(Boolean);
    const clear = ids.length > 0 && ids.every((id) => checked.has(id));
    card.classList.toggle("is-clear", clear);
    const label = card.querySelector<HTMLElement>("[data-gestao-blocker-state]");
    if (label) label.textContent = clear ? "Resolvido" : "Aberto";
  });

  document.querySelectorAll<HTMLElement>("[data-gestao-section]").forEach((section) => {
    const sectionBoxes = [...section.querySelectorAll<HTMLInputElement>("[data-gestao-task]")];
    const done = sectionBoxes.filter((box) => box.checked).length;
    const meter = section.querySelector<HTMLElement>("[data-gestao-section-count]");
    if (meter) meter.textContent = `${done}/${sectionBoxes.length}`;
  });
}

function apply(checked: Set<string>, pending: Map<string, boolean>) {
  for (const box of taskBoxes()) {
    const id = box.dataset.gestaoTask ?? "";
    box.checked = pending.has(id) ? Boolean(pending.get(id)) : checked.has(id);
  }
  refresh();
}

function setSync(message: string) {
  const node = document.querySelector<HTMLElement>("[data-gestao-sync]");
  if (node) node.textContent = message;
}

async function readChecked(response: Response) {
  const body = (await response.json()) as { checked?: unknown };
  const checked = new Set<string>();
  if (Array.isArray(body.checked)) {
    for (const id of body.checked) {
      if (typeof id === "string") checked.add(id);
    }
  }
  return checked;
}

export function GestaoState({ project }: { project: string }) {
  useEffect(() => {
    const pending = new Map<string, boolean>();
    let remote = new Set<string>();
    let stopped = false;
    let timer = 0;

    async function pull(allowSeed: boolean) {
      const response = await fetch(`/api/gestao?project=${encodeURIComponent(project)}`, {
        cache: "no-store",
      });
      if (!response.ok) throw new Error("load");
      const checked = await readChecked(response);
      if (allowSeed && checked.size === 0 && !localStorage.getItem(seededKey(project))) {
        const legacy = readLegacy(project);
        if (legacy.length > 0) {
          const seeded = await fetch("/api/gestao", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ project, seed: legacy }),
          });
          if (!seeded.ok) throw new Error("seed");
          checked.clear();
          for (const id of await readChecked(seeded)) checked.add(id);
        }
      }
      localStorage.setItem(seededKey(project), "1");
      localStorage.removeItem(legacyKey(project));
      remote = checked;
      if (!stopped) {
        apply(remote, pending);
        setSync(SYNC_OK);
      }
    }

    async function onChange(event: Event) {
      const box = event.target;
      if (!(box instanceof HTMLInputElement) || !box.matches("[data-gestao-task]")) return;
      const taskId = box.dataset.gestaoTask ?? "";
      const checked = box.checked;
      pending.set(taskId, checked);
      refresh();
      try {
        const response = await fetch("/api/gestao", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ project, taskId, checked }),
        });
        if (!response.ok) throw new Error("save");
        remote = await readChecked(response);
        setSync(SYNC_OK);
      } catch {
        box.checked = !checked;
        setSync("Não foi possível sincronizar este check. Tente de novo.");
      } finally {
        pending.delete(taskId);
        if (!stopped) apply(remote, pending);
      }
    }

    const current = taskBoxes();
    current.forEach((box) => box.addEventListener("change", onChange));
    pull(true)
      .catch(() => {
        if (!stopped) setSync(SYNC_FAIL);
      })
      .finally(() => {
        if (stopped) return;
        timer = window.setInterval(() => {
          if (document.hidden || pending.size > 0) return;
          pull(false).catch(() => {
            if (!stopped) setSync(SYNC_FAIL);
          });
        }, 4000);
      });

    return () => {
      stopped = true;
      window.clearInterval(timer);
      current.forEach((box) => box.removeEventListener("change", onChange));
    };
  }, [project]);

  return null;
}
