import { fetchOfflineDittoBotsUsers } from "./api";
import { sendMessage } from "./controllers/send";
import { timeZone } from "./lib/utils/constant";
import { hasDittoBotUpdatedInLast3Minute } from "./lib/utils/workUtils";

const nodeCron = require("node-cron");

export const offlineDittoBotsJob = nodeCron.schedule('0 */15 * * * *', async () => {
    const res: any = await fetchOfflineDittoBotsUsers();
    if (res?.data?.getOfflineDittoBotsUsers?.length) {
      res?.data?.getOfflineDittoBotsUsers.map((grower: any) => {
          grower?.plants?.map(async (plant: any) => {
              if (plant.offline_notification === true && !hasDittoBotUpdatedInLast3Minute(plant.timestamp, timeZone)) {
                  await sendMessage(grower.phones[0]?.number, `Aviso: tu dittobot ${plant.name} esta apagado`);
              }
          })
      })
      }
    console.log('Cron job running every minute');
  });
  