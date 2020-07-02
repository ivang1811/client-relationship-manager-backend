const express = require("express");
const mongoose = require("mongoose");
const config = require("./config.js");
const cors = require("cors");
require("dotenv/config");
//init express
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
// Import Routes

const clientsRoute = require("./routes/clients");

app.use("/clients", clientsRoute);

// Connect to DB
mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@crm.hpxk7.mongodb.net/${config.DB_NAME}?retryWrites=true&w=majority`,
  { useNewUrlParser: true },
  () => console.log("Connected to db")
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
