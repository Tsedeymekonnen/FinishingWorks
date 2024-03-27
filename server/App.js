
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 5001;

app.use(cors());

app.use(bodyParser.json());

const adminCredentials = {
  email: "admin@gmail.com",
  password: "12345678",
};

app.post("/sign-in", (req, res) => {
  const { email, password } = req.body;

  if (email === adminCredentials.email && password === adminCredentials.password) {
    res.status(200).json({ message: "Login successful" });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
