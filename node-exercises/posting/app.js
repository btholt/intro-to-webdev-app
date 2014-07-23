var express = require('express');
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.post('/login', function(req, res){
  console.log(req.body.username + " " +  req.body.password);
  if (req.body.username === "brian" && req.body.password === "pass") {
    res.json(200, {status:"success"});
  }
  else {
    res.json(401, {status:"failure"})
  }
});

var server = app.listen(8080);