# Symphoneer Fixtures

Deterministic, dependency-free repositories used to verify Symphoneer's task-to-PR execution loop.

This repository is intentionally separate from Symphoneer Hub. It exists to provide a small,
stable target whose failures can be attributed to Symphoneer or the generated change rather than
to PostgreSQL, Redis, authentication, network services, or cloud credentials.

## Contract

- TypeScript only.
- Run TypeScript directly with Node.js 22.18+; do not add package dependencies.
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

## Initial issue matrix

The repository starts with three deliberately different tracker cases:

| Issue | Labels | Expected tracker behavior |
| --- | --- | --- |
| #1 `[Smoke] Add a reset helper for the counter` | `symphoneer:ready` | Eligible; use as the default end-to-end execution smoke test. |
| #2 `[Eligibility] Add a decrement helper for the counter` | none | Ineligible until `symphoneer:ready` is added manually. |
| #3 `[Exclusion] Add a withValue helper for the counter` | `symphoneer:ready`, `symphoneer:review` | Excluded; removing `symphoneer:review` makes it eligible. |

Keep only one intentionally executable fixture active at a time. This prevents an unattended
Symphoneer run from consuming several fixture tasks sequentially and changing the baseline before
a specific workflow has been inspected.

When testing eligibility or review transitions, prefer changing labels on #2 or #3 instead of
creating throwaway issues. Every executable fixture must still satisfy the repository contract and
finish with `pnpm check` passing.
