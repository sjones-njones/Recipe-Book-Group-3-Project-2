// makes models available in this file
const User = require('./User');
const Recipe = require('./Recipe');

// sets up connection between user and recipe (many to many)
User.hasMany(Recipe, {
  foreignKey: 'UserId',
});

Recipe.belongsTo(User, {
  foreignKey: 'UserId',
});

// passes user and recipe to other files
module.exports = { User, Recipe };
