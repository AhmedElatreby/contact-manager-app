const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandeler");
const dotenv = require("dotenv").config();

connectDb();
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(errorHandler);

app.use("/api/contacts", require("./routes/contactRoutes"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

