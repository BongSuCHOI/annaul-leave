'use client';

import styles from '../styles/Calendar.module.css';
import { isSameDay, parseISO, differenceInCalendarDays } from 'date-fns';
import { useDeleteVacation } from '../../../lib/db_controller';

export default function Schedule({ vacationData, day }) {
	if (vacationData.length === 0) return;

	const { mutate: deleteVacation } = useDeleteVacation();
	const deleteVacationHandler = (pk) => {
		const isConfirm = confirm('삭제하시겠습니까?');
		if (isConfirm) {
			deleteVacation({ pk });
		}
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
						<button>수정</button>
						<button
							onClick={() => {
								deleteVacationHandler(data.id);
							}}>
							X
						</button>
					</div>
				</div>
			);
		}
	});

	return eventElem;
}
