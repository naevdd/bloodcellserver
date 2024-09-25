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
  units: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Patient', patientSchema);