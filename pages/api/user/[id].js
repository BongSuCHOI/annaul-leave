// const db = require('@db/models');

export default async function handler(req, res) {
	if (req.method !== 'GET') {
		res.status(400).json({ message: 'ERROR: only GET' });
		return;
	}

	// const { id: user_id } = req.query;

	try {
		// const result = await db.users.findOne({
		// 	where: { user_id: user_id },
		// 	include: [{ model: db.vacations, required: false }],
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
