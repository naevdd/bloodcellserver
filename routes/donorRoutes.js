const express = require('express');
const { createDonor } = require('../controllers/donorController');
const Donor = require('../models/Donor');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const donors = await Donor.find();
    res.json(donors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch donors' });
  }
});

router.post('/', createDonor);

module.exports = router;