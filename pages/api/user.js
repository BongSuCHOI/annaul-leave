const db = require('../../db/models');

export default async function handler(req, res) {
	if (req.method === 'GET') {
		const findUser = await db.users.findOne({ where: { role: 1 } });
		console.log(findUser);

		return res.status(200).json({ a: '123' });
		// return res.status(200).json(users);
	}

	// if (req.method === 'POST') {
	// 	const { body } = req;
	// 	const { id, pw, name, startDate, role } = body;
	// 	const newUser = await sequelize.Users.create({
	// 		id,
	// 		pw,
	// 		name,
	// 		startDate,
	// 		role,
	// 	});
	// 	return res.status(200).json({
	// 		status: 'success',
	// 		message: 'done',
	// 		data: newUser,
	// 	});
	// }
}
