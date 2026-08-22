#!/usr/bin/env node
/**
 * Static generator for playkamo.com's content pages.
 *
 * WHY THIS EXISTS. The site started as hand-written HTML, which is fine for three pages and
 * a liability at thirty: the fourth copy of the header drifts from the first, and nobody
 * notices until a footer link 404s on half the site. Content lives in content/*.mjs as data;
 * this renders it. The OUTPUT IS COMMITTED — GitHub Pages serves plain files and runs no
 * build, so `node build.mjs` must be run and its result committed like any other edit.
 *
 * WHAT THIS IS NOT. It is not a doorway-page machine. Google's scaled-content-abuse policy
 * is aimed squarely at templates filled with interchangeable variables, and it is right to
 * be. Every entry here carries body copy written for that entry — the surface guides give
 * advice that is actually different per surface, because hiding something on gravel and
 * hiding it on a white wall are different problems. If a page ever cannot justify its own
 * paragraphs, delete it rather than pad it.
 *
 *   node build.mjs          # render every page + hubs + sitemap
 *   node build.mjs --check  # render to memory and fail if the tree on disk differs
 */
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { surfaces } from './content/surfaces.mjs';
import { intent } from './content/intent.mjs';
import { ideas } from './content/ideas.mjs';

const ORIGIN = 'https://playkamo.com';
const APP = 'https://apps.apple.com/app/id6789639784';

/* EVERY INSTALL BUTTON ON THIS SITE IS TRACKED, AND UNTIL NOW NONE OF THEM WAS.
 *
 * 42 pages, one bare listing URL on all of them. So an install earned by a search for
 * "games like meccha chameleon" and an install earned by a TikTok ad arrived at AppsFlyer
 * looking identical — the first as `af_status: Organic` with nothing attached. That is not a
 * reporting nicety: this site's whole job is organic installs, and without a `c` there is no
 * way to tell which of these pages produces any. Ranking is not the metric; installs are, and
 * they were unreadable.
 *
 * `pid=seo` separates the site from the in-app share (`user_referral`), the challenge link
 * (`challenge_link`, see kamo/infra/edge-h.ts) and the YouTube fleet. `c` is the page's own
 * slug, so the answer to "which content is worth writing more of" is a campaign breakdown
 * rather than an argument. The rule this repeals is stated in one line in
 * ~/SPANISH/content-engine/config.json: never hardcode a bare apps.apple.com URL, it is
 * untracked and it outranks the tracked link.
 *
 * The base is the template kamo-app ships (attribution.js ONELINK_URL). A second template
 * exists for YouTube — getkamo.onelink.me/0Dmw — and they are not interchangeable in
 * reporting; do not unify them without checking what reads each.
 *
 * ⚠️ SCHEMA.ORG KEEPS THE BARE URL. `downloadUrl` and `sameAs` in the JSON-LD name the App
 * Store listing as an identity, not as a click target — pointing structured data at a
 * redirector is how an app loses its rich result. Buttons get the OneLink; the graph does
 * not. */
const ONELINK = 'https://kamo.onelink.me/dc9X';
const appLink = (slug) =>
  `${ONELINK}?pid=seo&c=${encodeURIComponent(slug ? String(slug).replace(/^\/+|\/+$/g, '') : 'site')}`;
const LASTMOD = '2026-08-15';
const CHECK = process.argv.includes('--check');

const APPLE_SVG =
  '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.4 12.7c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.9-3.5.9s-1.8-.9-3-.8c-1.5 0-2.9.9-3.7 2.2-1.6 2.8-.4 6.9 1.1 9.1.8 1.1 1.7 2.4 2.9 2.3 1.2 0 1.6-.7 3-.7s1.8.7 3 .7 2-1.1 2.8-2.2c.9-1.3 1.2-2.5 1.3-2.6-.1 0-2.5-1-2.5-3.6zM14.2 5.9c.6-.8 1.1-1.9 1-3-.9 0-2.1.6-2.8 1.4-.6.7-1.2 1.8-1 2.9 1 .1 2.1-.5 2.8-1.3z"/></svg>';

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Every generated page. Hand-written pages (/, /privacy/, /terms/, /support/,
 *  /how-to-hide-a-kamo/, /meccha-chameleon-app/) are NOT touched by this script — they are
 *  listed in EXTRA_URLS only so the sitemap stays complete. */
