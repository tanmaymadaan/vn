const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

mongoose.connect('mongodb://localhost/vn', { useNewUrlParser: true});

app.use('/api', require('./routes/add-patient'));
app.use(bodyParser.json());

app.listen(process.env.port || 4000, function(){
  console.log('now listening for requests');
});
