const express = require('express');
const router = express.Router();

const Counter = require('../models/counter');

router.post('/get-counter', function(req, res, next){
    Counter.create(req.body).then(function(patient){
      res.send(patient);
    }).catch(next);
});

/*
router.get('/get-counter', function(req, res, next){
  Counter.find({val: 'counterId'}).then(function(counter){
    res.send(counter);
  }).catch(next);
});*/

module.exports = router;
