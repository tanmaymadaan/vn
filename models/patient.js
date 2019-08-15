 const mongoose = require('mongoose');
 const Schema = mongoose.Schema;

 const PatientSchema = new Schema({
   mrdNo:{
     type: String,
     required: true
   },
   firstName:{
     type: String,
     default: 'hello'
   },
   lastName:{
     type: String
   }
 });

 const Patient = mongoose.model('patient', PatientSchema);
 module.exports = Patient;
