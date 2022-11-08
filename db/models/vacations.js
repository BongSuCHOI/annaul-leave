'use strict';
const { Model } = require('sequelize');
class vacations extends Model {
	/**
	 * Helper method for defining associations.
	 * This method is not a part of Sequelize lifecycle.
	 * The `models/index` file will call this method automatically.
	 */
	static init(sequelize, DataTypes) {
		return super.init(
			{
				reason: {
					type: DataTypes.STRING,
				},
				start: {
					type: DataTypes.DATE,
					allowNull: false,
				},
				end: {
					type: DataTypes.DATE,
					allowNull: false,
				},
			},
			{
				sequelize,
				modelName: 'vacations',
			}
		);
	}

	static associate(models) {
		// vacations 테이블 안에 userId 외래키 컬럼 추가
		this.belongsTo(models.users, {
			foreignKey: 'user_id',
			sourceKey: 'id',
			onDelete: 'CASCADE',
		});
	}
}

module.exports = vacations;
