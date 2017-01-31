// dotenv allows us to declare environment variables in a .env file,
// find out more here https://github.com/motdotla/dotenv
require('dotenv').config();

const compression = require('compression');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const axios = require('axios');
const chalk = require('chalk');

// Require our custom strategies
require('./services/passport');

// Setup the database
const databaseUrl = process.env.MONGODB_URI || 'mongodb://localhost/beer-me';
mongoose.Promise = global.Promise;
mongoose.connect(databaseUrl)
  .then(() => console.log(chalk.cyan(`[mongoose] Connected to MongoDB`)))
  .catch(() => console.log(chalk.red(`[mongoose] Error connecting to MongoDB`)));

const app = express();

const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 3001;

app.set('port', port);

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use(compression());
app.use(cors());
app.use(bodyParser.json());

//Setup our routes
const authenticationRoutes = require('./routes/authentication');
const authStrategy = passport.authenticate('authStrategy', { session: false });
const listRoutes = require('./routes/list');
const itemRoutes = require('./routes/item');

app.use('/api', authenticationRoutes);
app.use('/api/lists', authStrategy, listRoutes);
app.use('/api/items', authStrategy, itemRoutes);

app.get('/api/secret', authStrategy, function(req, res, next) {
  res.send(`The current user is ${req.user.username}`);
});

//Create our own middleware to access the Brewery DB API, because it does not
//allow CORS!
//We specify the search term for the Brewery DB AP through a query.
app.get('/api/addNewBeer', function(req, res, next) {
  const pathName = "http://api.brewerydb.com/v2/beers?name=" + req.query.name + "&key=" + process.env.BDBAPI;
  axios.get(pathName)
    .then(resp => {
      res.send(resp.data);
      })
  .catch(err => console.log(err))

});

app.all('*', (req, res, next) => {
  req.status = 401;
  return res.json(`Not found. Couldn't find it. It's not here!`);
});

app.use((err, req, res, next) => {
  res.status = 500;
  return res.json(`Unable to process request. ERROR: ${err}`);
});

app.listen(port, () => {
  console.log(chalk.blue(`[express] Listening on port:${port} [${env}]`));
});
