// CreateRehome.js (RehomeRoute)
const express = require('express');
const router = express.Router();
const RehomeModel = require('../Models/ModRehome'); // Import your rehoming model here

// Handle rehoming form submission
router.post('/submit-rehome', async (req, res) => {
  try {
    const formData = req.body; // Extract form data from the request body

    // Create a new instance of RehomeModel with the form data
    const newRehomeData = new RehomeModel(formData);

    // Save the rehoming form data to MongoDB Atlas
    await newRehomeData.save();

    res.status(201).json({ message: 'Rehoming form data saved successfully', data: newRehomeData });
  } catch (error) {
    res.status(500).json({ message: 'Error saving rehoming form data', error: error.message });
  }
});

module.exports = router;
