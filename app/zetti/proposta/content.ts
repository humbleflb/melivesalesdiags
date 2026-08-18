/** Source of truth for the Melive + Zetti commercial proposal.
 *  Consumed by the /proposta web page and PPTX export (`build-pptx.ts`).
 */

export const propostaMeta = {
  title: "Proposta Comercial — Melive + Zetti",
  description:
    "Landing page estratégica de conversão: da força do ecossistema à clareza da conversão.",
  brand: {
    left: "Melive",
    right: "Zetti",
    logoSrc: "/melive-logo.png",
  },
  whatsapp: {
    href: "https://wa.me/5512992477878?text=Ol%C3%A1!%20Quero%20conversar%20sobre%20a%20proposta%20comercial%20Melive%20%2B%20Zetti.",
    label: "Conversar sobre a proposta",
  },
} as const;

export type SlideTheme = "cover" | "paper" | "cream" | "ink" | "green" | "yellow";

export type TextPart = {
  text: string;
  emphasis?: boolean;
  strong?: boolean;
};

export type LabeledItem = {
  title: string;
  text: string;
  step?: string;
};

type SlideBase = {
  id: string;
  number: string;
  label: string;
  theme: SlideTheme;
  indexLight?: boolean;
};

export type CoverSlide = SlideBase & {
  layout: "cover";
  kicker: string;
  headline: TextPart[];
  lead: string;
  showBrand?: boolean;
  nextHref?: string;
  nextLabel?: string;
};

export type SplitCopySlide = SlideBase & {
  layout: "split-copy";
  headline: TextPart[];
  paragraphs: string[];
  quote: string;
};

export type BridgeSlide = SlideBase & {
  layout: "bridge";
  headline: TextPart[];
  bridgeLabel: string;
  steps: { step: string; title: string }[];
  footnote: string;
};

export type ProjectSlide = SlideBase & {
  layout: "project";
  tag: string;
  titleLines: string[];
  lead: string;
  promise: string;
  quote: string;
};

export type CardsSlide = SlideBase & {
  layout: "cards";
  headline: TextPart[];
  lead?: string;
  leadTone?: "cream";
  cards: LabeledItem[];
  gridClass: "build-grid" | "process-grid" | "future-grid";
};

export type MarketingSlide = SlideBase & {
  layout: "marketing";
  headline: TextPart[];
  lead: string;
  listLabel: string;
  list: string[];
  quote: string;
};

export type MeasurementSlide = SlideBase & {
  layout: "measurement";
  headline: TextPart[];
  lead: string;
  quote: string;
  events: string[];
};

export type ChecklistSlide = SlideBase & {
  layout: "checklist";
  headline: TextPart[];
  items: string[];
};

export type TimelineSlide = SlideBase & {
  layout: "timeline";
  bigNumber: string;
  title: string;
  lead: string;
};

export type InvestmentSlide = SlideBase & {
  layout: "investment";
  tag: string;
  currency: string;
  amount: string;
  lead: string;
  paymentLabel: string;
  paymentTerms: { amount: string; description: string }[];
};

export type ScaleSlide = SlideBase & {
  layout: "scale";
  headline: TextPart[];
  lead: string;
  priceLabel: string;
  pricePrefix: string;
  priceAmount: string;
  priceSuffix: string;
  priceNote: string;
  uses: string[];
};

export type CloseSlide = SlideBase & {
  layout: "close";
  kicker: string;
  headline: TextPart[];
  lead: string;
  tagline: string;
  showWhatsapp?: boolean;
  showBrand?: boolean;
};

export type ProposalSlide =
  | CoverSlide
  | SplitCopySlide
  | BridgeSlide
  | ProjectSlide
  | CardsSlide
  | MarketingSlide
  | MeasurementSlide
  | ChecklistSlide
  | TimelineSlide
  | InvestmentSlide
  | ScaleSlide
  | CloseSlide;

