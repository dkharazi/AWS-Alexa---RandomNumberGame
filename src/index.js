/**
 * App ID for the skill
 */
var APP_ID = "[APP_ID here]";

/**
 * The AlexaSkill prototype and helper functions
 */
var AlexaSkill = require('./AlexaSkill');

var RandomNumber = function () {
    AlexaSkill.call(this, APP_ID);
};

// Extend AlexaSkill
RandomNumber.prototype = Object.create(AlexaSkill.prototype);
RandomNumber.prototype.constructor = RandomNumber;

RandomNumber.prototype.eventHandlers.onSessionStarted = function (sessionStartedRequest, session) {
    console.log("RandomNumber onSessionStarted requestId: " + sessionStartedRequest.requestId
        + ", sessionId: " + session.sessionId);
};

RandomNumber.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    console.log("RandomNumber onLaunch requestId: " + launchRequest.requestId + ", sessionId: " + session.sessionId);
};

RandomNumber.prototype.eventHandlers.onSessionEnded = function (sessionEndedRequest, session) {
    console.log("RandomNumber onSessionEnded requestId: " + sessionEndedRequest.requestId
        + ", sessionId: " + session.sessionId);
};

RandomNumber.prototype.intentHandlers = {
    RandomNumberIntent: function (intent, session, response) {
        console.log("RandomNumberIntent detected");

        var randomNum = getRandomInt(1, 10);
        var userNum = parseInt(intentRequest.intent.slots.Num.value);
        console.log("Alexa's number and user's number: " + randomNum + ", " + userNum);
        
        var output = "";
        console.log("Random number: " + randomNum);
        if(randomNum == userNum) {
        	output = "Correct. Thank you for playing.";
        } else {
        	output = "Sorry. You've guessed incorrectly.";
        }
        response.tell(output);
    }
};

// Create the handler that responds to the Alexa Request.
exports.handler = function (event, context) {
    var RandomNumber = new RandomNumber();
    RandomNumber.execute(event, context);
};

// Helpers

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}