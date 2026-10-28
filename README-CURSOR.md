# Propostas Melive

Hub de diagnósticos e propostas comerciais. A raiz lista os clientes; cada trabalho vive em uma rota (`/zetti`, `/trinio`).

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

- `app/page.tsx`: menu de clientes.
- `app/clients.ts`: catálogo (slug, nome, rotas).
- `app/<cliente>/page.tsx`: diagnóstico daquele cliente.
- `app/globals.css`: identidade visual, layout e responsividade.
- `public/melive-logo.png`: logo utilizada na página.

## Observação

O projeto usa React/Vinext. A estrutura visual é escrita em JSX/TSX, que funciona
como o HTML da página e permite editar o conteúdo diretamente no Cursor.
