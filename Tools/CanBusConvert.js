const fs = require("fs");
const readline = require("readline");
const hex2dec = hex => parseInt(hex, 16);
const files = fs.readdirSync("./CanDump/").filter((fn) => fn.includes("can"));
var fileName;
// console.log(files)
async function processLineByLine() {
  for (const a in files) {
    if (files[a].includes("converted")) {
      console.log(
        "Skipping: " + files[a] + " because it has already been converted!"
      );
      return;
    }
    let fileLines = "";
    let newFile = "Timestamp,Differance,Node ID,Message,ID0,ID1,ID2,ID3,ID4,ID5,ID6,ID7,Node Dec ID,ID0,ID1,ID2,ID3,ID4,ID5,ID6,ID7\n";
    let lastTime = 0;
    let i = 0;
    const fileStream = fs.createReadStream("./CanDump/" + files[a]);
    console.log("Converting: " + files[a] + "!");
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });
    var csvFileName = files[a].split(".");
    csvFileName = csvFileName[0] + ".csv";
    if (files[a].includes(".csv")) {
      newFile = "Timestamp,Differance,Node ID,Message,ID0,ID1,ID2,ID3,ID4,ID5,ID6,ID7,Node Dec ID,ID0,ID1,ID2,ID3,ID4,ID5,ID6,ID7\n";
      const fileNameConv = files[a].split("-");

      const time = fileNameConv[1].replace(".csv");
      const fileTime = new Date(parseInt(time))
        .toTimeString()
        .slice(0, 9)
        .replace(":", "-")
        .replace(":", "-");
      // Note: we use the crlfDelay option to recognize all instances of CR LF
      // ('\r\n') in input.txt as a single line break.
      fileName = fileNameConv[0] + "-" + fileTime;
      for await (const line of rl) {
        if (!line.includes("Timestamp")) {
          // Timestamp,Differance,Node ID,Message
          const msg = line.split(",");
          // eslint-disable-next-line no-new-wrappers
          const newID =
            parseInt(msg[2]).toString(16) < 100
              ? "0" + parseInt(msg[2]).toString(16)
              : parseInt(msg[2]).toString(16);
          var parseMsg = []
          parseMsg = msg[3].match(/.{1,2}/g)
          newFile +=
            msg[0] +
            "," +
            msg[1] +
            "," +
            parseInt(msg[2]).toString(16) +
            "," +
            parseMsg.join(" ") +
            "," +
            parseMsg[0] + "," +
            parseMsg[1] + "," +
            parseMsg[2] + "," +
            parseMsg[3] + "," +
            parseMsg[4] + "," +
            parseMsg[5] + "," +
            parseMsg[6] + "," +
            parseMsg[7] + "," +
            msg[2] + "," +
            hex2dec(parseMsg[0]) + "," +
            hex2dec(parseMsg[1]) + "," +
            hex2dec(parseMsg[2]) + "," +
            hex2dec(parseMsg[3]) + "," +
            hex2dec(parseMsg[4]) + "," +
            hex2dec(parseMsg[5]) + "," +
            hex2dec(parseMsg[6]) + "," +
            hex2dec(parseMsg[7]) + "," +
            '\n';
          fileLines +=
            i < 2
              ? ""
              : msg[0] -
                lastTime +
                ":" +
                fileNameConv[0] == "canBusMS" ? "cansend can1 " : "cansend can0" +
                newID +
                "#" +
                msg[3] +
              "\n";
          lastTime = msg[0];
          i++;
        }
      }
    } else if (files[a].includes(".log")) {
      newFile = "Timestamp,Node ID,Message,ID0,ID1,ID2,ID3,ID4,ID5,ID6,ID7,Node Dec ID,ID0,ID1,ID2,ID3,ID4,ID5,ID6,ID7\n";

      fileName = "ms" + files[a].replace(".log", "");
      for await (const line of rl) {
        // Timestamp,Differance,Node ID,Message
        const msg = line.split(" ");
        // eslint-disable-next-line no-new-wrappers
        const newID =
          parseInt(msg[2]).toString(16) < 100
            ? "0" + parseInt(msg[2]).toString(16)
            : parseInt(msg[2]).toString(16);
        var canID = msg[2].substring(0, 3);
        var canMsg = msg[2].substring(4, 20);
        var parseMsg1 = []
        parseMsg1 = canMsg.match(/.{1,2}/g)
        newFile +=
          msg[0] +
          "," +
          canID +
          "," +
          parseMsg1.join(" ") +
          "," +
          parseMsg1[0] + "," +
          parseMsg1[1] + "," +
          parseMsg1[2] + "," +
          parseMsg1[3] + "," +
          parseMsg1[4] + "," +
          parseMsg1[5] + "," +
          parseMsg1[6] + "," +
          parseMsg1[7] + "," +
          hex2dec(canID) + "," +
          hex2dec(parseMsg1[0]) + "," +
          hex2dec(parseMsg1[1]) + "," +
          hex2dec(parseMsg1[2]) + "," +
          hex2dec(parseMsg1[3]) + "," +
          hex2dec(parseMsg1[4]) + "," +
          hex2dec(parseMsg1[5]) + "," +
          hex2dec(parseMsg1[6]) + "," +
          hex2dec(parseMsg1[7]) + "," +
          '\n';
        fileLines +=
          1 +
          ":" +
          "cansend can1 " +
          msg[2] +
          '\n';

        i++;
      }
    }
    // fs.unlinkSync(files[a])
    fs.writeFileSync("./CanDump/Converted/converted-" + csvFileName, newFile);
    fs.writeFileSync("./CanDump/CanBus Test Files/" + fileName + ".txt", fileLines);
    console.log("Converting complete - " + fileName);
  }
}



function hex2bin(hex) {
  return parseInt(hex, 16).toString(2).padStart(8, "0");
}
function hex2a(str1) {
  var hex = str1.toString();
  var str = "";
  for (var n = 0; n < hex.length; n += 2) {
    str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
  }
  return str;
}
processLineByLine();
