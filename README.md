# EAS Repository Canada

<!-- TEMP-OUTAGE-NOTICE -->
> [!WARNING]
> **Temporary notice (since 24/11/2026):** The Canada EAS API is currently down or degraded. We are investigating. **Do not rely on this site for emergency alerts right now.** Keep your phone's emergency alerts turned on, and check [Alert Ready](https://www.alertready.ca), [Environment Canada weather alerts](https://weather.gc.ca), or your local TV and radio for current warnings. Updates are on the [status page](https://eas-launcher.colt98045.workers.dev/status).
<!-- /TEMP-OUTAGE-NOTICE -->

[![CI](https://github.com/colt98045-beep/eas-repository-ca/actions/workflows/ci.yml/badge.svg)](https://github.com/colt98045-beep/eas-repository-ca/actions/workflows/ci.yml)
[![License: Apache 2.0](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](LICENSE)
[![Python 3.8+](https://img.shields.io/badge/python-3.8%2B-blue.svg)](https://www.python.org/)
[![Status: beta](https://img.shields.io/badge/status-v1.0.0--beta-orange.svg)](CHANGELOG.md)

A local, open-source dashboard for Canadian weather and emergency alerts from Environment Canada / Meteorological Service of Canada (MSC).

It runs on your own machine, proxies the public GeoMet OGC API, and shows alerts with filtering, notifications, history and a national radar loop. A hosted Cloudflare Worker serves the same dashboard.

**Status:** v1.0.0-beta. Live status for the hosted site: [status page](https://eas-launcher.colt98045.workers.dev/status).

## Features

- Live Environment Canada / MSC weather alerts (GeoMet)
- Province filtering, alert history and desktop notifications
- National radar loop (Environment Canada)
- Multiple themes and PWA support
- Runs locally with no accounts or API keys
- Hosted Worker with `/privacy` (English and French), a maintenance overlay and an announcement banner

## Architecture

- `eas_monitor.py` — local Python server that proxies public GeoMet feeds and serves the dashboard.
- `src/index.js` — Cloudflare Worker that serves the dashboard and proxies `/api/canada` and `/api/active`. It also writes visit logs to a shared access-log database. Logging is best-effort and must not change API responses.

The hosted dashboard is at [eas-repository-ca.colt98045.workers.dev](https://eas-repository-ca.colt98045.workers.dev/).

## Requirements

- Python 3.8 or newer
- An internet connection
- A modern browser

## Quick start

```bash
git clone https://github.com/colt98045-beep/eas-repository-ca.git
cd eas-repository-ca
python eas_monitor.py
```

Open <http://localhost:8080> and log in with the default password `eas`. Change it in Settings.

Worker tests:

```bash
for t in tests/*.test.mjs; do node "$t"; done
```

## Deployment

The local app is intended to run on your machine. The hosted site is the `eas-repository-ca` Worker (`src/index.js`). CI never deploys; deploys are manual. The privacy policy at `/privacy` is generated from the shared policy in the launcher repository.

The login screen is a convenience lock, not real authentication. If you put the dashboard on the public internet, protect it with an access layer. See [SECURITY.md](SECURITY.md).

## Attribution and data sources

- Environment Canada / Meteorological Service of Canada (MSC)
- GeoMet OGC API Features: <https://api.weather.gc.ca/collections/weather-alerts/items>
- MSC Datamart CAP feeds

This project is not affiliated with Environment Canada, MSC, or the Government of Canada. Data is proxied and displayed locally. Please respect upstream terms of service.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Please follow the [Code of Conduct](CODE_OF_CONDUCT.md). Report security issues privately as described in [SECURITY.md](SECURITY.md). Changes are tracked in [CHANGELOG.md](CHANGELOG.md).

## License

Licensed under the [Apache License 2.0](LICENSE). Copyright 2026 Colt.
