# Release Reports — authoring process

`Guides/ReleaseReports/<milestone>.html` is a standalone, self-contained HTML report
published per Major (or Minor) milestone, surfaced in the Data Definitions portal
(`Scripts/PortalBuilder.py` → `public/reports/index.html`, auto-discovered by
`Scripts/ReleaseReportIndexBuilder.py`). The first one is [`M27.0.html`](M27.0.html) — read it before
writing another one; it's the style and structure reference every future report should
match.

The content is drawn from the corresponding milestone section of
[`E-R/ChangeReport.md`](../../E-R/ChangeReport.md), but it is **not** a mechanical
export of it. `ChangeReport.md` is a complete, engineer-facing log of every change;
the Release Report is a curated, consumer-facing summary — grouped by domain, led by
an executive "at a glance" summary, with breaking changes and security fixes called
out up front and full engineering detail tucked behind `+ Technical detail`
disclosures. Producing one is a two-step process: mechanical extraction, then guided
drafting.

## Step 1 — extract the facts

```
python -m Scripts.ReleaseReportFactExtractor M27.1
python -m Scripts.ReleaseReportFactExtractor M27.1 --milestone-type "Incremental Milestone"
python -m Scripts.ReleaseReportFactExtractor M27.1 --from-ref v0.30.0 --to-ref HEAD
```

