const meliveCapabilities = [
  "Conectar cada público à oferta mais relevante",
  "Traduzir soluções complexas em propostas de valor claras",
  "Organizar argumentos, provas e objeções na ordem certa",
  "Qualificar melhor o interesse antes do contato comercial",
  "Transformar páginas e campanhas em ativos mensuráveis de aquisição",
];

const melivePerspectives = [
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

const opportunities = [
  {
    number: "01",
    label: "Posicionamento",
    title: "Conectar o primeiro bloco a resultados reconhecíveis",
    observation:
      "O primeiro bloco é construído principalmente sobre “Powering the next era of profitable commerce” e “Commerce Orchestration Suite by AI Agents”. A composição posiciona a marca e apresenta sua categoria. Entretanto, os resultados mais concretos — conversão, margem e eficiência omnicanal — aparecem somente nas seções seguintes. O CTA está na navegação, mas não integra diretamente a narrativa central do primeiro bloco.",
    hypothesis:
      "Para quem já conhece a Trinio ou entende commerce orchestration, a comunicação reforça posicionamento. Para visitantes de campanhas, indicações, eventos ou buscas por um problema específico, pode faltar resposta rápida: a solução é para uma operação como a minha? Qual problema resolve primeiro? O impacto está no checkout, frete, fulfillment ou loja? Preciso contratar toda a suíte?",
    recommendation:
      "Preservar a assinatura institucional e adicionar uma camada concreta de tradução comercial no primeiro bloco: categoria → resultado → público → próximo passo. Exemplo: “Mais conversão no checkout. Mais margem no fulfillment. Mais controle da operação omnicanal.” CTA principal: conhecer o TrinioOS aplicado à minha operação.",
    metrics: [
      "Reconhecimento da proposta",
      "Menos dependência da categoria",
      "Conexão campanha → página",
      "Próximo passo mais visível",
    ],
    impact: "Alto",
    effort: "Médio",
    visual: "paths",
  },
  {
    number: "02",
    label: "Entrada",
    title: "Criar portas de entrada específicas para cada problema",
    observation:
      "O site apresenta o TrinioOS como suíte modular — Checkout, Orquestrador de Pedidos, Pick & Pack e agentes de IA. Visitantes podem chegar por dores distintas: baixa conversão, abandono de frete, margem no fulfillment, cancelamentos, ship from store ou falta de visibilidade omnicanal. Na experiência analisada, essas intenções percorrem a mesma jornada institucional.",
    hypothesis:
      "A amplitude fortalece o TrinioOS como plataforma, mas pode dificultar a escolha de um ponto inicial. Uma liderança de e-commerce preocupada com conversão precisa de argumentos e provas diferentes de uma liderança de operações focada em fulfillment. Quando todos percorrem a mesma narrativa, a suíte ganha destaque e a dor que motivou a visita pode perder prioridade.",
    recommendation:
      "Criar jornadas específicas: (1) Conversão e checkout — Checkout headless + Checkout Agent; (2) Margem e fulfillment — Orquestrador + Fulfillment Agent + Order Manager Agent; (3) Operação omnicanal — Pick & Pack + Dashboard OS + Store Ops Agent. Cada uma com problema, solução, provas e CTA próprios.",
    metrics: [
      "Correspondência tráfego → mensagem",
      "Leads com interesse claro",
      "Campanhas mais específicas",
      "Demanda por problema/solução",
    ],
    impact: "Alto",
    effort: "Médio",
    visual: "review",
  },
  {
    number: "03",
    label: "Contato",
    title: "Transformar o contato em uma entrega consultiva",
    observation:
      "O site usa “Entrar em contato” como principal chamada comercial. O formulário pede nome, e-mail, empresa e faturamento mensal estimado. A faixa de faturamento qualifica porte, mas o visitante ainda recebe pouca previsibilidade sobre o que acontece depois do envio — se a conversa será comercial ou técnica, se a operação será avaliada e qual resultado levará da conversa.",
    hypothesis:
      "Contratar uma solução como o TrinioOS envolve áreas, integrações e decisões operacionais. “Entrar em contato” comunica a ação, mas não evidencia o valor do próximo passo. O visitante pode precisar de mais segurança antes de disponibilizar seus dados.",
    recommendation:
      "Reposicionar o contato como primeira leitura consultiva: “Descubra onde o TrinioOS pode gerar mais impacto na sua operação.” CTA: agendar uma análise da operação. Formulário em duas etapas — contato e contexto (faturamento, desafio, plataforma, estrutura, solução de interesse, com opção “Ainda não sei”) e campos condicionais.",
    metrics: [
      "Valor percebido no envio",
      "Expectativa mais clara",
      "Dor identificada antes da conversa",
      "Leads mais contextualizados",
    ],
    impact: "Alto",
    effort: "Médio",
    visual: "case",
  },
];

function MiniAudit({ type }: { type: string }) {
  if (type === "paths") {
    return (
      <div className="mini-window" aria-label="Primeiro bloco com categoria pouco traduzida">
        <div className="window-top">
          <span />
          <span />
          <span />
        </div>
        <div className="store-hint">
          <div className="ghost-line wide" />
          <div className="ghost-products">
            <i />
            <i />
            <i />
          </div>
        </div>
        <div className="mock-popup">
          <b>COMMERCE ORCHESTRATION?</b>
          <p>Categoria clara. Resultado ainda distante.</p>
          <button>ENTRAR EM CONTATO</button>
        </div>
        <em className="audit-tag">falta traduzir</em>
      </div>
    );
  }

  if (type === "review") {
    return (
      <div className="quiz-card" aria-label="Portas de entrada por problema">
        <small>QUAL PROBLEMA VEIO PRIMEIRO?</small>
        <h4>Por onde começar?</h4>
        <div className="quiz-options">
          <span>Conversão no checkout</span>
          <span className="selected">Margem no fulfillment</span>
          <span>Operação omnicanal</span>
        </div>
        <div className="quiz-progress">
          <i />
        </div>
        <button>VER JORNADA →</button>
        <em className="audit-tag">porta de entrada</em>
      </div>
    );
  }

  return (
    <div className="product-card" aria-label="Contato como análise consultiva">
      <div className="coffee-pack">
        <span>T</span>
        <small>ANÁLISE</small>
      </div>
      <div className="product-info">
        <small>TRINIOOS</small>
        <h4>Análise da operação</h4>
        <div className="taste">
          <span>30 min</span>
          <span>Consultiva</span>
        </div>
        <dl>
          <div>
            <dt>Foco</dt>
            <dd>Checkout + margem</dd>
          </div>
          <div>
            <dt>Resultado</dt>
            <dd>Ponto de partida</dd>
          </div>
        </dl>
        <button>AGENDAR</button>
      </div>
      <em className="audit-tag">contato com valor</em>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <section className="hero melive-hero" id="inicio">
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
            <a className="button cream" href="#diagnostico-trinio">
              Ir ao diagnóstico Trinio <span>→</span>
            </a>
          </div>
        </div>
        <div className="hero-stamp melive-stamp" aria-label="Melive">
          <img src="/melive-mark.png" alt="" />
        </div>
      </section>

      <section className="summary section" id="sobre-melive">
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

      <section className="melive-specialty section" id="especialidade">
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
            {meliveCapabilities.map((item, index) => (
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

      <section className="melive-method section" id="metodo">
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
          {melivePerspectives.map((item) => (
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

      <section className="melive-bridge" id="diagnostico-trinio">
        <div className="melive-bridge-inner">
          <p className="section-index light">A SEGUIR</p>
          <h2>
            Diagnóstico Trinio.
            <em> Mapa de conversão.</em>
          </h2>
          <p>
            A partir daqui, a leitura externa do site da Trinio — hipóteses,
            oportunidades e um piloto recomendado para gerar oportunidades
            comerciais mais qualificadas.
          </p>
          <a className="button cream" href="#diagnostico">
            Ver o diagnóstico <span>↓</span>
          </a>
        </div>
      </section>

      <section className="hero diagnosis-hero" id="mapa">
        <div className="hero-lines" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">
            <span>Mapa de conversão</span> Trinio
          </p>
          <h1>
            Suíte completa.
            <br />
            <strong>Portas de entrada claras.</strong>
          </h1>
          <p className="hero-lead">
            Como transformar a força do TrinioOS em jornadas mais claras para
            geração de oportunidades comerciais qualificadas.
          </p>
          <div className="hero-actions">
            <a className="button dark" href="#diagnostico">
              Ver oportunidades <span>↓</span>
            </a>
            <p>
              <b>3</b> oportunidades priorizadas
              <br />
              por impacto e esforço
            </p>
          </div>
        </div>
        <div className="hero-stamp" aria-label="Análise independente">
          <span>ANÁLISE • MELIVE • 2026 •</span>
          <b>03</b>
          <small>OPORTUNIDADES</small>
        </div>
      </section>

      <section className="summary section" id="diagnostico">
        <div className="section-index">00 / VISÃO GERAL</div>
        <div className="summary-grid">
          <h2>
            A suíte já comunica
            <br />
            dimensão.
            <br />
            <em>Falta o ponto de partida.</em>
          </h2>
          <div className="summary-copy">
            <p>
              A Trinio possui três ativos comerciais muito fortes: uma solução
              tecnologicamente robusta, marcas reconhecidas utilizando a
              plataforma e resultados relacionados a conversão, margem e
              eficiência omnicanal.
            </p>
            <blockquote>
              O principal espaço de evolução está entre “entendi que o TrinioOS
              é uma suíte completa” e “reconheci meu problema, identifiquei por
              onde começar e entendi o valor de conversar com a Trinio.”
            </blockquote>
            <p className="method-note">
              Esta análise foi construída exclusivamente a partir da experiência
              externa do site, sem acesso a dados de tráfego, conversão, CRM,
              mídia ou desempenho comercial. Os pontos devem ser tratados como
              hipóteses para validação, não como problemas comprovados.
            </p>
          </div>
        </div>
        <div className="signal-row">
          <div>
            <span>01</span>
            <b>Categoria pouco traduzida</b>
            <small>em resultado concreto</small>
          </div>
          <div>
            <span>02</span>
            <b>Uma jornada para muitas dores</b>
            <small>sem porta de entrada</small>
          </div>
          <div>
            <span>03</span>
            <b>Contato sem valor percebido</b>
            <small>antes do envio</small>
          </div>
        </div>
      </section>

      <section className="opportunity-section">
        <div className="section intro-section">
          <div className="section-index light">01 a 03 / OPORTUNIDADES</div>
          <h2>
            Três ajustes para
            <br />
            qualificar a conversão.
          </h2>
          <p>Achados observáveis, hipóteses responsáveis e testes possíveis.</p>
        </div>

        {opportunities.map((item, index) => (
          <article
            className={`opportunity ${index % 2 ? "reverse" : ""}`}
            key={item.number}
          >
            <div className="opportunity-visual">
              <MiniAudit type={item.visual} />
            </div>
            <div className="opportunity-copy">
              <div className="opportunity-head">
                <span>{item.number}</span>
                <small>{item.label}</small>
              </div>
              <h3>{item.title}</h3>
              <div className="finding">
                <h4>O que observamos</h4>
                <p>{item.observation}</p>
              </div>
              <div className="finding">
                <h4>Hipótese de impacto</h4>
                <p>{item.hypothesis}</p>
              </div>
              <div className="recommendation">
                <small>RECOMENDAÇÃO</small>
                <p>{item.recommendation}</p>
              </div>
              <div className="metric-list">
                {item.metrics.map((metric) => (
                  <span key={metric}>{metric}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="split-section section">
        <div className="split-badge">+</div>
        <div>
          <div className="section-index">PILOTO RECOMENDADO</div>
          <h2>
            Uma jornada prioritária.
            <em> Checkout Trinio.</em>
          </h2>
        </div>
        <div className="split-copy">
          <p>
            Externamente, o Checkout parece uma boa primeira hipótese de piloto:
            dor amplamente reconhecida, conexão direta com receita, promessa
            mensurável, prova de uplift e depoimento relacionado à experiência de
            compra. A prioridade definitiva deve ser validada com dados internos.
          </p>
          <div className="journeys">
            <article>
              <small>HEADLINE SUGERIDA</small>
              <h3>Checkout sem ser o limite</h3>
              <p>
                Seu checkout não precisa ser o limite da sua conversão. Checkout
                headless, frete inteligente e insights em tempo real.
              </p>
            </article>
            <article>
              <small>PROVAS EM HISTÓRIAS</small>
              <h3>Números com decisão</h3>
              <p>
                Transformar indicadores em minicasos: desafio, intervenção,
                resultado e o que tornou o resultado possível.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="priority-section section" id="prioridades">
        <div className="section-index light">MATRIZ DE DECISÃO</div>
        <div className="priority-head">
          <h2>
            Começar onde impacto
            <br />e velocidade se encontram.
          </h2>
          <p>
            Ordem sugerida para testar sem redesenhar o posicionamento
            institucional.
          </p>
        </div>
        <div
          className="priority-table"
          role="table"
          aria-label="Priorização de melhorias"
        >
          <div className="table-row table-label" role="row">
            <span>Mudança</span>
            <span>Impacto</span>
            <span>Esforço</span>
            <span>Ordem</span>
          </div>
          <div className="table-row" role="row">
            <b>Landing de conversão do Checkout Trinio</b>
            <span>Alto</span>
            <span>Médio</span>
            <strong>01</strong>
          </div>
          <div className="table-row" role="row">
            <b>Primeiro bloco com resultados reconhecíveis</b>
            <span>Alto</span>
            <span>Baixo/médio</span>
            <strong>02</strong>
          </div>
          <div className="table-row" role="row">
            <b>Portas de entrada por problema da operação</b>
            <span>Alto</span>
            <span>Médio</span>
            <strong>03</strong>
          </div>
          <div className="table-row" role="row">
            <b>Contato como análise consultiva da operação</b>
            <span>Alto</span>
            <span>Médio</span>
            <strong>04</strong>
          </div>
        </div>
      </section>

      <section className="next-section" id="proximos-passos">
        <div className="next-shape" aria-hidden="true" />
        <div className="next-copy">
          <div className="section-index">COMO A MELIVE ENTRA</div>
          <h2>
            Do diagnóstico
            <br />à execução.
          </h2>
          <p>
            A recomendação não é substituir o posicionamento atual. A assinatura
            institucional pode continuar. A oportunidade está em construir uma
            camada complementar: problema reconhecido → solução adequada → prova
            contextualizada → conversa consultiva. A Melive entra para desenhar e
            validar essas jornadas com o comercial.
          </p>
          <ol>
            <li>
              <span>01</span> Validar o piloto do Checkout com dados e prioridade
              comercial
            </li>
            <li>
              <span>02</span> Construir a LP, a narrativa da análise e o
              formulário contextualizado
            </li>
            <li>
              <span>03</span> Medir conversão, qualidade do lead e tempo até a
              conversa
            </li>
          </ol>
          <div className="hero-actions next-actions">
            <a
              className="button cream whatsapp-cta"
              href="https://wa.me/5512992477878?text=Ol%C3%A1!%20Quero%20conversar%20com%20a%20Melive%20sobre%20como%20executar%20o%20diagn%C3%B3stico%20da%20Trinio."
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
                Conversar com a Melive
              </span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div className="next-mark">
          <img src="/melive-logo.png" alt="" />
          <p>
            Uma suíte pode ser completa sem exigir
            <br />
            que o visitante compreenda tudo antes.
          </p>
        </div>
      </section>

      <footer>
        <img src="/melive-logo.png" alt="Melive" />
        <p>
          Diagnóstico preliminar da jornada de conversão • Trinio • Agosto de
          2026
        </p>
        <a href="#inicio">Voltar ao topo ↑</a>
      </footer>
    </main>
  );
}
