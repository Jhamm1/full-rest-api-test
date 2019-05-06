var exports = module.exports = {};
const API = require('../config/api.config.js');
var supertest = require('supertest')
var server = supertest.agent(API.url) //Root URL of the API being testing in this framework


// creat post
exports.createPost = function(data, response) {
    server
        .post("/posts")
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
        .get("/posts")
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
        .get("/posts/" + postId)
        .expect('Content-Type', /json/)
        .end((err, res) => {
            if (err) return done(err);
            return response(res);
        });
}

//get post and comments by Id
exports.getPostandCommentsbyId = function(postId, response) {
    server
        .get("/posts/" + postId + "/comments")
        .expect('Content-Type', /json/)
        .end((err, res) => {
            if (err) return done(err);
            return response(res);
        });
}

//get comments by post Id
exports.getCommentsbyPostId = function(postId, response) {
    server
        .get("/comments?postId=" + postId)
        .expect('Content-Type', /json/)
        .end((err, res) => {
            if (err) return done(err);
            return response(res);
        });
}

//get posts by user Id
exports.getPostsbyUserId = function(userId, response) {
    server
        .get("/posts?userId=" + userId)
        .expect('Content-Type', /json/)
        .end((err, res) => {
            if (err) return done(err);
            return response(res);
        });
}

//update posts by Id
exports.updatePostsbyId = function(postId, postdata, response) {
    server
        .put("/posts/" + postId)
        .send(postdata)
        .expect('Content-Type', /json/)
        .end((err, res) => {
            if (err) return done(err);
            return response(res);
        });
}

//partial update posts by Id
exports.partialupdatePostsbyId = function(postId, postdata, response) {
    server
        .patch("/posts/" + postId)
        .send(postdata)
        .expect('Content-Type', /json/)
        .end((err, res) => {
            if (err) return done(err);
            return response(res);
        });
}

//delete posts by Id
exports.deletePostsbyId = function(postId, response) {
    server
        .delete("/posts/" + postId)
        .expect('Content-Type', /json/)
        .end((err, res) => {
            if (err) return done(err);
            return response(res);
        });
}