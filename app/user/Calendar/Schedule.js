'use client';

import styles from '@app/user/Calendar/styles/Calendar.module.css';
import { useState } from 'react';
import { isSameDay, parseISO, differenceInCalendarDays } from 'date-fns';
import { useDBPOST } from '@lib/db_controller';
import LeaveForm from '@app/user/LeaveForm';

export default function Schedule({ vacationData, day }) {
	if (vacationData.length === 0) return;

	const { mutate: deleteVacation } = useDBPOST('/vacation/destroy', ['user']);

	// 퀵하게 만드느라 update 기능 구현용 코드 - 만들고 정리 해야함
	const { mutate: updateVacation } = useDBPOST('/vacation/update', ['user']);
	const [isOpenModal, setIsOpenModal] = useState(false);

	const deleteVacationHandler = (pk) => {
		const isConfirm = confirm('삭제하시겠습니까?');
		if (isConfirm) {
			deleteVacation({ pk });
		}
	};

	const ModalOpenHandler = () => {
		setIsOpenModal(true);
	};

	const registerHandler = (datas) => {
		updateVacation({ ...datas });
		setIsOpenModal(false);
	};

	// 해시맵?으로 바꾸면 더 좋지 않을까?
	const eventElem = vacationData.map((data) => {
		const startDate = parseISO(data.start);
		const endDate = parseISO(data.end);
		const diffDay = `D${differenceInCalendarDays(endDate, startDate) + 1}`;

		if (isSameDay(day, startDate)) {
			return (
				<div
					key={`${data.reason}_${data.leaveStart}`}
					className={`${styles.event} ${styles[diffDay]}`}>
					<p>{data.reason}</p>
					<div>
						<button onClick={ModalOpenHandler}>수정</button>
						<button
							onClick={() => {
								deleteVacationHandler(data.id);
							}}>
							X
						</button>
					</div>
					{isOpenModal && (
						<LeaveForm
							onRegister={registerHandler}
							title="연차 수정"
							btnText="수정"
							data={{
								id: data.id,
								reason: data.reason,
								start: data.start.slice(0, 10),
								end: data.end.slice(0, 10),
							}}
						/>
					)}
				</div>
			);
		}
	});

	return eventElem;
}
