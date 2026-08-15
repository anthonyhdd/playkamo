# playkamo.com

One-screen landing for **KAMO — Hide & Seek Photo Game** (App Store id `6789639784`).
A single `index.html`, no build, no JavaScript. Deployed to GitHub Pages.

## ⚠️ This repo is NOT the app

The KAMO web app lives in `anthonyhdd/kamo` and is served from
`https://anthonyhdd.github.io/kamo/` — **every shipped binary loads that URL at runtime.**

On 2026-08-06 a CNAME on *that* repo turned it into a 301 to `http://`, App Transport
Security refused it inside WKWebView, and the app died for every installed user — App Review
filed a Guideline 2.1(a) rejection four hours later.

**Never point a custom domain at `anthonyhdd/kamo`.** This repo is a separate deployment and
cannot affect the app. Keep it that way.

## It comes from the app, not from the Store

No App Store screenshots: those show a physical figurine in real scenes, which is not what
the app does.

- `SpaceGrotesk-700.woff2` is the exact file the app ships (`kamo/vendor/`), self-hosted here
  for the same reason it is there — no third-party request on the critical path.
- Palette lifted verbatim from `kamo/index.html` `:root` (`--bg:#05060a`, `--mint:#5fe6a4`,
  `--stroke`). The primary button is the app's: **white with dark ink, never mint.** Mint is
  the accent.
- The headline is the app's own hero line. **If the app's wording changes, this page is
  downstream of it.**
- The character is **drawn in SVG**, not cut out of the icon: the icon bakes its mint glow in
  as a dark green halo, and no threshold separates that from the body cleanly — every attempt
  left a speckled ring. Vector is cleaner, ~1KB, and the glow comes back as a `drop-shadow`
  we control. He grips the top of the wordmark; the viewBox bottom *is* the ledge, which is
  why no body is drawn.

## Layout rules that are load-bearing

- **One screen.** `min-height:100dvh` — `dvh`, not `vh`: on iOS the address bar makes `vh`
  taller than the visible area, which is how a "no scroll" page ends up scrolling.
  `min-height` rather than `height` so a short landscape phone scrolls instead of clipping.
- **Only `.wrap` sets the horizontal gutter**, and nothing carrying it may use the `padding`
  shorthand — the shorthand resets all four sides and silently wiped the gutter once already,
  running the text into both edges on mobile. Use `padding-top`/`padding-bottom` only.
- `h1` is capped at `24ch`: at `18ch` it broke into three lines and left "it" alone on the last.

## DNS (Hover)

| Type | Host | Value |
|------|------|-------|
| A ×4 | `@` | `185.199.108.153` `185.199.109.153` `185.199.110.153` `185.199.111.153` |
| CNAME | `www` | `anthonyhdd.github.io` |

Then Settings → Pages → Custom domain → `playkamo.com` → wait for the cert → tick *Enforce HTTPS*.

## Verified 2026-08-07 (local, port 5601)

Desktop 1280×860 and mobile 375×812: fits one screen exactly, no scroll, no horizontal
overflow, correct 20px gutters, no console errors, zero JS. 144 KB total.

## Content pages

`content/*.mjs` holds the page data; `node build.mjs` renders it into the committed
directories and regenerates `sitemap.xml`. GitHub Pages runs no build, so **the output is
committed** — after editing content, run the build and commit what it writes.

    node build.mjs          # render
    node build.mjs --check  # fail if the committed tree is stale

The build refuses a page under 180 words of body copy. That threshold is the point: this is
a content site, not a doorway-page generator, and a page that cannot justify its own
paragraphs should be deleted rather than padded.

`/`, `/how-to-hide-a-kamo/`, `/meccha-chameleon-app/`, `/privacy/`, `/terms/` and
`/support/` are hand-written and untouched by the build; they appear in `HAND_WRITTEN` in
`build.mjs` only so the sitemap stays complete.
