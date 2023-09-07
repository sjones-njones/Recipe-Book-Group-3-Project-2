const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Ingredient extends Model { }

Ingredient.init(
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
		quantity: {
			type: DataTypes.DECIMAL,
			allowNull: false,
		},
		unit: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	}
)

module.exports = { Ingredient };