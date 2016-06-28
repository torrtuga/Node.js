var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

app.use(bodyParser.json({limit:'10mb',extended:true}));
app.use(bodyParser.urlencoded({limit:'10mb',extended:true}))

var users = require('./users.json');

var myArray = []

///////////////////////////mydata api /////////////////////

app.get('/mydata', function (req, res) {

  res.send(myArray);

});

app.post('/mydata/create', function (req, res) {

  console.log(req.body);
  myArray.push(req.body.value)
  res.send(myArray);

});

app.put('/mydata/:value/edit', function (req, res) {

	// edit an array element

});



///////////// end mydata api /////////////////////////////



//////////////// users api ////////////////////////////////////////////////////

app.get('/users', function (req, res) {

  res.send(users);

});

app.get('/users', function (req, res) {

  res.send(users);

});



// request parameter 
app.get('/users/:userName', function (req, res) {
	console.log(req.params.userName);
	var foundUser = 'No User Found';

	for (u in users){
		if (users[u].userName == req.params.userName)
			foundUser = users[u]


	}
	
	console.log(foundUser);
  	res.send(foundUser);
});

// query parameter

app.get('/users/find/query', function (req, res) {

	console.log(req.query.userName);
	var foundUser = 'No User Found';

	for (u in users){
		if (users[u].userName == req.query.userName)
			foundUser = users[u]


	}
	
	console.log(foundUser);
  	res.send(foundUser);
	
});


///////////////////////////// end users api //////////////////////////////

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});