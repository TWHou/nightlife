const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

  userId: String,
  token: String,
  displayName: String,
  username: String,
  email: String,
  photo: String,
  defaultSearch: String

});

module.exports = mongoose.model('User', userSchema);
