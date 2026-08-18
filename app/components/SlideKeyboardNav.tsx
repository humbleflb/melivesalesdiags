"use client";

import { useEffect } from "react";

const SLIDE_SELECTOR = "[data-slide]";

function isTypingTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false;
  const tag = target.tagName;
  return (
    tag === "INPUT" ||
    tag === "TEXTAREA" ||
    tag === "SELECT" ||
    target.isContentEditable
  );
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function slides() {
  return Array.from(document.querySelectorAll<HTMLElement>(SLIDE_SELECTOR));
}

function currentIndex() {
  const items = slides();
  if (items.length === 0) return 0;
  const marker = Math.min(120, window.innerHeight * 0.2);
  let index = 0;
  for (let i = 0; i < items.length; i += 1) {
    if (items[i].getBoundingClientRect().top <= marker) index = i;
  }
  return index;
}

function goTo(index: number) {
  const items = slides();
  const next = items[Math.max(0, Math.min(index, items.length - 1))];
  if (!next) return;
  next.scrollIntoView({
    behavior: prefersReducedMotion() ? "auto" : "smooth",
    block: "start",
  });
  if (next.id) {
    history.replaceState(null, "", `#${next.id}`);
  }
  requestAnimationFrame(updateProgress);
}

function updateProgress() {
  const items = slides();
  const bar = document.querySelector<HTMLElement>("[data-slide-progress]");
  if (!bar || items.length === 0) return;
  const max = Math.max(items.length - 1, 1);
  bar.style.width = `${(currentIndex() / max) * 100}%`;
}

export function SlideKeyboardNav() {
  useEffect(() => {
    updateProgress();

    const onKey = (event: KeyboardEvent) => {
      if (event.altKey || event.ctrlKey || event.metaKey) return;
      if (event.repeat) return;
      if (isTypingTarget(event.target)) return;

      const forward =
        event.key === "PageDown" ||
        event.key === "ArrowDown" ||
        event.key === "ArrowRight" ||
        (event.key === " " && !event.shiftKey);
      const backward =
        event.key === "PageUp" ||
        event.key === "ArrowUp" ||
        event.key === "ArrowLeft" ||
        (event.key === " " && event.shiftKey);

      if (event.key === "Home") {
        event.preventDefault();
        goTo(0);
        return;
      }
      if (event.key === "End") {
        event.preventDefault();
        goTo(slides().length - 1);
        return;
      }
      if (forward) {
        event.preventDefault();
        goTo(currentIndex() + 1);
      } else if (backward) {
        event.preventDefault();
        goTo(currentIndex() - 1);
      }
    };

    window.addEventListener("keydown", onKey, { passive: false });
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return (
    <>
      <div className="deck-progress-track" aria-hidden="true">
        <i data-slide-progress />
      </div>
      <p className="deck-hint">Page Down · próximo slide</p>
    </>
  );
}
