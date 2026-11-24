# Contributing

Thanks for helping improve the LeadJourney skill for OpenClaw.

## How changes land

- `main` is protected. Every change goes through a pull request, and a LeadJourney maintainer reviews and merges it.
- Pull requests are squash-merged.
- The **Validate skill** check must pass.
- LeadJourney publishes new versions to ClawHub after a merge.

## Making a change

1. Fork the repository and create a branch.
2. Edit `leadjourney/SKILL.md`. Keep `name` and `description` in its frontmatter.
3. Run `node scripts/validate.mjs`.
4. Test it: copy `leadjourney/` into your OpenClaw skills folder and start a new session.
5. Bump `version` in the frontmatter and add a `CHANGELOG.md` entry.
6. Open a pull request.

## What we will not merge

- API keys, tokens or other credentials in any file.
- Instructions that point OpenClaw at any server other than LeadJourney's hosted one.
- Invisible or zero-width characters, which ClawHub's scanners flag.
