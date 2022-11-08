'use strict';

const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		// 어드민 생성
		await queryInterface.bulkInsert('users', [
			{
				id: uuidv4(),
				role: 1,
				user_id: 'admin',
				user_pw: '1234',
				user_name: 'admin',
				startDate: '0000-00-00',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		// 어드민 삭제
		return queryInterface.bulkDelete('users', null, {});
	},
};
