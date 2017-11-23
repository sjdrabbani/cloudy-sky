const request = require('request');
const apiKey = '279cfa2ac6093e66bfa4ec0e8ba07c75';

var getCurrentWeather = (latitude, longitude, callback) => {
  request({
    url: `https://api.darksky.net/forecast/${apiKey}/${latitude},${longitude}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect with Forecast.io server');
    } else if (response.statusCode === 400){
      callback('Unable to fetch weather');
    } else if (response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }
  });
};

module.exports = {
  getCurrentWeather
}

