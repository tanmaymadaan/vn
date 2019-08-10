const express = require('express');
const app = express();

app.listen(process.env.port, function(){
  console.log('now listening for requests');
});
