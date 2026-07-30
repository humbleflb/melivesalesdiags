const opportunities = [
  {
    number: "01",
    label: "Captação",
    title: "A descoberta começa com uma interrupção",
    observation:
      "O pop-up aparece cedo e reúne mensagens diferentes: reposição, produto esgotado e desconto. A captura acontece antes de o visitante entender o valor da loja.",
    hypothesis:
      "Visitantes novos podem fechar o aviso automaticamente ou sair sem explorar o catálogo, reduzindo a qualidade dos cadastros.",
    recommendation:
      "Adiar a entrada e transformar a oferta em uma ajuda real de escolha: “Descubra o café ideal para o seu paladar e receba uma condição especial na primeira compra.”",
    metrics: ["Taxa de fechamento", "Cadastros", "Produto visto", "Adição ao carrinho"],
    impact: "Médio/alto",
    effort: "Baixo",
    visual: "popup",
  },
  {
    number: "02",
    label: "Descoberta",
    title: "Muito produto, pouca orientação de escolha",
    observation:
      "A loja reúne cafés moídos, grãos, cápsulas, combos, cappuccinos e máquinas. Para comparar sabor, intensidade ou método de preparo, o visitante precisa abrir vários produtos.",
    hypothesis:
      "Quanto maior o esforço para decidir, maior a chance de escolha apenas por preço, adiamento da compra ou abandono.",
    recommendation:
      "Criar uma camada de descoberta com filtros por intensidade, método, notas sensoriais e ocasião — ou um quiz curto: “Encontre seu Jaguari em menos de 1 minuto.”",
    metrics: ["Uso dos filtros", "Produtos por sessão", "Cliques da home", "Conversão assistida"],
    impact: "Alto",
    effort: "Médio",
    visual: "quiz",
  },
  {
    number: "03",
    label: "Decisão",
    title: "Os melhores argumentos aparecem tarde",
    observation:
      "Notas de chocolate e caramelo, intensidade, acidez, doçura, origem e perfil sensorial ficam abaixo da primeira área da página de produto.",
    hypothesis:
      "O visitante encontra o preço antes de compreender plenamente a experiência e o diferencial do café.",
    recommendation:
      "Levar para perto do botão de compra um resumo visual do perfil, notas, intensidade, torra, preparo ideal e indicação de consumo.",
    metrics: ["Adição ao carrinho", "Início do checkout", "Receita por sessão", "Compra de combos"],
    impact: "Alto",
    effort: "Baixo",
    visual: "product",
  },
];

