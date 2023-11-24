// ModRehome.js (RehomeModel)
const mongoose = require('mongoose');



const RehomeSchema = new mongoose.Schema({
    petType: String,
    petname: String,
    age: String,
    gender: String,
    breed: String,
    duration: String,
    disease: String,
    weight: Number,
    phone: String,
    email: String,
    location: String,
    vax: String,
    describe: String,
    photos: [String]
});

const RehomeModel = mongoose.model('Rehome', RehomeSchema); // Model creation and export
module.exports = RehomeModel;
