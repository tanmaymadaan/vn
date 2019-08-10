const express = require('express');
const app = express();

app.get('/', function(){
  console.log('GET Request');
});

app.listen(process.env.port, function(){
  console.log('now listening for requests');
});
