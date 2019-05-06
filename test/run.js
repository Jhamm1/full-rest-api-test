var chai = require('chai');
var should = require('chai').should();
var restAPI = require("./adapters/restAPI.js");
// Logger lib
var logger = require('../node_modules/logger').createLogger(); // logs
var logger = require('../node_modules/logger').createLogger('development.log'); // logs to a file
var random = require("./adapters/randomNum.js");
let csvToJson = require('convert-csv-to-json');
var testdata = "./testdata/test.csv";

//create posts
describe("Test create /posts endpoint with req payload", function() {

    let data = {
        "userId": 101,
        "Id": 11,
        "Title": "Julian Hamm",
        "body": "This is a test"
    }

    it("test POST 'api/users' endpoint", function(done) {

        restAPI.createPost(data, function(response) {
            console.log(response.body);
            logger.info('Test create post endpoint - Response: ', response.body);
            chai.expect(201, "returned the expected response code");
            chai.assert.equal(201, response.statusCode, 'returns 200 OK');
            chai.assert.equal(data.Title, response.body.Title, 'Req: Title is the same as Res: Title');
            logger.info('Test create post endpoint - Response code: ', response.statusCode);
            done();
        });
    })
})

// Get all posts
describe("Test Get /posts endpoint", function() {
    it("returns all posts", function(done) {

        restAPI.getPosts(function(response) {
            var jsonContent = response.body;
            logger.info('Test Get all posts endpoint - Response: ', response.body);
            done();

        });

    })

    it("returns 200 Ok response", function(done) {

        restAPI.getPosts(function(response) {
            chai.expect(200, "returned the expected response code");
            chai.assert.equal(200, response.statusCode, 'returns 200 OK');
            logger.info('Test Get all posts endpoint - Response code: ', response.statusCode);
            done();
        });
    })
})

// Get post by Id
describe("Test Get /posts/{Id} endpoint", function() {

    var randomNum = random.randomNumber(0, 99);
    it("returns posts by Id", function(done) {

        restAPI.getPostbyId(randomNum, function(response) {
            console.log(randomNum);
            var jsonContent = response.body;
            chai.assert.equal(randomNum, jsonContent.id, 'equals returns true');
            logger.info('Test Get posts by Id endpoint - Response: ', response.body);

            done();

        });

    })

    it("returns 200 Ok response", function(done) {

        restAPI.getPostbyId(randomNum, function(response) {
            chai.expect(200, "returned the expected response code");
            chai.assert.equal(200, response.statusCode, 'returns 200 OK');
            logger.info('Test Get posts by Id endpoint - Response code: ', response.statusCode);
            done();
        });
    })
})

// Get post and comments by Id
describe("Test Get /posts/{Id}/comments endpoint", function() {

    var randomNum = random.randomNumber(0, 99);
    it("returns posts by Id", function(done) {

        restAPI.getPostandCommentsbyId(randomNum, function(response) {
            var jsonContent = response.body;
            console.log("Random number " + jsonContent[0].postId);
            logger.info('Test Get /posts/{Id}/comments - Response: ', response.body);
            done();

        });

    })

    it("returns 200 Ok response", function(done) {

        restAPI.getPostandCommentsbyId(randomNum, function(response) {
            chai.expect(200, "returned the expected response code");
            chai.assert.equal(200, response.statusCode, 'returns 200 OK');
            logger.info('Test Get /posts/{Id}/comments - Response code: ', response.statusCode);
            done();
        });
    })
})

// Get comments by post Id
describe("Test Get /comments?postId={Id} endpoint", function() {

    var randomNum = random.randomNumber(0, 99);
    it("returns posts by Id", function(done) {

        restAPI.getCommentsbyPostId(randomNum, function(response) {
            var jsonContent = response.body;
            chai.assert.equal(randomNum, jsonContent[0].postId, 'Random Id is the same as the Id in the response');
            logger.info('Test Get /comments?postId={Id} - Response: ', response.body);
            done();

        });

    })

    it("returns 200 Ok response", function(done) {

        restAPI.getCommentsbyPostId(randomNum, function(response) {
            chai.expect(200, "returned the expected response code");
            chai.assert.equal(200, response.statusCode, 'returns 200 OK');
            logger.info('Test Get /comments?postId={Id} - Response code: ', response.statusCode);
            done();
        });
    })
})

// Get posts by user Id
describe("Test Get /posts?userId={Id} endpoint", function() {

    var randomNum = random.randomNumber(0, 9);
    it("returns posts by user Id", function(done) {

        restAPI.getPostsbyUserId(randomNum, function(response) {
            var jsonContent = response.body;
            chai.assert.equal(randomNum, jsonContent[0].userId, 'Random Id is the same as the Id in the response');
            logger.info('Test Get /posts?userId={Id} - Response: ', response.body);
            done();
        });
    })

    it("returns 200 Ok response", function(done) {

        restAPI.getPostsbyUserId(randomNum, function(response) {
            chai.expect(200, "returned the expected response code");
            chai.assert.equal(200, response.statusCode, 'returns 200 OK');
            logger.info('Test Get /posts?userId={Id}  - Response code: ', response.statusCode);
            done();
        });
    })
})


