import { fetchOfflineDittoBotsUsers } from "./api";
import { sendMessage } from "./controllers/send";
import { PRIMARY_ONCALL_NUMBER, timeZone } from "./lib/utils/constant";
import { hasDittoBotUpdatedInLast3Minute } from "./lib/utils/workUtils";

const nodeCron = require("node-cron");

export const offlineDittoBotsJobEvery5Min = nodeCron.schedule('0 */5 * * * *', async () => {
    const res: any = await fetchOfflineDittoBotsUsers();
    if (res?.data?.getOfflineDittoBotsUsers?.length) {
      res?.data?.getOfflineDittoBotsUsers.map((grower: any) => {
          grower?.plants?.map(async (plant: any) => {
              if (plant.offline_notification === true && !hasDittoBotUpdatedInLast3Minute(plant.timestamp, timeZone)) {
                  await sendMessage(grower.phones[0]?.number, `Aviso: tu dittobot ${plant.name} esta apagado`);
                  if (grower?.phones[1]?.number) await sendMessage(grower.phones[1]?.number, `Aviso: tu dittobot ${plant.name} esta apagado`);
                  await sendMessage(PRIMARY_ONCALL_NUMBER, `Problema: dittobot apagado. User name: ${grower.name}, User id: ${grower.id} plant ID: ${plant.id}`);
                  console.log('Cron job running every minute');
              }
          })
      })
      }

  });
  