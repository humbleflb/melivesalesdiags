# Diagnóstico Trinio — Melive

Projeto-fonte da página de diagnóstico criada para a Trinio.

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
- Node: 22

Não use o plugin `@netlify/plugin-nextjs` — este app é vinext/Nitro.
