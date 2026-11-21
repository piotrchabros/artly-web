// Worker in front of the static assets:
//  - www.artly.com.pl -> apex (301),
//  - /app -> store redirect by platform (app banner "Pobierz", spec §6.0),
//  - staging.*: robots.txt disallows everything and every response is noindex,
//  - everything else from static assets (_redirects, _headers and not_found_handling still apply).
const CANONICAL_HOST = "artly.com.pl";

// Keep in sync with src/data/site.ts. Empty until the iOS app is published.
const APP_STORE_ID = "";
const PLAY_PACKAGE = "pl.artly.app";

function appRedirect(request, url) {
  const ua = request.headers.get("user-agent") || "";
  const src = (url.searchParams.get("src") || "web").replace(/[^\w-]/g, "").slice(0, 40) || "web";
  let target;
  if (/iPhone|iPad|iPod/.test(ua) && APP_STORE_ID) {
    target = `https://apps.apple.com/app/id${APP_STORE_ID}?ct=${encodeURIComponent(src)}`;
  } else if (/Android/.test(ua)) {
    target = `https://play.google.com/store/apps/details?id=${PLAY_PACKAGE}&referrer=${encodeURIComponent(`utm_source=${src}`)}`;
  } else {
    target = new URL("/aplikacja/", url).toString();
  }
  return new Response(null, { status: 302, headers: { Location: target, "Cache-Control": "no-store", "X-Robots-Tag": "noindex" } });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === `www.${CANONICAL_HOST}`) {
      url.hostname = CANONICAL_HOST;
      url.protocol = "https:";
      url.port = "";
      return Response.redirect(url.toString(), 301);
    }
    const staging = url.hostname.startsWith("staging.");
    if (staging && url.pathname === "/robots.txt") {
      return new Response("User-agent: *\nDisallow: /\n", { headers: { "Content-Type": "text/plain; charset=utf-8" } });
    }
    const res = url.pathname === "/app" || url.pathname === "/app/" ? appRedirect(request, url) : await env.ASSETS.fetch(request);
    if (!staging) return res;
    const out = new Response(res.body, res);
    out.headers.set("X-Robots-Tag", "noindex, nofollow");
    return out;
  },
};
