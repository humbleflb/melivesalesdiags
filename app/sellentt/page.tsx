import type { Metadata } from "next";
import { MeliveIntro } from "../components/MeliveIntro";
import { SiteFooter } from "../components/SiteFooter";

const assets = [
  "Especialização em indústrias, distribuidoras e operações de atacado",
  "Separação entre Força de Vendas, CRM e Inteligência de Negócio",
  "Páginas específicas por segmento e desafio",
  "Integração com ERPs relevantes do mercado",
  "Marcas reconhecidas entre os clientes",
  "Números expressivos de utilização da plataforma",
  "Cases com resultados quantitativos",
  "Conteúdo recorrente sobre gestão comercial",
  "Certificações de segurança e privacidade",
  "Formulário capaz de qualificar perfil, segmento e tamanho da equipe",
];

const opportunities = [
  {
    number: "01",
    label: "Posicionamento",
    title: "Fazer o posicionamento mais específico aparecer no primeiro contato",
    observation:
      "A Sellentt se apresenta como uma solução de gestão comercial baseada em tecnologia, dados e inteligência. Essa definição é verdadeira, mas ainda pode ser aplicada a diferentes categorias de software. O principal diferencial aparece com mais força nas páginas internas: uma plataforma de força de vendas, CRM e inteligência comercial desenvolvida para as complexidades de indústrias e distribuidoras.",
    hypothesis:
      "A página inicial comunica evolução — “Sua gestão comercial elevada ao próximo nível” — mas ainda exige que o visitante interprete para quem a plataforma foi construída, qual problema resolve primeiro, qual impacto gera e por onde começar. Parte importante dessa clareza aparece somente depois que o visitante decide explorar o site. Para quem chega por campanha, indicação ou pesquisa, o primeiro contato pode ser mais orientado à prioridade que motivou a visita.",
    recommendation:
      "Dar protagonismo ao recorte desde a primeira tela. Direção sugerida: “Transforme sua operação comercial sem perder margem, controle ou vendas no caminho.” Força de vendas, pedidos, CRM e inteligência comercial em uma única plataforma, desenvolvida para indústrias e distribuidoras e integrada ao ERP. CTA principal: Analisar minha operação comercial. CTA secundário: Conhecer a plataforma.",
    metrics: [
      "Reconhecimento do público ideal",
      "Menor esforço para compreender a solução",
      "Coerência entre campanhas e página",
      "Diferenciação diante de generalistas",
    ],
    visual: "paths",
  },
  {
    number: "02",
    label: "Entrada",
    title: "Criar portas de entrada orientadas aos desafios comerciais",
    observation:
      "A Sellentt possui uma arquitetura extensa de funcionalidades. Isso demonstra robustez, mas pode exigir que o próprio visitante identifique quais módulos resolvem seu problema. A página de Distribuidores já organiza a solução por desafios como meta de vendas, mix, lucros, canais e dados — uma lógica que pode virar estrutura central da jornada, inclusive na home e nas campanhas.",
    hypothesis:
      "Uma liderança comercial dificilmente inicia a busca procurando simultaneamente por CRM, BI, força de vendas, geointeligência, pedidos digitais e trade marketing. Normalmente começa por um problema reconhecível: falta de controle sobre a equipe externa, erros nos pedidos, perda de margem, baixa positivação, dificuldade de mix, integração com ERP ou previsibilidade de metas.",
    recommendation:
      "Organizar a jornada por intenção: desafio reconhecido → impacto → solução → aplicação → prova → análise comercial. Entradas sugeridas: pedidos e rotina de campo; margem e política comercial; mix e positivação; gestão e previsibilidade; integração com o ERP. Cada porta com problema, solução, funcionalidades, integrações, case, resultado esperado e próximo passo.",
    metrics: [
      "Campanhas por intenção",
      "Leads com desafio claro",
      "Módulos no momento certo",
      "Jornadas replicáveis",
    ],
    visual: "review",
  },
  {
    number: "03",
    label: "Conversão",
    title:
      "Transformar a demonstração em uma entrega consultiva sustentada por provas",
    observation:
      "A principal chamada convida a agendar ou solicitar uma demonstração. “Demonstração” descreve o formato da conversa, não necessariamente o valor que o decisor receberá. Faltam respostas sobre o que será analisado, quais informações preparar, quanto tempo levará, quais áreas serão apresentadas, o que receberá depois e se a solução é compatível com a operação e o ERP.",
    hypothesis:
      "Para uma plataforma ampla e adaptável, o potencial cliente precisa de mais previsibilidade antes de avançar. As provas da Sellentt — escala, cases, integrações e certificações — hoje aparecem de forma institucional ou distribuída. Elas ganham mais força quando conectadas ao problema que o visitante está tentando resolver.",
    recommendation:
      "Reposicionar o contato como análise da operação comercial: em uma conversa objetiva, um especialista identifica gargalos, avalia integrações e apresenta os recursos mais aderentes. CTA: Quero analisar minha operação. Conectar provas ao desafio (Braskim para pedidos/integração; Claw para mix/positivação; números e ISOs para escala/segurança). Evoluir o formulário com desafio, ERP, forma atual de pedidos, prioridade e prazo — sem tornar tudo obrigatório.",
    metrics: [
      "Valor percebido no próximo passo",
      "Provas no momento da decisão",
      "Contexto antes da reunião",
      "Leads com maior aderência",
    ],
    visual: "case",
  },
];

