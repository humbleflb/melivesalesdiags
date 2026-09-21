import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  propostaMeta,
  proposalSlides,
  slideIndexLabel,
  type ProposalSlide,
  type TextPart,
} from "./content";
import { DownloadPptxButton } from "./DownloadPptxButton";

export const metadata: Metadata = {
  title: propostaMeta.title,
  description: propostaMeta.description,
};

function HeadlineParts({
  parts,
  as: Tag = "h2",
  className,
}: {
  parts: TextPart[];
  as?: "h1" | "h2";
  className?: string;
}) {
  return (
    <Tag className={className}>
      {parts.map((part, index) => {
        const key = `${part.text}-${index}`;
        if (part.strong) {
          return (
            <span key={key}>
              {index > 0 ? <br /> : null}
              <strong>{part.text}</strong>
            </span>
          );
        }
        if (part.emphasis) {
          return <em key={key}>{part.text}</em>;
        }
        return <span key={key}>{part.text}</span>;
      })}
    </Tag>
  );
}

function BrandMark({ className }: { className?: string }) {
  return (
    <div className={className ? `cover-brand ${className}` : "cover-brand"}>
      <img src={propostaMeta.brand.logoSrc} alt={propostaMeta.brand.left} />
      <span aria-hidden="true">+</span>
      <b>{propostaMeta.brand.right}</b>
    </div>
  );
}

