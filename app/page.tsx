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
    label: "Jornada",
    title: "Transformar cada solução em uma jornada comercial própria",
    observation:
      "As páginas apresentam ofertas bastante diferentes: ERP para farmácias e redes, inteligência artificial aplicada à operação, automação robótica de estoque, inteligência financeira integrada e soluções para diferentes portes. Entretanto, os próximos passos ainda convergem para mecanismos de contato relativamente amplos — “Solicitar demonstração”, “Falar com consultor” ou “Quero falar com um especialista”.",
    hypothesis:
      "Um visitante interessado em automação Gollmann não chega com as mesmas dúvidas de alguém procurando um ERP ou tentando organizar a conciliação financeira. Quando essas intenções terminam em uma experiência semelhante, parte do contexto construído pela página pode não acompanhar o usuário até a conversão.",
    recommendation:
      "Criar landing pages de conversão específicas para as principais ofertas, começando pelas soluções de maior prioridade comercial. Cada jornada deve responder: para quem é, qual problema indica a necessidade, o que muda na operação, como funciona, quais provas sustentam, o que será visto na demonstração e qual é o próximo passo após o formulário.",
    metrics: [
      "Aderência campanha → página",
      "Qualificação antes do contato",
      "Atribuição por produto",
      "Testes sem alterar o site",
    ],
    impact: "Alto",
    effort: "Médio",
    visual: "paths",
  },
  {
    number: "02",
    label: "Conteúdo",
    title: "Conectar melhor conteúdo, problema e solução",
    observation:
      "A Zetti produz conteúdos sobre estoque, ruptura, margem, automação, experiência do consumidor, eficiência financeira e crescimento de redes. Esses conteúdos atraem visitantes a partir de problemas específicos. Entretanto, o avanço para uma conversa comercial tende a direcionar o visitante para uma apresentação mais ampla do ecossistema.",
    hypothesis:
      "Existe uma oportunidade de aproveitar melhor a intenção já revelada pelo conteúdo consumido. Quem chega por um artigo sobre estoque parado pode avançar para previsão de demanda; quem lê sobre conciliação pode receber o B.it; quem pesquisa automação pode ir direto para a experiência Gollmann.",
    recommendation:
      "Construir pontes contextuais: conteúdo sobre o problema → página da solução relacionada → prova específica → demonstração contextualizada. Exemplos: ruptura e excesso → Geniuz, Vetor Trilho ou Vyzio; conciliação → B.it; velocidade no balcão → Gollmann; expansão de redes → Vetor Farma; pequenas farmácias → Klozis.",
    metrics: [
      "Aproveitamento do orgânico",
      "Continuidade educação → decisão",
      "Leads com interesse claro",
      "Conteúdo gerando demanda",
    ],
    impact: "Alto",
    effort: "Médio",
    visual: "review",
  },
  {
    number: "03",
    label: "Demonstração",
    title: "Dar mais valor percebido ao ato de solicitar uma demonstração",
    observation:
      "“Solicitar demonstração” comunica a ação, mas ainda não explica com precisão o que o visitante receberá. A página de contato também atende diferentes necessidades por meio de uma abertura ampla: “Como podemos ajudar?”. Faltam respostas sobre o que será mostrado, se a demo é adaptada, quanto tempo dura e o que acontece depois do envio.",
    hypothesis:
      "Para soluções que envolvem mudança de ERP, dados financeiros, automação física ou integração operacional, o visitante pode precisar de mais segurança antes de disponibilizar seus dados. A fricção pode não estar somente no formulário — pode estar na ausência de expectativa clara sobre o encontro.",
    recommendation:
      "Reposicionar a demonstração como entrega consultiva: “Veja como a Zetti pode conectar estoque, vendas, compras, fiscal e financeiro de acordo com a realidade da sua operação.” Formulário em duas etapas — contato (nome, e-mail, telefone) e contexto da operação (perfil, lojas, solução, desafio, sistema atual) com campos condicionais por solução.",
    metrics: [
      "Expectativa antes do envio",
      "Contexto para o comercial",
      "Demos mais personalizadas",
      "Qualidade da demanda",
    ],
    impact: "Alto",
    effort: "Médio",
    visual: "case",
  },
];

