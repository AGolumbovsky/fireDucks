
var express = require('express');
var firebase = require('firebase');

// firebase url
var fdRef = new firebase('https://amber-heat-3881.firebaseio.com/')

var app = express();
app.get(fdRef, funcion(req, res) {
	console.log('did you get it?')
}

//start servers
app.listen(8181, function() {
	console.log("listening on 8181")
})
