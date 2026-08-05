---
tracker:
  kind: github
  provider:
    repo: icho648/symphoneer-fixtures
    token: $GITHUB_TOKEN
  active_states: [open]
  terminal_states: [closed]
agent:
  max_concurrent_agents: 1
  max_turns: 12
  max_retry_backoff_ms: 300000
codex:
  command: codex app-server
  approval_policy: on-request
  turn_timeout_ms: 1800000
  stall_timeout_ms: 300000
symphoneer:
  eligibility:
    required_labels: [symphoneer:ready]
    excluded_labels: [symphoneer:review]
  verification:
    - id: check
      argv: [pnpm, check]
      cwd: .
      timeout_ms: 120000
---

Implement {{ issue.identifier }}: {{ issue.title }}.

Keep the change narrowly scoped and deterministic. Do not introduce network access, databases,
Redis, Docker, cloud credentials, or product scaffolding. Preserve `pnpm check` as the single
verification entrypoint, run it, and stop for human review.
