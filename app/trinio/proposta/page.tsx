import type { Metadata } from "next";
import { SlideKeyboardNav } from "../../components/SlideKeyboardNav";
import { SiteFooter } from "../../components/SiteFooter";

export const metadata: Metadata = {
  title: "Proposta Trinio Checkout — Melive",
  description:
    "Projeto-piloto de conversão para o Trinio Checkout. Jornada específica, mensurável e replicável.",
};

const identified = [
  {
    number: "01",
    title: "Traduzir a categoria em resultados reconhecíveis",
    text: "Conectar Commerce Orchestration e agentes de IA a impactos imediatos em conversão, margem e eficiência.",
  },
  {
    number: "02",
    title: "Criar jornadas específicas por problema",
    text: "Permitir que cada visitante encontre um ponto de entrada relacionado à necessidade que motivou sua busca.",
  },
  {
    number: "03",
    title: "Transformar o contato em entrega consultiva",
    text: "Apresentar com mais clareza o que o potencial cliente receberá depois de compartilhar seus dados.",
  },
];

const checkoutReasons = [
  "Dor amplamente reconhecida pelo mercado",
  "Relação direta com geração de receita",
  "Resultados que podem ser mensurados",
  "Dados e provas já disponíveis",
  "Público e intenção mais delimitados",
  "Porta de entrada para o restante do TrinioOS",
];

const pilotGoals = [
  "Traduzir a solução em um problema comercial reconhecível",
  "Demonstrar resultados e diferenciais com maior clareza",
  "Conectar campanhas e ações a uma oferta específica",
  "Identificar o contexto do potencial cliente antes da conversa",
  "Aumentar o valor percebido do contato",
  "Gerar oportunidades mais contextualizadas para o comercial",
  "Criar um modelo replicável para outras soluções do TrinioOS",
];

const journeySections = [
  { number: "01", title: "Problema reconhecido", text: "Impactos que limitações no checkout provocam na conversão e na experiência de compra." },
  { number: "02", title: "Proposta de valor", text: "Como o Trinio Checkout atua em performance, experiência, frete e inteligência de dados." },
  { number: "03", title: "Aplicação prática", text: "Recursos relacionados ao checkout e como se conectam à operação." },
  { number: "04", title: "Provas e resultados", text: "Indicadores transformados em histórias: desafio, intervenção, resultado e aprendizado." },
  { number: "05", title: "Integrações e implementação", text: "Redução de objeções sobre compatibilidade, complexidade técnica e go-live." },
  { number: "06", title: "Análise consultiva", text: "Contato como primeiro diagnóstico, com expectativa clara sobre a conversa." },
  { number: "07", title: "Formulário contextualizado", text: "Coleta progressiva de informações para qualificar a oportunidade." },
];

const formStep1 = ["Nome", "E-mail corporativo", "Telefone", "Empresa", "Cargo"];
const formStep2 = [
  "Faixa de faturamento",
  "Plataforma de e-commerce",
  "Volume aproximado de pedidos",
  "Principal desafio atual",
  "Solução de interesse",
  "Momento de contratação",
  `“Ainda não sei por onde começar”`,
];

const scopeBlocks = [
  {
    title: "Estratégia e arquitetura",
    items: [
      "Reunião de kickoff",
      "Imersão na solução e processo comercial",
      "Validação da jornada prioritária",
      "Definição de público, problema, oferta e conversão",
      "Arquitetura de informação",
      "Planejamento da jornada",
      "Mapeamento de objeções comerciais",
    ],
  },
  {
    title: "Conteúdo e comunicação",
    items: [
      "Definição da narrativa",
      "Desenvolvimento integral da copy",
      "Headlines e CTAs",
      "Provas, números e casos",
      "Oferta consultiva",
      "Conteúdo do formulário e confirmação",
      "Adequação para campanhas",
    ],
  },
  {
    title: "UX e interface",
    items: [
      "Wireframe da landing page",
      "Design da interface",
      "Desktop e mobile",
      "Identidade visual Trinio",
      "Elementos de conversão",
      "Até duas rodadas de ajustes",
    ],
  },
  {
    title: "Desenvolvimento",
    items: [
      "Desenvolvimento responsivo",
      "Interações",
      "Formulário de qualificação",
      "Integração com destino disponibilizado",
      "Página de confirmação",
      "SEO básico",
      "Testes e publicação",
    ],
  },
  {
    title: "Mensuração",
    items: [
      "Planejamento de eventos",
      "Google Tag Manager",
      "GA4",
      "UTMs",
      "Cliques e formulários",
      "Origem das oportunidades",
      "Dashboard básico",
    ],
  },
];

