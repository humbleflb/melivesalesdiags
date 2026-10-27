"use client";

import { useEffect } from "react";

const STORAGE_KEY = "melive-gestao-ngb-v1";

function readSaved() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
    return new Set<string>(Array.isArray(parsed) ? parsed.filter((item) => typeof item === "string") : []);
  } catch {
    return new Set<string>();
  }
}

function refresh() {
  const boxes = [
    ...document.querySelectorAll<HTMLInputElement>("[data-gestao-task]"),
  ];
  const checked = new Set(
    boxes.filter((box) => box.checked).map((box) => box.dataset.gestaoTask ?? ""),
  );
  const progress = document.querySelector<HTMLElement>("[data-gestao-progress]");
  const status = document.querySelector<HTMLElement>("[data-gestao-status]");
  const total = boxes.length;
  if (progress) progress.textContent = `${checked.size} de ${total}`;
  if (status) {
    status.textContent =
      checked.size === 0 ? "Não iniciado" : checked.size === total ? "Concluído" : "Pendente";
  }

  document.querySelectorAll<HTMLElement>("[data-gestao-blocker]").forEach((card) => {
    const ids = (card.dataset.tasks ?? "").split(" ").filter(Boolean);
    const clear = ids.length > 0 && ids.every((id) => checked.has(id));
    card.classList.toggle("is-clear", clear);
    const label = card.querySelector<HTMLElement>("[data-gestao-blocker-state]");
    if (label) label.textContent = clear ? "Resolvido" : "Aberto";
  });

  document.querySelectorAll<HTMLElement>("[data-gestao-section]").forEach((section) => {
    const sectionBoxes = [
      ...section.querySelectorAll<HTMLInputElement>("[data-gestao-task]"),
    ];
    const done = sectionBoxes.filter((box) => box.checked).length;
    const meter = section.querySelector<HTMLElement>("[data-gestao-section-count]");
    if (meter) meter.textContent = `${done}/${sectionBoxes.length}`;
  });
}

export function GestaoState() {
  useEffect(() => {
    const saved = readSaved();
    const boxes = [
      ...document.querySelectorAll<HTMLInputElement>("[data-gestao-task]"),
    ];
    boxes.forEach((box) => {
      box.checked = saved.has(box.dataset.gestaoTask ?? "");
    });

    const persist = () => {
      const ids = boxes.filter((box) => box.checked).map((box) => box.dataset.gestaoTask);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
      refresh();
    };

    boxes.forEach((box) => box.addEventListener("change", persist));
    refresh();
    return () => boxes.forEach((box) => box.removeEventListener("change", persist));
  }, []);

  return null;
}
