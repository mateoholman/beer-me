require('dotenv').config();

const bcrypt = require('bcrypt');
const passport = require('passport');
const User = require('../models/UserModel');
const LocalStrategy = require('passport-local');
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');

const signinStrategy = new LocalStrategy(function(username, password, done) {
  User.findOne({ username: username }).exec()
    .then(user => {
      // If there is no user found call done with a `null` argument, signifying no error
      // and `false` signifying that the signin failed
      if (!user) {
        return done(null, false);
      }

      bcrypt.compare(password, user.password, function(err, isMatch) {
        // If there is an error call done with our error
        if (err) {
          return done(err, false);
        }

        // If the passwords do not match call done with a `null` argument, signifying no error
        // and `false` signifying that the signin failed
        if (!isMatch) {
          return done(null, false);
        }

        // If we have no errors and the passwords match
        // call done with a `null` argument, signifying no error
        // and with the now signed in user
        return done(null, user);
      });
    })
    .catch(err => done(err, false));
});//End signinStrategy

// Setup options for JwtStrategy
const jwtOptions = {
  // Get the secret from our environment
  secretOrKey: process.env.SECRET,
  // Tell our strategy where to find our token in the request
  jwtFromRequest: ExtractJwt.fromHeader('authorization')
};

// Create JWT strategy
// This will take our token and decode it to
// extract the information we have stored in it
const authStrategy = new JwtStrategy(jwtOptions, function(payload, done) {
  User.findById(payload.userId, function(err, user) {
    if (err) { return done(err, false); }

    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  });
});

// Tell passport which strategies to use
passport.use('authStrategy', authStrategy);
passport.use('signinStrategy', signinStrategy);