const HAND_WRITTEN = [
  { loc: '/', priority: '1.0', changefreq: 'weekly' },
  { loc: '/how-to-hide-a-kamo/', priority: '0.8', changefreq: 'monthly' },
  { loc: '/meccha-chameleon-app/', priority: '0.8', changefreq: 'monthly' },
  { loc: '/press/', priority: '0.6', changefreq: 'monthly' },
  { loc: '/support/', priority: '0.5', changefreq: 'monthly' },
  { loc: '/privacy/', priority: '0.3', changefreq: 'yearly' },
  { loc: '/terms/', priority: '0.3', changefreq: 'yearly' },
];

const HUBS = [
  {
    slug: 'hides',
    // Named for what people type, not for what we call it. "Hide a kamo" is a phrase with a
    // search volume of zero — kamo is a word we coined — so it belongs in the body copy,
    // where it builds the brand noun, and nowhere near a title or an H1.
    title: 'Where to hide something in plain sight — a guide for every surface',
    description:
      'Brick, gravel, carpet, bark, snow, a cluttered desk: each surface camouflages an object differently. One short guide for each, with the mistake that gives it away.',
    h1: 'Where to hide something in plain sight',
    linkAll: 'Every surface guide',
    standfirst:
      'The surface decides the round before you place anything. These are the ones people actually point at, and what each one does to a hide.',
    items: surfaces,
    intro:
      'A hide fails for one of four reasons: the surface was too plain, the outline was unbroken, the brightness did not match, or a patch went unpainted. Which of those bites you depends almost entirely on what you pointed at — so pick the surface first.',
  },
  {
    slug: 'games',
    title: 'Camera games and hide-and-seek apps — what KAMO is and isn’t',
    description:
      'Straight answers on camouflage apps, phone hide-and-seek, AR camera games and hidden-object puzzles: what exists, what doesn’t, and where KAMO fits.',
    h1: 'Camera games, honestly compared',
    linkAll: 'All the comparisons',
    standfirst:
      'What people search for around this game, answered without pretending KAMO is the answer to all of it.',
    items: intent,
    intro:
      'These pages exist because the questions get asked and the answers online are mostly listicles. Where KAMO fits, it says so. Where it does not, it says that too.',
  },
  {
    slug: 'ideas',
    title: 'Things to do with it — hide-and-seek ideas for phones',
    description:
      'Ideas for using a camera hide-and-seek game: with friends in a group chat, at a party, with kids, or across a long distance.',
    h1: 'Ideas',
    linkAll: 'All the ideas',
    standfirst: 'Ways people actually use a hide, beyond playing one round alone on your desk.',
    items: ideas,
    intro:
      'A hide is a link. That single fact is what makes most of these work: the person on the other end does not need the app, an account, or anything but a thumb.',
  },
];

const ALL = [...surfaces, ...intent, ...ideas];

/** Old slugs kept alive as canonical stubs.
 *  The surface pages shipped for about an hour under `hide-a-kamo-on-*` before being renamed
 *  to phrasing people actually type. Nothing was indexed — Search Console had last read the
 *  sitemap the day before they existed — so the rename cost nothing, but a link shared in
 *  that hour should still land somewhere. Each stub carries noindex plus a canonical to the
 *  new URL and redirects on load. Deletable once the new URLs show up as crawled. */
const REDIRECTS = {
  'hide-a-kamo-on-brick': 'camouflage-on-brick',
  'hide-a-kamo-in-gravel': 'camouflage-on-gravel',
  'hide-a-kamo-in-grass': 'camouflage-in-grass',
  'hide-a-kamo-on-wood-grain': 'camouflage-on-wood',
  'hide-a-kamo-on-carpet': 'camouflage-on-carpet',
  'hide-a-kamo-on-tiles': 'camouflage-on-tiles',
  'hide-a-kamo-on-concrete': 'camouflage-on-concrete',
  'hide-a-kamo-on-tree-bark': 'camouflage-on-tree-bark',
  'hide-a-kamo-on-fallen-leaves': 'camouflage-in-fallen-leaves',
  'hide-a-kamo-in-sand': 'camouflage-in-sand',
  'hide-a-kamo-in-snow': 'camouflage-in-snow',
  'hide-a-kamo-on-a-bookshelf': 'hide-something-on-a-bookshelf',
  'hide-a-kamo-on-a-cluttered-desk': 'hide-something-on-a-desk',
  'hide-a-kamo-on-a-kitchen-counter': 'hide-something-on-a-kitchen-counter',
  'hide-a-kamo-on-fabric': 'camouflage-on-fabric',
  'hide-a-kamo-on-asphalt': 'camouflage-on-asphalt',
  'hide-a-kamo-on-a-white-wall': 'camouflage-on-a-plain-wall',
  'hide-a-kamo-on-marble': 'camouflage-on-marble',
};

