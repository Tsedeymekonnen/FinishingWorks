const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path"); // Required for handling file paths
const cors = require('cors');
// Connect to MongoDB
mongoose.connect("mongodb+srv://tsedey:nQBV4BX3Z5asZuvG@cluster0.x7yvsjh.mongodb.net/Gallery", { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch(error => {
  console.error('Error connecting to MongoDB:', error);
});

// Define a schema for the form data
const formDataSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String, // Assuming the image field will contain the URL/path to the image file
});

// Create a model based on the schema, specifying the collection name
const FormData = mongoose.model("FormData", formDataSchema, "formdatas");

// Ensure the indexes exist in the database
FormData.createIndexes()
  .then(() => {
    console.log("Indexes created successfully");
  })
  .catch((err) => {
    console.error("Error creating indexes:", err);
  });

// Create an instance of the Express application
const app = express();

// Middleware for parsing JSON data
app.use(bodyParser.json());

// Multer configuration for handling file uploads
const upload = multer({ dest: 'uploads/' }); // Destination folder for uploaded files
app.use(cors());
// Route for handling form submissions with file upload
app.post("/api/form", upload.single('image'), (req, res) => {
  // Extract the form data from the request body
  const { title, description } = req.body;
  const image = req.file ? req.file.path : null; // Get the file path if uploaded

  // Create a new form data instance
  const formData = new FormData({
    title,
    description,
    image, // Save the file path to the image field
  });

  // Save the form data to the database
  formData.save()
    .then(() => {
      res.status(200).send("Form data saved successfully");
    })
    .catch((err) => {
      console.error("Error saving form data:", err);
      res.status(500).send(`Internal Server Error: ${err.message}`);
    });
});

// Serve uploaded images statically
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Start the server
app.listen(3001, () => {
  console.log("Server is listening on port 3001");
});