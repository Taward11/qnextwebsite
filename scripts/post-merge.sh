#!/bin/bash
set -e

# Post-merge setup for the Astro site.
# - Installs dependencies (idempotent; uses npm ci when the lockfile matches,
#   otherwise falls back to npm install).
# - Runs a production build, which also executes the lint:links prebuild
#   guardrail, so a merge that breaks the build or introduces vague link
#   text is caught immediately.

if [ -f package-lock.json ]; then
  npm ci --no-audit --no-fund || npm install --no-audit --no-fund
else
  npm install --no-audit --no-fund
fi

npm run build
