
var express = require('express');
var firebase = require('firebase');

// firebase url
var fdRef = new firebase('https://amber-heat-3881.firebaseio.com/')

var app = express();



//start servers
app.listen(8181, function() {
	console.log("listening on 8181")
})