'use client';

import { useRouter } from 'next/navigation';
import styles from './styles/rootPage.module.css';
import Title from '../components/UI/Title';
import Input from '../components/UI/Input';
import Button from '../components/UI/Button';

export default function Home() {
	const router = useRouter();

	const submitHandler = (e) => {
		e.preventDefault();
		alert('로그인 인증로직 개발 필요');
		router.push('./admin');
	};

	const submitHandler2 = (e) => {
		e.preventDefault();
		alert('로그인 인증로직 개발 필요');
		router.push('./user');
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.loginBox}>
				<Title text="로그인" />
				<form className={styles.form} onSubmit={submitHandler}>
					<Input id="id" type="text" label="아이디" />
					<Input id="pw" type="password" label="비밀번호" />
					{/* <Button text="로그인" styles={{ isCenter: true }} /> */}
					<Button text="관리자" isCenter={true} />
				</form>
				<form className={styles.form} onSubmit={submitHandler2}>
					<Button text="유저" isCenter={true} />
				</form>
			</div>
		</div>
	);
}
