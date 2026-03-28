require("dotenv").config();
const express = require("express");
const cors = require("cors");

// ROUTES
const authRoutes = require("./routes/authRoutes");
const employeeRoutes = require("./routes/employeeRoutes");

const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/employees", employeeRoutes);

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("API running 🚀");
});

// SERVER
app.listen(5000, () => {
  console.log("Server running on port 5000");
});