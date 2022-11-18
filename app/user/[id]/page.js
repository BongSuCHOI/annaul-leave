// 어떤 유저가 로그인 하는지 알수없으니 서버에서 미리 유저 데이터 렌더링 X
'use client';

import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import UserHeader from '@app/user/UserHeader';
import Calender from '@app/user/Calendar';
import { useGetUser } from '@lib/db_controller';

export default function UserHome({ params: { id } }) {
	const { data: session, status } = useSession();
	const router = useRouter();

	useEffect(() => {
		if (!session || status === 'unauthenticated') {
			router.replace('/');
		}
	}, []);

	if (session || status === 'authenticated') {
		const { data } = useGetUser({ id });

		return (
			<div className="admin-wrap">
				<UserHeader userData={data} />
				<Calender vacationData={data.vacations} />
			</div>
		);
	}
}
