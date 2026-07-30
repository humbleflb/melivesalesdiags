const opportunities = [
  {
    number: "01",
    label: "Entrada",
    title: "Orientar a entrada pelo desafio do comprador",
    observation:
      "A home apresenta dois grandes caminhos — Healthcare Development e End-to-end Development — e, ao avançar, o comprador encontra EHR, Medplum, interoperabilidade, Product Discovery, AI, modernização de legado, equipes dedicadas, Python, JavaScript e outras especialidades. A amplitude demonstra capacidade, mas aumenta o esforço para quem conhece o problema e ainda não sabe qual serviço contratar.",
    hypothesis:
      "Organizar a entrada por cenário de negócio — e não apenas por serviço ou tecnologia — pode ajudar o visitante a se reconhecer mais rapidamente.",
    recommendation:
      "Criar uma jornada guiada com três perguntas: o que a empresa está construindo, em qual estágio o projeto se encontra e qual é o principal bloqueio atual. Ao final, entregar caminho recomendado, serviço aderente, case semelhante e próximo passo específico.",
    metrics: [
      "Clareza da oferta",
      "Acessos às páginas certas",
      "Abandono por excesso",
      "Leads contextualizados",
    ],
    impact: "Alto",
    effort: "Médio",
    visual: "paths",
  },
  {
    number: "02",
    label: "Aquisição",
    title: "Criar uma oferta intermediária de aquisição",
    observation:
      "A página de contato funciona bem para quem já está pronto: agendamento direto ou formulário com telefone, origem, investimento esperado e descrição do projeto. Isso qualifica alta intenção, mas deixa lacuna para quem reconhece um problema técnico e ainda não está pronto para informar orçamento ou marcar reunião — mesmo com ativos como os Building Blocks FHIR-native já comunicados publicamente.",
    hypothesis:
      "Transformar parte desse conhecimento em um diagnóstico pode criar uma entrada menos exigente e, ao mesmo tempo, qualificar melhor a oportunidade.",
    recommendation:
      "Lançar o Healthcare Product Readiness Review: “Descubra os principais riscos técnicos e operacionais antes de avançar seu produto para produção.” Avaliar estágio, arquitetura, interoperabilidade, fluxos clínicos, segurança, capacidade interna e risco de escala — com maturidade, riscos, próximo passo e case relacionado.",
    metrics: [
      "Demanda pré-reunião",
      "Leads contextualizados",
      "Segmentação por maturidade",
      "Follow-ups relevantes",
    ],
    impact: "Alto",
    effort: "Médio",
    visual: "review",
  },
  {
    number: "03",
    label: "Prova",
    title: "Transformar os cases em uma jornada de decisão",
    observation:
      "A biblioteca de cases é especialmente forte: EHR, Medplum, hospital operations, behavioral health, chronic disease, AI e product discovery. Alguns já mostram resultados concretos, como protótipo validado e escopo de MVP definido em duas semanas. O ativo existe, mas o visitante ainda precisa decidir sozinho qual case prova o seu contexto.",
    hypothesis:
      "Contextualizar os cases por problema, estágio e perfil do decisor pode aproximar a prova técnica da decisão comercial.",
    recommendation:
      "Criar trilhas por perfil — CTO, Product Leader, Healthcare Operations e Founder — reunindo problema reconhecível, case relacionado, resultado mensurável, abordagem e CTA coerente. Transformar resultados em chamadas objetivas como “MVP validado em duas semanas” ou “Do protótipo ao roadmap de produção”.",
    metrics: [
      "Consumo dos cases",
      "Autoridade percebida",
      "Diferenciação além da stack",
      "Conversão conteúdo → contato",
    ],
    impact: "Alto",
    effort: "Médio",
    visual: "case",
  },
];

