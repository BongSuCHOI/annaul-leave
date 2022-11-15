const db = require('../../../db/models');
const { v4: uuidv4 } = require('uuid');

export default async function handler(req, res) {
	if (req.method === 'POST') {
		const { body } = req;
		const result = await db.vacations.create({
			id: uuidv4(),
			reason: body.reason,
			start: body.leaveStart,
			end: body.leaveEnd,
			user_id: body.id,
		});
		return res.status(200).json(result);
	} else {
		console.log('ERROR: only POST');
	}
}
