const fs = require('fs')
const files = fs.readdirSync('./public/resources/XML/').filter(fn => fn.includes('.xml'))
const xmlParser = require("xml2json")

for (const a in files) {
    console.log("Processing: " + files[a] + " | " + a + "/" + files.length)
    fs.readFileSync('./public/resources/XML/' + files[a], function (err, data) {
        const xmlObj = xmlParser.toJson(data, { reversible: true, object: true, coerce: true, alternateTextNode: "text" })
        fs.writeFileSync('./public/resources/XML/' + files[a].replace('.xml', '') + ".json", JSON.stringify(xmlObj))
    });
}