function MiniAudit({ type }: { type: string }) {
  if (type === "paths") {
    return (
      <div className="mini-window" aria-label="Representação da home com muitos caminhos">
        <div className="window-top"><span /><span /><span /></div>
        <div className="store-hint">
          <div className="ghost-line wide" />
          <div className="ghost-products"><i /><i /><i /></div>
        </div>
        <div className="mock-popup">
          <b>QUAL SERVIÇO CONTRATAR?</b>
          <p>Healthcare, EHR, Medplum, AI, Discovery, legado…</p>
          <button>VER TODAS AS OPÇÕES</button>
        </div>
        <em className="audit-tag">excesso de caminhos</em>
      </div>
    );
  }

  if (type === "review") {
    return (
      <div className="quiz-card" aria-label="Conceito de diagnóstico de maturidade">
        <small>HEALTHCARE PRODUCT READINESS</small>
        <h4>Em qual estágio está o produto?</h4>
        <div className="quiz-options">
          <span>Protótipo</span>
          <span className="selected">Em modernização</span>
          <span>Pronto para escala</span>
        </div>
        <div className="quiz-progress"><i /></div>
        <button>CONTINUAR →</button>
        <em className="audit-tag">entrada intermediária</em>
      </div>
    );
  }

  return (
    <div className="product-card" aria-label="Conceito de case como prova de decisão">
      <div className="coffee-pack"><span>V</span><small>CASE</small></div>
      <div className="product-info">
        <small>HEALTHCARE · EHR</small>
        <h4>MVP em 2 semanas</h4>
        <div className="taste"><span>Discovery</span><span>Medplum</span></div>
        <dl>
          <div><dt>Perfil</dt><dd>Product Leader</dd></div>
          <div><dt>Resultado</dt><dd>Escopo validado</dd></div>
        </dl>
        <button>VER CASE</button>
      </div>
      <em className="audit-tag">prova no contexto</em>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Melive — início">
          <img src="/melive-logo.png" alt="Melive" />
        </a>
        <nav aria-label="Navegação do diagnóstico">
          <a href="#diagnostico">Diagnóstico</a>
          <a href="#prioridades">Prioridades</a>
          <a className="nav-cta" href="#proximos-passos">Próximos passos</a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-lines" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span>Diagnóstico da jornada B2B</span> Vinta Software</p>
          <h1>Menos esforço para se reconhecer.<br /><strong>Mais clareza para decidir.</strong></h1>
          <p className="hero-lead">
            Uma análise preliminar da experiência pública do site, serviços e cases
            para conduzir o comprador do desafio técnico até o próximo passo certo.
          </p>
          <div className="hero-actions">
            <a className="button dark" href="#diagnostico">Ver oportunidades <span>↓</span></a>
            <p><b>3</b> oportunidades priorizadas<br />por impacto e esforço</p>
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
          <h2>A base já é sólida.<br />A oportunidade está<br /><em>na jornada.</em></h2>
          <div className="summary-copy">
            <p>
              A Vinta já reúne profundidade técnica, especialização crescente em
              healthcare, cases com United Nations, Unilever, Quilted Health e Rewind,
              nota 4,9 no Clutch e conteúdo frequente sobre EHR, FHIR e Medplum.
            </p>
            <blockquote>
              O comprador ainda precisa interpretar sozinho qual capacidade da Vinta
              corresponde ao seu desafio — e qual é o melhor próximo passo.
            </blockquote>
            <p className="method-note">
              Leitura heurística da experiência externa, sem acesso a tráfego, CRM ou
              conversões internas. As hipóteses devem ser confrontadas com dados reais.
            </p>
          </div>
        </div>
        <div className="signal-row">
          <div><span>01</span><b>Entrada pouco guiada</b><small>por desafio de negócio</small></div>
          <div><span>02</span><b>Lacuna na aquisição</b><small>entre interesse e reunião</small></div>
          <div><span>03</span><b>Cases pouco contextualizados</b><small>para a decisão</small></div>
        </div>
      </section>

      <section className="opportunity-section">
        <div className="section intro-section">
          <div className="section-index light">01—03 / OPORTUNIDADES</div>
          <h2>Três ajustes com potencial<br />de destravar a conversão.</h2>
          <p>Achados observáveis, hipóteses responsáveis e testes possíveis.</p>
        </div>

        {opportunities.map((item, index) => (
          <article className={`opportunity ${index % 2 ? "reverse" : ""}`} key={item.number}>
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
                {item.metrics.map((metric) => <span key={metric}>{metric}</span>)}
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="split-section section">
        <div className="split-badge">+</div>
        <div>
          <div className="section-index">OPORTUNIDADE ESTRATÉGICA</div>
          <h2>Uma jornada única.<br /><em>Quatro momentos.</em></h2>
        </div>
        <div className="split-copy">
          <p>
            A combinação mais promissora une as três frentes: o visitante identifica
            o desafio, recebe uma avaliação inicial, visualiza uma prova semelhante
            e chega ao comercial com contexto.
          </p>
          <div className="journeys">
            <article>
              <small>RECONHECER → ORIENTAR</small>
              <h3>Cenário → jornada guiada</h3>
              <p>Entrada por desafio de negócio, não só por stack ou serviço.</p>
            </article>
            <article>
              <small>AVALIAR → CONVERTER</small>
              <h3>Diagnóstico → case → contato</h3>
              <p>Maturidade, prova aderente e conversa comercial contextualizada.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="priority-section section" id="prioridades">
        <div className="section-index light">MATRIZ DE DECISÃO</div>
        <div className="priority-head">
          <h2>Começar onde impacto<br />e velocidade se encontram.</h2>
          <p>Ordem sugerida para testar sem redesenhar toda a operação.</p>
        </div>
        <div className="priority-table" role="table" aria-label="Priorização de melhorias">
          <div className="table-row table-label" role="row">
            <span>Mudança</span><span>Impacto</span><span>Esforço</span><span>Ordem</span>
          </div>
          <div className="table-row" role="row">
            <b>Healthcare Product Readiness Review</b>
            <span>Alto</span><span>Médio</span><strong>01</strong>
          </div>
          <div className="table-row" role="row">
            <b>Jornada guiada por desafio do comprador</b>
            <span>Alto</span><span>Médio</span><strong>02</strong>
          </div>
          <div className="table-row" role="row">
            <b>Cases por perfil de decisor</b>
            <span>Alto</span><span>Médio</span><strong>03</strong>
          </div>
          <div className="table-row" role="row">
            <b>Jornada integrada até o contato</b>
            <span>Alto</span><span>Médio/alto</span><strong>04</strong>
          </div>
        </div>
      </section>

      <section className="next-section" id="proximos-passos">
        <div className="next-shape" aria-hidden="true" />
        <div className="next-copy">
          <div className="section-index">PRÓXIMO PASSO</div>
          <h2>Validar antes<br />de escalar.</h2>
          <p>
            O primeiro teste sugerido é o Healthcare Product Readiness Review,
            para healthtechs com protótipos, modernização ou dificuldade de chegar
            a uma arquitetura pronta para produção — tese que a própria Vinta já comunica.
          </p>
          <ol>
            <li><span>01</span> Confrontar hipóteses com origem de leads e conversão por página</li>
            <li><span>02</span> Lançar o Readiness Review como oferta intermediária</li>
            <li><span>03</span> Medir uso dos cases, abandono do formulário e tempo até reunião</li>
          </ol>
          <a
            className="button cream"
            href="mailto:contato@melive.com.br?subject=Diagnóstico%20Vinta%20Software"
          >
            Conversar sobre o diagnóstico <span>↗</span>
          </a>
        </div>
        <div className="next-mark">
          <img src="/melive-logo.png" alt="" />
          <p>Conteúdo, reputação<br />e especialização conduzindo a decisão.</p>
        </div>
      </section>

      <footer>
        <img src="/melive-logo.png" alt="Melive" />
        <p>Diagnóstico preliminar da jornada B2B • Vinta Software • Julho de 2026</p>
        <a href="#inicio">Voltar ao topo ↑</a>
      </footer>
    </main>
  );
}
