got = require 'got'

got( URL, {

  json    : true
  headers :
    Authorization: "Basic " + new Buffer(username + ":" + password).toString("base64")

}).then((response)->

  console.log response.body

).catch((error)->

    console.log error

)