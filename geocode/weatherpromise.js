const yargs = require('yargs');
const axio = require('axios');
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
      console.log(response.data);
    });