const express = require('express');
const router = express.Router();

const Counter = require('../models/counter');

router.get('/get-counter', function(req, res, next){
  Counter.find({val: 'counterId'}).then(function(counter){
    res.send(counter);
  }).catch(next);
});

module.exports = router;
