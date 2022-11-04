'use strict';

const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		//유저 생성
		await queryInterface.bulkInsert('Users', [
			{
				id: uuidv4(),
				role: 1,
				user_id: 'admin',
				user_pw: '1234',
				user_name: 'admin',
				startDate: '0',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: uuidv4(),
				role: 0,
				user_id: 'user1',
				user_pw: '1234',
				user_name: 'user1',
				startDate: '2021-05-31',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: uuidv4(),
				role: 0,
				user_id: 'user2',
				user_pw: '1234',
				user_name: 'user2',
				startDate: '2022-07-01',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		//유저 데이터 삭제
		return queryInterface.bulkDelete('Users', null, {});
	},
};
