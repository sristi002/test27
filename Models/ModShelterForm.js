const mongoose = require('mongoose');

const petShelterFormSchema = new mongoose.Schema({
  petname: String,
  phone: String,
  email: String,
  location: String,
  petType: String,
  disease: String,
  charge: Number,
  describe: String,
  photos: [String] // Assuming the photos will be stored as an array of strings (file paths)
  // Add other fields as needed for your form data
});

const PetShelterForm = mongoose.model('PetShelterForm', petShelterFormSchema);

module.exports = PetShelterForm;
