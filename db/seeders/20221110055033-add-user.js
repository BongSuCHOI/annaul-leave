'use strict';

const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		// 유저 생성
		await queryInterface.bulkInsert('users', [
			{
				id: uuidv4(),
				role: 0,
				user_id: 'user1',
				user_pw: 'user1',
				user_name: 'user1',
				startDate: '2021-05-31',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: uuidv4(),
				role: 0,
				user_id: 'user2',
				user_pw: 'user2',
				user_name: 'user2',
				startDate: '2022-01-01',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		// 유저 삭제
		return queryInterface.bulkDelete('users', null, {});
	},
};
