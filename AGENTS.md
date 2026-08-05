# Agent Guide

This repository is a deterministic Symphoneer verification target, not a product.

## Invariants

- Keep every issue small, local, and independently verifiable.
- Do not add network access, databases, Redis, Docker, cloud services, credentials, or generated
  application scaffolding.
- Do not weaken existing tests merely to make a change pass.
- Preserve the single verification entrypoint: `pnpm check`.
- Prefer one behavior change and its tests per issue.

## Verification

Run `pnpm check` for every change.
