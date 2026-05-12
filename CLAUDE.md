# MotSonen

Norwegian B2B consultancy landing page. Leadership and organizational change.
Owner: Arman Vestad · Live: motsonen.netlify.app · Repo: github.com/wladnzw/armanvestad-motsonen

## Stack

Vanilla HTML/CSS/JS. No frameworks, no build step. Intentional — single-page marketing site.

## Structure

```
index.html       main page
css/style.css    all styles (~1280 lines, CSS custom properties)
js/main.js       all JavaScript
images/          photos
netlify.toml     publish = "." (no build command)
```

## Deploy

`git push main` → auto-deploy on Netlify in ~5s.

```sh
git add . && git commit -m "description" && git push
```

## Rules

- Keep Norwegian text as-is unless explicitly asked to change it
- No framework migrations (Tailwind was tried and reverted — user prefers vanilla CSS)
- Photos go in `images/`
