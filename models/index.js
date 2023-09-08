const User = require('./User');
const Recipe = require('./Recipe');

User.hasMany(Recipe, {
    foreignKey: 'UserId'
});

Recipe.belongsTo(User, {
    foreignKey: 'UserId'
});

module.exports = { User, Recipe };