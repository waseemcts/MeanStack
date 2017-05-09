var express = require('express');
var bodyParser = require('body-parser');
var mongoose=require('mongoose');
var app = express();
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/mittens');

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});

