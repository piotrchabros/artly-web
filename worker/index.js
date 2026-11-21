// Redirect www.artly.com.pl to the apex domain; serve everything else from static assets.
// _redirects, _headers and not_found_handling are still applied by env.ASSETS.fetch.
const CANONICAL_HOST = "artly.com.pl";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === `www.${CANONICAL_HOST}`) {
      url.hostname = CANONICAL_HOST;
      url.protocol = "https:";
      url.port = "";
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
