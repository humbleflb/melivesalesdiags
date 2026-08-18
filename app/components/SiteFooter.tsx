import Link from "next/link";

export function SiteFooter({ caption }: { caption: string }) {
  return (
    <footer>
      <img src="/melive-logo.png" alt="Melive" />
      <p>{caption}</p>
      <span className="footer-links">
        <Link href="/">Todas as propostas</Link>
        <a href="#inicio">Voltar ao topo ↑</a>
      </span>
    </footer>
  );
}
