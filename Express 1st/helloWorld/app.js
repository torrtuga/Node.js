
// calling the module 
var express = require('express');

//creating an instance 
var app = express();

// a basic route
app.get('/', function (req, res) {
  res.send('Hello World!');
});


//listening on a port 
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});