'use client';

import { useRef, useContext } from 'react';
import GlobalContext from '../../store/global-context';
import styles from './styles/ApplyLeaveForm.module.css';
import Modal from '../../components/UI/Modal';
import Input from '../../components/UI/Input';
import Button from '../../components/UI/Button';
import simpleVaildate from '../../util/simpleVaildate';

export default function ApplyLeaveForm(props) {
	const ctx = useContext(GlobalContext);
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
			props.onModalClose();
			ctx.addLeave({ reason, leaveStart, leaveEnd });
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
