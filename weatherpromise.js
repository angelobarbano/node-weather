const yargs = require('yargs');
const axios = require('axios');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
  .options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Address to fetch weather for',
        string: true
    }})
    .help()
    .alias('help','h')
    .argv;
    
const userAddress = encodeURIComponent(argv.address);
const geocodeUrl = `http://www.mapquestapi.com/geocoding/v1/address?key=Fts0KKPPhn8P8e8bsl7GoAEEAYAnFPb9&location=${userAddress}`;

    axios.get(geocodeUrl).then((response) =>{
      var lat = response.data.results[0].locations[0].latLng.lat;
      var lng = response.data.results[0].locations[0].latLng.lng;
      var weatherUrl = `https://api.darksky.net/forecast/13a9a2484e13f8f431fa44cb8bf62a2c/${lat},${lng}`;
      
      console.log(response.data.results[0].providedLocation.location);
      return axios.get(weatherUrl);
    }).then((response) => {
      console.log(response.data.currently.temperature);
      console.log(response.data.currently.apparentTemperature);
    }).catch((e) => {
      if(e.code === 'ENOTFOUND') {
      console.log('Cant connect homie');
    } else {
      console.log(e.message);
    }
    });