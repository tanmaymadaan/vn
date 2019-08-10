 const mongoose = require('mongoose');
 const Schema = mongoose.Schema;

 const PatientSchema = new Schema({
   mrdNo:{
     type: String
   },
   firstName:{
     type: String
   },
   lastName:{
     type: String
   },
 });
