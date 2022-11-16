const db = require('@db/models');
const { v4: uuidv4 } = require('uuid');

export default async function handler(req, res) {
	if (req.method === 'GET') {
		const result = await db.users.findAll({
			include: [{ model: db.vacations, required: false }],
		});
		return res.status(200).json(result);
	} else {
		console.log('ERROR: findAll is GET');
	}

	if (req.method === 'POST') {
		const { body } = req;
		const existsID = await db.users.findOne({
			where: { user_id: body.id },
		});

		if (existsID) {
			return res.status(200).json({ message: '이미 사용중인 아이디' });
		}

		const result = await db.users.create({
			id: uuidv4(),
			role: body.role,
			user_id: body.id,
			user_pw: body.pw,
			user_name: body.name,
			startDate: body.startDate,
		});
		return res.status(200).json(result);
	} else {
		console.log('ERROR: create is POST');
	}
}
