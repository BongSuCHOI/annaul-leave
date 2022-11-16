'use strict';
const { Model } = require('sequelize');
class users extends Model {
	/**
	 * Helper method for defining associations.
	 * This method is not a part of Sequelize lifecycle.
	 * The `models/index` file will call this method automatically.
	 */
	static init(sequelize, DataTypes) {
		return super.init(
			{
				role: {
					type: DataTypes.INTEGER,
					defaultValue: 0,
				},
				user_id: {
					type: DataTypes.STRING,
					allowNull: false,
				},
				user_pw: {
					type: DataTypes.STRING,
					allowNull: false,
				},
				user_name: {
					type: DataTypes.STRING,
					allowNull: false,
				},
				startDate: {
					type: DataTypes.DATE,
					allowNull: false,
				},
			},
			{
				sequelize,
				modelName: 'users',
			}
		);
	}

	// 모델 관계성 정의
	static associate(models) {
		// vacation 테이블 안에 userId 외래키 컬럼 추가
		this.hasMany(models.vacations, {
			foreignKey: 'user_id',
			sourceKey: 'id',
		});
	}
}

module.exports = users;
