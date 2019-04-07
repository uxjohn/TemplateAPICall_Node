//Make the request module available for use in this file
const request = require('request');

//Define the values in the API request as a Constant
const options = {  
    url: 'https://www.reddit.com/r/funny.json',
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8',
        'User-Agent': 'my-reddit-client'
    }
};

//Function to hold the API request function
const callExternalApiUsingRequest = (callback) => {

    //API request function as provided by the request module - https://stackabuse.com/the-node-js-request-module/
    request(options, function(err, res, body) {
        //Catch the error if it doesnt work
        if (err) { 
            return callback(err);
        }
        //Parse the data retrived in body as JSON
        let json = JSON.parse(body);
        //Return json as the callback for the function
        return callback(json);
    });
};

//Make the API call avaialbe to other areat of tha applicvation by using module.exports
module.exports.callApi = callExternalApiUsingRequest;


/*
const request = require('request');
 
_EXTERNAL_URL = 'https://test-proj-heroku.herokuapp.com/api/plans';

const callExternalApiUsingRequest = (callback) => {
    request(_EXTERNAL_URL, { json: true }, (err, res, body) => {
    if (err) { 
        return callback(err);
     }
    return callback(body);
    });
}

module.exports.callApi = callExternalApiUsingRequest;
*/






