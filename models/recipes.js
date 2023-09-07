const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recipe extends Model { }

Recipe.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		directions: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		keywords: {
			type: DataTypes.TEXT,
			allowNull: false,
		}
	}
)

module.exports = { Recipe };