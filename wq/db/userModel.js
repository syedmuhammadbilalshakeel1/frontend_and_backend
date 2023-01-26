const mongoose = require("mongoose");

// user schema
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: [true, "Email exist"],
  },
  password: {
    type: String,
    required: [true, "Please procide a password"],
    unique: false,
  },
});

module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);





























// const mongoose = require("mongoose");

// // user schema
// const UserSchema = new mongoose.Schema({
//   // email field
//   email: {
//     type: String,
//     required: [true, "Please provide an Email!"],
//     unique: [true, "Email Exist"],
//   },

//   //   password field
//   password: {
//     type: String,
//     required: [true, "Please provide a password!"],
//     unique: false,
//   },
// });

// // export UserSchema
// module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);
