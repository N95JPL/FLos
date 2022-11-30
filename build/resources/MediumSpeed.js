/* eslint-disable no-unused-vars */
const { mediumSpeed } = require("./VariableMaps/MediumSpeedVar");
const { Map } = require("./CanMap/canMap");
const IDs = [968, 904, 888, 680, 520, 360, 72, 40];

function parseMediumSpeed(msg, window) {
  const strId = msg.id;
  const arr = [...msg.data];
  const id = Map;

  if (IDs.includes(msg.id)) {
    if (msg.id === 40) {
      if (mediumSpeed.brightness.auto) {
        mediumSpeed.brightness.adjustedLight = Math.round(
          (arr[2] / 255) * mediumSpeed.brightness.offset * 100
        );
      }
    } else if (msg.id === 72) {
      mediumSpeed.temperature.interior = arr[4] - 40;
    } else if (msg.id === 520) {
      // 520 AKA 208
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
    } else if (msg.id === 888) {
      mediumSpeed.time.hour =
        arr[5] - 128 < 10 ? "0" + (arr[5] - 128) : arr[5] - 128;
      mediumSpeed.time.minute = arr[6] < 10 ? "0" + arr[6] : arr[6];
      mediumSpeed.time.second = arr[7] < 10 ? "0" + arr[7] : arr[7];
    } else if (msg.id === 680) {
      for (let k in id[strId]) {
        //for each byte, set the relevant object key bit to the value set in the canbus message through bitwise operation
        for (let i = 0; i < id[strId][k].length; i++) {
          mediumSpeed.vehicleSettings[
            id[strId][parseInt(k)][i.toString()].handle
          ] = !!(arr[parseInt(k)] & id[strId][parseInt(k)][i.toString()].val);
        }
      }
    }
  }
}
module.exports = parseMediumSpeed;
