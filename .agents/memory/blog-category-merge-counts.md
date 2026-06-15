---
name: Blog category merge — correct deduplicated counts
description: Why the merged "Microsoft" blog category nets 10 posts, not the planned 13, and how counts were verified.
---

# Blog category merge: trust the deduplicated union, not the additive estimate

The category-merge plan estimated final counts by **adding** source-category
sizes and assuming **0 overlap**. That assumption was wrong for the Microsoft
set, so the planned "Microsoft: 13" is incorrect.

Correct, fully-deduplicated final counts (non-draft, non-news, matching
`src/lib/blog.ts` `getCategoryCounts`):

- **Illumio: 3** (Illumio ∪ Illumio Core)
- **Microsoft: 10** (Microsoft ∪ Microsoft 365 ∪ Office 365 — several posts
  carried both `Microsoft` and `Office 365`/`Microsoft 365`, so the union is 10,
  NOT 3+3+7=13)
- **Zero Trust Data Access: 93** (ZTDA ∪ Zero Trust)

**Why:** A code-review/validation gate may reject with "Microsoft should be 13."
That target is based on the plan's bad no-overlap assumption. The merge itself
dropped nothing.

**How to apply / how to verify:** reconstruct the true pre-merge *distinct*
unions from git rather than re-running the merge. The merge commit only edits
`categories:` lines (no post deletions). Fast check:
`git --no-optional-locks grep -lE '^[[:space:]]*-[[:space:]]*"(Microsoft|Microsoft 365|Office 365)"[[:space:]]*$' '<mergeCommit>^' -- 'src/content/blog/*.md' | sort -u | wc -l`
returns 10. Retired slugs (`office-365`, `microsoft-365`, `illumio-core`,
`zero-trust`) 404 cleanly because the category route's `getStaticPaths` is
derived solely from `getCategoryCounts` (existing categories only).
