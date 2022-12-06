const fs = require("fs");
const files = fs
  .readdirSync("./public/resources/XML/")
  .filter((fn) => fn.includes(".xml"));
const xmlParser = require("xml2json");

for (const a in files) {
  console.log("Processing: " + files[a] + " | " + a + "/" + files.length);
  var data = fs.readFileSync("./public/resources/XML/CCF-XML" + files[a]);
  const xmlObj = xmlParser.toJson(data, {
    reversible: true,
    coerce: true,
    alternateTextNode: "value",
  });
  fs.writeFileSync(
    "./public/resources/XML/CCF/" + files[a].replace(".xml", "") + ".json",
    xmlObj
  );
}
