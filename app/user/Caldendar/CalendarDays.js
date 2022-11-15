import styles from '../styles/Calendar.module.css';

export default function CalendarDays() {
	const daysArr = ['일', '월', '화', '수', '목', '금', '토'];
	const days = daysArr.map((day) => <div key={day}>{day}</div>);
	return <div className={styles.days}>{days}</div>;
}
