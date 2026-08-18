"use client";

import { useState, useTransition } from "react";
import { downloadProposalPptx, PPTX_FILENAME } from "./build-pptx";

export function DownloadPptxButton({
  className = "button dark",
  label = "Baixar proposta em PPTX",
}: {
  className?: string;
  label?: string;
}) {
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  return (
    <div className="pptx-download">
      <button
        type="button"
        className={className}
        disabled={isPending}
        aria-busy={isPending}
        onClick={() => {
          setError(null);
          startTransition(async () => {
            try {
              await downloadProposalPptx();
            } catch {
              setError("Não foi possível gerar o arquivo. Tente novamente.");
            }
          });
        }}
      >
        <span>{isPending ? "Gerando PPTX…" : label}</span>
        <span aria-hidden="true">{isPending ? "…" : "↓"}</span>
      </button>
      {error ? <p className="pptx-download-error">{error}</p> : null}
      <span className="sr-only">{PPTX_FILENAME}</span>
    </div>
  );
}