const trackedEvents = [
  "Acessos",
  "Origem do tráfego",
  "Profundidade de navegação",
  "Cliques nas CTAs",
  "Início do formulário",
  "Avanço para etapa 2",
  "Abandono do formulário",
  "Envio concluído",
  "Interesse declarado",
  "Conversão em oportunidade comercial",
];

const validationItems = [
  "Fontes de tráfego",
  "Taxa de interação com a página",
  "Cliques nas CTAs",
  "Início e conclusão do formulário",
  "Pontos de abandono",
  "Perfil e contexto dos leads",
  "Soluções e desafios mais selecionados",
  "Qualidade percebida pelo comercial",
  "Conversão em reuniões",
];

const deliverables = [
  "Arquitetura estratégica da jornada",
  "Copy completa da landing page",
  "Design responsivo",
  "Landing page desenvolvida e publicada",
  "Formulário contextualizado",
  "Integração padrão com destino definido",
  "GTM, GA4, UTMs e eventos",
  "Dashboard básico de acompanhamento",
  "Documentação dos eventos",
  "Acompanhamento por 90 dias",
  "Até três rodadas de otimização",
  "Relatórios mensais com aprendizados",
  "Relatório final e recomendações para o próximo ciclo",
];

const timeline = [
  { phase: "Etapa 1", title: "Imersão e estratégia", time: "3–4 dias úteis" },
  { phase: "Etapa 2", title: "Arquitetura e copy", time: "4–5 dias úteis" },
  { phase: "Etapa 3", title: "Design e aprovação", time: "5–6 dias úteis" },
  { phase: "Etapa 4", title: "Desenvolvimento e publicação", time: "6–7 dias úteis" },
  { phase: "Etapa 5", title: "Validação", time: "90 dias após publicação" },
];

const meliveResponsibilities = [
  "Conduzir o planejamento estratégico",
  "Desenvolver arquitetura, copy, design e página",
  "Configurar a mensuração prevista",
  "Coordenar o cronograma",
  "Testes de funcionamento",
  "Publicar a experiência",
  "Acompanhar dados durante os 90 dias de validação",
  "Conduzir até três rodadas de otimização",
  "Recomendar ajustes e próximos passos",
];

const trinioResponsibilities = [
  "Informações sobre produto, público e processo comercial",
  "Dados e resultados utilizáveis",
  "Validar a prioridade do Checkout",
  "Identidade visual e materiais",
  "Acessos: domínio, GTM, GA4, ferramenta de destino",
  "Aprovar conteúdos e layouts no cronograma",
  "Direcionar tráfego para a página",
  "Informar qualidade e avanço das oportunidades",
];

const exclusions = [
  "Investimento em mídia",
  "Gestão contínua de tráfego pago",
  "Redesenho do site institucional",
  "Outras jornadas ou landing pages",
  "Vídeos, fotografias ou animações complexas",
  "Licenças de ferramentas externas",
  "Hospedagem ou infraestrutura",
  "Desenvolvimento ou customização de CRM",
  "Integrações complexas sem documentação ou API",
  "Gestão contínua após os 90 dias",
];

const nextJourneys = [
  { title: "Margem e fulfillment", items: "Orquestrador, Fulfillment Agent e Order Manager Agent." },
  { title: "Operação omnichannel", items: "Pick & Pack, Dashboard OS e Store Ops Agent." },
  { title: "Campanhas de aquisição", items: "Mídia, outbound, eventos e conteúdo conectados às jornadas." },
];

const outcomes = [
  "Jornada comercial específica para o Checkout",
  "Proposta de valor conectada à dor do visitante",
  "Contato apresentado como entrega consultiva",
  "Leads com maior contexto antes da abordagem",
  "Estrutura mensurável de conversão",
  "Aprendizados para campanhas e decisões comerciais",
  "Modelo replicável para as demais soluções do TrinioOS",
];

