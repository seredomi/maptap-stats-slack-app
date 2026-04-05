import { Manifest } from "deno-slack-sdk/mod.ts";
import GreetingWorkflow from "./workflows/greeting_workflow.ts";

/**
 * The app manifest contains the app's configuration. This
 * file defines attributes like app name and description.
 * https://api.slack.com/automation/manifest
 */
export default Manifest({
  name: "maptap stats",
  description: "generate MapTap statistics",
  icon: "assets/maptap-icon.png",
  workflows: [GreetingWorkflow],
  outgoingDomains: [],
  botScopes: ["commands", "chat:write", "channels:history"],
  longDescription: `generate MapTap statistics!

    run \`/maptap-stats\` in the #maptap channel to see each tapper's lowest, average, and highest scores

    optional "flags" - these should work in any order after the \`/maptap-stats\` command

    - tag specific users to only see only their stats. otherwise it will report on every user who has played

    - optionally specify a date range in the format \`MM/DD/YY:MM/DD/YY\`

    - add the flag \`-v\` to see more in-depth stats on all 5 maptap rounds`,
});