// Update posts by Id 
describe("Test PUT update /posts/{Id} endpoint", function() {

    var randomNum = random.randomNumber(0, 99);
    let postdata = {
        id: randomNum,
        title: 'foo',
        body: 'bar',
        userId: 1
    }
    it("returns posts by user Id", function(done) {

        restAPI.updatePostsbyId(randomNum, postdata, function(response) {
            var jsonContent = response.body;
            chai.assert.equal(randomNum, jsonContent.id, 'Req payload is the same as the response body');
            logger.info('Test PUT update /posts/{Id} endpoint - Response: ', response.body);
            done();
        });
    })

    it("returns 200 Ok response", function(done) {

        restAPI.updatePostsbyId(randomNum, postdata, function(response) {
            chai.expect(200, "returned the expected response code");
            chai.assert.equal(200, response.statusCode, 'returns 200 OK');
            logger.info('Test PUT update /posts/{Id} endpoint - Response code: ', response.statusCode);
            done();
        });
    })
})

// Partial update of posts by Id 
describe("Test PATCH update /posts/{Id} endpoint", function() {

    var randomNum = random.randomNumber(0, 99);
    let postdata = {
        title: 'DrJay'
    }
    it("returns posts by user Id", function(done) {

        restAPI.partialupdatePostsbyId(randomNum, postdata, function(response) {
            var jsonContent = response.body;
            chai.assert.equal(postdata.title, jsonContent.title, 'Partially updated req payload is the same as the response body');
            logger.info('Test PATCH update /posts/{Id} endpoint - Response: ', response.body);
            done();
        });
    })

    it("returns 200 Ok response", function(done) {

        restAPI.partialupdatePostsbyId(randomNum, postdata, function(response) {
            chai.expect(200, "returned the expected response code");
            chai.assert.equal(200, response.statusCode, 'returns 200 OK');
            logger.info('Test PATCH update /posts/{Id} endpoint - Response code: ', response.statusCode);
            done();
        });
    })
})

// Delete posts by Id 
describe("Test DELETE /posts/{Id} endpoint", function() {

    var randomNum = random.randomNumber(0, 99);
    it("deletes posts by Id", function(done) {
        restAPI.deletePostsbyId(randomNum, function(response) {
            logger.info('Test DELETE /posts/{Id} endpoint - Response: ', response.body);
            done();
        });
    })

    it("returns 200 Ok response", function(done) {

        restAPI.deletePostsbyId(randomNum, function(response) {
            chai.expect(200, "returned the expected response code");
            chai.assert.equal(200, response.statusCode, 'returns 200 OK');
            logger.info('Test DELETE /posts/{Id} endpoint - Response code: ', response.statusCode);
            done();
        });
    })
})

//---Negative scenario tests ---------------
// Get post with invalid Id
describe("Test Get endpoint with invalid /posts/{Id}", function() {

    var randomNum = -44;
    it("returns not found", function(done) {

        restAPI.getPostbyId(randomNum, function(response) {
            logger.info('Test Get endpoint with invalid /posts/{Id} - Response: ', response.body);
            chai.assert.equal(404, response.statusCode, 'returns 404 not found');
            logger.info('Test Get endpoint with invalid /posts/{Id} - Response code: ', response.statusCode);
            done();

        });

    })
})

// Get post and comments with invalid Id
describe("Test Get /posts/{Id}/comments endpoint with invalid Id", function() {

    var Num = -500;
    it("should return not found", function(done) {

        restAPI.getPostandCommentsbyId(Num, function(response) {
            console.log("This test should pass as -500 does not exist");
            var res = response.statusCode;
            res.should.equal(404);
            logger.info('Test Get /posts/{Id}/comments endpoint with invalid Id - Response: ', response.body);
            chai.assert.equal(404, response.statusCode, 'returns 404 not found');
            logger.info('Test Get /posts/{Id}/comments endpoint with invalid Id - Response code: ', response.statusCode);
            done();

        });

    })
})

// delete posts and get the deleted post by Id 
describe("Delete post and Get the deleted post by Id ", function() {

    var randomNum = random.randomNumber(0, 99);

    it("deletes posts by Id", function(done) {

        restAPI.deletePostsbyId(randomNum, function(response) {
            done();
        });
    })

    it("returns 200 Ok response", function(done) {

        restAPI.deletePostsbyId(randomNum, function(response) {
            chai.expect(200, "returned the expected response code");
            chai.assert.equal(200, response.statusCode, 'returns 200 OK');
            done();
        });
    })

    //Get deleted post by Id
    it("Get deleted post by Id", function(done) {

        restAPI.getPostbyId(randomNum, function(response) {
            chai.assert.equal(404, response.statusCode, 'returns 404 not found');
            done();

        });

    })
})