export type ClientWork = {
  slug: string;
  name: string;
  sector: string;
  summary: string;
  href: string;
  proposalHref?: string;
  gestaoHref?: string;
  year: string;
  kind: "Diagnóstico" | "Proposta" | "Escopo";
};

export const clients: ClientWork[] = [
  {
    slug: "zetti",
    name: "Zetti",
    sector: "Varejo farmacêutico",
    summary:
      "Mapa de conversão do ecossistema e piloto de landing para o Vetor Farma.",
    href: "/zetti",
    proposalHref: "/zetti/proposta",
    year: "2026",
    kind: "Proposta",
  },
  {
    slug: "trinio",
    name: "Trinio",
    sector: "Commerce orchestration",
    summary:
      "Jornadas mais claras para o TrinioOS e piloto de conversão do Checkout.",
    href: "/trinio",
    proposalHref: "/trinio/proposta",
    year: "2026",
    kind: "Proposta",
  },
  {
    slug: "recursim",
    name: "RecurSIM",
    sector: "Recursos de trânsito",
    summary:
      "POC de 90 dias para validar aquisição: tráfego qualificado até recurso pago.",
    href: "/recursim",
    year: "2026",
    kind: "Proposta",
  },
  {
    slug: "sellentt",
    name: "Sellentt",
    sector: "Gestão comercial B2B",
    summary:
      "Clareza, direcionamento e conversão na jornada digital de indústrias e distribuidoras.",
    href: "/sellentt",
    year: "2026",
    kind: "Diagnóstico",
  },
  {
    slug: "firstdollar",
    name: "First Dollar",
    sector: "Side hustle · EUA",
    summary:
      "Recrutamento e validação de mercado nos EUA, com opção de evolução do produto.",
    href: "/firstdollar",
    year: "2026",
    kind: "Proposta",
  },
  {
    slug: "ngb",
    name: "NGB Arquitetura",
    sector: "Arquitetura",
    summary:
      "Novo site institucional, portfólio autônomo e aquisição via Google Ads.",
    href: "/ngb",
    gestaoHref: "/ngb/gestao",
    year: "2026",
    kind: "Proposta",
  },
  {
    slug: "fershop",
    name: "Fershop",
    sector: "Materiais e ferramentas",
    summary:
      "Mídia paga da loja de Campinas e proposta do Fershop Conecta no WhatsApp oficial.",
    href: "/fershop",
    proposalHref: "/fershop/proposta",
    gestaoHref: "/fershop/gestao",
    year: "2026",
    kind: "Escopo",
  },
  {
    slug: "bangalo",
    name: "Bangalô",
    sector: "Landing page e tráfego pago",
    summary:
      "Landing page de conversão e gestão de Google Ads e Meta Ads, com condição especial até 3 de novembro de 2026.",
    href: "/bangalo",
    year: "2026",
    kind: "Proposta",
  },
];
