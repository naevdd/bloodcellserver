const express = require('express');
const { createPatient } = require('../controllers/patientController');
const Patient = require('../models/Patient');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch patients' });
  }
});
router.post('/', createPatient);

module.exports = router;