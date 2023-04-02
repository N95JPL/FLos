const { entertainmentBus } = require("../VariableMaps/EntertainmentBusVar");

function eb728(msg) {
  const strId = msg.id;
  const arr = [...msg.data];

  var volumeRaw = arr[1];
  var volume = ((volumeRaw - 4) / 8).toFixed(0);

  if (entertainmentBus.volume != volume) {
    clearTimeout(entertainmentBus.volumeControl);
    entertainmentBus.volume = volume;
    entertainmentBus.volumeChange = true;
    entertainmentBus.volumeControl = setTimeout(() => {
      entertainmentBus.volumeChange = false;
    }, 2000);
  }


}

module.exports = eb728;
