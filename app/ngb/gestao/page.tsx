import type { Metadata } from "next";
import { SiteFooter } from "../../components/SiteFooter";
import { GestaoState } from "../../components/GestaoState";
import { blockers, dependencyNote, nextActions, projectStatus, sections, taskId, taskTotal } from "./content";

export const metadata: Metadata = {
  title: "Gestão NGB Arquitetura — Melive",
  description:
    "Controle do projeto NGB Arquitetura: prioridades, acessos, conteúdo, site e publicação.",
  robots: { index: false, follow: false },
};

export default function NgbGestaoPage() {
  const total = taskTotal();

  return (
    <main className="gestao">
      <GestaoState project="ngb" />
      <header className="gestao-hero">
        <p className="eyebrow">
          <span>Gestão</span> NGB Arquitetura + Melive
        </p>
        <div className="gestao-hero-row">
          <h1>
            O projeto ainda
            <em> não começou.</em>
          </h1>
          <div className="gestao-status">
            <small>STATUS GERAL</small>
            <strong data-gestao-status>{projectStatus.label}</strong>
            <b data-gestao-progress data-total={total}>
              0 de {total}
            </b>
          </div>
        </div>
        <p className="hero-lead">{projectStatus.summary}</p>
      </header>

      <section className="gestao-blockers" aria-label="Bloqueadores imediatos">
        {blockers.map((blocker) => (
          <article
            key={blocker.title}
            data-gestao-blocker
            data-tasks={blocker.taskIds.join(" ")}
          >
            <small data-gestao-blocker-state>Aberto</small>
            <h2>{blocker.title}</h2>
            <p>{blocker.detail}</p>
          </article>
        ))}
      </section>

      <section className="gestao-next">
        <p className="section-index">AGORA</p>
        <h2>
          Dez ações para
          <em> destravar.</em>
        </h2>
        <ol>
          {nextActions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
        <p>{dependencyNote}</p>
      </section>

      {sections.map((section, sectionIndex) => (
        <details
          className="gestao-section"
          key={section.number}
          data-gestao-section
          id={`etapa-${section.number}`}
        >
          <summary>
            <p className="section-index">
              {section.number} / {section.owner}
            </p>
            <div>
              <h2>{section.title}</h2>
              {section.note ? <p>{section.note}</p> : null}
            </div>
            <b data-gestao-section-count>0/{section.tasks.length}</b>
            <span className="gestao-chevron" aria-hidden="true" />
          </summary>
          <ul>
            {section.tasks.map((task, taskIndex) => {
              const id = taskId(sectionIndex, taskIndex);
              return (
                <li key={id}>
                  <label className="gestao-task">
                    <input type="checkbox" data-gestao-task={id} />
                    <span>{task}</span>
                  </label>
                </li>
              );
            })}
          </ul>
        </details>
      ))}

      <p className="gestao-save" data-gestao-sync>
        Os checks valem para todo mundo que entra com a senha.
      </p>
      <SiteFooter caption="Gestão do projeto • NGB Arquitetura • Outubro de 2026" />
    </main>
  );
}
