// server.js
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors()); // Enable CORS

const port = 3001;

const connectDB = require('./DB');
connectDB();

app.get("/CreatePetshelterform", async (req, res) => {
	console.log("=================");
	console.log("/CreatePetshelterform");

	try {
		console.log("data sent");
		res.send(data);
	} catch (error) {
		console.log(error);
		res.status(500).send({ error: "error, see server logs" });
	}
});

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json())
app.use('/api', require("./Routes/CreateUser"));

app.use('/api', require('./Routes/CreateRehome')); // Use CreateRehome.js route


app.use('/api', require('./Routes/CreatePetshelterform'));



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