export const proposalSlides: ProposalSlide[] = [
  {
    id: "capa",
    number: "01",
    label: "Capa",
    theme: "cover",
    layout: "cover",
    kicker: "Proposta comercial",
    headline: [
      { text: "Da força do ecossistema" },
      { text: "à clareza da conversão.", strong: true },
    ],
    lead: "Uma nova camada de experiência digital para transformar interesse em oportunidades comerciais mais contextualizadas.",
    showBrand: true,
    nextHref: "#partida",
    nextLabel: "Continuar",
  },
  {
    id: "partida",
    number: "02",
    label: "Ponto de partida",
    theme: "paper",
    layout: "split-copy",
    headline: [
      { text: "A Zetti já construiu um ecossistema forte." },
      {
        text: " O próximo passo são jornadas igualmente fortes.",
        emphasis: true,
      },
    ],
    paragraphs: [
      "Hoje, Tech, Automation, AI Suite e TechFin convivem dentro de uma narrativa integrada de marca.",
      "Essa amplitude fortalece o posicionamento da Zetti, mas também cria um novo desafio: visitantes com necessidades diferentes precisam encontrar caminhos específicos até a conversão.",
    ],
    quote:
      "A oportunidade não está em substituir o site atual. Está em criar uma camada complementar de páginas orientadas a campanhas, produtos e intenções comerciais específicas.",
  },
  {
    id: "oportunidade",
    number: "03",
    label: "A oportunidade",
    theme: "ink",
    indexLight: true,
    layout: "bridge",
    headline: [
      { text: "Uma marca integrada não precisa converter" },
      { text: " todas as intenções pelo mesmo caminho.", emphasis: true },
    ],
    bridgeLabel: "Nossa proposta aproxima três pontos:",
    steps: [
      { step: "01", title: "Origem do interesse" },
      { step: "02", title: "Argumento da solução" },
      { step: "03", title: "Conversão" },
    ],
    footnote:
      "O objetivo é reduzir a distância entre “essa solução parece interessante” e “quero entender como isso se aplica à minha operação.”",
  },
  {
    id: "projeto",
    number: "04",
    label: "O projeto",
    theme: "yellow",
    layout: "project",
    tag: "Projeto-piloto",
    titleLines: ["Landing Page Estratégica", "de Conversão"],
    lead: "Vamos desenvolver uma primeira jornada direcionada a uma solução ou campanha prioritária definida junto à equipe Zetti.",
    promise:
      "A entrega será construída do zero, combinando estratégia, copywriting, design e desenvolvimento. Não partiremos de um template.",
    quote:
      "A página nascerá da pergunta: o que esse visitante precisa entender, acreditar e encontrar antes de avançar para uma conversa com a Zetti?",
  },
  {
    id: "construir",
    number: "05",
    label: "O que vamos construir",
    theme: "paper",
    layout: "cards",
    gridClass: "build-grid",
    headline: [
      { text: "Seis frentes." },
      { text: " Uma jornada.", emphasis: true },
    ],
    cards: [
      {
        title: "Estratégia de conversão",
        text: "Definição do público, intenção de entrada, oferta, argumentos prioritários, objeções, provas e ação esperada.",
      },
      {
        title: "Arquitetura da página",
        text: "Construção da jornada completa, organizando a informação na sequência mais adequada para conduzir o visitante até a conversão.",
      },
      {
        title: "Copywriting",
        text: "Headlines, argumentos, benefícios, provas, CTAs, tratamento de objeções e microcopy do formulário.",
      },
      {
        title: "UI Design",
        text: "Interface exclusiva, alinhada à identidade visual e ao ecossistema digital da Zetti, com versões desktop e mobile.",
      },
      {
        title: "Desenvolvimento",
        text: "Implementação responsiva, otimizada para velocidade, experiência e diferentes dispositivos.",
      },
      {
        title: "Conversão e mensuração",
        text: "Formulário contextualizado, integração com a jornada definida e configuração dos principais eventos de performance.",
      },
    ],
  },
  {
    id: "comercial",
    number: "06",
    label: "Marketing + Comercial",
    theme: "green",
    indexLight: true,
    layout: "marketing",
    headline: [
      { text: "Pensada para o marketing." },
      { text: " Preparada para o comercial.", emphasis: true },
    ],
    lead: "A página não termina no preenchimento do formulário. Vamos pensar também na qualidade da informação que chega ao time comercial.",
    listLabel: "Quando fizer sentido, o formulário poderá captar:",
    list: [
      "Perfil da operação",
      "Porte ou número de unidades",
      "Solução de interesse",
      "Principal desafio",
      "Informações para preparar o próximo contato",
    ],
    quote:
      "Equilibrar duas forças: não criar fricção desnecessária para o visitante e não entregar um lead sem contexto para o comercial.",
  },
  {
    id: "mensuracao",
    number: "07",
    label: "Mensuração",
    theme: "paper",
    layout: "measurement",
    headline: [
      { text: "Mensuração" },
      { text: " desde o lançamento.", emphasis: true },
    ],
    lead: "A primeira página também funcionará como um ponto de aprendizado. Estruturaremos eventos essenciais para entender a jornada.",
    quote:
      "A página deixa de ser apenas uma entrega visual e passa a ser um ativo mensurável de aquisição.",
    events: [
      "Visualização da página",
      "Interação com CTAs",
      "Início do formulário",
      "Envio do formulário",
      "Conversões de campanhas",
      "Origem e parâmetros UTM",
    ],
  },
  {
    id: "processo",
    number: "08",
    label: "Processo de trabalho",
    theme: "ink",
    indexLight: true,
    layout: "cards",
    gridClass: "process-grid",
    headline: [
      { text: "Do kickoff" },
      { text: " à publicação.", emphasis: true },
    ],
    cards: [
      {
        step: "01",
        title: "Imersão",
        text: "Kickoff com marketing para definir solução prioritária, público, campanha, materiais, provas e objetivos.",
      },
      {
        step: "02",
        title: "Estratégia",
        text: "Arquitetura da jornada, proposta de valor, argumentos, CTAs e estrutura de conversão.",
      },
      {
        step: "03",
        title: "Copy + UI",
        text: "Construção da comunicação e desenvolvimento da experiência visual.",
      },
      {
        step: "04",
        title: "Desenvolvimento",
        text: "Implementação responsiva e integração dos pontos de conversão.",
      },
      {
        step: "05",
        title: "Tracking + QA",
        text: "Configuração dos eventos acordados, testes em dispositivos e validação técnica.",
      },
      {
        step: "06",
        title: "Publicação",
        text: "Entrega da página pronta para receber tráfego e iniciar a coleta de dados.",
      },
    ],
  },
  {
    id: "entregaveis",
    number: "09",
    label: "Entregáveis",
    theme: "cream",
    layout: "checklist",
    headline: [
      { text: "Ao final do projeto," },
      { text: " a Zetti recebe:", emphasis: true },
    ],
    items: [
      "01 landing page estratégica completa",
      "Arquitetura de conversão",
      "Copywriting integral",
      "UI personalizada",
      "Versão desktop e mobile",
      "Desenvolvimento responsivo",
      "Formulário de captação",
      "Integração com ferramenta definida no kickoff",
      "Configuração de GTM/GA4 e eventos essenciais",
      "Implementação de UTMs",
      "QA pré-publicação",
      "Publicação",
      "02 rodadas consolidadas de ajustes",
      "30 dias de suporte técnico pós-publicação",
    ],
  },
  {
    id: "prazo",
    number: "10",
    label: "Prazo",
    theme: "yellow",
    layout: "timeline",
    bigNumber: "18–22",
    title: "dias úteis",
    lead: "O cronograma começa após o kickoff e recebimento dos acessos, materiais e informações necessárias. As etapas de validação com a Zetti serão incorporadas ao cronograma do projeto.",
  },
  {
    id: "investimento",
    number: "11",
    label: "Investimento",
    theme: "ink",
    indexLight: true,
    layout: "investment",
    tag: "Projeto-piloto de conversão",
    currency: "R$",
    amount: "7.800",
    lead: "Incluindo estratégia, arquitetura de conversão, copywriting, UI Design, desenvolvimento, formulário, integrações essenciais, tracking, QA e publicação.",
    paymentLabel: "Condição de pagamento",
    paymentTerms: [
      { amount: "50%", description: "na aprovação do projeto" },
      {
        amount: "50%",
        description: "na conclusão e aprovação para publicação",
      },
    ],
  },
  {
    id: "escala",
    number: "12",
    label: "Escalabilidade",
    theme: "paper",
    layout: "scale",
    headline: [
      { text: "Validamos uma jornada." },
      {
        text: " Depois, transformamos o aprendizado em sistema.",
        emphasis: true,
      },
    ],
    lead: "A primeira landing page será construída também como referência para futuras experiências da Zetti. A partir dela, novas páginas podem ser criadas para:",
    priceLabel: "Valor de referência · novas LPs",
    pricePrefix: "a partir de",
    priceAmount: "R$ 3.500",
    priceSuffix: "por página",
    priceNote:
      "Escopo definido conforme necessidade de nova estratégia, copy, funcionalidades ou integrações.",
    uses: [
      "Outras soluções",
      "Campanhas de mídia",
      "Lançamentos",
      "Segmentos específicos",
      "Conteúdos de alta intenção",
      "Diferentes estágios da jornada comercial",
    ],
  },
  {
    id: "futuro",
    number: "13",
    label: "Visão de futuro",
    theme: "green",
    indexLight: true,
    layout: "cards",
    gridClass: "future-grid",
    headline: [
      { text: "O objetivo não é criar páginas isoladas." },
      { text: " É construir uma arquitetura de aquisição.", emphasis: true },
    ],
    lead: "Progressivamente, cada intenção encontra a experiência mais adequada para avançar.",
    leadTone: "cream",
    cards: [
      {
        title: "Site institucional",
        text: "Posiciona o ecossistema.",
      },
      {
        title: "Conteúdo",
        text: "Gera descoberta e educação.",
      },
      {
        title: "Landing pages",
        text: "Transformam intenções específicas em oportunidades comerciais.",
      },
      {
        title: "Dados",
        text: "Mostram quais mensagens, soluções e jornadas devem receber mais investimento.",
      },
    ],
  },
  {
    id: "proximo",
    number: "14",
    label: "Próximo passo",
    theme: "cover",
    layout: "close",
    kicker: "Próximo passo",
    headline: [
      { text: "Vamos transformar a primeira hipótese" },
      { text: "em uma jornada real e mensurável.", strong: true },
    ],
    lead: "Começamos escolhendo uma solução prioritária, conectamos estratégia, comunicação, experiência e conversão e colocamos a página em operação. Depois, os dados mostram o próximo passo.",
    tagline:
      "Estratégia, experiência e conversão trabalhando na mesma direção.",
    showWhatsapp: true,
    showBrand: true,
  },
];

export function slideIndexLabel(slide: ProposalSlide): string {
  return `${slide.number} / ${slide.label.toUpperCase()}`;
}

export function renderTextParts(parts: TextPart[]): string {
  return parts.map((part) => part.text).join("");
}
