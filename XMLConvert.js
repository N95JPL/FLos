<script type='text/javascript' src="https://cdn.rawgit.com/abdmob/x2js/master/xml2json.js"></script>

const fs = require('fs')
const readline = require('readline')

const files = fs.readdirSync('./public/resources/XML/').filter(fn => fn.includes('.xml'))

for (const a in files) {
    var data = fs.readFileSync(a).toString();
    var xmlData = "";
    if (data !== null && data.trim().length !== 0) {
        try {
            xmlData = parseXML(data);
        } catch (e) {
            throw e;
        }
        var x2js = new X2JS();
        data = x2js.xml2json(xmlData);
        console.log(data);
    }
    fs.writeFileSync(files[a].replace('.xml', '') + ".js", data)
}