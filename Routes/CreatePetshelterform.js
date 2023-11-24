const express = require('express');
const router = express.Router();
const PetShelterForm = require('../Models/ModShelterForm'); // Import the model

router.post('/CreatePetshelterform', async (req, res) => {
  try {
    const formData = req.body;

    // Create a new instance of the PetShelterForm model
    const newFormEntry = new PetShelterForm({
      petname: formData.petname,
      phone: formData.phone,
      email: formData.email,
      location: formData.location,
      petType: formData.petType,
      disease: formData.disease,
      charge: formData.charge,
      describe: formData.describe,
      photos: formData.photos // Assuming photos is an array of strings
      // Add other fields as needed for your form data
    });

    // Save the form data to the database
    await newFormEntry.save();

    res.status(201).json({ message: 'Form data saved successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
