---
name: Replit-internal registry URLs in package-lock break external CI
description: Why Cloudflare/GitHub-Actions builds fail after installing packages via Replit
---
When packages are installed inside Replit, their `resolved` URLs in
package-lock.json can point at Replit's INTERNAL mirror
`http://package-firewall.replit.local/npm/...` instead of
`https://registry.npmjs.org/`. The Replit sandbox can reach that host; external
build servers (Cloudflare Pages, GitHub Actions, etc.) CANNOT, so `npm ci` fails
and the deploy silently never publishes — pushed changes appear "stuck" / not live.

**Symptom:** commit is on origin/main, but the live site keeps serving the old
build; live HTML still references old asset paths; new files 404 (return the
SPA/homepage HTML fallback with 200).

**Fix:** rewrite the host in package-lock.json:
`sed -i 's#http://package-firewall.replit.local/npm/#https://registry.npmjs.org/#g' package-lock.json`
Integrity hashes are identical to the public registry, so they still validate.
Do NOT run `npm ci` to verify inside the Replit sandbox — its firewall only allows
the internal registry, giving a false failure. Validate JSON + rely on the external
build instead.

**Prevention:** after any package install that touches the lockfile, grep for
`package-firewall.replit.local` before committing if the repo deploys via external CI.
