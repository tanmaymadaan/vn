const express = require('express');
const router = express.Router();

const Patient = require('../models/patient');
const Counter = require('../models/counter');

router.post('/add-patient', function(req, res, next){

    Patient.create(req.body).then(function(patient){
      Counter.findByIdAndUpdate({_id: '5d5516f6a99a93a312d8a59b'}, {$inc: {counter: 1}}, function(err, Counter){
          if(err)
            return next(err);
          console.log('counter updated');
        }
      );

      console.log('patient added', req.body.firstName);
      res.send(patient);
    }).catch(next);
});

module.exports = router;
