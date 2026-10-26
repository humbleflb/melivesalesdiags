import type { Metadata } from "next";
import { SlideKeyboardNav } from "../../components/SlideKeyboardNav";
import { SiteFooter } from "../../components/SiteFooter";

export const metadata: Metadata = {
  title: "Proposta Fershop Conecta — Melive",
  description:
    "Um WhatsApp oficial da Fershop que identifica a necessidade e entrega o atendimento à loja e ao vendedor certos.",
};

const problems = [
  "Clientes procurando a loja errada",
  "Atendimentos concentrados em poucos vendedores",
  "Mensagens que demoram para receber resposta",
  "Conversas encaminhadas manualmente",
  "Perda do histórico durante uma transferência",
  "Dificuldade para saber quem está atendendo cada cliente",
  "Falta de visibilidade sobre demanda, tempo de resposta e conversão",
  "Experiências diferentes entre as lojas",
  "Leads esquecidos ou respondidos fora do momento de compra",
];

const flow = [
  "O cliente inicia uma conversa com o número oficial",
  "O agente identifica localização, interesse e necessidade",
  "O sistema consulta as regras de atendimento da Fershop",
  "A conversa é atribuída à loja correspondente",
  "Dentro da loja, o atendimento vai ao vendedor disponível ou responsável",
  "O vendedor recebe o histórico completo e continua a conversa",
  "Se ninguém assumir no prazo, o sistema aciona uma nova rota",
  "Gestores acompanham atendimentos, transferências, tempos e resultados",
];

const signals = [
  "Loja, cidade ou região desejada",
  "Categoria de produto",
  "Motivo do contato",
  "Compra, orçamento, retirada, troca ou suporte",
  "Cliente novo ou recorrente",
  "Nível de urgência",
  "Preferência de atendimento",
  "Informações necessárias antes da transferência",
];

const rules = [
  "Loja escolhida pelo cliente",
  "Região ou CEP",
  "Categoria procurada",
  "Especialidade do vendedor",
  "Carteira de clientes",
  "Disponibilidade",
  "Horário de funcionamento",
  "Distribuição equilibrada entre vendedores",
  "Ordem de atendimento",
  "Prioridade comercial",
  "Reatribuição em caso de demora",
];

const handoff = [
  "Nome e telefone do cliente",
  "Loja ou região identificada",
  "Motivo do contato",
  "Produto ou categoria de interesse",
  "Resumo do diálogo inicial",
  "Horário de entrada",
  "Prioridade",
  "Histórico da conversa",
];

const contingency = [
  "O sistema envia um alerta",
  "O atendimento retorna à fila",
  "Outro vendedor elegível pode recebê-lo",
  "Um supervisor pode ser notificado",
  "O ocorrido fica registrado para acompanhamento",
];

const diagnosis = [
  "Reuniões de imersão",
  "Mapeamento das lojas",
  "Levantamento das equipes e vendedores",
  "Identificação dos tipos de atendimento",
  "Mapeamento dos horários",
  "Levantamento das regras atuais de distribuição",
  "Definição de responsáveis",
  "Identificação de exceções e contingências",
  "Construção da jornada ideal",
];

const conversation = [
  "Desenho do fluxo inicial",
  "Definição das perguntas de triagem",
  "Criação das mensagens do agente",
  "Definição da personalidade da comunicação",
  "Tratamento de mensagens incompletas",
  "Tratamento de respostas abertas",
  "Fluxos de erro e recuperação",
  "Transferência para atendimento humano",
  "Mensagens fora do horário e de encerramento",
  "Política de recontato",
];

const apiSetup = [
  "Validação dos ativos da Meta",
  "Configuração ou revisão da WABA",
  "Configuração do número oficial",
  "Aplicativo Meta e token de produção",
  "Webhook, permissões e assinatura de eventos",
  "Método de pagamento",
  "Configuração dos templates necessários",
  "Testes de envio, recebimento, leitura e resposta",
];

const router = [
  "Interpretação da intenção do cliente",
  "Identificação da loja e do departamento",
  "Regras de elegibilidade dos vendedores",
  "Distribuição automática e filas por loja",
  "Round-robin e atribuição direta",
  "Transferência entre vendedores",
  "Reatribuição por tempo",
  "Encaminhamento para supervisor",
  "Registro de falhas e histórico de decisões",
];

const inbox = [
  "Caixa central de conversas",
  "Filas separadas por loja",
  "Perfil dos vendedores",
  "Visualização dos atendimentos atribuídos",
  "Histórico do cliente",
  "Transferência, pausa e encerramento",
  "Tags, status e busca de conversas",
  "Permissões por função",
  "Visão do vendedor e visão gerencial",
];

