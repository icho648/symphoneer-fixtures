# Symphoneer Fixtures

Deterministic, dependency-light repositories used to verify Symphoneer's task-to-PR execution loop.

This repository is intentionally separate from Symphoneer Hub. It exists to provide a small,
stable target whose failures can be attributed to Symphoneer or the generated change rather than
to PostgreSQL, Redis, authentication, network services, or cloud credentials.

## Contract

- TypeScript only.
- No database, Redis, Docker, external API, cloud credential, or network dependency.
- A single verification entrypoint: `pnpm check`.
- Issues must remain small and independently verifiable.
- Product experiments and general-purpose application features do not belong here.

## Verification

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm check
```

The initial fixture is a small immutable counter with deterministic unit tests. Additional fixtures
should be added only when they exercise a distinct Symphoneer workflow or failure mode that cannot
be represented clearly by the existing fixture.
