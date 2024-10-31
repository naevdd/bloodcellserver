const mongoose = require('mongoose');

const donorSchema = new mongoose.Schema({
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
  bystander: {
    type: String,
    required: true,
  },
  bystanderphone: {
    type: String,
    required:true,
  },
});

module.exports = mongoose.model('Donor', donorSchema);