const admin = [
  "Cadastrar lojas",
  "Cadastrar e desativar vendedores",
  "Definir horários e categorias atendidas",
  "Configurar prioridades e regras de distribuição",
  "Definir responsáveis",
  "Visualizar filas",
  "Intervir em um atendimento",
  "Consultar histórico",
  "Acompanhar vendedores disponíveis",
];

const metrics = [
  "Atendimentos recebidos",
  "Atendimentos por loja e por vendedor",
  "Motivos de contato",
  "Categorias mais procuradas",
  "Tempo até a primeira resposta",
  "Tempo até o vendedor assumir",
  "Transferências e reatribuições",
  "Atendimentos não assumidos",
  "Conversas encerradas",
  "Horários de maior procura",
  "Origem dos contatos, quando identificável",
  "Conversões, se a Fershop registrar o resultado",
];

const security = [
  "Validação das assinaturas da Meta",
  "Controle de permissões",
  "Registro de eventos",
  "Tratamento de mensagens duplicadas",
  "Proteção de credenciais e logs técnicos",
  "Rotina de backup",
  "Separação entre teste e produção",
  "Monitoramento de disponibilidade",
  "Política de retenção e adequação à LGPD",
  "Procedimento de incidentes",
];

const rollout = [
  "Ambiente de homologação",
  "Testes internos",
  "Simulação das principais jornadas",
  "Testes com lojas selecionadas",
  "Correção dos fluxos",
  "Piloto controlado",
  "Liberação gradual",
  "Acompanhamento dos primeiros atendimentos",
  "Treinamento da equipe",
  "Documentação operacional",
];

const deliverables = [
  "Diagnóstico da operação",
  "Mapa da jornada de atendimento",
  "Matriz de roteamento",
  "Arquitetura técnica",
  "Agente conversacional",
  "Motor de distribuição",
  "Integração com a API oficial",
  "Ambiente para vendedores",
  "Painel administrativo",
  "Indicadores operacionais",
  "Templates iniciais",
  "Manual de utilização",
  "Treinamento",
  "Plano de implantação",
  "Período de operação assistida",
];

const timeline = [
  {
    phase: "Etapa 1",
    title: "Diagnóstico",
    time: "1 semana",
    text: "Mapeamento de lojas, equipes, horários e regras atuais.",
  },
  {
    phase: "Etapa 2",
    title: "Estratégia",
    time: "1 semana",
    text: "Fluxos, triagem, mensagens e personalidade do agente.",
  },
  {
    phase: "Etapa 3",
    title: "Arquitetura",
    time: "1 semana",
    text: "Desenho técnico e configuração dos ativos da Meta.",
  },
  {
    phase: "Etapa 4",
    title: "Agente",
    time: "2 semanas",
    text: "Desenvolvimento do roteador e das regras de distribuição.",
  },
  {
    phase: "Etapa 5",
    title: "Painel",
    time: "2 semanas",
    text: "Ambiente de atendimento, filas e gestão das equipes.",
  },
  {
    phase: "Etapa 6",
    title: "Piloto",
    time: "1 a 2 semanas",
    text: "Testes, treinamento e liberação gradual das lojas.",
  },
];

const included = [
  "Estratégia e arquitetura técnica",
  "Configuração da API oficial",
  "Desenvolvimento do agente",
  "Motor de roteamento",
  "Ambiente de atendimento",
  "Painel administrativo",
  "Indicadores, testes e treinamento",
  "Documentação e 30 dias de operação assistida",
];

const monthly = [
  "Infraestrutura-base",
  "Monitoramento e backup",
  "Manutenção corretiva",
  "Acompanhamento dos webhooks",
  "Suporte técnico",
  "Relatório operacional",
  "Até quatro horas mensais para pequenos ajustes",
  "Revisão das regras de roteamento",
  "Gestão técnica da integração com a Meta",
];

const excluded = [
  "Tarifas de mensagens da Meta",
  "Consumo de inteligência artificial",
  "Licenças de serviços externos",
  "Infraestrutura acima da franquia definida",
  "Investimento em mídia e número telefônico",
  "CRM externo",
  "Integrações com ERP, estoque ou e-commerce não previstas",
  "Criação de campanhas promocionais",
  "Atendimento humano realizado pela Melive",
];

