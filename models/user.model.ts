const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
});

const User = mongoose.model("User", userSchema);


exports.User = User;
exports.userSchema = userSchema;
