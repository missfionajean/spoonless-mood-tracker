// Required Modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

// Route Imports
const userRoutes = require("./routes/userRoutes");
const dayRoutes = require("./routes/dayRoutes");

// Express App Setup
const app = express();

// Middleware Setup
app.use(cors());
app.use(bodyParser.json());

// Route Setup
app.use("/users", userRoutes);
app.use("/days", dayRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));