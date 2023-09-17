const sequelize = require('../config/connection');
const seedUser = require('./userData');
const seedRecipe = require('./recipeData');

// seeds all of the data
const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();
  await seedRecipe();

  process.exit(0);
};

seedAll();
