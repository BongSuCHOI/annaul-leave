import styles from '../styles/Calendar.module.css';
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
import Schedule from './Schedule';

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
				: 'vaild';

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
