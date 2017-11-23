const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');
const forecast = require('./forecast/forecast.js');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage){
    console.log(errorMessage);
  } else {
    console.log(results.address);

    forecast.getCurrentWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
      if(errorMessage){
        console.log(errorMessage);
      } else {
        console.log(`Temperature is ${weatherResults.temperature}. But it feels like ${weatherResults.apparentTemperature}`);
      }
    });
  }
});

