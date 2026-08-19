export function SiteFooter({ caption }: { caption: string }) {
  return (
    <footer>
      <img src="/melive-logo.png" alt="Melive" />
      <p>{caption}</p>
    </footer>
  );
}
