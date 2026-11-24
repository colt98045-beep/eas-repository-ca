#!/usr/bin/env node
// Lock or unlock a site around a deploy (reason "Update", auto-expires after 20 minutes).
//   DEPLOY_LOCK_TOKEN=... node scripts/deploy-lock.mjs lock   [--site launcher|us|ca] [--ref <sha>]
//   DEPLOY_LOCK_TOKEN=... node scripts/deploy-lock.mjs unlock [--site launcher|us|ca] [--ref <sha>]
// Env: DEPLOY_LOCK_TOKEN (required unless --optional), DEPLOY_LOCK_URL (default: the launcher),
//      DEPLOY_LOCK_SITE (default site). With --optional, a missing token prints a note and exits 0.
// An unlock never clears a manual lock set from /admin; the server enforces that.
import { execSync } from "node:child_process";

const DEFAULT_URL = "https://eas-launcher.colt98045.workers.dev";
const DEFAULT_SITE = "ca";

export function parseArgs(argv, env = process.env) {
  const args = argv.slice();
  const action = args.shift();
  const opts = { action, site: env.DEPLOY_LOCK_SITE || DEFAULT_SITE, ref: "", optional: false };
  while (args.length) {
    const a = args.shift();
    if (a === "--site") opts.site = String(args.shift() || "");
    else if (a === "--ref") opts.ref = String(args.shift() || "");
    else if (a === "--optional") opts.optional = true;
    else throw new Error(`unknown argument ${a}`);
  }
  if (opts.action !== "lock" && opts.action !== "unlock") throw new Error("usage: deploy-lock.mjs lock|unlock [--site s] [--ref r] [--optional]");
  if (!["launcher", "us", "ca"].includes(opts.site)) throw new Error("--site must be launcher, us, or ca");
  return opts;
}

function gitRef() {
  try {
    return execSync("git rev-parse --short HEAD", { stdio: ["ignore", "pipe", "ignore"] }).toString().trim();
  } catch {
    return "";
  }
}

export async function run(argv, env = process.env, fetchImpl = fetch) {
  const opts = parseArgs(argv, env);
  const token = env.DEPLOY_LOCK_TOKEN || "";
  if (!token) {
    if (opts.optional) {
      console.log("deploy-lock: DEPLOY_LOCK_TOKEN is not set; skipping");
      return 0;
    }
    console.error("deploy-lock: DEPLOY_LOCK_TOKEN is not set");
    return 2;
  }
  const url = `${(env.DEPLOY_LOCK_URL || DEFAULT_URL).replace(/\/+$/, "")}/api/deploy-lock`;
  const ref = opts.ref || env.GITHUB_SHA?.slice(0, 7) || gitRef();
  const res = await fetchImpl(url, {
    method: "POST",
    headers: { authorization: `Bearer ${token}`, "content-type": "application/json" },
    body: JSON.stringify({ action: opts.action, site: opts.site, ref }),
  });
  const text = await res.text();
  if (!res.ok) {
    console.error(`deploy-lock: ${opts.action} ${opts.site} failed: HTTP ${res.status} ${text.slice(0, 200)}`);
    return 1;
  }
  console.log(`deploy-lock: ${opts.action} ${opts.site}: ${text}`);
  return 0;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  run(process.argv.slice(2)).then((code) => process.exit(code), (err) => {
    console.error(`deploy-lock: ${err.message}`);
    process.exit(1);
  });
}
