import cron from "node-cron";
import { clearExpiredBans } from "../app/modules/Users/users.service.js";

// Schedule cron job to run every minute
cron.schedule("* * * * *", () => {
  console.log("Running cron job to clear expired bans at", new Date().toLocaleString());
  clearExpiredBans();
});
