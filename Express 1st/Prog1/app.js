var express = require('express');

//instance of express
var app = express();

//make this json file our database
var users = require('./users.json')

app.get('/', function (req, res) {

  res.send(users);

});

app.get('/myfirstroute', function (req, res) {

	res.send(users[0]);
	
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


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});