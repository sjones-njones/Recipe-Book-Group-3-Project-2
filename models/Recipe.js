const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// creates a model for recipe
class Recipe extends Model {}

Recipe.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    idMeal: {
      // MealsDb(server-side) id
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    strMeal: {
      // Meal name
      type: DataTypes.STRING,
      allowNull: false,
    },
    strMealThumb: {
      // Meal thumbnail
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      // User id association
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'recipe',
  }
);

// passes recipe to other files
module.exports = Recipe;
