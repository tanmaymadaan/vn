 const mongoose = require('mongoose');
 const Schema = mongoose.Schema;


 const PatientSchema = new Schema({
   pId:{
     type: String
   },
   firstName:{
     type: String
   },
   lastName:{
     type: String
   },
   guardian:{
     type: String
   },
   idType:{
     type: String
   },
   idNo:{
     type: String
   },
   address:{
     type: String
   },
   city:{
     type: String
   },
   state:{
     type: String
   },
   phoneNo:{
     type: Number
   },
   age:{
     type: Number
   },
   gender:{
     type: String
   }
 });

 const Patient = mongoose.model('patient', PatientSchema);
 module.exports = Patient;
