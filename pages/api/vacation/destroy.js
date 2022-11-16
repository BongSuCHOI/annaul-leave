const db = require('@db/models');

export default async function handler(req, res) {
	if (req.method === 'POST') {
		const { body } = req;
		const result = await db.vacations.destroy({
			where: { id: body.pk },
		});
		return res.status(200).json(result);
	} else {
		console.log('ERROR: only POST');
	}
}