function WhatsappCta() {
  return (
    <a
      className="button dark whatsapp-cta"
      href={propostaMeta.whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="whatsapp-cta-label">
        <svg
          className="whatsapp-icon"
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
        >
          <path
            fill="currentColor"
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
          />
        </svg>
        {propostaMeta.whatsapp.label}
      </span>
      <span aria-hidden="true">↗</span>
    </a>
  );
}

function SlideShell({
  slide,
  className,
  children,
}: {
  slide: ProposalSlide;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      className={`slide slide-${slide.theme}${className ? ` ${className}` : ""}`}
      id={slide.id}
    >
      {children}
    </section>
  );
}

function SlideIndex({ slide }: { slide: ProposalSlide }) {
  return (
    <p className={`slide-index${slide.indexLight ? " light" : ""}`}>
      {slideIndexLabel(slide)}
    </p>
  );
}

function renderSlide(slide: ProposalSlide) {
  switch (slide.layout) {
    case "cover":
      return (
        <SlideShell key={slide.id} slide={slide}>
          <div className="slide-bg-lines" aria-hidden="true" />
          <div className="slide-inner cover-inner">
            <p className="slide-kicker">
              <span>{slide.kicker}</span> Lâmina {slide.number}
            </p>
            <HeadlineParts parts={slide.headline} as="h1" />
            <p className="slide-lead">{slide.lead}</p>
            <div className="cover-actions">
              <DownloadPptxButton />
            </div>
            {slide.showBrand ? <BrandMark /> : null}
          </div>
          {slide.nextHref ? (
            <a className="slide-next" href={slide.nextHref}>
              {slide.nextLabel ?? "Continuar"} <span>↓</span>
            </a>
          ) : null}
        </SlideShell>
      );

    case "split-copy":
      return (
        <SlideShell key={slide.id} slide={slide}>
          <div className="slide-inner two-col">
            <div>
              <SlideIndex slide={slide} />
              <HeadlineParts parts={slide.headline} />
            </div>
            <div className="slide-copy">
              {slide.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <blockquote>{slide.quote}</blockquote>
            </div>
          </div>
        </SlideShell>
      );

    case "bridge":
      return (
        <SlideShell key={slide.id} slide={slide}>
          <div className="slide-inner">
            <SlideIndex slide={slide} />
            <HeadlineParts parts={slide.headline} className="slide-wide" />
            <p className="bridge-label">{slide.bridgeLabel}</p>
            <div
              className="bridge-row"
              aria-label={slide.steps.map((step) => step.title).join(" → ")}
            >
              {slide.steps.flatMap((step, index) => {
                const article = (
                  <article key={step.step}>
                    <small>{step.step}</small>
                    <h3>{step.title}</h3>
                  </article>
                );
                if (index === 0) return [article];
                return [
                  <span key={`arrow-${step.step}`} aria-hidden="true">
                    →
                  </span>,
                  article,
                ];
              })}
            </div>
            <p className="slide-footnote">{slide.footnote}</p>
          </div>
        </SlideShell>
      );

    case "project":
      return (
        <SlideShell key={slide.id} slide={slide}>
          <div className="slide-inner project-inner">
            <SlideIndex slide={slide} />
            <p className="project-tag">{slide.tag}</p>
            <h2>
              {slide.titleLines.map((line, index) => (
                <span key={line}>
                  {index > 0 ? <br /> : null}
                  {line}
                </span>
              ))}
            </h2>
            <p className="slide-lead">{slide.lead}</p>
            <div className="project-promise">
              <p>{slide.promise}</p>
              <blockquote>{slide.quote}</blockquote>
            </div>
          </div>
        </SlideShell>
      );

    case "cards":
      return (
        <SlideShell key={slide.id} slide={slide}>
          <div className="slide-inner">
            <SlideIndex slide={slide} />
            <HeadlineParts parts={slide.headline} />
            {slide.lead ? (
              <p
                className={
                  slide.leadTone === "cream"
                    ? "slide-lead cream-text"
                    : "slide-lead"
                }
              >
                {slide.lead}
              </p>
            ) : null}
            <div className={slide.gridClass}>
              {slide.cards.map((item, index) => (
                <article key={item.title}>
                  <span>
                    {item.step ?? String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </SlideShell>
      );

    case "marketing":
      return (
        <SlideShell key={slide.id} slide={slide}>
          <div className="slide-inner two-col">
            <div>
              <SlideIndex slide={slide} />
              <HeadlineParts parts={slide.headline} />
              <p className="slide-lead cream-text">{slide.lead}</p>
            </div>
            <div>
              <p className="bridge-label cream-text">{slide.listLabel}</p>
              <ul className="check-list">
                {slide.list.map((field) => (
                  <li key={field}>{field}</li>
                ))}
              </ul>
              <blockquote className="on-green">{slide.quote}</blockquote>
            </div>
          </div>
        </SlideShell>
      );

    case "measurement":
      return (
        <SlideShell key={slide.id} slide={slide}>
          <div className="slide-inner two-col">
            <div>
              <SlideIndex slide={slide} />
              <HeadlineParts parts={slide.headline} />
              <p className="slide-lead">{slide.lead}</p>
              <blockquote>{slide.quote}</blockquote>
            </div>
            <div className="event-grid">
              {slide.events.map((event, index) => (
                <article key={event}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <b>{event}</b>
                </article>
              ))}
            </div>
          </div>
        </SlideShell>
      );

    case "checklist":
      return (
        <SlideShell key={slide.id} slide={slide}>
          <div className="slide-inner">
            <SlideIndex slide={slide} />
            <HeadlineParts parts={slide.headline} />
            <ul className="deliverable-list">
              {slide.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </SlideShell>
      );

    case "timeline":
      return (
        <SlideShell key={slide.id} slide={slide}>
          <div className="slide-inner timeline-inner">
            <SlideIndex slide={slide} />
            <p className="big-number">{slide.bigNumber}</p>
            <h2>{slide.title}</h2>
            <p className="slide-lead">{slide.lead}</p>
          </div>
        </SlideShell>
      );

    case "investment":
      return (
        <SlideShell key={slide.id} slide={slide}>
          <div className="slide-inner investment-inner">
            <SlideIndex slide={slide} />
            <p className="project-tag light-tag">{slide.tag}</p>
            <p className="price">
              {slide.currency} <b>{slide.amount}</b>
            </p>
            <p className="slide-lead cream-text">{slide.lead}</p>
            <div className="payment-box">
              <small>{slide.paymentLabel.toUpperCase()}</small>
              <div>
                {slide.paymentTerms.map((term) => (
                  <p key={term.description}>
                    <b>{term.amount}</b> {term.description}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </SlideShell>
      );

    case "scale":
      return (
        <SlideShell key={slide.id} slide={slide}>
          <div className="slide-inner two-col">
            <div>
              <SlideIndex slide={slide} />
              <HeadlineParts parts={slide.headline} />
              <p className="slide-lead">{slide.lead}</p>
              <div className="scale-price">
                <small>{slide.priceLabel.toUpperCase()}</small>
                <p>
                  {slide.pricePrefix} <b>{slide.priceAmount}</b>{" "}
                  {slide.priceSuffix}
                </p>
                <span>{slide.priceNote}</span>
              </div>
            </div>
            <ul className="scale-list">
              {slide.uses.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </SlideShell>
      );

    case "close":
      return (
        <SlideShell key={slide.id} slide={slide} className="slide-close">
          <div className="slide-bg-lines" aria-hidden="true" />
          <div className="slide-inner cover-inner">
            <p className="slide-kicker">
              <span>{slide.kicker}</span> Lâmina {slide.number}
            </p>
            <HeadlineParts
              parts={slide.headline}
              as="h2"
              className="close-title"
            />
            <p className="slide-lead">{slide.lead}</p>
            <div className="cover-actions">
              {slide.showWhatsapp ? <WhatsappCta /> : null}
              <DownloadPptxButton className="button cream" />
            </div>
            {slide.showBrand ? <BrandMark className="close-brand" /> : null}
            <p className="close-tagline">{slide.tagline}</p>
          </div>
        </SlideShell>
      );

    default: {
      const _exhaustive: never = slide;
      return _exhaustive;
    }
  }
}

export default function PropostaPage() {
  return (
    <main className="proposta">{proposalSlides.map(renderSlide)}</main>
  );
}
