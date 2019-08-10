const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/vn', { useNewUrlParser: true});

app.get('/api', function(req, res){
	console.log('GET Request');
	res.send({name: 'Tanmay'});
});

app.use(bodyParser.json());
app.use('/api', require('./routes/add-patient'));

app.listen(4000, function(){
  console.log('now listening for requests');
});
