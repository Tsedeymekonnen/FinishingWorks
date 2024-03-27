const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("mongodb+srv://tsedey:nQBV4BX3Z5asZuvG@cluster0.x7yvsjh.mongodb.net/Gallery", { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a schema for the form data
const formDataSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
});

// Create a model based on the schema
const MyFormData = mongoose.model("MyFormData", formDataSchema);

// Create an instance of the Express application
const app = express();

// Middleware for parsing JSON data
app.use(bodyParser.json());

// Route for fetching form data entries
app.get("/api/formdata", async (req, res) => {
  try {
    const formDataEntries = await MyFormData.find();
    res.status(200).json(formDataEntries);
  } catch (error) {
    console.error("Error retrieving form data:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Route for deleting a single form data entry
app.delete("/api/formdata/:id", async (req, res) => {
  const { id } = req.params; // Access the dynamic ID from the URL

  try {
    // Find the form data entry by ID and remove it
    const deletedFormData = await MyFormData.findByIdAndDelete(id);

    if (!deletedFormData) {
      return res.status(404).json({ message: "Form data not found" });
    }

    res.status(200).json({ message: "Form data deleted successfully" });
  } catch (error) {
    console.error("Error deleting form data:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Start the server
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});