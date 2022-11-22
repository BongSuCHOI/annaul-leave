'use client';

import { useRef } from 'react';
import styles from '@components/styles/Modal.module.css';
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
			if (props.data?.id) {
				props.onRegister({ reason, leaveStart, leaveEnd, id: props.data.id });
			} else {
				props.onRegister({ reason, leaveStart, leaveEnd });
			}
		} else {
			alert('정보를 모두 입력해주세요.');
		}
	};

	return (
		<Modal>
			<div className={styles.form}>
				<div className={styles.titleBox}>
					<p>{props.title}</p>
					<button onClick={props.onClose}>X</button>
				</div>
				<form onSubmit={submitHandler}>
					<Input
						ref={reasonRef}
						id="reason"
						type="text"
						label="사유"
						defaultValue={props.data?.reason}
					/>
					<Input
						ref={leaveStartRef}
						id="leave-start"
						type="date"
						label="시작일"
						defaultValue={props.data?.start}
					/>
					<Input
						ref={leaveEndRef}
						id="leave-end"
						type="date"
						label="종료일"
						defaultValue={props.data?.end}
					/>
					<Button text={props.btnText} isCenter={true} />
				</form>
			</div>
		</Modal>
	);
}
