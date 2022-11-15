'use client';

import styles from '../styles/Calendar.module.css';
import { useState } from 'react';
import { addMonths, subMonths } from 'date-fns';
import CalendarHead from './CalendarHead';
import CalendarDays from './CalendarDays';
import CalendarCells from './CalendarCells';

export default function Calendar({ vacationData }) {
	const [currentMonth, setCurrentMonth] = useState(new Date());

	const prevMonthHandler = () => {
		setCurrentMonth(subMonths(currentMonth, 1));
	};

	const nextMonthHandler = () => {
		setCurrentMonth(addMonths(currentMonth, 1));
	};

	const todayHandler = () => {
		setCurrentMonth(new Date());
	};

	return (
		<div className={styles.wrap}>
			<CalendarHead
				currentMonth={currentMonth}
				onPrevMonth={prevMonthHandler}
				onNextMonth={nextMonthHandler}
				onToday={todayHandler}
			/>
			<div className={styles.calendar}>
				<CalendarDays />
				<CalendarCells currentMonth={currentMonth} vacationData={vacationData} />
			</div>
		</div>
	);
}
