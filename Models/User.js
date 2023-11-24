const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
    },
    Password: {
        type: String,
        required: true,
    },
    Date: {
        type: Date,
        default: Date.now
    }
});

const UserModel = mongoose.model('User', UserSchema); // Model creation and export

module.exports = UserModel;
