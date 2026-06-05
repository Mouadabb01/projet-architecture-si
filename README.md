# Let’s Go Travel – Front‑end (static)

This repository contains the **static front‑end** of the *Let’s Go Travel* web application, ready to be hosted on GitHub Pages (or any static‑file server).

## What is included
- HTML entry point `public/index.html`
- All CSS, JavaScript and image assets in the `public/` folder (e.g. `style.css`, `nav.js`, `offreservice.css`, `packs.css`, `paiment.css`, etc.)
- Video assets in `public/videos/`
- Minimal assets required for the UI – the back‑end (PHP, MySQL) is **not** part of this repo.

## How to view locally
```bash
# From the repository root
python -m http.server 8000 --directory public
# then open http://localhost:8000 in a browser
```

## Deploy to GitHub Pages
1. Push the repository to GitHub.
2. In the repository **Settings → Pages**, set the source to the `main` branch and the root folder.
3. GitHub will publish the site at `https://<username>.github.io/<repo>/`.

---
*This README is intentionally concise – the detailed deployment steps are documented in `DEPLOY_FRONTEND.md`.*
