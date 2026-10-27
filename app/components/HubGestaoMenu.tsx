import Link from "next/link";

export function HubGestaoMenu({ href }: { href: string }) {
  return (
    <div className="hub-gestao">
      <button
        type="button"
        className="hub-gestao-trigger"
        aria-haspopup="menu"
        aria-label="Ações do projeto"
      >
        <span aria-hidden="true">+</span>
      </button>
      <div className="hub-gestao-menu" role="menu">
        <Link href={href} role="menuitem">
          Adicionar gestão
        </Link>
      </div>
    </div>
  );
}
