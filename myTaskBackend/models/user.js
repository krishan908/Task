const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    default: "",
  },
  lastName: {
    type: String,
    default: "",
  },
  phone: {
    type: String,
    default: 0,
  },
  email: {
    type: String,
    default: "",
    lowercase: true,
  },
});

module.exports = mongoose.model("User", UserSchema);
