'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('users', {
			id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV4,
			},
			role: {
				type: Sequelize.INTEGER,
				defaultValue: 0,
			},
			user_id: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			user_pw: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			user_name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			startDate: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('users');
	},
};
