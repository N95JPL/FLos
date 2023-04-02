const { entertainmentBus } = require("../VariableMaps/EntertainmentBusVar");
const HEX2DEC = hex => parseInt(hex, 16);
var messageBuilder = []

function eb692(msg) {
  const strId = msg.id;
  var arrData = [...msg.data];

  // for (var i = 0; i < arrData.length; i++) {
  //   arrData[i] = HEX2DEC(arrData[i]);
  // }
  if (arrData[0] == 16 || arrData[0] == 5) {
    messageBuilder = []
  }

  if (arrData[0] == 5) {
    messageBuilder.push(arrData[0])
    messageBuilder.push(arrData[1])
    messageBuilder.push(arrData[2])
    messageBuilder.push(arrData[3])
    messageBuilder.push(arrData[4])
    messageBuilder.push(arrData[5])
    messageBuilder.push(arrData[6])
    messageBuilder.push(arrData[7])
    parseMessage(messageBuilder)
    messageBuilder = []
  } else {
    for (var i = 1; i < arrData.length; i++) {
      if (arrData[i] == 0) {
        parseMessage(messageBuilder)
        //console.log(messageBuilder)
        messageBuilder = []
        break;
      }
      messageBuilder.push(arrData[i])
    }
  }
  // 16 = Start of new Block
  // 00 = End of Block
  // 5 = Error... ;*11000 = Searching ... k*11000 = No Reception
  // k - Station Name
  // j - DAB Block
  // E; - Text
  // *311 = DAB
  // *111 = FM
  // *1211 = BT Info
}

function parseMessage(input) {
  var stationName = "";
  var stationText = "";
  var stationBlock = "";
  //5join("").toString(16)
  if (input[0] == 5) {
    if (input[1] == 107) { //k
      stationName = "No Reception"
      if (input[2] == 3) {
        entertainmentBus.fmStation = stationName;
      } else if (input[2] == 1) {
        entertainmentBus.dabStation = stationName;
      }
    } else if (input[1] == 59) { //;
      stationName = "Searching..."
      if (input[2] == 3) {
        entertainmentBus.fmStation = stationName;
      } else if (input[2] == 1) {
        entertainmentBus.dabStation = stationName;
      }
    }
    entertainmentBus.block = "";
    entertainmentBus.text = "";
  } else {
    for (var i = 1; i < input.length; i++) {
      if (input[0] == 69) { //E
        stationText += String.fromCharCode(input[i]);
      } else if (input[1] == 107) { //k - Station Name
        stationName += String.fromCharCode(input[i]);
      } else if (input[1] == 106) { //j - DAB Block
        stationBlock += String.fromCharCode(input[i]);
      }
    }

    if (input[1] == 107) { //Station
      stationName = stationName.substring(4, stationName.length)
      stationName = stationName.trim();
      entertainmentBus.text = "";
      entertainmentBus.block = "";
      if (input[2] == 1) {
        entertainmentBus.fmStation = stationName;
      } else if (input[2] == 3) {
        entertainmentBus.dabStation = stationName;
      }
    } else if (input[1] == 106) { //DAB Block
      stationBlock = stationBlock.substring(4, stationBlock.length)
      stationBlock = stationBlock.trim();
      entertainmentBus.block = stationBlock;
    } else if (input[0] == 69) { //Text
      stationText = stationText.substring(4, stationText.length)
      stationText = stationText.trim();
      entertainmentBus.text = stationText;
    }
  }
  console.log("Station: " + entertainmentBus.fmStation + ":" + entertainmentBus.dabStation + " Block: " + entertainmentBus.block + " Text: " + entertainmentBus.text)
}
module.exports = eb692;
