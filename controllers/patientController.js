const Patient = require('../models/Patient');

exports.createPatient = async (req, res) => {
  const { name, bloodType, phone, noOfBags, hospital, bystanderphone, dateRequired, timeRequired} = req.body;

  try {
    const patient = new Patient({ name, bloodType, phone, noOfBags, hospital, bystanderphone, dateRequired, timeRequired });
    await patient.save();
    res.status(201).json({ message: 'Patient created successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error creating patient', error });
  }
};