export default function TrinioPropostaPage() {
  return (
    <main className="deck trinio-proposta">
      <SlideKeyboardNav />

      {/* 1 — Cover */}
      <section className="deck-slide deck-cover" data-slide id="inicio">
        <div className="hero-lines" aria-hidden="true" />
        <div className="deck-inner">
          <p className="eyebrow">
            <span>Proposta comercial</span> Trinio + Melive
          </p>
          <h1>
            Projeto-piloto de conversão
            <br />
            <strong>para o Trinio Checkout.</strong>
          </h1>
          <p className="hero-lead">
            Transformar uma solução robusta em uma jornada comercial mais clara,
            específica e mensurável.
          </p>
          <div className="deck-cover-meta">
            <article>
              <small>FORMATO</small>
              <b>Projeto-piloto</b>
            </article>
            <article>
              <small>JORNADA</small>
              <b>Checkout</b>
            </article>
            <article>
              <small>VALIDAÇÃO</small>
              <b>90 dias</b>
            </article>
          </div>
        </div>
      </section>

      {/* 2 — Ponto de partida */}
      <section className="deck-slide deck-paper" data-slide id="partida">
        <div className="deck-inner deck-split">
          <div>
            <p className="section-index">01 / O PONTO DE PARTIDA</p>
            <h2>
              Amplitude fortalece.
              <em> E também desafia.</em>
            </h2>
          </div>
          <div className="deck-copy">
            <p>
              O TrinioOS reúne diferentes soluções para aumentar conversão,
              melhorar margem e otimizar operações omnichannel.
            </p>
            <p>
              Uma liderança interessada em conversão no checkout possui
              necessidades, argumentos e objeções diferentes de quem procura
              eficiência no fulfillment ou maior controle da operação.
            </p>
            <blockquote>
              A oportunidade está em criar portas de entrada específicas,
              capazes de conectar cada problema à solução mais relevante.
            </blockquote>
          </div>
        </div>
      </section>

      {/* 3 — O que identificamos */}
      <section className="deck-slide deck-ink" data-slide id="identificamos">
        <div className="deck-inner">
          <p className="section-index light">02 / O QUE IDENTIFICAMOS</p>
          <h2>
            Três oportunidades
            <em> prioritárias.</em>
          </h2>
          <div className="deck-mosaic">
            {identified.map((item) => (
              <article key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — Recomendação */}
      <section className="deck-slide deck-cream" data-slide id="recomendacao">
        <div className="deck-inner">
          <p className="section-index">03 / A RECOMENDAÇÃO</p>
          <h2>
            Começar por uma jornada.
            <em> Usar como piloto.</em>
          </h2>
          <blockquote className="deck-offer">
            Conversão e Checkout
          </blockquote>
          <ul className="deck-check">
            {checkoutReasons.map((item, i) => (
              <li key={item}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="deck-foot">
            A prioridade definitiva será validada no início do projeto,
            considerando dados e objetivos comerciais da Trinio.
          </p>
        </div>
      </section>

      {/* 5 — Objetivo */}
      <section className="deck-slide deck-paper" data-slide id="objetivo">
        <div className="deck-inner">
          <p className="section-index">04 / OBJETIVO DO PROJETO-PILOTO</p>
          <h2>
            Construir e validar
            <em> uma jornada digital específica.</em>
          </h2>
          <ol className="deck-questions">
            {pilotGoals.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>
      </section>

      {/* 6 — Hipótese */}
      <section className="deck-slide deck-green" data-slide id="hipotese">
        <div className="deck-inner deck-question">
          <p className="section-index light">05 / HIPÓTESE CENTRAL</p>
          <h2>
            Uma jornada específica
            <em> gera mais conversas qualificadas.</em>
          </h2>
          <blockquote className="deck-offer">
            Se uma liderança de e-commerce acessar uma jornada construída para
            seus desafios de conversão, encontrará menos complexidade para
            compreender a oferta e mais clareza para avançar.
          </blockquote>
        </div>
      </section>

      {/* 7 — Conceito */}
      <section className="deck-slide deck-ink" data-slide id="conceito">
        <div className="deck-inner">
          <p className="section-index light">06 / CONCEITO SUGERIDO</p>
          <h2>
            Seu checkout não precisa ser
            <em> o limite da sua conversão.</em>
          </h2>
          <p className="hero-lead cream-text">
            Checkout headless, frete inteligente e insights em tempo real para
            reduzir fricções e transformar mais jornadas em vendas.
          </p>
          <div className="deck-cta-pair">
            <article>
              <small>CTA PRINCIPAL</small>
              <p>Descobrir oportunidades no meu checkout</p>
            </article>
            <article>
              <small>ENTREGA DO CONTATO</small>
              <p>Conversa consultiva: fricções, cenário e impacto</p>
            </article>
          </div>
        </div>
      </section>

      {/* 8 — Estrutura da jornada */}
      <section className="deck-slide deck-paper" data-slide id="estrutura">
        <div className="deck-inner">
          <p className="section-index">07 / ESTRUTURA DA JORNADA</p>
          <h2>
            Decisão progressiva.
            <em> Seção por seção.</em>
          </h2>
          <div className="deck-mosaic">
            {journeySections.map((s) => (
              <article key={s.number}>
                <span>{s.number}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9 — Formulário */}
      <section className="deck-slide deck-cream" data-slide id="formulario">
        <div className="deck-inner deck-split">
          <div>
            <p className="section-index">08 / FORMULÁRIO DE QUALIFICAÇÃO</p>
            <h2>
              Duas etapas.
              <em> Contexto antes do comercial.</em>
            </h2>
          </div>
          <div>
            <h3 className="deck-form-label">Etapa 1 — identificação</h3>
            <ul className="deck-pills">
              {formStep1.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <h3 className="deck-form-label" style={{ marginTop: 28 }}>
              Etapa 2 — contexto da operação
            </h3>
            <ul className="deck-pills">
              {formStep2.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 10 — Escopo */}
      <section className="deck-slide deck-ink" data-slide id="escopo">
        <div className="deck-inner">
          <p className="section-index light">09 / ESCOPO DO PROJETO</p>
          <h2>
            O que a Melive
            <em> entrega.</em>
          </h2>
          <div className="deck-months">
            {scopeBlocks.map((block) => (
              <article key={block.title}>
                <h3>{block.title}</h3>
                <ul>
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 11 — Eventos */}
      <section className="deck-slide deck-paper" data-slide id="eventos">
        <div className="deck-inner">
          <p className="section-index">10 / EVENTOS ACOMPANHADOS</p>
          <h2>
            O que a página
            <em> vai mensurar.</em>
          </h2>
          <ol className="deck-funnel">
            {trackedEvents.map((item, i) => (
              <li key={item}>
                <b>{String(i + 1).padStart(2, "0")}</b>
                <span>{item}</span>
              </li>
            ))}
          </ol>
          <p className="deck-foot">
            Qualidade dos leads e avanço no pipeline dependem do retorno do
            time comercial da Trinio.
          </p>
        </div>
      </section>

      {/* 12 — Validação 90 dias */}
      <section className="deck-slide deck-green" data-slide id="validacao">
        <div className="deck-inner">
          <p className="section-index light">11 / VALIDAÇÃO · 90 DIAS</p>
          <h2>
            90 dias de acompanhamento.
            <em> Otimizações contínuas.</em>
          </h2>
          <ul className="deck-check light">
            {validationItems.map((item, i) => (
              <li key={item}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="deck-foot cream-text">
            Inclui até três rodadas de otimização, relatórios mensais e
            relatório final. Conclusões dependem do volume de tráfego e
            oportunidades geradas durante o período.
          </p>
        </div>
      </section>

      {/* 13 — Entregáveis */}
      <section className="deck-slide deck-paper" data-slide id="entregaveis">
        <div className="deck-inner">
          <p className="section-index">12 / ENTREGÁVEIS</p>
          <h2>
            O que a Trinio recebe
            <em> ao final do projeto.</em>
          </h2>
          <ul className="deck-check two-col">
            {deliverables.map((item, i) => (
              <li key={item}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 14 — Cronograma */}
      <section className="deck-slide deck-cream" data-slide id="cronograma">
        <div className="deck-inner">
          <p className="section-index">13 / CRONOGRAMA</p>
          <h2>
            18 a 22 dias úteis.
            <em> Mais 90 de validação.</em>
          </h2>
          <div className="deck-months">
            {timeline.map((t) => (
              <article key={t.phase}>
                <small>{t.phase}</small>
                <h3>{t.title}</h3>
                <p style={{ fontSize: 14, fontWeight: 800 }}>{t.time}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 15 — Responsabilidades */}
      <section className="deck-slide deck-green" data-slide id="responsabilidades">
        <div className="deck-inner deck-split">
          <div>
            <p className="section-index light">14 / RESPONSABILIDADES</p>
            <h2>
              Melive entrega.
              <em> Trinio viabiliza.</em>
            </h2>
            <h3 className="deck-form-label cream-text">Melive</h3>
            <ul className="deck-check light">
              {meliveResponsibilities.map((item, i) => (
                <li key={item}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="deck-form-label cream-text" style={{ marginTop: 60 }}>
              Trinio
            </h3>
            <ul className="deck-check light">
              {trinioResponsibilities.map((item, i) => (
                <li key={item}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 16 — Investimento */}
      <section className="deck-slide deck-ink" data-slide id="investimento">
        <div className="deck-inner">
          <p className="section-index light">15 / INVESTIMENTO</p>
          <h2>
            Projeto-piloto
            <em> de conversão.</em>
          </h2>
          <div className="deck-price-row">
            <article>
              <small>PROJETO-PILOTO</small>
              <p>
                R$ <b>9.800</b>
              </p>
              <span>
                Estratégia, copy, UX/UI, dev, mensuração, publicação, 90 dias de
                acompanhamento, otimizações e relatórios
              </span>
            </article>
            <article>
              <small>PAGAMENTO</small>
              <p>
                <b>50% + 50%</b>
              </p>
              <span>
                50% na aprovação e início · 50% na aprovação da interface
              </span>
            </article>
            <article className="media-price">
              <small>VALIDADE</small>
              <p>
                <b>15 dias</b>
              </p>
              <span>corridos a partir do envio</span>
            </article>
          </div>
        </div>
      </section>

      {/* 17 — Exclusões */}
      <section className="deck-slide deck-paper" data-slide id="exclusoes">
        <div className="deck-inner">
          <p className="section-index">16 / NÃO INCLUÍDOS</p>
          <h2>
            O que fica
            <em> de fora.</em>
          </h2>
          <ul className="deck-check two-col">
            {exclusions.map((item, i) => (
              <li key={item}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="deck-foot">
            Demandas adicionais poderão ser avaliadas e orçadas separadamente.
          </p>
        </div>
      </section>

      {/* 18 — Desdobramentos */}
      <section className="deck-slide deck-ink" data-slide id="desdobramentos">
        <div className="deck-inner">
          <p className="section-index light">17 / POSSÍVEIS DESDOBRAMENTOS</p>
          <h2>
            Se validar,
            <em> a metodologia se replica.</em>
          </h2>
          <div className="deck-mosaic">
            {nextJourneys.map((j) => (
              <article key={j.title}>
                <h3>{j.title}</h3>
                <p>{j.items}</p>
              </article>
            ))}
          </div>
          <p className="deck-foot cream-text">
            Começar controlado, aprender com dados reais e expandir de acordo
            com a resposta do mercado.
          </p>
        </div>
      </section>

      {/* 19 — Resultado esperado / CTA */}
      <section className="deck-slide deck-cover deck-close" data-slide id="proximo">
        <div className="hero-lines" aria-hidden="true" />
        <div className="deck-inner">
          <p className="eyebrow">
            <span>Próximo passo</span> Trinio + Melive
          </p>
          <h2 className="close-title">
            Uma suíte pode ser completa
            <br />
            <strong>sem exigir que o visitante compreenda tudo antes.</strong>
          </h2>
          <ul className="deck-outcomes">
            {outcomes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="hero-lead">
            Kickoff com as áreas comercial, marketing e produto para validar a
            prioridade do Checkout, reunir materiais e iniciar a jornada.
          </p>
        </div>
      </section>

      <SiteFooter caption="Proposta comercial · Projeto-piloto de conversão · Trinio Checkout · 2026" />
    </main>
  );
}
