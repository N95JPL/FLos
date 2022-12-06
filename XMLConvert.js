const fs = require('fs')
const readline = require('readline')

const files = fs.readdirSync('./public/resources/XML/').filter(fn => fn.includes('.xml'))

for (const a in files) {
    console.log(files[a])
    var data = fs.readFileSync('./public/resources/XML/' + files[a]).toString();
    var obj = parseXML(data)
    console.log(obj)
    var blob = JSON.stringify(obj, null, 2)
    console.log(JSON.parse(blob))
    fs.writeFileSync('./public/resources/XML/' + files[a].replace('.xml', '') + ".json", blob)
}

function parseXML(data) {
    var data = data.toString("utf8");
    var sax = require("sax");

    var parser = sax.parser(true, { trim: true });
    parser.onerror = function (e) {
        console.log("XML error: ", e.toString());
        return {};
    };

    var ctag = null;
    var xmlroot = null;

    parser.ontext = function (t) {
        if (ctag && t.length > 0) {
            ctag["data"] = t;
        }
    }

    parser.onopentag = function (node) {
        var name = node.name;
        var parent = ctag;
        ctag = {};
        ctag.data = [];
        ctag.idFlag = false;   // same tags at same level
        if (xmlroot === null) {
            xmlroot = {};
            xmlroot[name] = ctag;
        }
        else {
            ctag.parent = parent;
            var xtag = {};
            xtag[name] = ctag;
            parent.data.push(xtag);
        }

        for (var k in node.attributes) {
            ctag[k] = node.attributes[k];
        }

        while (parent && !parent.idFlag) {
            for (var i = 0; i < parent.data.length - 1; i++) {
                var elem = parent.data[i];
                for (var key in elem) {
                    if (key == name) parent.idFlag = true;
                    break;
                }
            }
            break;
        }
    };

    parser.onclosetag = function (name) {
        if (ctag.idFlag == false) // only one child / all childs different
        {
            for (var i = 0; i < ctag.data.length; i++) {
                var xtag = ctag.data[i];
                for (var u in xtag) {
                    ctag[u] = xtag[u];
                }
            }
            delete ctag.data;
        }
        delete ctag.idFlag;
        if (ctag.parent) {
            var parent = ctag.parent;
            delete ctag.parent;
            ctag = parent;
        }
    }

    parser.write(data).end();
    return xmlroot;
}