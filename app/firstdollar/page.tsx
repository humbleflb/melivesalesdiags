import type { Metadata } from "next";
import { SlideKeyboardNav } from "../components/SlideKeyboardNav";
import { SiteFooter } from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Proposta First Dollar — Melive",
  description:
    "Estratégia de recrutamento, validação de mercado e evolução do produto nos Estados Unidos.",
};

const validationQuestions = [
  "As pessoas entendem rapidamente a proposta do produto?",
  "O assessment faz perguntas claras e relevantes?",
  "O usuário se sente confortável em compartilhar suas informações?",
  "As recomendações da inteligência artificial parecem personalizadas?",
  "Os caminhos sugeridos são realistas e executáveis?",
  "O usuário sabe o que fazer depois de receber a recomendação?",
  "Quais elementos aumentam ou reduzem a confiança?",
  "O produto gera intenção real de continuidade?",
  "Quais objeções impediriam o uso ou pagamento?",
];

const thesis = [
  {
    number: "01",
    title: "Desejabilidade",
    text: "O problema é relevante o suficiente para despertar interesse?",
  },
  {
    number: "02",
    title: "Usabilidade",
    text: "As pessoas conseguem concluir o assessment, compreender a recomendação e navegar pela jornada?",
  },
  {
    number: "03",
    title: "Aplicabilidade",
    text: "A orientação recebida parece possível de ser colocada em prática no contexto real do usuário?",
  },
];

const diversity = [
  "Faixa etária",
  "Região dos Estados Unidos",
  "Situação profissional",
  "Disponibilidade de tempo",
  "Familiaridade com tecnologia",
  "Habilidades profissionais",
  "Recursos e ativos disponíveis",
  "Experiência anterior com renda adicional",
  "Motivações e expectativas",
];

const focusGoals = [
  "Avaliar a compreensão da proposta",
  "Explorar motivações e inseguranças",
  "Identificar expectativas",
  "Validar linguagem e posicionamento",
  "Investigar confiança na inteligência artificial",
  "Comparar percepções entre diferentes perfis",
];

const testGoals = [
  "Observar a conclusão do assessment",
  "Identificar perguntas confusas",
  "Avaliar a percepção de personalização",
  "Analisar a clareza das recomendações",
  "Verificar se o usuário compreende o próximo passo",
  "Encontrar barreiras de usabilidade e confiança",
];

const adHighlights = [
  "Participação em uma pesquisa de produto",
  "Contribuir com uma solução em desenvolvimento",
  "Sessão realizada remotamente",
  "Duração estimada",
  "Critérios de qualificação",
  "Incentivo após a participação",
  "Proteção e uso responsável das informações",
];

const communities = [
  "Side hustles",
  "Freelancing",
  "Gig economy",
  "Trabalho remoto",
  "Economia compartilhada",
  "Empreendedorismo individual",
  "Organização financeira e geração de renda",
];

const journey = [
  { number: "01", title: "Anúncio", text: "A pessoa conhece a oportunidade de participar da pesquisa." },
  { number: "02", title: "Landing page", text: "Página em inglês com o First Dollar, o estudo, o formato e o incentivo." },
  { number: "03", title: "Screener", text: "Questionário de qualificação do interessado." },
  { number: "04", title: "Avaliação", text: "A Melive verifica aderência, diversidade e disponibilidade." },
  { number: "05", title: "Agendamento", text: "Participantes selecionados escolhem um horário." },
  { number: "06", title: "Confirmação", text: "Convite de calendário e orientações." },
  { number: "07", title: "Reconfirmação", text: "Lembretes para reduzir desistências e ausências." },
  { number: "08", title: "Participação", text: "Focus group ou teste individual." },
  { number: "09", title: "Incentivo", text: "Pagamento liberado após participação válida." },
  { number: "10", title: "Análise", text: "Aprendizados organizados em recomendações." },
];

