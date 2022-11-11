const db = require('../../db/models');
const { v4: uuidv4 } = require('uuid');

export default async function handler(req, res) {
	if (req.method === 'GET') {
		const result = await db.users.findAll();
		return res.status(200).json(result);
	}

	if (req.method === 'POST') {
		const { dbMethod } = req.query;
		const { body } = req;
		let result;

		if (dbMethod === 'findOne') {
			result = await db.users.findOne({
				where: { user_id: body.id, user_pw: body.pw },
			});
		}

		if (dbMethod === 'create') {
			result = await db.users.create({
				id: uuidv4(),
				user_id: body.id,
				user_pw: body.pw,
				user_name: body.name,
				startDate: body.startDate,
			});
		}

		if (dbMethod === 'destroy') {
			result = await db.users.destroy({
				where: { id: body.pk },
			});
		}

		return res.status(200).json(result);
	}
}