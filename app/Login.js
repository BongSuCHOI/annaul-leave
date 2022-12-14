'use client';

import { useRouter } from 'next/navigation';
import { useRef, useState, useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import styles from '@app/styles/rootPage.module.css';
import Title from '@components/UI/Title';
import Input from '@components/UI/Input';
import Button from '@components/UI/Button';
import simpleValidate from '@util/simpleValidate';

export default function Home() {
	const idRef = useRef();
	const pwRef = useRef();
	const router = useRouter();
	const { data: session, status } = useSession();
	const [isLogin, setIsLogin] = useState(false);

	const submitHandler = async (e) => {
		e.preventDefault();
		const id = idRef.current.value;
		const pw = pwRef.current.value;
		const validId = simpleValidate(id);
		const validPw = simpleValidate(pw);

		if (validId && validPw) {
			const login = await signIn('credentials', {
				user_id: id,
				user_pw: pw,
				redirect: false,
			});

			if (login.error && !login.ok) {
				alert('아이디 또는 비밀번호를 찾을 수 없습니다.');
				console.log(`ERROR[CODE ${login.status}] : ${login.error}`);
			} else {
				setIsLogin(true);
			}
		} else {
			alert('정보를 모두 입력해주세요.');
		}
	};

	useEffect(() => {
		if (session && status === 'authenticated') {
			if (session.role === 1) {
				router.push('./admin');
			} else {
				router.push(`./user/${session.id}`);
			}
		}
	}, [isLogin]);

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
