const { Recipe } = require('../models');

const recipeData = [
  {
    title: 'Honey Teriyaki Salmon',
     'sjones.njones@gmail.com',
    password: 'sjones',
  },
 

];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;