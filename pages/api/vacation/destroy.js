// const db = require('@db/models');

export default async function handler(req, res) {
	if (req.method === 'POST') {
		// const { body } = req;
		// const result = await db.vacations.destroy({
		// 	where: { id: body.pk },
		// });
		result = { user_pw: '123', user_id: '123', role: 0 }
		return res.status(200).json(result);
	} else {
		console.log('ERROR: only POST');
	}
}
