const fs = require("fs");
const folders = fs
    .readdirSync("./text", { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
const xmlParser = require("xml2json");

var combined = {};
const d = new Date();
var startTime = d.getTime();
var endTime;
var numberFiles = 0;
var numberFolders = folders.length;

for (const a in folders) {
    console.log("Processing: " + folders[a] + " | " + a + "/" + folders.length);
    const files = fs
        .readdirSync("./text/" + folders[a] + "/")
        .filter((fn) => fn.includes(".xml"));
    for (const b in files) {
        numberFiles++;
        console.log("Processing: " + files[b] + " | " + b + "/" + files.length)
        var data = fs.readFileSync("./text/" + folders[a] + "/" + files[b]);
        // console.log(files[b]);
        const xmlObj = xmlParser.toJson(data, {
            reversible: true,
            object: true,
            coerce: true,
            alternateTextNode: "value",
        });
        if (xmlObj.tm) {
            var name = xmlObj.tm.id;
            combined[name] = {}
            for (var x = 0; x < xmlObj.tm.tu.length; x++) {
                combined[name][xmlObj.tm.tu[x]["xmlns:lang"]] = xmlObj.tm.tu[x].value
            }
        } else {
            // console.log(xmlObj)
            for (var y = 0; y < xmlObj.text.mnemonic.length; y++) {
                // console.log(xmlObj)
                var name = xmlObj.text.mnemonic[y].id;
                if (!combined[name]) {
                    combined[name] = {}
                }
                // console.log(name)
                var lang1 = files[b].split("_")[2].toLocaleLowerCase();
                var lang = lang1.split(".")[0];

                combined[name][lang] = xmlObj.text.mnemonic[y].value
            }

        }
        // console.log(combined)
    }
}
var output = JSON.stringify(combined, null, 4);
fs.writeFileSync(
    "./text/DecodeCCF.json", output
);
const q = new Date();
endTime = q.getTime();
var duration = (endTime - startTime)
console.log("Finished in " + duration + " milliseconds");
console.log("Processed " + numberFiles + " files in " + numberFolders + " folders");
// {
//     "tm": {
//         "id": "@J_I_ISO15031_FAULT_TYPE_0",
//             "tu":
//         [
//             {
//                 "xmlns:lang": "eng",
//                 "value": "General failure information - no sub type information."
//             }, {
//                 "xmlns:lang": "nld",
//                 "value": "Informatie over algemeen defect - geen informatie op subniveau."
//             }, {
//                 "xmlns:lang": "fra",
//                 "value": "Panne générale - pas d'information plus précise."
//             }, {
//                 "xmlns:lang": "deu",
//                 "value": "Allgemeine Störungsinformation - keine Untertypinformation."
//             }, { "xmlns:lang": "ita", "value": "Informazioni guasti generali - nessuna informazione di sottotipo." }, { "xmlns:lang": "jpn", "value": "��ʌ̏��� �| �T�u �^�C�v���Ȃ�" }, { "xmlns:lang": "ptg", "value": "Informações gerais sobre a falha - sem informações sobre o subtipo." }, { "xmlns:lang": ""rus","value":"�������� �� ����� ������������� - �������� �� ������� ������� �����������."},{"xmlns: lang":"esp","value":"Información de fallo general: no hay información sobre tipo secundario."},{"xmlns: lang":"chs","value":"һ�������Ϣ - ����������Ϣ��"}]}}

