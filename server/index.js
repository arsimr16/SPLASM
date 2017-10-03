const express = require('express');
const app = express();
const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');
const router = require('./router.js');
const db = require('../db/mongo/index.js');
// const request = require('request');
const sequelize = require('../db/sql/index.js');
const env = require('dotenv').load();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/../client'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(session({secret: 'splasm', resave: true, saveUninitialized: true})); //session secret
app.use(passport.initialize());
app.use(passport.session()); //persistent login sessions
app.use('/', router);

app.get('/', (req, res) => res.send());

app.listen(port, () => console.log(`App listening on port ${port}`));
