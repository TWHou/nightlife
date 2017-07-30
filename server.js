require('dotenv').config();

const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const apiRouter = require('./routes/api.js');
const authRouter = require('./routes/auth.js');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI, { useMongoClient: true })
  .then(() => console.info('connection successful'))
  .catch((err) => console.error(err));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

// Create link to Angular build directory
const distDir = __dirname + "/dist/";
app.use(express.static(distDir));

// Answer API requests.
app.use('/api', apiRouter);
app.use('/auth', authRouter);

app.use(function(err, req, res, next) {
  if(!err) return next();
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: err
  });
});

app.listen(PORT, function () {
  console.info(`Listening on port ${PORT}`);
});