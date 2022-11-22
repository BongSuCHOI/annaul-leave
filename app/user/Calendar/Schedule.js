'use client';

import styles from '@app/user/Calendar/styles/Calendar.module.css';
import { useState } from 'react';
import { isSameDay, parseISO, differenceInCalendarDays } from 'date-fns';
import { useDBPOST } from '@lib/db_controller';
import LeaveForm from '@app/user/LeaveForm';

export default function Schedule({ vacations, day }) {
	if (vacations.length === 0) return;

	const [isOpenModal, setIsOpenModal] = useState(false);
	const { mutate: updateVacation } = useDBPOST('/vacation/update', ['user']);
	const { mutate: deleteVacation } = useDBPOST('/vacation/destroy', ['user']);

	const ModalOpenHandler = () => {
		setIsOpenModal(true);
	};

	const ModalCloseHandler = () => {
		setIsOpenModal(false);
	};

	const registerHandler = (datas) => {
		updateVacation({ ...datas });
		setIsOpenModal(false);
	};

	const deleteVacationHandler = (pk) => {
		const isConfirm = confirm('삭제하시겠습니까?');
		if (isConfirm) {
			deleteVacation({ pk });
		}
	};

	const eventElem = vacations.map((data) => {
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
							onClose={ModalCloseHandler}
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
