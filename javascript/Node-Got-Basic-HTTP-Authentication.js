// Generated by CoffeeScript 1.10.0
var got;

got = require('got');

got(URL, {
  json: true,
  headers: {
    Authorization: "Basic " + new Buffer(username + ":" + password).toString("base64")
  }
}).then(function(response) {
  return console.log(response.body);
})["catch"](function(error) {
  return console.log(error);
});
