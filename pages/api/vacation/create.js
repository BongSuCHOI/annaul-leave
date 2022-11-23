// const db = require('@db/models');
const { v4: uuidv4 } = require('uuid');

export default async function handler(req, res) {
	if (req.method !== 'POST') {
		res.status(400).json({ message: 'ERROR: only POST' });
		return;
	}

	try {
		// const { body } = req;
		// const result = await db.vacations.create({
		// 	id: uuidv4(),
		// 	reason: body.reason,
		// 	start: body.leaveStart,
		// 	end: body.leaveEnd,
		// 	user_id: body.id,
		// });
		return res.status(200).json([
			{
			  id: '5e789d35-0b68-4efe-9844-15b549699fa5',
			  role: 0,
			  user_id: 'user1',
			  user_pw: '$2a$12$qjRc9lVN18KbWe0eat2WpubjAr6xsbwiflzeWI5BoM0clZaeHthFS',
			  user_name: '유저1',
			  startDate: '2021-02-11T00:00:00.000Z',
			  createdAt: '2022-11-15T06:43:25.000Z',
			  updatedAt: '2022-11-15T06:43:25.000Z',
			  vacations: [ [Object] ]
			}
		  ]);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
}
