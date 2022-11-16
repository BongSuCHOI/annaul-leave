'use client';

import { useRef } from 'react';
import styles from '@app/admin/styles/UserRegistrationForm.module.css';
import Modal from '@components/UI/Modal';
import Input from '@components/UI/Input';
import Button from '@components/UI/Button';
import simpleValidate from '@util/simpleValidate';
import { hashPassword } from '@lib/auth';

export default function UserRegistrationForm(props) {
	const nameRef = useRef();
	const idRef = useRef();
	const pwRef = useRef();
	const startDateRef = useRef();

	const submitHandler = async (e) => {
		e.preventDefault();
		const name = nameRef.current.value;
		const id = idRef.current.value;
		const pw = pwRef.current.value;
		const startDate = startDateRef.current.value;
		const validName = simpleValidate(name);
		const validId = simpleValidate(id);
		const validPw = simpleValidate(pw);
		const validStartDate = simpleValidate(startDate);

		if (validName && validId && validPw && validStartDate) {
			const hashedPassword = await hashPassword(pw);
			props.onRegister({ name, id, pw: hashedPassword, startDate, role: 0 });
		} else {
			alert('정보를 모두 입력해주세요.');
		}
	};

	return (
		<Modal>
			<div className={styles.form}>
				<p className={styles.title}>신규 유저 등록</p>
				<form onSubmit={submitHandler}>
					<Input ref={nameRef} id="name" type="text" label="유저 이름" />
					<Input ref={idRef} id="id" type="text" label="유저 아이디" />
					<Input ref={pwRef} id="pw" type="password" label="유저 비밀번호" />
					<Input ref={startDateRef} id="start-date" type="date" label="유저 입사일" />
					<Button text="등록" isCenter={true} />
				</form>
			</div>
		</Modal>
	);
}
