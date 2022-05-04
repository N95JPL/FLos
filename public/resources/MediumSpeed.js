/* eslint-disable no-unused-vars */
const { mediumSpeed } = require("./VariableMaps/MediumSpeedVar");
const IDs = [968, 904, 680, 520, 40, 360, 72, 888];

function parseMediumSpeed(msg, canIds, window) {
  const strId = msg.id;
  const arr = [...msg.data];
  const id = JSON.parse(canIds);

  if (IDs.includes(msg.id)) {
    if (msg.id === 888) {
      mediumSpeed.time.hour =
        arr[5] - 128 < 10 ? "0" + (arr[5] - 128) : arr[5] - 128;
      mediumSpeed.time.minute = arr[6] < 10 ? "0" + arr[6] : arr[6];
      mediumSpeed.time.second = arr[7] < 10 ? "0" + arr[7] : arr[7];
    }
    if (msg.id === 72) {
      // 72 AKA 48
      // console.log('Interior: ' + arr[4] - 40)
      mediumSpeed.temperature.interior = arr[4] - 40;
    } else if (msg.id === 520) {
      // 208 AKA 520
      // #
      // 00 - Unknown
      // 00 - Unknown
      // 01 - Rear Heater
      // 2E - Auto (on) / Defrost / Heated Screen
      // 2E - Recirc (on)
      // 00 - Unknown
      // 12 - Driver Temp
      // 9A - Passenger Temp && Recric Vent
      for (const k in id[strId]) {
        // for each byte, set the relevant object key bit to the value set in the canbus message through bitwise operation
        for (let i = 0; i < id[strId][k].length; i++) {
          mediumSpeed.indicators[id[strId][parseInt(k)][i.toString()].handle] =
            arr[parseInt(k)] & id[strId][parseInt(k)][i.toString()].val;
        }
      }
      arr[6] &= ~64; // Unrelated bit - Used by car for something to do with extreme temps
      arr[7] &= ~64; // Unrelated bit - Used to control Reirc Fan
      mediumSpeed.temperature.passenger =
        (arr[7] - 128) / 2 < 16
          ? "LOW"
          : (arr[7] - 128) / 2 > 28
          ? "HIGH"
          : (arr[7] - 128) / 2;
      mediumSpeed.temperature.driver =
        arr[6] / 2 < 16 ? "LOW" : arr[6] / 2 > 28 ? "HIGH" : arr[6] / 2;
    }
  }
}
module.exports = parseMediumSpeed;
