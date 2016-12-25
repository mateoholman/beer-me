const express = require('express');
const router = express.Router();
const jwt = require('jwt-simple');
const User = require('../models/UserModel');
const bcrypt = require('bcrypt');
const passport = require('passport');

// Require our custom strategies
require('../services/passport');

// Setup our sign-in strategy. We disable sessions because we are requiring
// credentials to be supplied with each request to our API server.
const signinStrategy = passport.authenticate('signinStrategy',
  { session: false,
    successRedirect: '/',
    failureRedirect: '/signin',
    failureFlash: true
});

// Helper method to create a token for a user
function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ userId: user.id, iat: timestamp }, process.env.SECRET);
}

router.post('/signin', signinStrategy, function(req, res, next) {
  res.json({ token: tokenForUser(req.user)});
});

router.post('/signup', function(req, res, next) {
  // Grab the username and password from our request body
  const { username, password, name } = req.body;

  // If no username or password was supplied return an error
  if (!username || !password) {
    return res.status(422)
      .json({ error: 'You must provide an username and password' });
  }

  // Look for a user with the current user name
  User.findOne({ username }).exec()
    .then((existingUser) => {
      // If the user exist return an error on sign up
      if (existingUser) {
        return res.status(422).json({ error: 'Username is in use' });
      }

      // If the user does not exist create the user
      // User bcrypt to has their password, remember, we never save plain text passwords!
      bcrypt.hash(password, 10, function(err, hashedPassword) {
        if (err) {
          return next(err);
        }

        // Create a new user with the supplied username, and the hashed password
        const user = new User({ username, password: hashedPassword, name });

        // Save and return the user
        user.save()
          .then(user => res.json({ token: tokenForUser(user) }));
      });
    })
    .catch(err => next(err));
});

module.exports = router;
