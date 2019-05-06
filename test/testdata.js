var chai = require('chai');
var restAPI = require("./adapters/restAPI.js");
// Logger lib
var logger = require('logger').createLogger(); // logs
var logger = require('logger').createLogger('development.log'); // logs to a file
var random = require("./adapters/randomNum.js");
let csvToJson = require('convert-csv-to-json');
var testdata = "./testdata/test.csv";


const parseJson = require('parse-json');

//create posts
describe("Test creating multiple /posts from a csv file", function() {

    it("test POST 'api/users' endpoint", function(done) {

        let json = csvToJson.fieldDelimiter(',').formatValueByType().getJsonFromCsv(testdata);
        for (let i = 0; i < json.length; i++) {

            restAPI.createPost(json[i], function(response) {
                console.log(response.body);
                logger.info('Test creating multiple /posts from a csv file - Response: ', response.body);
                chai.expect(201, "returned the expected response code");
                chai.assert.equal(201, response.statusCode, 'returns 200 OK');
                //chai.assert.equal(data.Title, response.body.Title, 'Req: Title is the same as Res: Title');
                logger.info('Test creating multiple /posts from a csv file - Response code: ', response.statusCode);

            });
        }
        done();
    })
})