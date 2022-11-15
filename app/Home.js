'use client';

import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import { signIn, useSession } from 'next-auth/react';
import styles from './styles/rootPage.module.css';
import Title from '../components/UI/Title';
import Input from '../components/UI/Input';
import Button from '../components/UI/Button';
import simpleVaildate from '../util/simpleVaildate';

export default function Home() {
	const idRef = useRef();
	const pwRef = useRef();
	const router = useRouter();
	// const { data: session, status } = useSession();

	const submitHandler = async (e) => {
		e.preventDefault();
		const id = idRef.current.value;
		const pw = pwRef.current.value;
		const validId = simpleVaildate(id);
		const validPw = simpleVaildate(pw);

		if (validId && validPw) {
			const login = await signIn('credentials', {
				user_id: id,
				user_pw: pw,
				redirect: false,
			});

			if (!login.error && login.ok) {
				// role 가지고 라우트 해주는 로직 필요
				// 우선은 id 가지고 admin/user로 뿌려줌
				// if (role === 1) {
				// 	router.push('./admin');
				// } else {
				// 	router.push(`./user/${id}`);
				// }
				if (id === 'admin') {
					router.push('./admin');
				} else {
					router.push(`./user/${id}`);
				}
			} else {
				alert('아이디 혹은 비밀번호를 찾을 수 없습니다.');
				console.log(`ERROR: ${login.error}`);
			}
		} else {
			alert('정보를 모두 입력해주세요.');
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
