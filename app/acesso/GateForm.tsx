"use client";

import { useState, type FormEvent } from "react";

export function GateForm() {
  const [error, setError] = useState(false);
  const [pending, setPending] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const password = String(new FormData(event.currentTarget).get("password") ?? "");
    setPending(true);
    setError(false);
    try {
      const response = await fetch("/api/acesso", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!response.ok) {
        setError(true);
        setPending(false);
        return;
      }
      const next =
        window.location.pathname === "/acesso"
          ? "/"
          : `${window.location.pathname}${window.location.search}`;
      window.location.assign(next);
    } catch {
      setError(true);
      setPending(false);
    }
  }

  return (
    <form className="gate-card" onSubmit={onSubmit}>
      <img src="/melive-mark.png" alt="" />
      <p className="eyebrow">
        <span>Melive</span> Acesso restrito
      </p>
      <h1>A biblioteca pede senha.</h1>
      <p>
        Diagnósticos, propostas e a gestão do projeto abrem com a senha padrão
        enviada pela Melive.
      </p>
      <label>
        Senha
        <input
          type="password"
          name="password"
          autoComplete="current-password"
          autoCapitalize="none"
          autoCorrect="off"
          spellCheck={false}
          autoFocus
          required
        />
      </label>
      <button className="button dark" type="submit" disabled={pending}>
        {pending ? "Conferindo" : "Entrar"} <span>→</span>
      </button>
      {error ? (
        <p className="gate-error" role="alert">
          Senha incorreta.
        </p>
      ) : null}
    </form>
  );
}
