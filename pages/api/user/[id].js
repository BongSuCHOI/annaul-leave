const db = require('../../../db/models');

export default async function handler(req, res) {
	const { id: user_id } = req.query;

	if (req.method === 'GET') {
		const result = await db.users.findOne({
			where: { user_id: user_id },
			include: [{ model: db.vacations, required: false }],
		});
		return res.status(200).json(result);
	} else {
		console.log('ERROR: only GET');
	}
}
