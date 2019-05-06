var exports = module.exports = {};
let csvToJson = require('convert-csv-to-json');

exports.csvjson = function tes() {
    let json = csvToJson.fieldDelimiter(',').formatValueByType().getJsonFromCsv("./test.csv");
    for (let i = 0; i < json.length; i++) {
        //console.log(JSON.stringify(json[i]));
        return JSON.stringify(json[i]);
    }

}

//console.log(tes());