const challenges = [
  {
    title: "Pedidos e rotina de campo",
    text: "Reduzir erros, retrabalho e dependência de processos manuais na rotina dos vendedores.",
  },
  {
    title: "Margem e política comercial",
    text: "Dar autonomia ao time sem perder o controle de preços, descontos e condições.",
  },
  {
    title: "Mix e positivação da carteira",
    text: "Identificar oportunidades de venda dentro da base e orientar cada representante.",
  },
  {
    title: "Gestão e previsibilidade",
    text: "Acompanhar metas, territórios, equipes e resultados com dados atualizados.",
  },
  {
    title: "Integração com o ERP",
    text: "Conectar a operação comercial ao sistema existente sem duplicar processos.",
  },
];

function MiniAudit({ type }: { type: string }) {
  if (type === "paths") {
    return (
      <div
        className="mini-window"
        aria-label="Primeiro contato ainda amplo demais"
      >
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
          <b>GESTÃO COMERCIAL?</b>
          <p>Categoria ampla. Recorte ainda interno.</p>
          <button>SOLICITAR DEMO</button>
        </div>
        <em className="audit-tag">falta especificar</em>
      </div>
    );
  }

  if (type === "review") {
    return (
      <div className="quiz-card" aria-label="Portas de entrada por desafio">
        <small>QUAL DESAFIO LIMITA HOJE?</small>
        <h4>Por onde começar?</h4>
        <div className="quiz-options">
          <span>Pedidos e campo</span>
          <span className="selected">Margem e política</span>
          <span>Mix e positivação</span>
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
    <div
      className="product-card"
      aria-label="Análise consultiva da operação comercial"
    >
      <div className="coffee-pack">
        <span>S</span>
        <small>ANÁLISE</small>
      </div>
      <div className="product-info">
        <small>OPERAÇÃO</small>
        <h4>Análise comercial</h4>
        <div className="taste">
          <span>Consultiva</span>
          <span>Com provas</span>
        </div>
        <dl>
          <div>
            <dt>Foco</dt>
            <dd>Pedidos + ERP</dd>
          </div>
          <div>
            <dt>Resultado</dt>
            <dd>Próximo passo</dd>
          </div>
        </dl>
        <button>ANALISAR</button>
      </div>
      <em className="audit-tag">demo com valor</em>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Diagnóstico Sellentt — Melive",
  description:
    "Diagnóstico de jornada digital da Sellentt: clareza, direcionamento e conversão na experiência pública.",
};

export default function SellenttPage() {
  return (
    <main>
      <MeliveIntro
        clientName="Sellentt"
        bridgeId="diagnostico-sellentt"
        skipToLabel="Ir ao diagnóstico Sellentt"
        bridgeLead="A partir daqui, a leitura externa da experiência digital da Sellentt — hipóteses, oportunidades e um piloto recomendado para simplificar a decisão comercial."
      />

      <section className="hero diagnosis-hero" id="mapa">
        <div className="hero-lines" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">
            <span>Diagnóstico de jornada</span> Sellentt
          </p>
          <h1>
            Plataforma completa.
            <br />
            <strong>Decisão mais simples.</strong>
          </h1>
          <p className="hero-lead">
            Como transformar a amplitude da Sellentt em uma decisão comercial
            mais clara — com clareza, direcionamento e conversão na experiência
            digital.
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
            A Sellentt demonstra
            <br />
            amplitude.
            <br />
            <em>A primeira decisão ainda começa ampla.</em>
          </h2>
          <div className="summary-copy">
            <p>
              A Sellentt possui uma base digital mais madura do que grande parte
              das empresas SaaS B2B. A oportunidade não está em começar
              novamente — está em conectar melhor os ativos que a empresa já
              construiu.
            </p>
            <blockquote>
              Reduzir a distância entre a amplitude da plataforma e a prioridade
              imediata do decisor. A jornada pode começar pelo problema e,
              progressivamente, revelar a amplitude da Sellentt.
            </blockquote>
            <p className="method-note">
              Este diagnóstico foi construído exclusivamente a partir da
              experiência pública da Sellentt, sem acesso aos dados internos de
              tráfego, conversão, CRM ou processo comercial. As observações não
              representam conclusões definitivas — são hipóteses estratégicas
              para confrontar com dados e prioridades comerciais.
            </p>
          </div>
        </div>
        <div className="signal-row">
          <div>
            <span>01</span>
            <b>Posicionamento amplo no primeiro contato</b>
            <small>recorte nas páginas internas</small>
          </div>
          <div>
            <span>02</span>
            <b>Navegação por produto</b>
            <small>em vez de jornada por intenção</small>
          </div>
          <div>
            <span>03</span>
            <b>Demonstração como formato</b>
            <small>não como entrega consultiva</small>
          </div>
        </div>
      </section>

      <section className="split-section section" id="ativos">
        <div className="split-badge">✓</div>
        <div>
          <div className="section-index">01 / O QUE JÁ ESTÁ BEM</div>
          <h2>
            Ativos fortes.
            <em> Falta conectá-los à decisão.</em>
          </h2>
        </div>
        <div className="split-copy">
          <p>
            A Sellentt já possui produto, especialização, integrações, escala e
            provas. O próximo avanço está em organizar esses ativos ao redor da
            decisão que cada potencial cliente precisa tomar.
          </p>
          <div className="journeys sellentt-assets">
            {assets.map((asset, index) => (
              <article key={asset}>
                <small>{String(index + 1).padStart(2, "0")}</small>
                <p>{asset}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="opportunity-section">
        <div className="section intro-section">
          <div className="section-index light">02 a 04 / OPORTUNIDADES</div>
          <h2>
            Três frentes para
            <br />
            simplificar a decisão.
          </h2>
          <p>
            Achados observáveis, hipóteses responsáveis e direções possíveis.
          </p>
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

      <section className="split-section section" id="desafios">
        <div className="split-badge">?</div>
        <div>
          <div className="section-index">PORTAS DE ENTRADA</div>
          <h2>
            Qual desafio limita
            <em> a operação comercial hoje?</em>
          </h2>
        </div>
        <div className="split-copy">
          <p>
            Da navegação por produto à jornada por intenção. A Sellentt não
            precisa esconder seus módulos — precisa apresentá-los no momento em
            que já existe contexto para compreendê-los.
          </p>
          <div className="journeys">
            {challenges.map((challenge) => (
              <article key={challenge.title}>
                <small>DESAFIO</small>
                <h3>{challenge.title}</h3>
                <p>{challenge.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="split-section section" id="piloto">
        <div className="split-badge">+</div>
        <div>
          <div className="section-index">PILOTO RECOMENDADO</div>
          <h2>
            Uma jornada prioritária.
            <em> Pedidos e força de vendas.</em>
          </h2>
        </div>
        <div className="split-copy">
          <p>
            Em vez de alterar todas as jornadas simultaneamente, validar uma
            experiência específica: gestão de pedidos e força de vendas para
            indústrias que ainda dependem de planilhas, WhatsApp, processos
            manuais ou sistemas pouco integrados. A prioridade final deve
            acompanhar os dados e objetivos comerciais da Sellentt.
          </p>
          <div className="journeys">
            <article>
              <small>PROMESSA SUGERIDA</small>
              <h3>Campo vende. Gestão acompanha.</h3>
              <p>
                Sua equipe vende no campo. Sua gestão acompanha tudo em tempo
                real. Centralize pedidos, preços, estoque, carteira e desempenho
                em uma força de vendas integrada ao ERP.
              </p>
            </article>
            <article>
              <small>POR QUE ESSE PILOTO</small>
              <h3>Dor clara, prova disponível</h3>
              <p>
                Dor facilmente reconhecida, relação direta com produtividade e
                controle, integração com ERP como diferencial, cases disponíveis
                e público mais delimitado para campanhas de busca, conteúdo e
                outbound.
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
            Ordem sugerida para evoluir a jornada sem redesenhar toda a
            plataforma de uma vez.
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
            <b>Posicionamento específico na primeira tela</b>
            <span>Alto</span>
            <span>Baixo/médio</span>
            <strong>01</strong>
          </div>
          <div className="table-row" role="row">
            <b>Jornadas por desafio na home, campanhas e conteúdos</b>
            <span>Alto</span>
            <span>Médio</span>
            <strong>02</strong>
          </div>
          <div className="table-row" role="row">
            <b>Demonstração como análise consultiva com entrega definida</b>
            <span>Alto</span>
            <span>Médio</span>
            <strong>03</strong>
          </div>
          <div className="table-row" role="row">
            <b>Cases, resultados e integrações ligados ao problema</b>
            <span>Alto</span>
            <span>Médio</span>
            <strong>04</strong>
          </div>
          <div className="table-row" role="row">
            <b>Validar jornada-piloto antes de replicar a estrutura</b>
            <span>Alto</span>
            <span>Médio</span>
            <strong>05</strong>
          </div>
        </div>
      </section>

      <section className="next-section" id="proximos-passos">
        <div className="next-shape" aria-hidden="true" />
        <div className="next-copy">
          <div className="section-index">COMO A MELIVE ENTRA</div>
          <h2>
            Do diagnóstico
            <br />à validação.
          </h2>
          <p>
            A oportunidade não é simplificar a plataforma removendo sua
            amplitude. É simplificar a decisão do visitante. Uma plataforma pode
            ser completa sem exigir que o visitante compreenda tudo antes de
            conversar. O próximo passo é validar estas hipóteses com os dados
            da Sellentt.
          </p>
          <ol>
            <li>
              <span>01</span> Identificar segmento, problema e cases que mais
              geram oportunidades
            </li>
            <li>
              <span>02</span> Mapear abandonos, qualidade de leads e melhor
              hipótese de piloto
            </li>
            <li>
              <span>03</span> Desenhar uma jornada específica, mensurável e
              conectada ao comercial
            </li>
          </ol>
          <div className="hero-actions next-actions">
            <a
              className="button cream whatsapp-cta"
              href="https://wa.me/5512992477878?text=Ol%C3%A1!%20Quero%20conversar%20com%20a%20Melive%20sobre%20como%20executar%20o%20diagn%C3%B3stico%20da%20Sellentt."
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
            Uma plataforma pode ser completa sem exigir
            <br />
            que o visitante compreenda tudo antes.
          </p>
        </div>
      </section>

      <SiteFooter caption="Diagnóstico preliminar da jornada digital • Sellentt • Agosto de 2026" />
    </main>
  );
}
