import { Hono } from 'hono'
import { renderToString, HydrationScript, generateHydrationScript } from 'solid-js/web'
import App from './App';
import { env } from "cloudflare:workers";

const app = new Hono<{ Bindings: typeof env }>()
app.get('/', (c) => {
  const html = renderToString(() => <>
    Hello from SolidJS!
    <HydrationScript />
  </>)

  return c.html(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hono + SolidJS</title>
        <link href="/src/style.css" rel="stylesheet">
${generateHydrationScript()}
      </head>
      <body>
${html}
      </body>
    </html>
  `)
})

app.get('/test', (c) => {
  const html = renderToString(() => <App />)

  return c.html(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hono + SolidJS</title>
        <link href="/src/style.css" rel="stylesheet">
      </head>
      <body>
${html}
      </body>
    </html>
  `)
})

app.get('/test-manual', (c) => {

  return c.html('hello')
})

app.get('*', async (c) => {
  const response = await c.env.ASSETS.fetch(c.req.raw)
  return response
})

export default app
