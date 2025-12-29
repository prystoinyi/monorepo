# Monorepo example (pnpm + Turborepo)

Example of a simple monorepo setup with:

- pnpm workspaces
- Turborepo
- Next.js (web)
- NestJS (api)
- Postgres (Docker Compose)
- dotenv-cli for dev environment

## Structure

- `web` — Next.js frontend
- `api` — NestJS backend
- Postgres runs via Docker Compose

## Development

```bash
pnpm install
pnpm dev
