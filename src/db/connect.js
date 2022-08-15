const { mongoose } = require("mongoose");

const connectDB = async (dbURL) => {
  return await mongoose.connect(dbURL);
};

module.exports = connectDB;
