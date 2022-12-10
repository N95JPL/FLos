const { Map } = require("../CanMap/canMap");
const { mediumSpeed } = require("../VariableMaps/MediumSpeedVar");
const id = Map;

function ms888(msg) {
  const strId = msg.id;
  const arr = [...msg.data];
  var hour = bitwise(arr[5], 32);
  var minute = bitwise(arr[6], 32);
  var second = bitwise(arr[7], 32);
  mediumSpeed.time.hour =
    hour < 10 ? "0" + hour : hour;
  mediumSpeed.time.minute = minute < 10 ? "0" + minute : minute;
  mediumSpeed.time.second = second < 10 ? "0" + second : second;
}

function bitwise(hex, bit) {
  var bits = bit / 8
  var zero = ""
  var temp = parseInt(hex, 16).toString(2).padStart(8, '0');
  for (var i = 0; i < bits; i++) {
    zero += "0"
  }
  temp = zero + temp.substring(bits - 1, 9)
  var rtn = parseInt(temp, 2);
  console.log(rtn)
  return rtn;
}
// [1,2,4,8,16,32,64,128]

module.exports = ms888;