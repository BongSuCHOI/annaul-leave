const db = require('@db/models');
const { v4: uuidv4 } = require('uuid');

export default async function handler(req, res) {
	if (req.method !== 'POST') {
		res.status(400).json({ message: 'ERROR: only POST' });
		return;
	}

	try {
		const { body } = req;
		const result = await db.vacations.create({
			id: uuidv4(),
			reason: body.reason,
			start: body.leaveStart,
			end: body.leaveEnd,
			user_id: body.id,
		});
		return res.status(200).json(result);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
}
