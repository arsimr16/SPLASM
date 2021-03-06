const Sequelize = require('sequelize');
const url = process.env.CLEARDB_DATABASE_URL;
let sequelize;

if (url) {
  sequelize = new Sequelize(url, {});
} else {
  sequelize = new Sequelize('splasm', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
  });
}

sequelize.authenticate()
  .then(() => {
    console.log('Successfully connected to mysql database');
  })
  .catch((err) => {
    console.error('Error connecting to mysql database', err);
  });

module.exports = sequelize;

const Course = require('./models/Course.js');
const Session = require('./models/Session.js');
const User = require('./models/User.js');
const UserToFriends = require('./models/UserToFriends.js');
const UserToCourse = require('./models/UserToCourse.js');
