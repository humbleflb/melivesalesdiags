import type { Metadata } from "next";
import TrinioPropostaPage from "../page";

export const metadata: Metadata = {
  title: "Proposta Trinio Checkout — Melive (PDF)",
  description:
    "Versão estável para exportação em PDF da proposta Trinio Checkout.",
};

export default function TrinioPropostaPdfPage() {
  return (
    <div className="trinio-pdf-export">
      <TrinioPropostaPage />
    </div>
  );
}
