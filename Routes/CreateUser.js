const express = require('express');
const router = express.Router();
const User = require('../Models/User'); // Corrected path and filename (Models instead of Models)

router.post("/CreateUser", async (req, res) => {
    try {
        await User.create({
            name: "Pat Cummins",
            Password: "123345",
            Email: "shami12@gmail.com",
            location: "Ahmedabad" // Corrected spelling
        })
        res.json({ success: true });
    } catch (error) {
        console.log(error);
        res.json({ success: false });
    }
})

module.exports = router;
