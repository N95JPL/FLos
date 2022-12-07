const fs = require("fs");
const files = fs
  .readdirSync("../Tools/temp")
  .filter((fn) => fn.includes(".exml-decrypted"));
const xmlParser = require("xml2json");

for (const a in files) {
  console.log("Processing: " + files[a] + " | " + a + "/" + files.length);
  var data = fs.readFileSync("../Tools/temp/" + files[a]);
  const xmlObj = xmlParser.toJson(data, {
    reversible: true,
    coerce: true,
    alternateTextNode: "value",
  });
  fs.writeFileSync(
    "../public/resources/XML/CCF-XML/" + files[a].replace(".exml-decrypted", "") + ".json",
    xmlObj
  );
}
