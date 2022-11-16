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

	const weekRows = [];
	let days = [];
	let day = startDate;

	while (day <= endDate) {
		for (let i = 0; i < 7; i++) {
			const classes = !isSameMonth(day, monthStart)
				? styles.disabled
				: isToday(day)
				? styles.today
				: 'valid';

			const cellContents = (
				<div key={day} className={`${styles.cell} ${classes}`}>
					<p>{format(day, 'd')}</p>
					{<Schedule vacationData={vacationData} day={day} />}
				</div>
			);

			days.push(cellContents);
			day = addDays(day, 1);
		}

		weekRows.push(
			<div className={styles.row} key={day}>
				{days}
			</div>
		);

		days = [];
	}

	return <div className={styles.body}>{weekRows}</div>;
}
