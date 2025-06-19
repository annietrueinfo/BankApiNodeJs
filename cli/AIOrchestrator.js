// cli/ai-orchestrator.js
console.log("🧠 Stage 1 Orchestrator running...");

import { runIngest } from "./lib/ingest.js";
await runIngest();