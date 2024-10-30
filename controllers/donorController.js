const Donor = require('../models/Donor');

exports.createDonor = async (req, res) => {
  const { name, bloodType, phone, bystander, bystanderphone } = req.body;

  try {
    const donor = new Donor({ name, bloodType, phone, bystander, bystandphone});
    await donor.save();
    res.status(201).json({ message: 'Donor created successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error creating donor', error });
  }
};