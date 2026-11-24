# Contributing to EAS Repository Canada

Thanks for your interest in the project.

## Development

```bash
git clone https://github.com/colt98045-beep/eas-repository-ca.git
cd eas-repository-ca
python eas_monitor.py
```

Then open <http://localhost:8080> (default password: `eas`).

Worker and overlay tests (Node):

```bash
for t in tests/*.test.mjs; do node "$t"; done
```

CI also compiles Python, checks `manifest.json`, and runs a credential-free
`wrangler deploy --dry-run`. It does not deploy.


## Reporting issues

Please open a [GitHub issue](https://github.com/colt98045-beep/eas-repository-ca/issues/new/choose) and include:

- What you expected
- What happened
- Steps to reproduce
- Relevant versions (runtime, OS, browser)

Security problems should be reported privately. See [SECURITY.md](SECURITY.md).

## Pull requests

1. Fork the repository.
2. Create a branch for your change.
3. Keep the style consistent with the existing project.
4. Run the checks above and confirm they pass.
5. Add a line to the `Unreleased` section of [CHANGELOG.md](CHANGELOG.md).
6. Open a pull request with a clear description.

Please follow the [Code of Conduct](CODE_OF_CONDUCT.md).

Use the public Environment Canada / GeoMet APIs only (no scraping) and keep the attribution and non-affiliation notes intact.

## License

By contributing, you agree that your contributions will be licensed under the
[Apache License 2.0](LICENSE) that covers this project.
