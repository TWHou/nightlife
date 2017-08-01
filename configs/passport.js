const TwitterStrategy = require('passport-twitter').Strategy;

const User = require('../models/user');

module.exports = function(passport) {
  
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(user, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  passport.use(new TwitterStrategy({
    consumerKey: process.env.TWITTER_KEY,
    consumerSecret: process.env.TWITTER_SECRET,
    callbackURL: `${process.env.BASE_URL}/auth/twitter/callback`,
    passReqToCallback : true
  }, function(req, token, tokenSecret, profile, cb) {
    User.findOne({ userId: profile.id }, function (err, user) {
      if (err) {
        return cb(err);
      }
      if (user) {
        // user already exist
        if (!user.token) {
          // auth was removed at some point
          user.token = token;
          user.username = profile.username;
          user.displayName = profile.displayName;
          if (profile.emails) {
            user.email = profile.emails[0].value
          }
          user.photo = profile.photos[0].value
          user.save(function(err) {
            if (err) {
              return cb(err);
            }
            return cb(null, user);
          })
        }
        return cb(null, user);
      } else {
        // no user found, create new one
        let newUser = new User();
        newUser.userId = profile.id;
        newUser.token = token;
        newUser.displayName = profile.displayName;
        newUser.username = profile.username;
        if (profile.emails) {
          newUser.email = profile.emails[0].value
        }
        newUser.photo = profile.photos[0].value
        newUser.save(function(err){
          if (err) {
            return cb(err);
          }
          return cb(null, newUser);
        })
      }
    });
  }));
}
