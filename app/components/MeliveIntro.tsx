const capabilities = [
  "Conectar cada público à oferta mais relevante",
  "Traduzir soluções complexas em propostas de valor claras",
  "Organizar argumentos, provas e objeções na ordem certa",
  "Qualificar melhor o interesse antes do contato comercial",
  "Transformar páginas e campanhas em ativos mensuráveis de aquisição",
];

const perspectives = [
  {
    number: "01",
    title: "Estratégia",
    text: "Entender público, intenção, oferta, objeções e objetivo comercial.",
  },
  {
    number: "02",
    title: "Comunicação",
    text: "Transformar diferenciais e funcionalidades em argumentos claros e relevantes.",
  },
  {
    number: "03",
    title: "Experiência",
    text: "Construir jornadas que conduzam o visitante com clareza até o próximo passo.",
  },
  {
    number: "04",
    title: "Performance",
    text: "Preparar cada entrega para gerar dados, aprendizados e novas oportunidades de otimização.",
  },
];

export function MeliveIntro({
  clientName,
  bridgeId,
  bridgeLead,
  skipToLabel,
}: {
  clientName: string;
  bridgeId: string;
  bridgeLead: string;
  skipToLabel: string;
}) {
  return (
    <>
      <section className="hero melive-hero" data-slide id="inicio">
        <div className="hero-lines" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">
            <span>Sobre a Melive</span> Apresentação
          </p>
          <h1>
            Estratégia, experiência
            <br />
            <strong>e conversão na mesma direção.</strong>
          </h1>
          <p className="hero-lead">
            A Melive é uma agência estratégica que desenvolve experiências
            digitais orientadas a objetivos reais de negócio.
          </p>
          <div className="hero-actions">
            <a className="button dark" href="#especialidade">
              Como atuamos <span>↓</span>
            </a>
            <a className="button cream" href={`#${bridgeId}`}>
              {skipToLabel} <span>→</span>
            </a>
          </div>
        </div>
        <div className="hero-stamp melive-stamp" aria-label="Melive">
          <img src="/melive-mark.png" alt="" />
        </div>
      </section>

      <section className="summary section" data-slide id="sobre-melive">
        <div className="section-index">01 / SOBRE A MELIVE</div>
        <div className="summary-grid">
          <h2>
            Mais do que páginas
            <br />
            eficientes.
            <br />
            <em>Jornadas que decidem.</em>
          </h2>
          <div className="summary-copy">
            <p>
              Atuamos na conexão entre posicionamento, comunicação, design,
              tecnologia e aquisição para transformar interesse em ações
              mensuráveis.
            </p>
            <p>
              Mais do que construir páginas visualmente eficientes, estruturamos
              jornadas capazes de explicar melhor uma oferta, sustentar uma
              decisão e criar caminhos mais claros até a conversão.
            </p>
            <blockquote>
              Não começamos pela página. Começamos pela decisão que ela precisa
              provocar.
            </blockquote>
          </div>
        </div>
      </section>

      <section className="melive-specialty section" data-slide id="especialidade">
        <div className="section-index light">02 / NOSSA ESPECIALIDADE</div>
        <div className="melive-specialty-grid">
          <div>
            <h2>
              Transformamos complexidade comercial
              <em> em jornadas digitais mais claras.</em>
            </h2>
            <p className="melive-specialty-lead">
              Empresas com diferentes produtos, públicos e frentes de atuação não
              precisam apenas de mais tráfego. Precisam criar experiências
              capazes de:
            </p>
          </div>
          <ul className="melive-capability-list">
            {capabilities.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <b>{item}</b>
              </li>
            ))}
          </ul>
        </div>
        <p className="melive-specialty-foot">
          É nesse espaço, entre a estratégia da marca e a geração de
          oportunidades, que a Melive atua.
        </p>
      </section>

      <section className="melive-method section" data-slide id="metodo">
        <div className="section-index">03 / NOSSA FORMA DE PENSAR</div>
        <div className="melive-method-head">
          <h2>
            Diagnosticar antes de construir.
            <em> Mensurar depois de publicar.</em>
          </h2>
          <p>
            Nosso trabalho combina quatro perspectivas. Essa integração permite
            que a Melive participe de toda a jornada: da hipótese inicial à
            experiência publicada e mensurável.
          </p>
        </div>
        <div className="melive-method-grid">
          {perspectives.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <blockquote className="melive-method-quote">
          Criamos experiências bonitas, mas principalmente experiências que
          sabem o que precisam fazer.
        </blockquote>
      </section>

      <section className="melive-bridge" data-slide id={bridgeId}>
        <div className="melive-bridge-inner">
          <p className="section-index light">A SEGUIR</p>
          <h2>
            Diagnóstico {clientName}.
            <em> Mapa de conversão.</em>
          </h2>
          <p>{bridgeLead}</p>
          <a className="button cream" href="#diagnostico">
            Ver o diagnóstico <span>↓</span>
          </a>
        </div>
      </section>
    </>
  );
}
