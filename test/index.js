var greetings = require("./randomNum.js");
var greeting = require("./adapters/restAPI.js");

var x = greetings.randomNumber(1, 5);
console.log(x);

let data = {
    "name": "Julian Hamm",
    "job": "IT professional",
}


var y = greeting.createrecord(data, function(response) {
    console.log(response);
});
//console.log(y);