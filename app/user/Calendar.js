'use client';

import { useState, useContext } from 'react';
import GlobalContext from '../../store/global-context';
import { format, addMonths, subMonths } from 'date-fns';
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from 'date-fns';
import { isToday, isSameMonth, isSameDay, addDays } from 'date-fns';
import { parseISO, differenceInCalendarDays } from 'date-fns';
import styles from './styles/Calendar.module.css';

const CalendarHead = (props) => {
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
};

const CalendarDays = () => {
	const daysArr = ['일', '월', '화', '수', '목', '금', '토'];
	const days = daysArr.map((day) => <div key={day}>{day}</div>);
	return <div className={styles.days}>{days}</div>;
};

const CalendarCells = ({ currentMonth, ctx }) => {
	const monthStart = startOfMonth(currentMonth);
	const monthEnd = endOfMonth(monthStart);
	const startDate = startOfWeek(monthStart);
	const endDate = endOfWeek(monthEnd);

	const { leaveDatas, removeLeave } = ctx;

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
				<div key={day} className={`${styles.cell} ${classes} test`}>
					<p>{format(day, 'd')}</p>
					{<Schedule leaveData={leaveDatas} onRemoveLeave={removeLeave} day={day} />}
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
};

const Schedule = ({ leaveData, onRemoveLeave, day }) => {
	if (leaveData.length === 0) return;

	// 해시맵?으로 바꾸면 더 좋지 않을까?
	const eventElem = leaveData.map((data) => {
		const startDate = parseISO(data.leaveStart);
		const endDate = parseISO(data.leaveEnd);
		const diffDay = `D${differenceInCalendarDays(endDate, startDate) + 1}`;

		if (isSameDay(day, startDate)) {
			return (
				<div
					key={`${data.reason}_${data.leaveStart}`}
					className={`${styles.event} ${styles[diffDay]}`}>
					<p>{data.reason}</p>
					<button
						onClick={() => {
							onRemoveLeave(format(day, 'yyyy-MM-dd'));
						}}>
						X
					</button>
				</div>
			);
		}
	});

	return eventElem;
};

export default function Calendar() {
	const ctx = useContext(GlobalContext);
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
				<CalendarCells currentMonth={currentMonth} ctx={ctx} />
			</div>
		</div>
	);
}
