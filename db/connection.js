const mongoose = require("mongoose");
const DB = process.env.DATABASE;
mongoose
  .connect(DB)
  .then(() => {
    console.log("connection successfull to database");
  })
  .catch(() => {
    console.log("no connection");
  });