const renderRedirect = (from, to) => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="robots" content="noindex">
<link rel="canonical" href="${ORIGIN}/${to}/">
<meta http-equiv="refresh" content="0; url=/${to}/">
<title>Moved — KAMO</title>
</head>
<body>
<p>This page moved to <a href="/${to}/">/${to}/</a>.</p>
</body>
</html>
`;


function head({ slug, title, description, type = 'article' }) {
  const url = `${ORIGIN}/${slug}/`;
  return `<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${url}">
<meta name="theme-color" content="#05060a">

<meta property="og:type" content="${type}">
<meta property="og:site_name" content="KAMO">
<meta property="og:locale" content="en_US">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${ORIGIN}/img/og.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="twitter:image" content="${ORIGIN}/img/og.jpg">

<meta name="apple-itunes-app" content="app-id=6789639784">
<link rel="icon" href="/img/icon.png">
<link rel="apple-touch-icon" href="/img/app-icon.png">
<link rel="stylesheet" href="/doc.css">
<link rel="stylesheet" href="/page.css">`;
}

const chrome = (body, slug) => `<header>
  <div class="wrap nav">
    <a class="brand" href="/">KAMO</a>
    <a class="cta" href="${appLink(slug)}">${APPLE_SVG} Get KAMO</a>
  </div>
</header>

<main class="wrap">
${body}
</main>

<footer>
  <div class="wrap foot">
    <span>© 2026 Bliss Coach</span>
    <nav>
      <a href="/">Home</a>
      <a href="/hides/">Hides</a>
      <a href="/games/">Games</a>
      <a href="/ideas/">Ideas</a>
      <a href="/press/">Press</a>
      <a href="/support/">Support</a>
      <a href="/privacy/">Privacy</a>
      <a href="/terms/">Terms</a>
    </nav>
  </div>
</footer>`;

const endCta = (line = 'Free on iPhone. No signup.', slug) => `  <div class="endcta">
    <p>${esc(line)}</p>
    <a class="cta big" href="${appLink(slug)}">${APPLE_SVG} Get KAMO</a>
  </div>`;

function sections(list) {
  return list
    .map((s) => {
      const paras = s.paras.map((p) => `    <p>${p}</p>`).join('\n');
      const list_ = s.list ? `    <ul>\n${s.list.map((li) => `      <li>${li}</li>`).join('\n')}\n    </ul>\n` : '';
      return `    <h2>${esc(s.h2)}</h2>\n${paras}\n${list_}`;
    })
    .join('\n');
}

function faqBlock(faq) {
  if (!faq?.length) return '';
  return (
    `    <h2>Questions</h2>\n` +
    faq.map((f) => `    <h3>${esc(f.q)}</h3>\n    <p>${f.a}</p>`).join('\n')
  );
}

function faqSchema(faq, url) {
  if (!faq?.length) return '';
  const strip = (s) => s.replace(/<[^>]+>/g, '');
  return `\n<script type="application/ld+json">\n${JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    url,
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: strip(f.a) },
    })),
  })}\n</script>`;
}

/** Related links are what stop a 40-page site from being 40 orphans. Each page points at its
 *  hub and at named siblings; a page with no siblings declared gets the next two in its own
 *  cluster rather than nothing. */
function related(page, cluster) {
  const bySlug = new Map(ALL.map((p) => [p.slug, p]));
  let sibs = (page.related || []).map((s) => bySlug.get(s)).filter(Boolean);
  if (sibs.length < 2) {
    const pool = cluster.items.filter((p) => p.slug !== page.slug && !sibs.includes(p));
    const i = cluster.items.indexOf(page);
    sibs = [...sibs, ...pool.slice(i, i + 2), ...pool].slice(0, 3);
  }
  const links = sibs
    .slice(0, 3)
    .map((p) => `      <li><a href="/${p.slug}/">${esc(p.linkText || p.h1)}</a></li>`)
    .join('\n');
  return `  <nav class="related" aria-label="Related">
    <h2>Keep reading</h2>
    <ul>
${links}
      <li><a href="/${cluster.slug}/">${esc(cluster.linkAll)}</a></li>
    </ul>
  </nav>`;
}

function renderPage(page, cluster) {
  const url = `${ORIGIN}/${page.slug}/`;
  const body = `<article>
  <header class="article-header">
    <p class="eyebrow"><a href="/${cluster.slug}/">${esc(cluster.h1)}</a></p>
    <h1>${esc(page.h1)}</h1>
    <p class="meta">${esc(page.standfirst)}</p>
  </header>

  <div class="prose">
