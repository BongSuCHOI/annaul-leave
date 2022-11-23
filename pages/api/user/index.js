// const db = require('@db/models');
const { v4: uuidv4 } = require('uuid');

export default async function handler(req, res) {
	if (req.method === 'GET') {
		try {
			// const result = await db.users.findAll({
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
					vacations: [[Object]],
				},
				{
					id: '9bd431cb-b33f-45aa-b753-54c657cce1c1',
					role: 0,
					user_id: 'test2',
					user_pw: '$2a$12$lqo1QnkVKlbj1fy4nRbaRefS1iFt.VtVIdeMA3rD3OQCjHHWn04Ie',
					user_name: '테스트2',
					startDate: '2022-04-13T00:00:00.000Z',
					createdAt: '2022-11-15T03:03:39.000Z',
					updatedAt: '2022-11-15T03:03:39.000Z',
					vacations: [],
				},
				{
					id: 'b3419a94-283d-4409-af85-f045eaaca5b8',
					role: 0,
					user_id: 'test',
					user_pw: '$2a$12$VNy3pT2Xp2n81T0ncOl7ru..kuZ.mnt2SdBaryiSNs8RRx8qgS0z.',
					user_name: '테스트',
					startDate: '2022-11-02T00:00:00.000Z',
					createdAt: '2022-11-14T08:59:36.000Z',
					updatedAt: '2022-11-14T08:59:36.000Z',
					vacations: [[Object], [Object], [Object], [Object]],
				},
				{
					id: 'c5603158-a673-4d1c-b388-dc6bb22a15bb',
					role: 1,
					user_id: 'admin',
					user_pw: '$2a$12$rdXRVklhgLi0llYol9TYRuZK/0C3HVB5fqNGLRRgCj57z9LsETbMK',
					user_name: '관리자',
					startDate: '2001-01-01T00:00:00.000Z',
					createdAt: '2022-11-15T06:34:09.000Z',
					updatedAt: '2022-11-15T06:34:09.000Z',
					vacations: [],
				},
			]);
		} catch (err) {
			res.status(500).json({ message: err.message });
		}
	}

	if (req.method === 'POST') {
		try {
			// const { body } = req;
			// const existsID = await db.users.findOne({
			// 	where: { user_id: body.id },
			// });

			// if (existsID) {
			// 	return res.status(200).json({ message: '이미 사용중인 아이디' });
			// }

			// const result = await db.users.create({
			// 	id: uuidv4(),
			// 	role: body.role,
			// 	user_id: body.id,
			// 	user_pw: body.pw,
			// 	user_name: body.name,
			// 	startDate: body.startDate,
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
					vacations: [[Object]],
				},
				{
					id: '9bd431cb-b33f-45aa-b753-54c657cce1c1',
					role: 0,
					user_id: 'test2',
					user_pw: '$2a$12$lqo1QnkVKlbj1fy4nRbaRefS1iFt.VtVIdeMA3rD3OQCjHHWn04Ie',
					user_name: '테스트2',
					startDate: '2022-04-13T00:00:00.000Z',
					createdAt: '2022-11-15T03:03:39.000Z',
					updatedAt: '2022-11-15T03:03:39.000Z',
					vacations: [],
				},
				{
					id: 'b3419a94-283d-4409-af85-f045eaaca5b8',
					role: 0,
					user_id: 'test',
					user_pw: '$2a$12$VNy3pT2Xp2n81T0ncOl7ru..kuZ.mnt2SdBaryiSNs8RRx8qgS0z.',
					user_name: '테스트',
					startDate: '2022-11-02T00:00:00.000Z',
					createdAt: '2022-11-14T08:59:36.000Z',
					updatedAt: '2022-11-14T08:59:36.000Z',
					vacations: [[Object], [Object], [Object], [Object]],
				},
				{
					id: 'c5603158-a673-4d1c-b388-dc6bb22a15bb',
					role: 1,
					user_id: 'admin',
					user_pw: '$2a$12$rdXRVklhgLi0llYol9TYRuZK/0C3HVB5fqNGLRRgCj57z9LsETbMK',
					user_name: '관리자',
					startDate: '2001-01-01T00:00:00.000Z',
					createdAt: '2022-11-15T06:34:09.000Z',
					updatedAt: '2022-11-15T06:34:09.000Z',
					vacations: [],
				},
			]);
		} catch (err) {
			res.status(500).json({ message: err.message });
		}
	}
}
