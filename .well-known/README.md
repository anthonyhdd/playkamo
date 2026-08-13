# `.well-known/` — Universal Links

## What this is for

`playkamo.com/h/<id>` is every challenge link KAMO has ever sent. Today, tapping one on a
phone that **already has KAMO installed** opens Safari — which is the worst possible outcome
for that specific person, because they are the single most likely human on earth to play
another round. `apple-app-site-association` is what makes iOS open the app instead.

It claims `/h/*` and nothing else. The rest of the site — the landing page — stays in the
browser, which is correct: someone who does not have the app should land on the page that
sells it.

## Two GitHub Pages traps, both silent

This directory has to survive both of them, and neither announces itself. iOS caches a failed
association, so a mistake here is **not** repaired by shipping a better build afterwards.

### 1. Jekyll eats dot-directories — this is why `.nojekyll` exists

GitHub Pages runs Jekyll by default, and Jekyll excludes every file and directory whose name
starts with `.` or `_` from the built site. Without `/.nojekyll` at the repo root, this
directory is **not published at all** — `/.well-known/apple-app-site-association` returns the
Pages 404, exactly as it did before this was added.

`.nojekyll` turns Jekyll off and serves the repo verbatim. That is what this site wants
anyway: `index.html` is hand-written, has no front matter, and uses no Jekyll feature.

**Do not delete `/.nojekyll`.** Nothing about the landing page will look wrong if you do. Only
Universal Links break, and only on phones that have not cached the association yet.

### 2. Content-Type

Apple requires this file to be served as `application/json`. It has no extension — that is
mandatory, the filename cannot be `…​.json` — and GitHub Pages picks its Content-Type from the
extension, so an extensionless file is liable to be served as `application/octet-stream`.

**This is the open risk and it is verified from CI, not from here.** `scripts/watchdog.mjs` in
`anthonyhdd/kamo` asserts, every 10 minutes, that this URL answers `200`, with a JSON
content-type, with no redirect. That watchdog has network access; a dev container does not.

If the watchdog reports the content-type is wrong, the fix is **not** to rename this file and
**not** to edit the Worker that serves `/h/*` (it carries every share link in existence). Add
a Cloudflare **Transform Rule → Modify Response Header** on
`http.request.uri.path eq "/.well-known/apple-app-site-association"` setting
`content-type: application/json`. playkamo.com is already proxied through Cloudflare — the
Worker route on `/h/*` only functions because it is — so the rule needs no new infrastructure
and touches no existing code path.

## Changing the app side

`associatedDomains: ["applinks:playkamo.com"]` goes in `anthonyhdd/kamo-app`, and it must go
in **after** this file is confirmed live and correctly served. Building first means every
tester's phone caches a failed association and stops asking.

## The values in the file

| Field | Value | Source |
|---|---|---|
| Team ID | `J55T97M8XV` | `anthonyhdd/kamo` CLAUDE.md |
| Bundle ID | `com.blisscoach.kamo` | `anthonyhdd/kamo-app` `app.json` → `expo.ios.bundleIdentifier` |

Both `paths` (legacy) and `components` (iOS 13+) are present, and `appID` alongside `appIDs`,
because the cost of the redundant keys is nothing and the cost of guessing wrong is a cached
failure on every device that fetched it.
