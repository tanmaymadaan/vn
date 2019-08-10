const express = require('express');
const app = express();

app.get('/api', function(req, res){
  console.log('GET Request');
  res.send({
    name: 'Tanmay'
  });
});

app.listen(process.env.port || 4000, function(){
  console.log('now listening for requests');
});
