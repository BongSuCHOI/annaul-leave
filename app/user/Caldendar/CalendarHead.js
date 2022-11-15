import styles from '../styles/Calendar.module.css';
import { format } from 'date-fns';

export default function CalendarHead(props) {
	return (
		<div className={styles.header}>
			<div className={styles.dateBox}>
				<p className={styles.month}>{format(props.currentMonth, 'M')}월</p>
				<p className={styles.year}>{format(props.currentMonth, 'yyyy')}</p>
			</div>
			<div className={styles.controlBox}>
				<button onClick={props.onPrevMonth}>이전</button>
				<button onClick={props.onToday}>오늘</button>
				<button onClick={props.onNextMonth}>다음</button>
			</div>
		</div>
	);
}
