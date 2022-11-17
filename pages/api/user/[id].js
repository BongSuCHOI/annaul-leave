const db = require('@db/models');

export default async function handler(req, res) {
	if (req.method !== 'GET') {
		res.status(400).json({ message: 'ERROR: only GET' });
		return;
	}

	const { id: user_id } = req.query;

	try {
		const result = await db.users.findOne({
			where: { user_id: user_id },
			include: [{ model: db.vacations, required: false }],
		});
		return res.status(200).json(result);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
}
