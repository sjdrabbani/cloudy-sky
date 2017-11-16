const request = require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=5/1%20Lalmatia%20Dhaka',
  json: true
}, (error, response, body) => {
  console.log(JSON.stringify(body, undefined, 2));
});
