import {
	format,
	startOfMonth,
	endOfMonth,
	startOfWeek,
	endOfWeek,
	isSameMonth,
	isToday,
	addDays,
} from 'date-fns';
import styles from '@app/user/Calendar/styles/Calendar.module.css';
import Schedule from '@app/user/Calendar/Schedule';

export default function CalendarCells({ currentMonth, vacationData }) {
	const monthStart = startOfMonth(currentMonth);
	const monthEnd = endOfMonth(monthStart);
	const startDate = startOfWeek(monthStart);
	const endDate = endOfWeek(monthEnd);

	let days = [];
	let day = startDate;

	const vacations = vacationData.filter((data) => {
		const vacationMonth = new Date(data.start).getMonth();
		const month = currentMonth.getMonth();
		const isGreaterOrEqual = month - 1 <= vacationMonth;
		const isLessOrEqual = month + 1 >= vacationMonth;
		return isGreaterOrEqual && isLessOrEqual;
	});

	while (day <= endDate) {
		const status = !isSameMonth(day, monthStart)
			? styles.disabled
			: isToday(day)
			? styles.today
			: 'valid';

		const cellContents = (
			<div key={day} className={`${styles.cell} ${status}`}>
				<p>{format(day, 'd')}</p>
				{vacationData.length > 0 && <Schedule vacations={vacations} day={day} />}
			</div>
		);

		days.push(cellContents);
		day = addDays(day, 1);
	}

	return <div className={styles.body}>{days}</div>;
}
