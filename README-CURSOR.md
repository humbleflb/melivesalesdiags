# Diagnóstico Café Jaguari — Melive

Projeto-fonte da página de diagnóstico criada para a Café Jaguari.

## Abrir no Cursor

1. Extraia o arquivo ZIP.
2. Abra a pasta extraída no Cursor.
3. No terminal do Cursor, execute:

```bash
npm install
npm run dev
```

4. Abra o endereço local exibido no terminal.

## Deploy (Netlify)

O projeto usa vinext + Nitro. No Netlify:

- Build command: `npm run build`
- Publish directory: `dist`
- Node: `22`

Configuração já está em `netlify.toml`. Build local:

```bash
npm run build
```

## Arquivos principais

- `app/page.tsx`: conteúdo e estrutura da página.
- `app/globals.css`: identidade visual, layout e responsividade.
- `public/melive-logo.png`: logo utilizada na página.

## Observação

O projeto usa React/Vinext. A estrutura visual é escrita em JSX/TSX, que funciona
como o HTML da página e permite editar o conteúdo diretamente no Cursor.
