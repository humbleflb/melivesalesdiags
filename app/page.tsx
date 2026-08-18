import type { Metadata } from "next";
import Link from "next/link";
import { clients } from "./clients";

export const metadata: Metadata = {
  title: "Propostas Melive",
  description:
    "Mapa de diagnósticos e propostas comerciais Melive, organizados por cliente.",
};

export default function HubPage() {
  return (
    <main className="hub">
      <section className="hero hub-hero" id="inicio">
        <div className="hero-lines" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">
            <span>Melive</span> Biblioteca de propostas
          </p>
          <h1>
            Diagnósticos e jornadas
            <br />
            <strong>por cliente.</strong>
          </h1>
          <p className="hero-lead">
            Cada proposta vive em sua própria rota. Escolha o cliente para abrir
            o diagnóstico — e, quando existir, a proposta comercial.
          </p>
        </div>
        <div className="hero-stamp melive-stamp" aria-label="Melive">
          <img src="/melive-mark.png" alt="" />
        </div>
      </section>

      <section className="section hub-list" id="propostas">
        <div className="section-index">00 / CLIENTES</div>
        <div className="hub-head">
          <h2>
            Trabalhos alocados.
            <em> Um caminho por marca.</em>
          </h2>
          <p>
            {clients.length} propostas ativas. Novos clientes entram como rota,
            não como branch.
          </p>
        </div>
        <ul className="hub-grid">
          {clients.map((client, index) => (
            <li key={client.slug}>
              <article className="hub-card">
                <div className="hub-card-meta">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <small>{client.kind}</small>
                </div>
                <h3>{client.name}</h3>
                <p className="hub-card-sector">{client.sector}</p>
                <p>{client.summary}</p>
                <div className="hub-card-actions">
                  <Link className="button dark" href={client.href}>
                    Abrir {client.name} <span>→</span>
                  </Link>
                  {client.proposalHref ? (
                    <Link className="button cream" href={client.proposalHref}>
                      Proposta comercial
                    </Link>
                  ) : null}
                </div>
                <em>{client.year}</em>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
