const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  photoURL: String,
  firstName: String,
  lastName: String,
  age: String,
  sex: String,
  bio: String
});

module.exports = mongoose.model('Profile', ProfileSchema);
