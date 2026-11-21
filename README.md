# EAS Repository Canada

A local, open-source dashboard for monitoring Canadian weather and emergency alerts from Environment Canada / Meteorological Service of Canada (MSC).

It runs entirely on your machine, proxies the public GeoMet OGC API Features endpoint, and presents alerts in a clean interface with filtering, notifications, history, and more.

**Status:** v1.0.0-beta — Canadian edition. Core features working; bilingual support and province filtering still improving.

## Screenshots

<!-- Replace with actual screenshots -->

![Alerts list](https://via.placeholder.com/800x450.png?text=Canadian+Alerts+Screenshot)

## Features
- Live Environment Canada / MSC weather alerts (GeoMet)
- Province filtering
- Desktop notifications
- National radar loop (Environment Canada)
- Multiple themes
- Alert history
- PWA support
- 100% local — no accounts or API keys required

## Requirements
- Python 3.8 or newer
- Internet connection
- Modern browser

## Quick Start
```bash
git clone https://github.com/colt98045-beep/eas-repository-ca.git
cd eas-repository-ca
python eas_monitor.py
```
Open http://localhost:8080

Default password: `eas` (change in Settings)

## Attribution & Data Sources
- Environment Canada / Meteorological Service of Canada (MSC)
- GeoMet OGC API Features: https://api.weather.gc.ca/collections/weather-alerts/items
- MSC Datamart CAP feeds

This project is not affiliated with Environment Canada, MSC, or the Government of Canada.

Data is proxied and displayed locally. Please respect upstream terms of service.

## License
Apache License 2.0 — see [LICENSE](LICENSE)

Copyright 2026 Colt
