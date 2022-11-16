'use client';

import { useRef } from 'react';
import styles from '@app/user/styles/ApplyLeaveForm.module.css';
import Modal from '@components/UI/Modal';
import Input from '@components/UI/Input';
import Button from '@components/UI/Button';
import simpleValidate from '@util/simpleValidate';

export default function ApplyLeaveForm(props) {
	const reasonRef = useRef();
	const leaveStartRef = useRef();
	const leaveEndRef = useRef();

	const submitHandler = (e) => {
		e.preventDefault();
		const reason = reasonRef.current.value;
		const leaveStart = leaveStartRef.current.value;
		const leaveEnd = leaveEndRef.current.value;
		const validReason = simpleValidate(reason);
		const validLeaveStart = simpleValidate(leaveStart);
		const validLeaveEnd = simpleValidate(leaveEnd);

		if (validReason && validLeaveStart && validLeaveEnd) {
			props.onRegister({ reason, leaveStart, leaveEnd });
		} else {
			alert('정보를 모두 입력해주세요.');
		}
	};

	return (
		<Modal>
			<div className={styles.form}>
				<p className={styles.title}>연차 신청</p>
				<form onSubmit={submitHandler}>
					<Input ref={reasonRef} id="reason" type="text" label="사유" />
					<Input ref={leaveStartRef} id="leave-start" type="date" label="시작일" />
					<Input ref={leaveEndRef} id="leave-end" type="date" label="종료일" />
					<Button text="신청" isCenter={true} />
				</form>
			</div>
		</Modal>
	);
}
