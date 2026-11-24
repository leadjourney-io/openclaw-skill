# LeadJourney for OpenClaw

An [OpenClaw](https://openclaw.ai) skill that connects your agent to [LeadJourney](https://leadjourney.io) through LeadJourney's official remote [Model Context Protocol](https://modelcontextprotocol.io/) server.

LeadJourney is marketing attribution: it follows a click from the ad or post that produced it to the lead it became and the revenue that lead eventually earned. Ask which channels, campaigns and creatives bring leads and revenue, read a single lead's journey, run custom reports, read live ad platform data, and set up tracking on a website.

## Install

From ClawHub:

```bash
openclaw skills install @leadjourney/leadjourney
```

Then ask your agent to connect LeadJourney, or connect it yourself:

```bash
openclaw mcp add leadjourney --url https://api.leadjourney.io/mcp --transport streamable-http --auth oauth
openclaw mcp login leadjourney
```

`login` prints a LeadJourney sign-in link. Open it, sign in, and approve the connection. There is no API key or client ID to configure.

## Before you connect

You need a LeadJourney account with access to a workspace. Which tools appear depends on the permissions your account holds in the active workspace.

Sign in from the OpenClaw CLI, or from a gateway on this machine. A gateway reached through its own public domain cannot complete LeadJourney's sign-in; run `openclaw mcp login leadjourney` locally instead.

## What the agent can do

| Category | Capabilities |
| --- | --- |
| Workspaces | See the connected account, list workspaces, switch the active one, check what the plan includes |
| Reports | Traffic channel, campaign and ad creative reports with leads, conversions, spend and revenue |
| Report builder | Any metric by any dimension, filtered and grouped, beyond the fixed reports |
| Leads | Search leads by email, phone or name and read a lead's full journey |
| Live ad data | Read Google, Meta and other connected ad platforms live: metrics, breakdowns, settings, recommendations |
| Dashboards | Create dashboards and add or remove reports |
| Tracking | Detect a site's CMS and form builder, verify the tracking script, manage tracking domains, build UTM and short links |
| Apps | Read app status, manage triggers and send-back rules, map events onto CRM stages |
| Automations & agents | Create, test, dry-run and run automations and AI agents |

The hosted server is the source of truth for tool names and schemas.

## Notes

- Tool calls run as the LeadJourney user who signed in and cannot exceed that user's workspace permissions.
- Changes to live ad accounts are only ever requested: nothing on an ad account changes until a person confirms it inside LeadJourney.
- Revoke access at any time in LeadJourney under **Atlas settings → MCP → Connected applications**, and remove it from OpenClaw with `openclaw mcp logout leadjourney`.

## Privacy and terms

The skill sends your requests to LeadJourney's MCP server, which answers them from your LeadJourney workspace. How LeadJourney handles that data is set out in its privacy policy.

- Privacy policy: https://leadjourney.io/privacy-policy/
- Terms and conditions: https://leadjourney.io/terms-conditions

## Contributing and security

See [CONTRIBUTING.md](CONTRIBUTING.md). Report security issues privately as described in [SECURITY.md](SECURITY.md).

## License

[MIT-0](LICENSE), as ClawHub requires for every published skill.