function MiniAudit({ type }: { type: string }) {
  if (type === "popup") {
    return (
      <div className="mini-window" aria-label="Representação visual do pop-up atual">
        <div className="window-top"><span /><span /><span /></div>
        <div className="store-hint">
          <div className="ghost-line wide" />
          <div className="ghost-products"><i /><i /><i /></div>
        </div>
        <div className="mock-popup">
          <b>PRODUTOS ESGOTADOS?</b>
          <p>Cadastre-se para receber novidades e desconto.</p>
          <button>QUERO RECEBER</button>
        </div>
        <em className="audit-tag">interrupção precoce</em>
      </div>
    );
  }

  if (type === "quiz") {
    return (
      <div className="quiz-card" aria-label="Conceito de seletor de café">
        <small>PASSO 1 DE 3</small>
        <h4>Como você gosta do seu café?</h4>
        <div className="quiz-options">
          <span>Suave</span><span className="selected">Equilibrado</span><span>Intenso</span>
        </div>
        <div className="quiz-progress"><i /></div>
        <button>CONTINUAR →</button>
        <em className="audit-tag">escolha guiada</em>
      </div>
    );
  }

  return (
    <div className="product-card" aria-label="Conceito de resumo de produto">
      <div className="coffee-pack"><span>J</span><small>GOURMET</small></div>
      <div className="product-info">
        <small>CAFÉ JAGUARI</small>
        <h4>Gourmet 250 g</h4>
        <div className="taste"><span>Chocolate</span><span>Caramelo</span></div>
        <dl><div><dt>Intensidade</dt><dd>6/10</dd></div><div><dt>Torra</dt><dd>Média clara</dd></div></dl>
        <button>COMPRAR</button>
      </div>
      <em className="audit-tag">valor antes do preço</em>
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
          <p className="eyebrow"><span>Diagnóstico de conversão</span> Café Jaguari</p>
          <h1>Menos esforço para escolher.<br /><strong>Mais clareza para comprar.</strong></h1>
          <p className="hero-lead">
            Uma análise preliminar da jornada digital para transformar variedade,
            conteúdo e tradição em uma experiência de compra mais intuitiva.
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
          <h2>A base já é boa.<br />A oportunidade está<br /><em>na jornada.</em></h2>
          <div className="summary-copy">
            <p>
              A Café Jaguari já possui os ativos essenciais: marca tradicional,
              e-commerce ativo, variedade, avaliações e conteúdo de produto.
            </p>
            <blockquote>
              A loja oferece muitos caminhos, porém ajuda pouco o visitante a
              escolher, entender rapidamente o diferencial e avançar com segurança.
            </blockquote>
            <p className="method-note">
              Este material é uma leitura heurística da experiência pública.
              As hipóteses devem ser validadas com Analytics, mapa de calor e testes A/B.
            </p>
          </div>
        </div>
        <div className="signal-row">
          <div><span>01</span><b>Interrupção precoce</b><small>na primeira visita</small></div>
          <div><span>02</span><b>Escolha pouco guiada</b><small>entre muitas linhas</small></div>
          <div><span>03</span><b>Valor apresentado tarde</b><small>na página do produto</small></div>
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
          <h2>Duas decisões de compra.<br /><em>Duas jornadas.</em></h2>
        </div>
        <div className="split-copy">
          <p>
            Cafés, cápsulas e kits são compras transacionais. Máquinas de até
            R$ 6.799 exigem comparação, confiança e apoio comercial.
          </p>
          <div className="journeys">
            <article><small>PARA SUA CASA</small><h3>Descobrir → escolher → comprar</h3><p>Cafés, cápsulas, cappuccinos, kits e acessórios.</p></article>
            <article><small>PARA SUA EMPRESA</small><h3>Entender → dimensionar → conversar</h3><p>Máquinas, vending, atendimento e proposta comercial.</p></article>
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
          <div className="table-row" role="row"><b>Resumo visual na página de produto</b><span>Alto</span><span>Baixo</span><strong>01</strong></div>
          <div className="table-row" role="row"><b>Oferta e momento do pop-up</b><span>Médio/alto</span><span>Baixo</span><strong>02</strong></div>
          <div className="table-row" role="row"><b>Orientação de escolha ou quiz</b><span>Alto</span><span>Médio</span><strong>03</strong></div>
          <div className="table-row" role="row"><b>Separação residencial e empresarial</b><span>Alto</span><span>Médio/alto</span><strong>04</strong></div>
        </div>
      </section>

      <section className="next-section" id="proximos-passos">
        <div className="next-shape" aria-hidden="true" />
        <div className="next-copy">
          <div className="section-index">PRÓXIMO PASSO</div>
          <h2>Validar antes<br />de escalar.</h2>
          <p>
            Cruzar estas hipóteses com dados reais, escolher a primeira mudança
            e acompanhar o efeito na jornada. Um teste simples já pode indicar
            o caminho mais promissor.
          </p>
          <ol>
            <li><span>01</span> Confirmar comportamento em Analytics e mapa de calor</li>
            <li><span>02</span> Escolher uma hipótese e criar a variação</li>
            <li><span>03</span> Medir impacto em produto visto, carrinho e compra</li>
          </ol>
          <a className="button cream" href="mailto:contato@melive.com.br?subject=Diagnóstico%20Café%20Jaguari">
            Conversar sobre o diagnóstico <span>↗</span>
          </a>
        </div>
        <div className="next-mark">
          <img src="/melive-logo.png" alt="" />
          <p>Tráfego, experiência<br />e conversão trabalhando juntos.</p>
        </div>
      </section>

      <footer>
        <img src="/melive-logo.png" alt="Melive" />
        <p>Diagnóstico preliminar de conversão • Café Jaguari • Julho de 2026</p>
        <a href="#inicio">Voltar ao topo ↑</a>
      </footer>
    </main>
  );
}