const metrics = [
  "Alcance e frequência da campanha",
  "Cliques e visitas à landing page",
  "Taxa de início do screener",
  "Taxa de conclusão do screener",
  "Custo por inscrição",
  "Custo por candidato qualificado",
  "Percentual de candidatos aprovados",
  "Participantes agendados",
  "Taxa de comparecimento",
  "Sessões concluídas",
  "Cobertura das cotas",
  "Problemas de produto identificados",
  "Padrões recorrentes nas entrevistas",
  "Intenção declarada de utilização",
  "Confiança nas recomendações",
  "Clareza dos próximos passos",
];

const proposal1Scope = [
  "Reunião de imersão e definição das hipóteses",
  "Definição dos perfis e critérios de qualificação",
  "Construção do plano de recrutamento",
  "Desenvolvimento do screener em inglês",
  "Copy e estrutura da landing page de recrutamento",
  "Desenvolvimento da landing page",
  "Configuração de mensuração e eventos",
  "Planejamento da campanha de aquisição",
  "Desenvolvimento de até seis variações de anúncios",
  "Configuração e gestão de Meta Ads",
  "Monitoramento e otimizações semanais",
  "Avaliação das inscrições e cotas",
  "Comunicação, agendamento e reconfirmação",
  "Estruturação do roteiro de pesquisa",
  "Dois focus groups remotos",
  "Testes individuais com amostra dos participantes",
  "Consolidação dos aprendizados",
  "Relatório final com recomendações",
];

const proposal1External = [
  "Verba de mídia",
  "Incentivos dos participantes",
  "Taxas de plataformas de recrutamento",
  "Ferramentas ou licenças extraordinárias",
  "Facilitação em inglês por pesquisador externo, se necessária",
];

const proposal2Strategy = [
  "Auditoria da experiência atual",
  "Análise do posicionamento e da proposta de valor",
  "Revisão da arquitetura da jornada",
  "Avaliação do assessment",
  "Identificação de perguntas redundantes ou sensíveis",
  "Revisão da lógica de progressão",
  "Avaliação do onboarding",
  "Mapeamento dos pontos de abandono",
  "Análise da entrega das recomendações",
  "Revisão da clareza dos próximos passos",
  "Priorização das melhorias",
  "Backlog de produto e ciclos de implementação",
];

const proposal2Ai = [
  "Avaliação da arquitetura do agente",
  "Revisão das instruções e prompts",
  "Análise da personalização das respostas",
  "Criação de critérios de qualidade",
  "Revisão do tom e da clareza",
  "Estruturação de guardrails",
  "Tratamento de respostas incompletas",
  "Redução de recomendações genéricas",
  "Transparência sobre limites da IA",
  "Testes de consistência em diferentes perfis",
];

const proposal2Dev = [
  "Ajustes de interface e experiência",
  "Implementação de melhorias priorizadas",
  "Evolução do assessment",
  "Ajustes nos fluxos do agente",
  "Integrações necessárias dentro do escopo",
  "Configuração de eventos de produto",
  "Correção de problemas encontrados",
  "QA das funcionalidades alteradas",
  "Publicação das melhorias",
  "Novo ciclo de testes após a implementação",
];

const proposal2External = [
  "Verba de mídia",
  "Incentivos dos participantes",
  "Taxas de plataformas de recrutamento",
  "Licenças e APIs de terceiros",
  "Serviços jurídicos",
  "Infraestrutura adicional",
  "Facilitação em inglês por profissional externo, se necessária",
];

const timeline = [
  {
    phase: "Semana 1",
    title: "Imersão",
    text: "Hipóteses, definição dos públicos e planejamento da pesquisa.",
  },
  {
    phase: "Semana 2",
    title: "Fundação",
    text: "Screener, landing page, mensuração, criativos e configuração da campanha.",
  },
  {
    phase: "Semanas 3–4",
    title: "Aquisição",
    text: "Triagem, otimização, seleção e agendamento dos participantes.",
  },
  {
    phase: "Semanas 5–6",
    title: "Validação",
    text: "Focus groups, testes individuais, análise e recomendações.",
  },
  {
    phase: "Semanas 7–10",
    title: "Evolução · P2",
    text: "Priorização, desenvolvimento, QA, publicação e nova rodada de validação.",
  },
];

