const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {
	checkPassword(loginPassword) {
		return bcrypt.compareSync(loginPassword, this.password)
  }
 }

User.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		userName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			unique: true,
			validate: {
				isEmail: true,
			},
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [6],
			},
		},
	},
	{
		hooks: {
			async beforeCreate(newUser) {
				 newUser.password = await bcrypt.hash(newUser.password, 10);
				 return newUser;
			},
	  },
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: 'user',
	}
);

module.exports = User;
