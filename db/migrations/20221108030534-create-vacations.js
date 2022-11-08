'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('vacations', {
			id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV4,
			},
			reason: {
				type: Sequelize.STRING,
			},
			start: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			end: {
				type: Sequelize.STRING,
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
			user_id: {
				type: Sequelize.UUID,
				references: {
					model: 'users',
					key: 'id',
				},
				onDelete: 'CASCADE',
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('vacations');
	},
};
