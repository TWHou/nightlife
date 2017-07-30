const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
    accessToken: {
      type: String,
      required: true,
      unique: true
    },
    tokenType: {
      type: String,
      require: true
    },
    expiresIn: {
      type: Date,
      expires: 0,
      required: true
    }
});

module.exports = mongoose.model('Token', tokenSchema);
