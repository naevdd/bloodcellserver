const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  bloodType: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  noOfBags: {
    type: Number,
    required: true,
  },
  hospital: {
    type: String,
    required: true,
  },
  bystanderphone:{
    type:String,
    required:true,
  },
  dateRequired:{
    type: Date,
    required:true,
  }
});

module.exports = mongoose.model('Patient', patientSchema);