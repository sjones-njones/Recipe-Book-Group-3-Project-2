const { User } = require('../models');

const userData = [
  {
    userName: 'Stephanie',
    email: 'sjones.njones@gmail.com',
    password: 'sjones',
  },
  {
    userName: 'Neil',
    email: 'njones.njones@gmail.com',
    password: 'njones',
  },
  {
    userName: 'Maya',
    email: 'mjones.njones@gmail.com',
    password: 'mjones',
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
