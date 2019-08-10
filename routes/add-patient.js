const express = require('express');
const router = express.Router();

const Patient = require('../models/patient');

router.post('/add-patient', function(req, res, next){
  Patient.create(req.body).then(function(patient){
    res.send(patient);
  }).catch(next);
});

module.exports = router;