${sections(page.sections)}
${faqBlock(page.faq)}
  </div>

${related(page, cluster)}

${endCta(page.ctaLine, page.slug)}
</article>`;
  return `<!doctype html>
<html lang="en">
<head>
${head({ slug: page.slug, title: page.title, description: page.description })}
</head>
<body>

${chrome(body, page.slug)}
${faqSchema(page.faq, url)}
</body>
</html>
`;
}

function renderHub(cluster) {
  const cards = cluster.items
    .map(
      (p) => `      <li><a href="/${p.slug}/"><span class="card-t">${esc(p.linkText || p.h1)}</span>
        <span class="card-d">${esc(p.cardLine || p.standfirst)}</span></a></li>`
    )
    .join('\n');
  const body = `<article>
  <header class="article-header">
    <h1>${esc(cluster.h1)}</h1>
    <p class="meta">${esc(cluster.standfirst)}</p>
  </header>

  <div class="prose">
    <p>${cluster.intro}</p>
  </div>

  <ul class="cards">
${cards}
  </ul>

${endCta(undefined, cluster.slug)}
</article>`;
  return `<!doctype html>
<html lang="en">
<head>
${head({ slug: cluster.slug, title: cluster.title, description: cluster.description, type: 'website' })}
</head>
<body>

${chrome(body, cluster.slug)}
</body>
</html>
`;
}

function sitemap(urls) {
  const rows = urls
    .map(
      (u) =>
        `  <url><loc>${ORIGIN}${u.loc}</loc><lastmod>${LASTMOD}</lastmod><changefreq>${u.changefreq}</changefreq><priority>${u.priority}</priority></url>`
    )
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${rows}
</urlset>
`;
}

// ---------------------------------------------------------------------------

const out = new Map();

for (const cluster of HUBS) {
  out.set(`${cluster.slug}/index.html`, renderHub(cluster));
  for (const page of cluster.items) out.set(`${page.slug}/index.html`, renderPage(page, cluster));
}

for (const [from, to] of Object.entries(REDIRECTS)) {
  if (!ALL.some((p) => p.slug === to)) {
    console.error(`redirect target does not exist: ${to}`);
    process.exit(1);
  }
  out.set(`${from}/index.html`, renderRedirect(from, to));
}

const urls = [
  ...HAND_WRITTEN,
  ...HUBS.map((c) => ({ loc: `/${c.slug}/`, priority: '0.7', changefreq: 'weekly' })),
  ...ALL.map((p) => ({ loc: `/${p.slug}/`, priority: '0.6', changefreq: 'monthly' })),
];
out.set('sitemap.xml', sitemap(urls));

// Guards. A duplicate slug silently overwrites a page and the loss is invisible on disk.
const slugs = ALL.map((p) => p.slug);
const dupes = slugs.filter((s, i) => slugs.indexOf(s) !== i);
if (dupes.length) {
  console.error(`duplicate slug(s): ${[...new Set(dupes)].join(', ')}`);
  process.exit(1);
}
for (const p of ALL) {
  const words = p.sections.flatMap((s) => [...s.paras, ...(s.list || [])]).join(' ').split(/\s+/).length;
  if (words < 180) {
    console.error(`${p.slug}: ${words} words of body copy — too thin to justify a URL.`);
    process.exit(1);
  }
  if (!/^[a-z0-9-]+$/.test(p.slug)) {
    console.error(`${p.slug}: slug must be lowercase kebab-case`);
    process.exit(1);
  }
}

let diff = 0;
for (const [path, content] of out) {
  const full = new URL(path, import.meta.url).pathname;
  const current = existsSync(full) ? await readFile(full, 'utf8') : null;
  if (current === content) continue;
  diff++;
  if (CHECK) {
    console.error(`out of date: ${path}`);
    continue;
  }
  await mkdir(full.slice(0, full.lastIndexOf('/')), { recursive: true });
  await writeFile(full, content);
}

if (CHECK) {
  if (diff) {
    console.error(`\n${diff} file(s) differ — run \`node build.mjs\` and commit the result.`);
    process.exit(1);
  }
  console.log(`up to date — ${out.size} files, ${urls.length} urls`);
} else {
  console.log(`wrote ${diff} of ${out.size} files | ${ALL.length} pages + ${HUBS.length} hubs | sitemap: ${urls.length} urls`);
}
