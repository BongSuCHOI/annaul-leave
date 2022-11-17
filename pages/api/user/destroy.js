const db = require('@db/models');

export default async function handler(req, res) {
	if (req.method !== 'POST') {
		res.status(400).json({ message: 'ERROR: only POST' });
		return;
	}

	try {
		const { body } = req;
		const result = await db.users.destroy({
			where: { id: body.pk },
		});
		return res.status(200).json(result);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
}
