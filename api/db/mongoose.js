const mongoose = require("mongoose");

// Connect to the MongoDB database with updated options
mongoose
  .connect("mongodb://localhost:27017/TaskManager", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB successfully :)");
  })
  .catch((e) => {
    console.log("Error while attempting to connect to MongoDB");
    console.log(e);
  });

module.exports = {
  mongoose,
};
