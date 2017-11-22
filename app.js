const request = require('request');
const yargs = require('yargs');

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

var address = encodeURIComponent(argv.address);
console.log(address);

request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
  json: true
}, (error, response, body) => {
  if (error){
    console.log('Unable to connect to Google server');
  } else if (body.status === 'ZERO_RESULTS') {
    console.log('Unable to fine the address');
  } else if (body.status === 'OK') {
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
  }
});
