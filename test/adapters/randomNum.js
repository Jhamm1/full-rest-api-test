var exports = module.exports = {};


exports.randomNumber = function randomIntFromInterval(min, max) // min and max included
    {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

//randomIntFromInterval(1, 100);