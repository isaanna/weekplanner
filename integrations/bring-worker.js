// Bring!-Helfer für „Mein Lebenskompass“ (Cloudflare Worker)
//
// Bekommt eine Einkaufsliste im Link übergeben und liefert eine Seite im
// Rezeptformat (schema.org/Recipe), die der Bring!-Import lesen kann.
//
// Aufruf:  https://<dein-worker>.workers.dev/?t=Titel&i=800%20g%20Kartoffeln&i=2%20Paprika
//   t = Titel der Liste (optional)
//   i = ein Artikel, beliebig oft
//
// Es wird nichts gespeichert. Die Seite existiert nur für den Moment des Aufrufs.

const MAX_ITEMS = 150;
const MAX_LEN = 200;

const esc = (s) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const title = (url.searchParams.get("t") || "Einkaufsliste").trim().slice(0, 100) || "Einkaufsliste";
    const items = url.searchParams.getAll("i")
      .map((s) => s.trim().slice(0, MAX_LEN))
      .filter(Boolean)
      .slice(0, MAX_ITEMS);

    if (!items.length) {
      return new Response("Bring!-Helfer läuft. Es wurden keine Artikel übergeben.", {
        headers: { "content-type": "text/plain; charset=utf-8" },
      });
    }

    const ld = {
      "@context": "https://schema.org",
      "@type": "Recipe",
      name: title,
      recipeYield: "4",
      recipeIngredient: items,
    };

    const html = `<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="robots" content="noindex, nofollow">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<script type="application/ld+json">${JSON.stringify(ld).replace(/</g, "\\u003c")}</script>
</head>
<body>
<div itemscope itemtype="http://schema.org/Recipe">
<h1 itemprop="name">${esc(title)}</h1>
<div>Für <span itemprop="recipeYield">4</span></div>
<ul>
${items.map((i) => `<li itemprop="ingredients">${esc(i)}</li>`).join("\n")}
</ul>
</div>
</body>
</html>`;

    return new Response(html, {
      headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" },
    });
  },
};
