const mongoose = require("mongoose");
// Define User Schema & Model
const userSchema = new mongoose.Schema({
  shop: String,
  userId: String,
  name: String,
  email: { type: String, unique: true },
  uri: String
},
  { versionKey: '__v' }
);
userSchema.set('timestamps', true);
const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel