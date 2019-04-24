const request = require('request');

const geocodeAddress = function(address, callback){
    const userAddress = encodeURIComponent(address);

    request({
    url:`http://www.mapquestapi.com/geocoding/v1/address?key=Fts0KKPPhn8P8e8bsl7GoAEEAYAnFPb9&location=${userAddress}`,
    json: true
}, (error, response, body) => {
     if (error) {
         callback('Problem connecting to servers.Our bad.');
     }  else if (body.results[0] === undefined){
         callback('oops check that address!');
     } else{
         callback(undefined, {
             address: body.results[0].providedLocation.location,
             latitude: body.results[0].locations[0].latLng.lat,
             longitude: body.results[0].locations[0].latLng.lng
         });}
        
});
}

module.exports = {
    geocodeAddress

};