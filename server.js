var express = require('express');
var bodyParser = require('body-parser');
var mongoose=require('mongoose');
var app = express();
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/mittens');
var Meo=mongoose.model('Meow',{
	text: String,
	username:String
});
var Employee=mongoose.model('Employees',{
	name: String,
	userid:String,
	text: String
});
app.get('/emps',function(req,res,next){
	Employee.find({},function(err,emp1){
		return res.json(emp1);
	});
});
app.get('/meows',function(req,res,next){
	Meo.find({},function(err,meow1){
		return res.json(meow1);
	});
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});

