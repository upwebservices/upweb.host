# Erled Agency — Maritime Logistics & Port Services

A fast, responsive static website for Erled Agency. Includes accessible navigation, sections for services and capabilities, and a simple contact mailto form.

## Structure

- `index.html` — homepage with hero, services, capabilities, about, contact
- `assets/css/styles.css` — theme styles and responsive layout
- `assets/js/main.js` — mobile nav, smooth scroll, reveal, contact handler
- `favicon.svg` — site icon
- `robots.txt`, `sitemap.xml` — SEO basics

## Run locally

Any static server works. Examples:

```bash
# Python 3
python3 -m http.server -d /workspace/erled-agency 5173

# Node (using npx serve)
npx --yes serve /workspace/erled-agency -l 5173
```

Then open `http://localhost:5173`.

## Customize

- Edit copy in `index.html` (headings, text, services)
- Change theme colors in `:root` inside `assets/css/styles.css`
- Replace `favicon.svg` with your brand mark
- Update contact email in the form tag `data-email="sales@erled-agency.example"`

## Deploy

Upload the folder contents to any static host (GitHub Pages, Netlify, Vercel, S3/CloudFront, Nginx). Make sure `robots.txt` and `sitemap.xml` are served from the site root.

## SEO

- Page `<title>` and `<meta name="description">` are set
- Open Graph and Twitter metadata included
- JSON-LD for `Organization` and `WebSite`
- `robots.txt` and `sitemap.xml` provided — update the domain placeholders

## License

Copyright © Erled Agency. All rights reserved.