# Changelog

All notable changes to EAS Repository Canada are documented here.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).
Dates are DD/MM/YYYY.

## [Unreleased]

## 24/11/2026

### Added
- `NOTICE` file with Apache 2.0 and bilingual Open Government Licence – Canada
  attributions.

### Changed
- Bilingual Open Government Licence – Canada credit lines (linking English and
  French licence pages) and bilingual non-affiliation / unofficial-service / Alert
  Ready disclaimers on the dashboard footer and radar view, plus `README.md`.
- Replaced the triband flag-style tab icon with a non-flag alert triangle icon
  and bumped service worker cache to `eas-ca-v6`.
- Worker `/api/canada` and `/api/active` now cache GeoMet responses for
  90 seconds via Cloudflare Cache API (`caches.default`) and isolate memory,
  send `EASRepositoryCA/1.0` with the repository URL, never forward `no-cache`
  or `Pragma` upstream, and omit WMS cache-buster query parameters.
- Synced updated bilingual `/privacy` page with exact D1 retention windows.

### Added
- Temporary README notice that the hosted Canada API is down or degraded
  (marked `TEMP-OUTAGE-NOTICE` so it can be removed later). Docs only.
- Maintenance overlay shows the lockout reason (Outage, Maintenance, Update or
  Other) with its colour and icon. Covered by an overlay test in CI.
- Tab icon (inline `data:` SVG) on the dashboard and privacy pages. Service
  worker cache `eas-ca-v5`.
- CI (syntax, Worker route tests, access-log and privacy tests, Wrangler
  dry-run) and Dependabot for Actions.
- Low-risk security headers on every response.
- `/privacy` page (shared EAS privacy policy) with a full French version
  (Politique de confidentialité) and language links. Service worker cache
  `eas-ca-v4`.
- Access log rows include the full client IP (`CF-Connecting-IP`) next to
  `ip_hash`. Falls back until migration `0002_add_ip.sql` is applied.
- Worker entry so page visits can be logged to the shared access log. The
  GeoMet APIs are unchanged.
- Client-side maintenance lockout overlay, controlled from the EAS launcher.
- Dismissible announcement banner from the EAS launcher.
- Apache 2.0 `LICENSE`.

### Changed
- Removed the temporary README notice that the hosted Canada API was down or degraded. Docs only.
- Removed the automatic deploy-lock script (auto deploy lockout cancelled).
  The reason overlay was kept.

## 20/11/2026 — 1.0.0-beta

### Added
- Canadian edition: Environment Canada GeoMet proxy and a Canadianized
  dashboard with province filtering and Canadian radar.
