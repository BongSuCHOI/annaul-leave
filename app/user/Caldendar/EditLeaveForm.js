'use client';
/**
 *
 *
 * 수정해야함 기능 구현으로 여기다 대충 박아놈
 *
 */
import { useRef } from 'react';
import styles from '../styles/ApplyLeaveForm.module.css';
import Modal from '../../../components/UI/Modal';
import Input from '../../../components/UI/Input';
import Button from '../../../components/UI/Button';
import simpleVaildate from '../../../util/simpleVaildate';

export default function EditLeaveForm(props) {
	const reasonRef = useRef();
	const leaveStartRef = useRef();
	const leaveEndRef = useRef();

	const submitHandler = (e) => {
		e.preventDefault();
		const reason = reasonRef.current.value;
		const leaveStart = leaveStartRef.current.value;
		const leaveEnd = leaveEndRef.current.value;
		const validReason = simpleVaildate(reason);
		const validLeaveStart = simpleVaildate(leaveStart);
		const validLeaveEnd = simpleVaildate(leaveEnd);

		if (validReason && validLeaveStart && validLeaveEnd) {
			props.onRegister({ reason, leaveStart, leaveEnd, id: props.data.id });
		} else {
			alert('정보를 모두 입력해주세요.');
		}
	};

	return (
		<Modal>
			<div className={styles.form}>
				<p className={styles.title}>연차 신청</p>
				<form onSubmit={submitHandler}>
					<Input
						ref={reasonRef}
						id="reason"
						type="text"
						label="사유"
						defaultValue={props.data.reason}
					/>
					<Input
						ref={leaveStartRef}
						id="leave-start"
						type="date"
						label="시작일"
						defaultValue={props.data.start}
					/>
					<Input
						ref={leaveEndRef}
						id="leave-end"
						type="date"
						label="종료일"
						defaultValue={props.data.end}
					/>
					<Button text="신청" isCenter={true} />
				</form>
			</div>
		</Modal>
	);
}
