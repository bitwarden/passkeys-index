# Contributing to Passkey Index

Thanks for helping grow the list! This repo tracks sites, services, and software that support
passkeys. Contributions happen via pull request against `README.md` — there's no backing database
or CMS, the README tables *are* the data.

Before you start, skim the existing tables so you don't duplicate an entry, and check
[open pull requests](https://github.com/bitwarden/passkeys-index/pulls) so you don't duplicate
someone else's in-flight submission.

## What belongs where

The README has four tables. Add your entry to whichever one fits:

| Table | For |
| --- | --- |
| **Platforms** | OS / browser-level passkey support (e.g. "Safari," "Android") |
| **Websites supporting passkey login** | Individual sites, apps, and SaaS products |
| **Developer tools** | SDKs, auth platforms, and libraries devs use to *add* passkey support to their own product |
| **Security keys** | Physical/hardware authenticators |

Most contributions land in **Websites supporting passkey login** — the rest of this guide assumes
that table, but the same fields apply everywhere.

## Entry Guidelines

- **Logo** — an SVG in `public/logos/`, formatted like the template SVG: `public/logos/_template.svg` (see below).
- **Name** — the company or product's common name, not the domain (e.g. `Adobe`, not
   `account.adobe.com`).
- **Site URL/Link** — prefer a link to *documentation proving passkey support* (a help center article, blog
   post, or dev docs) over the bare homepage. Only link the homepage if no such documentation
   exists.
- **Features** — `Login` and/or `MFA`, using the existing badge images in `public/tags/`
   (`login.svg`, `mfa.svg`). Use `MFA` when passkeys are offered as a *second* factor alongside a
   password; use `Login` when a passkey can be used as the primary/sole credential.
   - `![Login](/public/tags/login.svg "Login")`
   - `![MFA](/public/tags/mfa.svg "MFA")`

Sort new rows alphabetically within their table by display name — it makes diffs easier to review
and merge conflicts less likely.

### Website Row template

```markdown
| ![logo](/public/logos/example.svg) | Example Co | [example.com/help/passkeys](https://example.com/help/passkeys) | ![Login](/public/tags/login.svg "Login") ![MFA](/public/tags/mfa.svg "MFA") |
```

Drop the `![MFA]...` badge entirely if the service only supports one mode.

## Verifying passkey support

This is the part reviewers will actually push back on, so do it up front:

- Don't take a company's marketing page at face value — link to the specific support article,
  changelog entry, or docs page that describes *how* to set up or use a passkey there.
- If you can, verify it yourself by attempting to add a passkey to an account before submitting.
- If the only evidence is a forum post, third-party blog, or a feature that's region/beta-gated,
  say so in the PR description so reviewers know what they're merging.

## Adding a logo

Logos live in `public/logos/<name>.svg`, named to match the entry (lowercase, hyphenated — e.g.
`air-new-zealand.svg`, `boursobank.svg`). `public/logos/_template.svg` is the template for the background.
```svg
<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="20" height="20" rx="4" fill="#F3F6F9" />
  <!-- Logo SVG goes here -->
</svg>
```

**Where to get the source SVG:** Most companies publish one in a press/brand kit; failing that,
[Simple Icons](https://simpleicons.org/) or [Wikimedia Commons](https://commons.wikimedia.org/)
often has a clean vector version. Trace or vectorize as a last resort — don't submit a raster
image converted to SVG (`<image>` embedding a PNG/base64 blob).

**Brand Colors**: Be sure to match the logo and background fill colors to the company's brand
guidelines. Most companies publish brand guidelines you can follow to find the exact color codes.

**Optimize the SVG with SVGO**: Be sure to optimize the SVG so that it's space-efficient.
You can use this npx command as a convenience that uses our pre-defined SVGO config:
```bash
npx svgo --config svgo.config.mjs public/logos/example.svg -o public/logos/example.svg
```

## Before opening the PR

- Verify that the logo does not break the sizing of the README table or the website:
   - Preview the markdown on the README to verify the Logo column is correctly sized and does not overgrow from your entry.
   - Run the site locally (`bun install && bun dev`, per `.nvmrc`/`package.json`) and confirm your row renders correctly, and that the logo isn't stretched or oversized.
- One entry (or one clearly related batch) per PR — it's much faster to review and merge than a
  PR that bundles many unrelated additions.
- In the PR description, link the documentation you used to confirm passkey support, per the
  section above.