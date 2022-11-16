// 어떤 유저가 로그인 하는지 알수없으니 서버에서 미리 유저 데이터 렌더링 X
'use client';

import UserHeader from '@app/user/UserHeader';
import Calender from '@app/user/Calendar';
import { useGetUser } from '@lib/db_controller';

export default function UserHome({ params: { id } }) {
	const { data } = useGetUser({ id });

	if (data) {
		return (
			<div className="admin-wrap">
				<UserHeader userData={data} />
				<Calender vacationData={data.vacations} />
			</div>
		);
	}
}
