const express = require('express');
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const expressSession = require("express-session");
const logger = require('morgan');
// const cors = require("cors");
const passport = require("passport");
const flash = require("flash");

const app = express();

require('dotenv').config();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(
  expressSession({
    secret: "Y*YoT53$$RYh",
    resave: true,
    saveUninitialized: false
  })
);
app.use(cookieParser());
app.use(bodyParser.json());

// Passport authentication
app.use(passport.initialize());
app.use(passport.session());
app.use(flash()); // use connect-flash for flash messages stored in session


// Rotas
app.get('/', (req, res, next) => {
  const p = require("./package.json");
  const pversion = p.version;
  res.send("Status-API v" + pversion + " " + "dev");
  next();
});

app.use("/", require("./routes"));

module.exports = app;
