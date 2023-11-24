const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors()); // Enable CORS
const port = 3001;

const connectDB = require('./DB');
connectDB();

// Your middleware function CreatePetshelterform
const CreatePetshelterform = require('./path/to/CreatePetshelterform');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require('./Routes/CreateRehome')); // Use CreateRehome.js route

// Apply CreatePetshelterform middleware specifically for CreatePetshelterform route
app.get("/CreatePetshelterform", CreatePetshelterform, (req, res) => {
  console.log("Message received");
  
  // Assuming CreatePetshelterform has processed data and attached it to req.shelterFormData
  const shelterFormData = req.shelterFormData; // Modify this based on how your middleware attaches data
  
  // Send a response using the processed data
  res.send(`
    <html>
      <body>
        <h1>Welcome to Pet Shelter Form</h1>
        <p>You sent a get req. Shelter Form Data: ${shelterFormData}</p>
        <!-- Your form or additional content here -->
      </body>
    </html>
  `);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
