export type ClientWork = {
  slug: string;
  name: string;
  sector: string;
  summary: string;
  href: string;
  proposalHref?: string;
  year: string;
  kind: "Diagnóstico" | "Proposta";
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
    year: "2026",
    kind: "Diagnóstico",
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
];
