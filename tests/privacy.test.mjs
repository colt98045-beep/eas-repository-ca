// /privacy page (privacy.html, generated from eas-launcher/privacy/policy.html).
import fs from "node:fs";
const ok = (c, m) => { console.log((c ? "PASS " : "FAIL ") + m); if (!c) process.exitCode = 1; };
const page = fs.readFileSync("privacy.html", "utf8");
ok(page.includes("Effective date: 24/11/2026"), "effective date DD/MM/YYYY");
ok(page.includes("mailto:colt98045@gmail.com"), "contact email");
for (const w of ["30 days", "full IP address", "PIPEDA", "GDPR", "California", "not legal advice"]) ok(page.includes(w), `mentions ${w}`);
ok(!/<script/i.test(page), "no scripts");
const ignore = fs.readFileSync(".assetsignore", "utf8").split(/\r?\n/).map((l) => l.trim());
ok(ignore.includes("!privacy.html"), "privacy.html is published");
ok(ignore.includes("*"), "everything else still ignored");
const index = fs.readFileSync("index.html", "utf8");
ok(index.includes('href="/privacy"'), "index links to /privacy");
ok(/const CACHE = "eas-ca-v\d+"/.test(fs.readFileSync("sw.js", "utf8")), "service worker cache name present");
if (!process.exitCode) console.log("CA privacy tests passed");
