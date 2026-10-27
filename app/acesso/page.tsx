import type { Metadata } from "next";
import { GateForm } from "./GateForm";

export const metadata: Metadata = {
  title: "Acesso restrito — Melive",
  description: "A biblioteca de diagnósticos e propostas da Melive pede senha.",
  robots: { index: false, follow: false },
};

export default function AcessoPage() {
  return (
    <main className="gate">
      <GateForm />
    </main>
  );
}
