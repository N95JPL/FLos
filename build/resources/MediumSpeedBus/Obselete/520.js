const { Map } = require("../../CanMap/canMap");
const { mediumSpeed } = require("../../VariableMaps/MediumSpeedVar");
const id = Map;

function ms520(msg) {
  const strId = msg.id;
  const arr = [...msg.data];
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
  arr[6] &= ~128; // Unrelated bit - Used by car for something to do with extreme temps
  arr[7] &= ~128; // Unrelated bit - Used to control Reirc Fan
  mediumSpeed.temperature.passenger =
    arr[7] / 2 < 16 ? "LOW" : arr[7] / 2 > 28 ? "HIGH" : arr[7] / 2;
  mediumSpeed.temperature.driver =
    arr[6] / 2 < 16 ? "LOW" : arr[6] / 2 > 28 ? "HIGH" : arr[6] / 2;
}

module.exports = ms520;
