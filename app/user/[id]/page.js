'use client';

import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import UserHeader from '@app/user/UserHeader';
import Calender from '@app/user/Calendar';
import { useDBGET } from '@lib/db_controller';

export default function UserHome({ params: { id } }) {
	const { data: session, status } = useSession();
	const router = useRouter();

	useEffect(() => {
		if (!session || status === 'unauthenticated') {
			router.replace('/');
		}
	}, []);

	if (session || status === 'authenticated') {
		// 유저랑 휴가랑 조인해서 가져오는게 좋나?
		// 따로따로 가져와서 현재 날짜 기준으로 데이터 길이 리밋 걸어서 가져오는게 좋나?
		// 지금은 유저랑 휴가랑 조인해서 가져와서 filter함수로 현재 달 기준 앞뒤 한달씩만 잘라서 쓰는 중
		const { data } = useDBGET(`/user/${id}`, ['user']);

		if (data) {
			return (
				<div className="user-wrap">
					<UserHeader userData={data} />
					<Calender vacationData={data.vacations} />
				</div>
			);
		}
	}
}
