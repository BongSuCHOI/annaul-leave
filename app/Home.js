'use client';

import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import styles from './styles/rootPage.module.css';
import Title from '../components/UI/Title';
import Input from '../components/UI/Input';
import Button from '../components/UI/Button';
import { useGetUserInfo } from '../util/basicFetch';

export default function Home() {
	const idRef = useRef();
	const pwRef = useRef();
	const router = useRouter();
	const { mutateAsync: getUserInfo } = useGetUserInfo();

	const submitHandler = async (e) => {
		e.preventDefault();
		const id = idRef.current.value;
		const pw = pwRef.current.value;
		const userInfo = await getUserInfo({ id, pw });

		if (!userInfo) {
			// alert('로그인 인증로직 개발 필요');
			alert('아이디 혹은 비밀번호를 찾을 수 없습니다.');
		} else if (userInfo.role === 1) {
			router.push('./admin');
		}
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.loginBox}>
				<Title text="로그인" />
				<form className={styles.form} onSubmit={submitHandler}>
					<Input ref={idRef} id="id" type="text" label="아이디" />
					<Input ref={pwRef} id="pw" type="password" label="비밀번호" />
					<Button text="로그인" isCenter={true} />
				</form>
			</div>
		</div>
	);
}
