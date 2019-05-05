let csvToJson = require('convert-csv-to-json');

function tes() {
    let json = csvToJson.fieldDelimiter(',').formatValueByType().getJsonFromCsv("./test.csv");
    for (let i = 0; i < json.length; i++) {
        //console.log(JSON.stringify(json[i]));
        return json;
    }

}

console.log(tes());