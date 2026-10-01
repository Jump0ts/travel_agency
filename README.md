# Mochila — demo travel site

**Live demo:** https://travel.josanfersal.dev

Next.js website I originally built for a real travel agency and ran in production. After the client closed, I turned it into a fictional portfolio demo ("Mochila") and rebuilt its delivery pipeline from scratch.

> Demo only: the agency is fictional, no bookings are made and the contact form sends nothing.

## Stack

- **App:** Next.js 15, React 19, TypeScript, Tailwind CSS, i18next
- **Infrastructure as code:** Terraform on DigitalOcean (droplet, firewall, SSH keys, cloud-init hardening)
- **Containers:** multi-stage Docker image (standalone Next.js, non-root, healthcheck) published to GHCR
- **Web server:** nginx with Let's Encrypt certificates (auto-renewed by certbot) and security headers
- **CI/CD:** GitHub Actions — lint, type-check, workflow linting (actionlint), image build and push, deploy over SSH, smoke test, one-click rollback

## Zero-downtime deploys

Each release starts on the idle colour (blue/green), waits for the container healthcheck, switches nginx and stops the old version. Measured during a real deploy: **1,165 requests, 0 failures**. A rollback to any of the last image tags takes about 20 seconds and skips the build.

## Author

Jose Antonio Fernández Salado — [LinkedIn](https://www.linkedin.com/in/josanfersal/)

## License

[MIT](./LICENSE)
