const mongoose = require("mongoose");

const connectDB = (url) => {
  mongoose.set("strictQuery", false);
  mongoose.connect(url);
};

module.exports = { connectDB };
