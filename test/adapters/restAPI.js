var exports = module.exports = {};
const API = require('../config/api.config.js');
var supertest = require('supertest')
var server = supertest.agent(API.url) //Root URL of the API being testing in this framework
    // Logger lib
var logger = require('../../node_modules/logger').createLogger(); // logs to STDOUT
var logger = require('../../node_modules/logger').createLogger('development.log'); // logs to a file


// creat post
exports.createPost = function(data, response) {
    server
        .post("/api/users")
        .send(data)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201)
        .end((err, res) => {
            if (err) return done(err);
            return response(res);
        });
}

//get all posts
exports.getPosts = function(response) {
    server
        .get("/api/users?page=1")
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
            if (err) return done(err);
            return response(res);
        });
}

//get post by Id
exports.getPostbyId = function(postId, response) {
    server
        .get("/api/users?page=1")
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
            if (err) return done(err);
            return response(res);
        });
}

//get post and comments by Id
exports.getPostandCommentsbyId = function(postcommentsId, response) {
    server
        .get("/api/users?page=1")
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
            if (err) return done(err);
            return response(res);
        });
}

//get comments by post Id
exports.getCommentsbyPostId = function(postId, response) {
    server
        .get("/api/users?page=1")
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
            if (err) return done(err);
            return response(res);
        });
}

//get posts by user Id
exports.getPostsbyUserId = function(userId, response) {
    server
        .get("/api/users?page=1")
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
            if (err) return done(err);
            return response(res);
        });
}

//update posts by Id
exports.updatePostsbyId = function(postdata, response) {
    server
        .get("/api/users?page=1")
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
            if (err) return done(err);
            return response(res);
        });
}

//partial update posts by Id
exports.partialupdatePostsbyId = function(postdata, response) {
    server
        .get("/api/users?page=1")
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
            if (err) return done(err);
            return response(res);
        });
}

//delete posts by Id
exports.deletePostsbyId = function(postId, response) {
    server
        .get("/api/users?page=1")
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
            if (err) return done(err);
            return response(res);
        });
}