const conditions = [
  {
    title: "Proposta 1",
    items: ["50% na aprovação", "50% antes da entrega do relatório final"],
  },
  {
    title: "Proposta 2",
    items: [
      "40% na aprovação",
      "30% no início da implementação",
      "30% na conclusão do projeto",
    ],
  },
];

const otherConditions = [
  "Valores em dólares americanos",
  "Verba de mídia paga diretamente às plataformas",
  "Incentivos pagos somente após participação válida",
  "Taxas de fornecedores cobradas separadamente",
  "Uma rodada de ajustes por entrega",
  "Proposta válida por 15 dias",
  "Início depende da aprovação e do pagamento inicial",
];

export default function FirstDollarPage() {
  return (
    <main className="deck firstdollar">
      <SlideKeyboardNav />

      <section className="deck-slide deck-cover" data-slide id="inicio">
        <div className="hero-lines" aria-hidden="true" />
        <div className="deck-inner">
          <p className="eyebrow">
            <span>Proposta comercial</span> First Dollar + Melive
          </p>
          <h1>
            Da intenção
            <br />
            <strong>à primeira ação.</strong>
          </h1>
          <p className="hero-lead">
            Estratégia de recrutamento, validação de mercado e evolução do
            produto nos Estados Unidos.
          </p>
          <div className="deck-cover-meta">
            <article>
              <small>MERCADO</small>
              <b>Estados Unidos</b>
            </article>
            <article>
              <small>FORMATO</small>
              <b>Duas propostas</b>
            </article>
            <article>
              <small>PARA</small>
              <b>Magda · First Dollar</b>
            </article>
          </div>
        </div>
      </section>

      <section className="deck-slide deck-paper" data-slide id="contexto">
        <div className="deck-inner deck-split">
          <div>
            <p className="section-index">01 / O CONTEXTO</p>
            <h2>
              Renda adicional é intenção comum.
              <em> Transformá-la em caminho é o desafio.</em>
            </h2>
          </div>
          <div className="deck-copy">
            <p>
              O First Dollar nasce para preencher esse espaço. Por meio de um
              assessment, a plataforma identifica habilidades, recursos,
              disponibilidade e preferências. Em seguida, um agente de
              inteligência artificial sugere caminhos possíveis e orienta a
              construção de uma nova fonte de renda.
            </p>
            <p>
              O produto não entrega apenas ideias. Sua principal promessa é
              ajudar o usuário a entender o que pode fazer, por onde começar e
              quais passos precisa executar para avançar.
            </p>
            <blockquote>
              Antes de ampliar a divulgação, validar se a proposta é compreendida,
              valorizada e percebida como confiável pelo público dos EUA.
            </blockquote>
          </div>
        </div>
      </section>

      <section className="deck-slide deck-yellow" data-slide id="desafio">
        <div className="deck-inner">
          <p className="section-index">02 / O DESAFIO</p>
          <h2>
            Validar compreensão, valor
            <em> e confiança.</em>
          </h2>
          <ol className="deck-questions">
            {validationQuestions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
          <p className="deck-foot">
            O desafio da Melive: encontrar, qualificar e mobilizar o público
            potencial — e transformar essa participação em aprendizado
            estratégico para o produto.
          </p>
        </div>
      </section>

      <section className="deck-slide deck-ink" data-slide id="tese">
        <div className="deck-inner">
          <p className="section-index light">03 / TESE DE VALIDAÇÃO</p>
          <h2>
            Três dimensões.
            <em> Não só opinião.</em>
          </h2>
          <div className="deck-mosaic">
            {thesis.map((item) => (
              <article key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <p className="deck-foot cream-text">
            Precisamos observar como as pessoas compreendem a promessa, utilizam
            o produto, reagem às recomendações e interpretam os próximos passos.
          </p>
        </div>
      </section>

      <section className="deck-slide deck-paper" data-slide id="publicos">
        <div className="deck-inner">
          <p className="section-index">04 / QUEM PRECISAMOS OUVIR</p>
          <h2>
            Dois grupos nos
            <em> Estados Unidos.</em>
          </h2>
          <div className="journeys deck-block-gap">
            <article>
              <small>GRUPO 1</small>
              <h3>Explorers</h3>
              <p>
                Pessoas que desejam criar uma fonte de renda adicional, mas ainda
                não sabem qual caminho seguir ou como começar.
              </p>
            </article>
            <article>
              <small>GRUPO 2</small>
              <h3>Early Movers</h3>
              <p>
                Pessoas que já tentaram atividade paralela, trabalho autônomo,
                prestação de serviço ou uso de ativos próprios — sem alcançar
                consistência.
              </p>
            </article>
          </div>
          <ul className="deck-pills deck-block-gap">
            {diversity.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="deck-foot">
            O objetivo não é uma amostra estatística da população americana —
            é identificar padrões de comportamento, objeções e oportunidades de
            produto.
          </p>
        </div>
      </section>

      <section className="deck-slide deck-cream" data-slide id="pesquisa">
        <div className="deck-inner">
          <p className="section-index">05 / DESENHO DA PESQUISA</p>
          <h2>
            Validação qualitativa
            <em> híbrida.</em>
          </h2>
          <div className="deck-mosaic">
            <article>
              <span>01</span>
              <h3>Focus groups remotos</h3>
              <p>Dois grupos com 6 a 8 participantes cada.</p>
              <ul className="deck-mini-list">
                {focusGoals.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article>
              <span>02</span>
              <h3>Testes individuais</h3>
              <p>Participantes dos grupos em sessões de uso.</p>
              <ul className="deck-mini-list">
                {testGoals.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
          <p className="deck-foot">
            Esse formato conecta percepção, comportamento e experiência real.
          </p>
        </div>
      </section>

      <section className="deck-slide deck-cream" data-slide id="recrutamento">
        <div className="deck-inner">
          <p className="section-index">06 / ESTRATÉGIA DE RECRUTAMENTO</p>
          <h2>
            Meta Ads como canal principal.
            <em> Painéis e comunidades como complemento.</em>
          </h2>
          <p className="hero-lead">
            A campanha convida a uma pesquisa remunerada sobre um produto
            digital de descoberta e construção de renda adicional — sem
            promessas de ganhos financeiros.
          </p>
          <ul className="deck-check two-col">
            {adHighlights.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="deck-theme-grid deck-block-gap">
            {communities.map((item) => (
              <article key={item}>{item}</article>
            ))}
          </div>
          <p className="deck-foot">
            LinkedIn Ads não é canal principal nesta etapa: custo e segmentação
            mais adequados a B2B. O First Dollar precisa alcançar consumidores
            em diferentes situações profissionais e econômicas.
          </p>
        </div>
      </section>

      <section className="deck-slide deck-paper" data-slide id="jornada">
        <div className="deck-inner">
          <p className="section-index">07 / JORNADA DE CONVERSÃO</p>
          <h2>
            Do anúncio
            <em> à análise.</em>
          </h2>
          <ol className="deck-funnel">
            {journey.map((item) => (
              <li key={item.number}>
                <b>{item.number}</b>
                <span>
                  <strong>{item.title}.</strong> {item.text}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="deck-slide deck-cream" data-slide id="metricas">
        <div className="deck-inner">
          <p className="section-index">08 / MÉTRICAS DA OPERAÇÃO</p>
          <h2>
            O norte não é volume de leads.
            <em> É decisão melhor.</em>
          </h2>
          <div className="deck-metric-grid">
            {metrics.map((item) => (
              <article key={item}>{item}</article>
            ))}
          </div>
          <p className="deck-foot">
            O principal indicador será a capacidade de encontrar usuários
            representativos e gerar decisões melhores para o First Dollar.
          </p>
        </div>
      </section>

      <section className="deck-slide deck-ink" data-slide id="proposta-1">
        <div className="deck-inner">
          <p className="section-index light">09 / PROPOSTA 1</p>
          <h2>
            Recruitment &amp; Validation
            <em> Sprint.</em>
          </h2>
          <p className="hero-lead cream-text">
            Operação completa para estruturar a pesquisa, atrair participantes
            nos EUA e transformar as sessões em aprendizados acionáveis.
          </p>
          <div className="deck-price-row">
            <article>
              <small>INVESTIMENTO MELIVE</small>
              <p>
                US$ <b>2,450</b>
              </p>
              <span>condição especial · First Dollar</span>
            </article>
            <article>
              <small>PRAZO</small>
              <p>
                <b>6</b>
              </p>
              <span>semanas estimadas</span>
            </article>
            <article className="media-price">
              <small>META OPERACIONAL</small>
              <p>
                <b>12–16</b>
              </p>
              <span>participações · 2 focus groups</span>
            </article>
          </div>
        </div>
      </section>

      <section className="deck-slide deck-paper" data-slide id="proposta-1-escopo">
        <div className="deck-inner">
          <p className="section-index">10 / PROPOSTA 1 · ESCOPO</p>
          <h2>
            Do plano ao
            <em> relatório final.</em>
          </h2>
          <ul className="deck-check two-col">
            {proposal1Scope.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="deck-foot">
            Meta: dois focus groups remotos (6–8 por grupo), 12 a 16
            participações concluídas e banco reserva para reduzir no-show. O
            número depende da incidência do perfil, da mídia e da
            disponibilidade.
          </p>
        </div>
      </section>

      <section className="deck-slide deck-cream" data-slide id="proposta-1-externos">
        <div className="deck-inner deck-split">
          <div>
            <p className="section-index">11 / PROPOSTA 1 · EXTERNOS</p>
            <h2>
              Fora do fee Melive.
              <em> Verba recomendada.</em>
            </h2>
          </div>
          <div className="deck-copy">
            <ul className="deck-check">
              {proposal1External.map((item, index) => (
                <li key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="journeys deck-block-gap">
              <article>
                <small>META ADS</small>
                <h3>US$ 1,200–1,800</h3>
                <p>Verba recomendada para aquisição.</p>
              </article>
              <article>
                <small>INCENTIVO</small>
                <h3>US$ 75</h3>
                <p>Por participação concluída.</p>
              </article>
            </div>
            <p className="deck-foot">
              Plataforma de recrutamento apenas se necessária — cobrada pelo
              fornecedor.
            </p>
          </div>
        </div>
      </section>

      <section className="deck-slide deck-green" data-slide id="proposta-2">
        <div className="deck-inner">
          <p className="section-index light">12 / PROPOSTA 2</p>
          <h2>
            Product Validation &amp; Evolution
            <em> Sprint.</em>
          </h2>
          <p className="hero-lead cream-text">
            Tudo da Proposta 1, mais participação da Melive na evolução prática
            do First Dollar: estratégia, UX, IA, desenvolvimento e novo ciclo
            de validação.
          </p>
          <div className="deck-price-row">
            <article>
              <small>INVESTIMENTO MELIVE</small>
              <p>
                US$ <b>6,500</b>
              </p>
              <span>condição especial · First Dollar</span>
            </article>
            <article>
              <small>PRAZO</small>
              <p>
                <b>8–10</b>
              </p>
              <span>semanas estimadas</span>
            </article>
            <article className="media-price">
              <small>CAPACIDADE TÉCNICA</small>
              <p>
                <b>80h</b>
              </p>
              <span>produto, design, code, QA</span>
            </article>
          </div>
        </div>
      </section>

      <section className="deck-slide deck-paper" data-slide id="proposta-2-escopo">
        <div className="deck-inner">
          <p className="section-index">13 / PROPOSTA 2 · EVOLUÇÃO</p>
          <h2>
            Produto, IA
            <em> e implementação.</em>
          </h2>
          <div className="deck-months">
            <article>
              <small>ESTRATÉGIA E PRODUTO</small>
              <h3>Jornada e backlog</h3>
              <ul>
                {proposal2Strategy.slice(0, 6).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article>
              <small>INTELIGÊNCIA ARTIFICIAL</small>
              <h3>Agente e qualidade</h3>
              <ul>
                {proposal2Ai.slice(0, 6).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article>
              <small>UX E DESENVOLVIMENTO</small>
              <h3>Até 80 horas</h3>
              <ul>
                {proposal2Dev.slice(0, 6).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
          <p className="deck-foot">
            Reconstrução integral do app, app nativo novo ou serviços externos
            serão orçados separadamente. Externos: mídia, incentivos, taxas,
            licenças, jurídico, infra e facilitação externa.
          </p>
        </div>
      </section>

      <section className="deck-slide deck-paper" data-slide id="comparativo">
        <div className="deck-inner">
          <p className="section-index">14 / COMPARATIVO</p>
          <h2>
            Validar primeiro
            <em> ou validar e evoluir.</em>
          </h2>
          <div className="journeys deck-block-gap">
            <article>
              <small>PROPOSTA 1 · US$ 2,450 · 6 SEMANAS</small>
              <h3>Recruitment &amp; Validation</h3>
              <p>
                Indicada para validar mercado, público, comunicação e experiência
                antes de decidir quais mudanças implementar. Inclui pesquisa,
                recrutamento, LP, Meta Ads, screener, focus groups, testes e
                relatório.
              </p>
            </article>
            <article>
              <small>PROPOSTA 2 · US$ 6,500 · 8–10 SEMANAS</small>
              <h3>Validation &amp; Evolution</h3>
              <p>
                Indicada para transformar aprendizados em melhorias reais.
                Inclui todo o escopo da Proposta 1 mais auditoria, UX, assessment,
                agente de IA, programação, QA, implementação e novo ciclo de
                validação.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="deck-slide deck-cream" data-slide id="cronograma">
        <div className="deck-inner">
          <p className="section-index">15 / CRONOGRAMA</p>
          <h2>
            Seis semanas de validação.
            <em> Até dez com evolução.</em>
          </h2>
          <div className="deck-months">
            {timeline.map((item) => (
              <article key={item.phase}>
                <small>{item.phase}</small>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <p className="deck-foot">
            O cronograma depende da aprovação dos materiais, acesso às
            plataformas e disponibilidade dos participantes.
          </p>
        </div>
      </section>

      <section className="deck-slide deck-paper" data-slide id="condicoes">
        <div className="deck-inner">
          <p className="section-index">16 / CONDIÇÕES COMERCIAIS</p>
          <h2>
            Pagamento e
            <em> premissas.</em>
          </h2>
          <div className="journeys deck-block-gap">
            {conditions.map((block) => (
              <article key={block.title}>
                <small>{block.title}</small>
                <h3>{block.title === "Proposta 1" ? "2 parcelas" : "3 parcelas"}</h3>
                <ul className="deck-mini-list">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <ul className="deck-check two-col deck-block-gap">
            {otherConditions.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="deck-slide deck-cover deck-close" data-slide id="proximo">
        <div className="hero-lines" aria-hidden="true" />
        <div className="deck-inner">
          <p className="eyebrow">
            <span>Próximo passo</span> First Dollar + Melive
          </p>
          <h2 className="close-title">
            Evidências antes
            <br />
            <strong>de investir em escala.</strong>
          </h2>
          <p className="hero-lead">
            Magda, o First Dollar parte de um problema relevante. O próximo passo
            é colocar essa experiência diante das pessoas certas, escutá-las com
            método e descobrir quais ajustes tornarão o produto mais útil,
            confiável e acionável.
          </p>
          <blockquote className="deck-offer deck-block-gap">
            Na primeira proposta, entregamos o caminho para validar. Na segunda,
            seguimos até a implementação das melhorias.
          </blockquote>
          <a
            className="button dark whatsapp-cta"
            href="https://wa.me/5512992477878?text=Ol%C3%A1!%20Quero%20conversar%20sobre%20a%20proposta%20First%20Dollar%20%2B%20Melive."
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="whatsapp-cta-label">Conversar com a Melive</span>
            <span aria-hidden="true">↗</span>
          </a>
          <p className="deck-foot deck-block-gap">
            Melive · Estratégia, tecnologia e crescimento.
          </p>
        </div>
      </section>

      <SiteFooter caption="Proposta comercial • First Dollar • 2026" />
    </main>
  );
}
