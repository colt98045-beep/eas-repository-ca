# Security Policy

## Supported versions

Only the latest commit on `main` is supported. Please update before reporting an issue.

## Reporting a vulnerability

Please **do not** open a public issue for security problems.

Instead, report it privately:

1. If **Security → Report a vulnerability** is available on
   [this repository](https://github.com/colt98045-beep/eas-repository-ca/security), use it.
2. Otherwise, open an issue that only says you have a security report and would like a
   private contact. Leave out any details until a private channel is set up.

Include what you found, how to reproduce it, and the impact you expect. You should get a
reply within a week.

## Scope and known limitations

EAS Repository Canada is a local dashboard and a hosted Cloudflare Worker
that proxies public Environment Canada / GeoMet feeds.

- The login screen on the local dashboard is a convenience lock, not real
  authentication. Do not rely on it to protect a public deployment.
- If you expose the local server to the internet, put it behind a proper
  access layer (for example Cloudflare Access, Tailscale, or HTTP auth).
- The Worker and the local server only proxy public, read-only alert feeds.

Issues in upstream data sources (Environment Canada, GeoMet) should be
reported to those providers.


Please follow the [Code of Conduct](CODE_OF_CONDUCT.md) when participating in this project.