function MiniAudit({ type }: { type: string }) {
  if (type === "paths") {
    return (
      <div className="mini-window" aria-label="Representação de CTAs genéricos para soluções distintas">
        <div className="window-top"><span /><span /><span /></div>
        <div className="store-hint">
          <div className="ghost-line wide" />
          <div className="ghost-products"><i /><i /><i /></div>
        </div>
        <div className="mock-popup">
          <b>QUAL SOLUÇÃO?</b>
          <p>ERP, AI Suite, Gollmann, TechFin…</p>
          <button>SOLICITAR DEMONSTRAÇÃO</button>
        </div>
        <em className="audit-tag">CTA genérico</em>
      </div>
    );
  }

  if (type === "review") {
    return (
      <div className="quiz-card" aria-label="Ponte entre conteúdo e solução">
        <small>CONTEÚDO → SOLUÇÃO</small>
        <h4>De onde veio o interesse?</h4>
        <div className="quiz-options">
          <span>Ruptura de estoque</span>
          <span className="selected">Conciliação financeira</span>
          <span>Automação no balcão</span>
        </div>
        <div className="quiz-progress"><i /></div>
        <button>IR PARA O B.IT →</button>
        <em className="audit-tag">ponte contextual</em>
      </div>
    );
  }

  return (
    <div className="product-card" aria-label="Conceito de demonstração com valor percebido">
      <div className="coffee-pack"><span>Z</span><small>DEMO</small></div>
      <div className="product-info">
        <small>VETOR FARMA</small>
        <h4>Demo personalizada</h4>
        <div className="taste"><span>45 min</span><span>Consultiva</span></div>
        <dl>
          <div><dt>Perfil</dt><dd>Rede farmacêutica</dd></div>
          <div><dt>Foco</dt><dd>Estoque + fiscal</dd></div>
        </dl>
        <button>AGENDAR</button>
      </div>
      <em className="audit-tag">valor da demo</em>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <section className="hero melive-hero" id="inicio">
        <div className="hero-lines" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span>Sobre a Melive</span> Apresentação</p>
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
            <a className="button cream" href="#diagnostico-zetti">
              Ir ao diagnóstico Zetti <span>→</span>
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

      <section className="melive-bridge" id="diagnostico-zetti">
        <div className="melive-bridge-inner">
          <p className="section-index light">A SEGUIR</p>
          <h2>
            Diagnóstico Zetti.
            <em> Mapa de conversão.</em>
          </h2>
          <p>
            A partir daqui, a leitura externa do site da Zetti — hipóteses,
            oportunidades e um piloto recomendado para gerar demonstrações mais
            qualificadas.
          </p>
          <a className="button cream" href="#diagnostico">
            Ver o diagnóstico <span>↓</span>
          </a>
        </div>
      </section>

      <section className="hero diagnosis-hero" id="mapa">
        <div className="hero-lines" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span>Mapa de conversão</span> Zetti</p>
          <h1>
            Ecossistema forte.
            <br />
            <strong>Jornadas mais claras.</strong>
          </h1>
          <p className="hero-lead">
            Como transformar a força institucional do ecossistema em jornadas
            mais claras para geração de demonstrações qualificadas.
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
            A marca já comunica
            <br />
            o ecossistema.
            <br />
            <em>Falta a passagem.</em>
          </h2>
          <div className="summary-copy">
            <p>
              A Zetti construiu um posicionamento consistente como ecossistema de
              inteligência operacional para o varejo farmacêutico — conectando
              ERP, automação, IA, dados e soluções financeiras. O site cumpre bem
              a função de apresentar essa dimensão.
            </p>
            <blockquote>
              O principal espaço de evolução está entre “entendi o que é a Zetti”
              e “entendi qual solução é mais adequada e por que solicitar uma
              demonstração agora.”
            </blockquote>
            <p className="method-note">
              Esta análise foi construída exclusivamente a partir da experiência
              externa do site, sem acesso a dados de tráfego, conversão, CRM ou
              desempenho comercial. Os pontos devem ser tratados como hipóteses
              para validação, não como problemas comprovados.
            </p>
          </div>
        </div>
        <div className="signal-row">
          <div>
            <span>01</span>
            <b>Jornadas genéricas</b>
            <small>para soluções distintas</small>
          </div>
          <div>
            <span>02</span>
            <b>Conteúdo pouco conectado</b>
            <small>à oferta certa</small>
          </div>
          <div>
            <span>03</span>
            <b>Demo com pouco valor</b>
            <small>percebido antes do envio</small>
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
          <h2>Uma jornada prioritária.<br /><em>Vetor Farma.</em></h2>
        </div>
        <div className="split-copy">
          <p>
            Em vez de redesenhar toda a experiência de uma vez, recomendamos
            validar uma jornada: landing page de demonstração do Vetor Farma —
            produto central, público identificável, volume de provas e conexão
            natural com conteúdos e campanhas.
          </p>
          <div className="journeys">
            <article>
              <small>HEADLINE SUGERIDA</small>
              <h3>Dados em controle para crescer</h3>
              <p>Sua farmácia já gera os dados. O Vetor Farma transforma esses dados em controle para crescer.</p>
            </article>
            <article>
              <small>SEGUNDA FRENTE</small>
              <h3>Landing do Gollmann</h3>
              <p>Para campanhas e conteúdos de automação, espaço físico, rastreabilidade e velocidade no atendimento.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="priority-section section" id="prioridades">
        <div className="section-index light">MATRIZ DE DECISÃO</div>
        <div className="priority-head">
          <h2>Começar onde impacto<br />e velocidade se encontram.</h2>
          <p>Ordem sugerida para testar sem redesenhar o site institucional.</p>
        </div>
        <div className="priority-table" role="table" aria-label="Priorização de melhorias">
          <div className="table-row table-label" role="row">
            <span>Mudança</span><span>Impacto</span><span>Esforço</span><span>Ordem</span>
          </div>
          <div className="table-row" role="row">
            <b>Landing de demonstração do Vetor Farma</b>
            <span>Alto</span><span>Médio</span><strong>01</strong>
          </div>
          <div className="table-row" role="row">
            <b>Demo com valor percebido e formulário em 2 etapas</b>
            <span>Alto</span><span>Médio</span><strong>02</strong>
          </div>
          <div className="table-row" role="row">
            <b>Pontes conteúdo → solução (orgânico)</b>
            <span>Alto</span><span>Médio</span><strong>03</strong>
          </div>
          <div className="table-row" role="row">
            <b>Landing dedicada ao Gollmann</b>
            <span>Alto</span><span>Médio</span><strong>04</strong>
          </div>
        </div>
      </section>

      <section className="next-section" id="proximos-passos">
        <div className="next-shape" aria-hidden="true" />
        <div className="next-copy">
          <div className="section-index">COMO A MELIVE ENTRA</div>
          <h2>Do diagnóstico<br />à execução.</h2>
          <p>
            A recomendação não é substituir o site institucional. Ele deve continuar
            apresentando a força do ecossistema Zetti. As landing pages entram como
            camada complementar de conversão — por solução, campanha, problema,
            perfil e conteúdo consumido. A Melive entra para desenhar e validar
            essas jornadas com o comercial.
          </p>
          <ol>
            <li><span>01</span> Priorizar o piloto do Vetor Farma com base nos dados internos</li>
            <li><span>02</span> Construir a LP, a narrativa da demo e o formulário contextualizado</li>
            <li><span>03</span> Medir conversão, qualidade do lead e tempo até a demonstração</li>
          </ol>
          <div className="hero-actions next-actions">
            <a
              className="button cream whatsapp-cta"
              href="https://wa.me/5512992477878?text=Ol%C3%A1!%20Quero%20conversar%20com%20a%20Melive%20sobre%20como%20executar%20o%20diagn%C3%B3stico%20da%20Zetti."
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
            <a className="button dark" href="/proposta">
              Ver proposta comercial <span>→</span>
            </a>
          </div>
        </div>
        <div className="next-mark">
          <img src="/melive-logo.png" alt="" />
          <p>Uma marca integrada não precisa<br />oferecer uma jornada única.</p>
        </div>
      </section>

      <footer>
        <img src="/melive-logo.png" alt="Melive" />
        <p>Diagnóstico preliminar da jornada de conversão • Zetti • Agosto de 2026</p>
        <a href="#inicio">Voltar ao topo ↑</a>
      </footer>
    </main>
  );
}
