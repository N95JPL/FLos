const fs = require("fs");
const readline = require("readline");

const files = fs.readdirSync("./CanDump/").filter((fn) => fn.includes(".csv"));
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
    let newFile = "";
    let lastTime = 0;
    let i = 0;
    const fileStream = fs.createReadStream("./CanDump/" + files[a]);
    console.log("Converting: " + files[a] + "!");
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });
    const fileNameConv = files[a].split("-");
    const time = fileNameConv[1].replace(".csv");
    const fileTime = new Date(parseInt(time))
      .toTimeString()
      .slice(0, 9)
      .replace(":", "-")
      .replace(":", "-");
    const fileName = fileNameConv[0] + "-" + fileTime;
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.

    for await (const line of rl) {
      // Timestamp,Differance,Node ID,Message
      const msg = line.split(",");
      // eslint-disable-next-line no-new-wrappers
      const newID =
        parseInt(msg[2]).toString(16) < 100
          ? "0" + parseInt(msg[2]).toString(16)
          : parseInt(msg[2]).toString(16);
      newFile +=
        msg[0] +
        "," +
        msg[1] +
        "," +
        msg[2] +
        "," +
        msg[3] +
        ',"' +
        hex2a(msg[3]) +
        '","' +
        hex2bin(msg[3]) +
        '"\n';
      fileLines +=
        i < 2
          ? ""
          : msg[0] -
          lastTime +
          ":" +
          "cansend can1 " +
          newID +
          "#" +
          msg[3] +
          "\n";
      lastTime = msg[0];
      i++;
    }
    // fs.unlinkSync(files[a])
    fs.writeFileSync("./CanDump/Converted/converted-" + files[a], newFile);
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