Run with no arguments (e.g. an IDE "Run" button with no script parameters
configured) and it pops a small dialog instead of erroring: a **Milestone**
dropdown populated from the actual `# Milestone ...` headings already in
`ChangeReport.md` (newest first), and a **Milestone Type** dropdown
(`Constants.MILESTONE_TYPES` — Incremental/Platform, same convention as
`OsduApp.py`'s `NewMilestone` dialog). Cancel exits without writing anything.
`--milestone-type` is the headless/scripted equivalent of that second dropdown —
it's recorded in the facts JSON as metadata for the drafting step and never
affects extraction.

The `milestone` argument is matched against `ChangeReport.md`'s own
`# Milestone <label>` headings as a **substring**, but only if that substring is
unique. `M27.1` or the full `"M27.1 Tag v0.30.1"` both work; a substring like
`M27` that matches more than one heading is rejected outright with the list of
what it matched, rather than silently picking one — a milestone report is
publish-facing, so a silently-wrong pick is worse than an error.

Reads the matched `# Milestone ...` section of `E-R/ChangeReport.md` and writes
one self-contained folder per milestone:

```
Guides/ReleaseReports/_facts/
  M27.0/
    facts.json                                     <- the structured facts below
    01-Subsurface.md                                <- category 1's verbatim source text
    02-Well-Delivery.md                             <- category 2's, etc.
    ...
  M27.1/
    facts.json
    01-Process-Script-Improvements....md
```

Each category's raw `ChangeReport.md` text gets its own `.md` sibling with real
line breaks — `facts.json` never embeds it inline (as an escaped `"...\n..."`
string it's unreadable); each category's JSON entry instead carries a
`raw_text_file` pointer to the bare filename. **Open these, not just the JSON**
— they're where the actual prose lives.

This one-folder-per-milestone layout is deliberate: the alternative (a loose
`<milestone>.json` sitting next to a same-named `<milestone>/` folder, both at
the `_facts/` top level) doubles the number of top-level entries every
milestone and mixes files with directories 1:1 — exactly the kind of thing that
turns into clutter after a few years of milestones. One folder per milestone
scales indefinitely without it, and makes cleanup trivial
(`rm -rf _facts/M27.0/`).

The whole `_facts/` tree is gitignored — it's a regenerated drafting aid, never
a published artifact, and re-running the same milestone wipes and rewrites its
folder from scratch (no stale files left behind if the category count changes
between runs).

For each category, the JSON records:

- every schema-file link, classified `Added` (→ New) or `Updated` (→ Version
  upgrade), with the version number taken from the linked filename
- a `breaking: true` flag when `BREAKING CHANGE` appears near the link
- reference-value hints from phrases like `"53 reference values covering..."`

And at the top level, `totals` records:

- `new_schema_count` / `version_upgrade_count` / `breaking_change_count` — summed
  from the per-category entries above
- `migration_guide_file_count` — the **authoritative** count, read straight off
  `Guides/MigrationGuides/<Mx.y>/` on disk (one file per changed schema, `README.md`
  excluded)
- `migration_guide_inline_link_count` — how many `[migration guide](...)` links
  actually appear inline in `ChangeReport.md`. This is always lower and is *not*
  a data-quality problem — `ChangeReport.md` only links a handful illustratively,
  it was never meant to link every one. Use `migration_guide_file_count`.
- `reference_value_hint_total` — sum of the reference-value hints above

Optionally pass `--from-ref <tag-or-commit> --to-ref <tag-or-commit>` (default
`HEAD`) to also compute a `repo_footprint` block (the Appendix table) by
bucketing `git diff --name-only` output into the same top-level folders the
Appendix uses (`Authoring/`, `SchemaRegistrationResources/`, `Generated/`,
`Examples/`, `E-R/`, `ReferenceValues/`, `Guides/`, `OsduStandardRecords/`). An
invalid ref doesn't fail the whole run — the rest of the facts are still written,
and a `WARNING: repo footprint not computed -- ...` line prints to stderr instead.

**The extraction is intentionally best-effort, not authoritative.** `ChangeReport.md`
is prose, not a data format — coordinated lists ("Added *A* and *B*" only credits
*A*), phrasing like "built on the new X fragment" instead of "Added X", and a verb
that follows the link instead of preceding it (`` [X](..) is updated with `` isn't
recognized) are all things the extractor will under-count or miss entirely. So will
the cross-cutting §8/§9 rollups (Reference Values, Documentation & Guides), which
don't correspond to any single `ChangeReport.md` category. That's why every
category's raw text rides along as its own file — always verify the drafted
numbers against it, not just against the extractor's totals.

## Step 2 — draft the report

Give the facts (the JSON *and* its category `.md` files) and this instruction to
Claude (the `release-report` skill in `.claude/skills/` on a machine with it
installed does this automatically via `/release-report M27.1`):

1. Read `Guides/ReleaseReports/_facts/<milestone>.json`, its sibling
   `_facts/<milestone>/*.md` category files, and the *raw* `ChangeReport.md`
   milestone section — the JSON's `entries`/`totals` are a map, not the territory;
   the `.md` files and `ChangeReport.md` are where the real content is.
2. Read [`M27.0.html`](M27.0.html) in full and reuse its CSS and structure verbatim
   (masthead, jump nav, stat strip, execbox, numbered category sections with ledger
   tables and `+ Technical detail` disclosures, appendix, footer). Only the *content*
   changes between reports — copy the `<style>` block unchanged.
3. Draft, in order:
   - **Masthead / subline** — milestone, tag, branch, commit, date, preparer.
   - **Stat strip** — New Schemas, Version Upgrades, Breaking Changes, New
     Reference Values, Migration Guides, Security Fixes, New Automated Processes.
     Use the extractor's totals as a starting point, but hand-verify each one
     against the raw text — M27.0.html's own stats-note is a good model for how to
     explain a number that isn't a raw count (e.g. "Breaking Changes is a subset of
     Version Upgrades, not a separate count").
   - **Execbox ("at a glance")** — one line per item that a consumer actually needs
     to know about, tagged `Breaking change` / `Fixed` / `New capability` /
     `New capability (MVP)` / `Process change` / `Reference data delivered` /
     `Documentation delivered` / `FYI`. This is a judgment call, not an extraction —
     re-read M27.0.html's execbox to calibrate what earns a line here versus what's
     "everything else is purely additive."
   - **Numbered category sections** — one per `ChangeReport.md` top-level category
     (they map closely 1:1; don't force a different grouping). Ledger table rows get
     a *condensed* one-line "what it does", not the full `ChangeReport.md` prose —
     that full prose goes in the `+ Technical detail` disclosure instead, lightly
     trimmed rather than pasted verbatim.
   - **§ Reference Values, § Documentation & Guides** — these don't exist as
     `ChangeReport.md` categories; they're rollups the drafter assembles by scanning
     every category's raw text for reference-data additions and migration
     guide/worked-example mentions, the same way M27.0.html's §8/§9 do.
   - **Appendix** — repo-wide file footprint, from the extractor's `repo_footprint`
     (if computed) or from a fresh `git diff --stat <from>...<to>`.
   - **Footer** — publish status/branch/commit, matching whatever's true at the time
     of drafting (leave `pending` styling if not yet pushed).
4. Save as `Guides/ReleaseReports/<milestone>.html` (e.g. `M27.1.html`) and show the
   user before treating it as final — this is a published, community-facing document.
5. Run `python Scripts/ReleaseReportIndexBuilder.py && python Scripts/PortalBuilder.py`
   and view the result before considering the report done: `public/` is a plain
   static site, but `file://` URLs are blocked by browser tooling, so serve it —
   `cd public && python -m http.server 8791` (any free port) — and open
   `http://localhost:8791/reports/<milestone>.html`, plus `index.html` to confirm
   the portal's Release Reports tile picks it up.

## Notes

- `.claude/` is gitignored repo-wide, so a `release-report` skill placed there is a
  personal convenience on whichever machine creates it — it does **not** ship with
  the repo. This README is the durable, shared source of truth for the process;
  keep it in sync if the workflow changes.
- `Guides/ReleaseReports/_facts/` is gitignored — it's regenerated from
  `ChangeReport.md` on demand, never a source of truth itself.
- `Scripts/PortalBuilder.py` and `Scripts/ReleaseReportIndexBuilder.py` live in
  `Scripts/` even though their only caller is `.gitlab-ci.yml`'s `pages` job, never
  a human directly. That's consistent with this repo's actual convention: the repo
  root is reserved for thin launcher shims — `OsduSchemaComposer.py`, `ErAnalyzer.py`,
  `Examples.py`, `ProposalGenerator.py`, `SchemaServiceBootstrapper.py` are each a
  few lines that just import and invoke a same-named class from `Scripts/`. Real
  implementation code, whether it's run by a human or by CI, belongs in `Scripts/`;
  root is not "wherever a script gets invoked from the command line."