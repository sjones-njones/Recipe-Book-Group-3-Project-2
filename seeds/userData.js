const { User } = require('../models');

// seed data for user model
const userData = [
  {
    name: 'Stephanie',
    email: 'sjones.njones@gmail.com',
    password: 'sjones',
  },
  {
    name: 'Neil',
    email: 'njones.njones@gmail.com',
    password: 'njones',
  },
  {
    name: 'Maya',
    email: 'mjones.njones@gmail.com',
    password: 'mjones',
  },
];

// seeds the user model
const seedUser = () => User.bulkCreate(userData);

// allows seedUser to available in other files
module.exports = seedUser;
