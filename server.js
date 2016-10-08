var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();
var authenticationController = require('./server/controllers/authentication-controller');

mongoose.connect('mongodb://127.0.0.1:27017/time-waste');

app.use(bodyParser.json());
app.use('/app',express.static(__dirname+"/app"));
app.use('/resources',express.static(__dirname+"/resources"));
app.use('/node_modules',express.static(__dirname+"/node_modules"));
 
app.get('/',function(req,res){
    res.sendfile('index.html');
});

//authentication
app.post('/api/user/signup',authenticationController.signup);

app.listen('3000', function(){
    console.log("Listening for local host 3000");
});