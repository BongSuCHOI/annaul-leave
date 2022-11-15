'use client';

import { useState } from 'react';
import styles from './styles/page.module.css';
import Title from '../../components/UI/Title';
import Button from '../../components/UI/Button';
import UserRegistrationForm from './UserRegistrationForm';
import { useCreateUser } from '../../lib/db_controller';

const AdminHeader = () => {
	const [isOpenModal, setIsOpenModal] = useState(false);
	const { mutateAsync: createUser } = useCreateUser();

	const ModalOpenHandler = () => {
		setIsOpenModal(true);
	};

	const registerHandler = async (datas) => {
		const result = await createUser({ ...datas });
		console.log(result);

		if (result.message) {
			alert(result.message);
		} else {
			alert('등록되었습니다.');
		}

		setIsOpenModal(false);
	};

	return (
		<div className={styles.titleBox}>
			<Title text="관리자 페이지" />
			{/* 로그아웃 기능 구현 필요 */}
			{/* <Button text="로그아웃" /> */}
			<Button text="신규 등록" onClick={ModalOpenHandler} />
			{isOpenModal && <UserRegistrationForm onRegister={registerHandler} />}
		</div>
	);
};

export default AdminHeader;
