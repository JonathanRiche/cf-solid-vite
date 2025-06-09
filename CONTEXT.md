# CONTEXT.md

## Build/Test/Lint Commands
- **Runtime**: Uses Bun (not Node.js) - see bun.lock file
- `bun run dev` - Start development server with Vite
- `bun run build` - Build for production
- `bun run preview` - Build and preview production build
- `bun run deploy` - Build and deploy to Cloudflare Workers
- `bun run cf-typegen` - Generate CloudflareBindings types from wrangler config

## Code Style Guidelines
- **Framework**: Hono + SolidJS + Vite + Cloudflare Workers
- **TypeScript**: Strict mode enabled, ESNext target
- **JSX**: Use SolidJS JSX/TSX only - NO hono/jsx (avoid hono/jsx-renderer)
- **Imports**: ES modules only, group external imports first
- **Types**: Use CloudflareBindings generic when instantiating Hono: `new Hono<{ Bindings: CloudflareBindings }>()`
- **File extensions**: Use `.tsx` for JSX components, `.ts` for utilities
- **Naming**: camelCase for variables/functions, PascalCase for components
- **Arrow functions**: Prefer arrow functions for handlers: `(c) => { ... }`
- **Comments**: Minimal comments, prefer self-documenting code

## Project Structure
- `src/index.tsx` - Main Hono app entry point
- `src/renderer.tsx` - JSX renderer with HTML layout
- `src/style.css` - Global styles
- `public/` - Static assets