# Zalaand website

This is the public-facing Zalaand product portfolio concept site, written in **React 18** and using plain CSS. The current static version intentionally has no build step, so it can be served on GitHub Pages from a subdirectory or from its own future repository. React and ReactDOM are loaded from jsDelivr.

## Preview location

This first version lives in the existing personal Pages repository's `/zalaand/` directory so no existing personal website or CommerceGuardian source files are replaced.

Expected URL (if GitHub Pages is enabled for the user site):
https://karimbaidar.github.io/zalaand/

## Development

Serve the folder with a static web server, for example:

```sh
python3 -m http.server 8000
```

Visit http://localhost:8000/zalaand/ when serving from the parent folder.

All navigation and FAQ behavior is handled by React in `app.js`. Styles are in `styles.css`, metadata in `index.html`.

## Separate repository and zalaand.org

For a permanent, independent site, create a PUBLIC repository such as `karimbaidar/zalaand` and copy the contents of this folder to its **root**. In Settings → Pages, publish from `main` / `/(root)`. The address will be `https://karimbaidar.github.io/zalaand/` initially.

When `zalaand.org` has been purchased, add `zalaand.org` under **Settings → Pages → Custom domain** in the dedicated repo. Configure your DNS provider according to GitHub's current documentation for apex domains; do not point the DNS to a folder path, which DNS cannot represent. Configure `www` separately and wait for DNS checks before enforcing HTTPS.

Do not add a `CNAME` file to the personal `karimbaidar.github.io` repository: that would change the custom-domain routing for the personal website.

## Editorial notes

This site deliberately presents the organization as **a vision in development**. CommerceGuardian OS is the first featured product, linked to its own website. Future products are not presented as launched until confirmed. The Zalaand identity intentionally has no suffix such as Network, Group or Studio. Replace copy as formal structures, contact channels and registrations are confirmed.

## Private GitHub + $0 public hosting

Recommended: a private GitHub repository connected to Cloudflare Pages on the free plan. Cloudflare Pages can deploy a static React site from a private GitHub repository and serve the site publicly with a custom domain and HTTPS. Create a separate private GitHub repo, copy the contents of this folder to its root, and in Cloudflare Workers & Pages use Connect to Git. For this static no-build version, leave the build command blank and set the output directory to the repo root (`.`). To use the apex zalaand.org domain, add it to Cloudflare and use Cloudflare nameservers. Do not move private source into the personal public Pages repository.