const expansions = [
  { title: "Nova loja no fluxo existente", price: "R$ 450", note: "por implantação" },
  { title: "Novo fluxo ou departamento", price: "R$ 1.200", note: "a partir de" },
  { title: "Integração com CRM", price: "R$ 3.500", note: "a partir de" },
  { title: "Integração com ERP ou estoque", price: "Sob diagnóstico", note: "escopo próprio" },
  { title: "Agente de vendas com IA", price: "R$ 4.900", note: "a partir de" },
  { title: "Pesquisa de satisfação", price: "R$ 1.200", note: "implantação" },
  { title: "Dashboard comercial avançado", price: "R$ 2.900", note: "implantação" },
  { title: "Recuperação automática de leads", price: "R$ 2.400", note: "a partir de" },
  { title: "Campanhas e templates promocionais", price: "Sob demanda", note: "conforme a ação" },
];

const outcomes = [
  "Um canal oficial e reconhecível",
  "Atendimento centralizado e distribuição automática",
  "Menos encaminhamento manual e histórico contínuo",
  "Menor tempo de resposta e equilíbrio entre vendedores",
  "Menos oportunidades esquecidas",
  "Visibilidade gerencial e base pronta para novas automações",
];

export default function FershopConectaPage() {
  return (
    <main className="deck fershop-conecta">
      <SlideKeyboardNav />

      <section className="deck-slide deck-cover" data-slide id="inicio">
        <div className="hero-lines" aria-hidden="true" />
        <div className="deck-inner">
          <p className="eyebrow">
            <span>Proposta comercial</span> Fershop + Melive
          </p>
          <h1>
            Fershop Conecta.
            <br />
            <strong>O vendedor certo em cada atendimento.</strong>
          </h1>
          <p className="hero-lead">
            Um único WhatsApp oficial vira a recepção da Fershop: entende a
            necessidade, identifica a loja adequada e entrega a conversa ao
            vendedor certo. O cliente não procura outro número, não explica de
            novo e não descobre sozinho qual unidade pode atendê-lo.
          </p>
          <div className="deck-cover-meta">
            <article>
              <small>IMPLANTAÇÃO</small>
              <b>R$ 24.900</b>
            </article>
            <article>
              <small>OPERAÇÃO</small>
              <b>R$ 1.890/mês</b>
            </article>
            <article>
              <small>PRAZO</small>
              <b>7–9 semanas</b>
            </article>
          </div>
        </div>
      </section>

      <section className="deck-slide deck-paper" data-slide id="desafio">
        <div className="deck-inner">
          <p className="section-index">01 / O DESAFIO</p>
          <h2>
            Vários WhatsApps,
            <em> nenhuma recepção.</em>
          </h2>
          <p className="hero-lead">
            Quando lojas e vendedores atendem sem uma estrutura central, a
            velocidade até importa — mas a precisão do direcionamento se perde.
            O desafio não é só automatizar a primeira mensagem. É receber,
            identificar, distribuir, acompanhar e concluir cada atendimento.
          </p>
          <ul className="deck-check two-col">
            {problems.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="deck-slide deck-cream" data-slide id="solucao">
        <div className="deck-inner">
          <p className="section-index">02 / A SOLUÇÃO</p>
          <h2>
            Ele conversa com a Fershop.
            <em> O sistema organiza o restante.</em>
          </h2>
          <p className="hero-lead">
            A Melive desenvolve a recepção central no WhatsApp, conectada à API
            oficial da Meta. O atendimento continua no mesmo número, com vários
            atendentes, automações e mensuração — sem compartilhar um aparelho.
          </p>
          <ul className="deck-check two-col">
            {flow.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="deck-slide deck-paper" data-slide id="identificacao">
        <div className="deck-inner">
          <p className="section-index">03 / IDENTIFICAÇÃO INICIAL</p>
          <h2>
            O que o agente
            <em> precisa entender.</em>
          </h2>
          <p className="hero-lead">
            A conversa pode começar com opções visuais, botões ou texto livre.
          </p>
          <ul className="deck-check two-col">
            {signals.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="deck-slide deck-ink" data-slide id="distribuicao">
        <div className="deck-inner">
          <p className="section-index light">04 / MOTOR DE DISTRIBUIÇÃO</p>
          <h2>
            Regras da operação,
            <em> não achismo.</em>
          </h2>
          <p className="hero-lead cream-text">
            A inteligência artificial interpreta mensagens abertas. As decisões
            críticas de encaminhamento seguem regras objetivas da Fershop, para
            o agente ser previsível.
          </p>
          <ul className="deck-check light two-col">
            {rules.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="deck-slide deck-cream" data-slide id="transferencia">
        <div className="deck-inner">
          <p className="section-index">05 / TRANSFERÊNCIA</p>
          <h2>
            O vendedor assume
            <em> com o contexto inteiro.</em>
          </h2>
          <div className="journeys deck-block-gap">
            <article>
              <small>O QUE CHEGA JUNTO</small>
              <h3>Histórico no mesmo número</h3>
              <ul className="deck-mini-list">
                {handoff.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article>
              <small>SE NINGUÉM ASSUMIR NO PRAZO</small>
              <h3>Contingência</h3>
              <ul className="deck-mini-list">
                {contingency.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="deck-slide deck-paper" data-slide id="escopo">
        <div className="deck-inner">
          <p className="section-index">06 / DIAGNÓSTICO E ESTRATÉGIA</p>
          <h2>
            Primeiro a operação.
            <em> Depois o fluxo.</em>
          </h2>
          <div className="journeys deck-block-gap">
            <article>
              <small>1 · DIAGNÓSTICO</small>
              <h3>Como a Fershop atende hoje</h3>
              <ul className="deck-mini-list">
                {diagnosis.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article>
              <small>2 · ESTRATÉGIA CONVERSACIONAL</small>
              <h3>Como o agente deve falar</h3>
              <ul className="deck-mini-list">
                {conversation.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="deck-slide deck-cream" data-slide id="api">
        <div className="deck-inner">
          <p className="section-index">07 / API OFICIAL</p>
          <h2>
            Número oficial
            <em> na plataforma da Meta.</em>
          </h2>
          <ul className="deck-check two-col">
            {apiSetup.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="deck-foot">
            A Meta cobra pelo uso conforme o país do destinatário e a categoria
            da mensagem. Essas tarifas são variáveis e ficam fora do
            desenvolvimento desta proposta.
          </p>
        </div>
      </section>

      <section className="deck-slide deck-paper" data-slide id="agente">
        <div className="deck-inner">
          <p className="section-index">08 / AGENTE ROTEADOR</p>
          <h2>
            Quem recebe
            <em> cada conversa.</em>
          </h2>
          <ul className="deck-check two-col">
            {router.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="deck-slide deck-cream" data-slide id="atendimento">
        <div className="deck-inner">
          <p className="section-index">09 / ATENDIMENTO E EQUIPES</p>
          <h2>
            Caixa para vender.
            <em> Painel para organizar.</em>
          </h2>
          <div className="journeys deck-block-gap">
            <article>
              <small>AMBIENTE DE ATENDIMENTO</small>
              <h3>Onde o vendedor trabalha</h3>
              <ul className="deck-mini-list">
                {inbox.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article>
              <small>GESTÃO DAS LOJAS</small>
              <h3>O que o admin configura</h3>
              <ul className="deck-mini-list">
                {admin.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="deck-slide deck-paper" data-slide id="indicadores">
        <div className="deck-inner">
          <p className="section-index">10 / INDICADORES</p>
          <h2>
            Demanda, tempo
            <em> e resultado.</em>
          </h2>
          <ul className="deck-check two-col">
            {metrics.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="deck-slide deck-cream" data-slide id="operacao">
        <div className="deck-inner">
          <p className="section-index">11 / SEGURANÇA E IMPLANTAÇÃO</p>
          <h2>
            Entrar em produção
            <em> com controle.</em>
          </h2>
          <div className="journeys deck-block-gap">
            <article>
              <small>SEGURANÇA E OPERAÇÃO</small>
              <h3>O que protege o canal</h3>
              <ul className="deck-mini-list">
                {security.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article>
              <small>TESTES E IMPLANTAÇÃO</small>
              <h3>Como a Fershop começa</h3>
              <ul className="deck-mini-list">
                {rollout.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="deck-slide deck-green" data-slide id="entregaveis">
        <div className="deck-inner">
          <p className="section-index light">12 / ENTREGÁVEIS</p>
          <h2>
            O que a Fershop
            <em> recebe no fim.</em>
          </h2>
          <ul className="deck-check light two-col">
            {deliverables.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="deck-slide deck-paper" data-slide id="cronograma">
        <div className="deck-inner">
          <p className="section-index">13 / CRONOGRAMA</p>
          <h2>
            Sete a nove semanas
            <em> após acessos e regras.</em>
          </h2>
          <div className="deck-months">
            {timeline.map((item) => (
              <article key={item.phase}>
                <small>
                  {item.phase} · {item.time}
                </small>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <p className="deck-foot">
            O prazo começa depois dos acessos e da validação das regras de
            atendimento. Lojas, vendedores, integrações e a aprovação da Meta
            podem ajustar o calendário.
          </p>
        </div>
      </section>

      <section className="deck-slide deck-ink" data-slide id="investimento">
        <div className="deck-inner">
          <p className="section-index light">14 / INVESTIMENTO</p>
          <h2>
            Implantação completa
            <em> do Fershop Conecta.</em>
          </h2>
          <div className="deck-price-row">
            <article className="media-price">
              <small>IMPLANTAÇÃO</small>
              <p>
                R$ <b>24.900</b>
              </p>
              <span>projeto completo</span>
            </article>
            <article>
              <small>OPERAÇÃO ASSISTIDA</small>
              <p>
                <b>30</b> dias
              </p>
              <span>incluídos na implantação</span>
            </article>
            <article>
              <small>DEPOIS DO PERÍODO</small>
              <p>
                R$ <b>1.890</b>
              </p>
              <span>por mês de operação</span>
            </article>
          </div>
          <ul className="deck-check light two-col">
            {included.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="deck-foot cream-text">
            Premissa inicial: até 10 lojas, até 30 vendedores, um número oficial,
            uma operação administrativa, fluxos compartilhados, até dez templates
            e sem integração complexa com ERP ou CRM externo.
          </p>
        </div>
      </section>

      <section className="deck-slide deck-yellow" data-slide id="pagamento">
        <div className="deck-inner">
          <p className="section-index">15 / FORMA DE PAGAMENTO</p>
          <h2>
            Três momentos
            <em> da implantação.</em>
          </h2>
          <div className="deck-months">
            <article>
              <small>40% · CONTRATAÇÃO</small>
              <h3>R$ 9.960</h3>
              <p>Na assinatura, para iniciar diagnóstico e arquitetura.</p>
            </article>
            <article>
              <small>30% · APROVAÇÃO</small>
              <h3>R$ 7.470</h3>
              <p>Depois da jornada e da arquitetura validadas.</p>
            </article>
            <article>
              <small>30% · PRODUÇÃO</small>
              <h3>R$ 7.470</h3>
              <p>Na entrada em produção do número oficial.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="deck-slide deck-cream" data-slide id="mensal">
        <div className="deck-inner">
          <p className="section-index">16 / OPERAÇÃO MENSAL</p>
          <h2>
            R$ 1.890 por mês
            <em> depois dos 30 dias.</em>
          </h2>
          <div className="journeys deck-block-gap">
            <article>
              <small>INCLUSO NA MENSALIDADE</small>
              <h3>Operação da integração</h3>
              <ul className="deck-mini-list">
                {monthly.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article>
              <small>FORA DESTA PROPOSTA</small>
              <h3>Pago à parte pela Fershop</h3>
              <ul className="deck-mini-list">
                {excluded.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
          <p className="deck-foot">
            A mensalidade vale para o volume e a estrutura desta contratação.
            Crescimento relevante pode pedir revisão da infraestrutura. Tarifas
            da Meta, plataforma e implementação ficam em contas separadas.
            Caixas compartilhadas prontas podem custar cerca de US$ 149 por mês
            antes das tarifas da Meta; esta operação inclui desenvolvimento,
            integrações e manutenção própria.
          </p>
        </div>
      </section>

      <section className="deck-slide deck-cream" data-slide id="expansoes">
        <div className="deck-inner">
          <p className="section-index">17 / EXPANSÕES OPCIONAIS</p>
          <h2>
            O que pode entrar
            <em> depois do núcleo.</em>
          </h2>
          <div className="deck-metric-grid">
            {expansions.map((item) => (
              <article key={item.title}>
                <small>{item.note}</small>
                <h3>{item.price}</h3>
                <p>{item.title}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="deck-slide deck-cover deck-close" data-slide id="proximo">
        <div className="hero-lines" aria-hidden="true" />
        <div className="deck-inner">
          <p className="eyebrow">
            <span>Próximo passo</span> Fershop Conecta + Melive
          </p>
          <h2 className="close-title">
            A necessidade encontra
            <br />
            <strong>a pessoa certa.</strong>
          </h2>
          <p className="hero-lead">
            A Fershop mantém a proximidade do atendimento humano. A tecnologia
            organiza os bastidores, reduz o esforço operacional e deixa a
            experiência mais consistente entre as lojas.
          </p>
          <ul className="deck-outcomes">
            {outcomes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a
            className="button dark whatsapp-cta"
            href="https://wa.me/5512992477878?text=Ol%C3%A1!%20Quero%20conversar%20sobre%20a%20proposta%20Fershop%20Conecta%20%2B%20Melive."
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="whatsapp-cta-label">Conversar com a Melive</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <SiteFooter caption="Proposta comercial • Fershop Conecta • Outubro de 2026" />
    </main>
  );
}
