const { User } = require('../models');

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

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
