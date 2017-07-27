const mongoose = require('mongoose');

const venueSchema = mongoose.Schema({

  venueId: { 
    type: String,
    required: true,
    unique: true
  },
  going: {
    type: [Schema.Types.ObjectId],
    ref: 'User',
    default: []
  },
  expires: {
    type: Date,
    expires: 0
  }

});

venueSchema.statics.findOrCreate = function(venueId, cb) {
  Venue.findOne({
    'venueId': venueId
  }, 
  function(err, venue) {
    if (err) {
      return cb(err);
    }
  
    if (!venue) {
      // Set expiration
      let date = new Date();
      date.setDate(date.getDate() + 1);
      date.setHours(5, 0, 0, 0);
  
      venue = new Venue({
        venueId: venueId,
        expires: date
      });

      venue.save(function(err) {
        return cb(err, venue);
      });

    } else {
      // Venue found
      return cb(err, venue);
    }
  });
};

venueSchema.method.toggleGoing = function(userId, cb) {
  let users = this.going;
  const index = users.indexOf(userId);
  if (index > -1) {
    users.splice(index, 1);
  } else {
    user.push(userId);
  }
  this.save(function(err, venue) {
    cb(err, venue);
  });
};

module.exports = mongoose.model('Venue', venueSchema);
