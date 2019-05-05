var chai = require('chai');
var restAPI = require("./adapters/restAPI.js");
// Logger lib
var logger = require('../node_modules/logger').createLogger(); // logs
var logger = require('../node_modules/logger').createLogger('development.log'); // logs to a file

// var testdata = require("./csvtojson.js");

//create posts
describe("Test create /posts endpoint with req payload", function() {

    let data = {
        "name": "Julian Hamm",
        "job": "IT professional",
    }

    it("test POST 'api/users' endpoint", function(done) {

        restAPI.createPost(data, function(response) {
            console.log(response.body);
            logger.info('Test create post endpoint - Response: ', response.body);
            done();
            //TODO: expect tests
        });
    })

    //POST endpoint
    it("test POST 'api/users' endpoint", function(done) {

        // chai.assert.equal(response.name, 'Julian Hamm', 'This is true');
        // chai.assert.equal(response.job, 'IT professional', 'This is true');
        done();

    })
})

describe("Test Get /posts endpoint", function() {
    it("test GET 'api/users?page=1' endpoint", function(done) {

        restAPI.getPosts(function(response) {
            console.log(response.body);
            var test = response.body;

            chai.expect(response.body).to.have.property('page', 1);

            done();

            return test;
        });

    })

    it("expected response code", function(done) {

        restAPI.getPosts(function(response) {
            chai.expect(200, "returned the expected response code");
            done();
        });
    })
})



// //PUT endpoint
// //this.timeout(9900);
// it("test PUT 'api/users/2' endpoint", function(done) {

//     // Query DB
//     MongoClient.connect('mongodb://127.0.0.1:27017', { useNewUrlParser: true }, function(err, db) {
//         var dbo = db.db("mydb");
//         dbo.collection("APItest").findOne({
//             "name": "Julian Hamm"
//         }, function(err, result) {
//             if (err) throw err;
//             console.log("This is a test " + result.name);
//             db.close();

//             let data = {
//                 "name": result.name + " My old job title " + result.job,
//                 "job": "PM",
//             }

//             server
//                 .put("/api/users/2")
//                 .send(data)
//                 // .set('Accept', 'application/json')
//                 // .expect('Content-Type', /json/)
//                 .expect(200)
//                 .end((err, res) => {
//                     if (err) return done(err);
//                     done();
//                     // chai.expect(res.body);
//                     console.log(res.body);
//                 });


//             ///
//         });
//     });
//     ///
// })

// //PUT endpoint
// //this.timeout(9900);
// it("test PUT 'api/users/2' endpoint", function(done) {
//     let data = {
//         "name": "morpheus",
//         "job": "ZION RESIDENT",
//     }
//     server
//         .put("/api/users/2")
//         .send(data)
//         // .set('Accept', 'application/json')
//         // .expect('Content-Type', /json/)

//     .expect(200)
//         .end((err, res) => {
//             if (err) return done(err);
//             done();
//             // chai.expect(res.body);
//             console.log(res.body);
//             chai.expect(res.body.name).to.include('morpheus')
//         });
// })

// //PATCH endpoint
// it("test PATCH 'api/users/2' endpoint", function(done) {
//     let data = {
//         "name": "morpheus",
//         "job": "ZION RESIDENT 2"
//     }
//     var data2 = fs.readFileSync('dataset/test.json', 'utf8');
//     let words = data2;
//     console.log(words);
//     server
//         .patch("/api/users/2")
//         .send(words)
//         .expect(200)
//         .end((err, res) => {
//             if (err) return done(err);
//             done();
//             console.log(res.body);
//         });
// })

// //DELETE endpoint
// it("test DELETE 'api/users/2' endpoint", function(done) {
//     server
//         .delete("/api/users/2")
//         .expect(204)
//         .end((err, res) => {
//             if (err) return done(err);
//             done();
//         });
// })