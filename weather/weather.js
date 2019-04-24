const request = require('request');

const getWeather = function(lat,lng,callback) { request({
    url:`https://api.darksky.net/forecast/13a9a2484e13f8f431fa44cb8bf62a2c/${lat},${lng}`,
    json: true},
    (err, response, body) => {
    if (err) {
        callback("Server error, sorry.");
    }else{
        callback(undefined, {Current_temp: body.currently.temperature, 
            Feels_like: body.currently.apparentTemperature});    
    }

    })}

module.exports = {
   getWeather

};