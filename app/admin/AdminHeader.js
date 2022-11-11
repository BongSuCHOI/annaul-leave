'use client';

import { useState } from 'react';
import styles from './styles/page.module.css';
import Title from '../../components/UI/Title';
import Button from '../../components/UI/Button';
import UserRegistrationForm from './UserRegistrationForm';
import { useCreateUser } from '../../util/basicFetch';

const AdminHeader = () => {
	const [isOpenModal, setIsOpenModal] = useState(false);
	const { mutate: createUser } = useCreateUser();

	const ModalOpenHandler = () => {
		setIsOpenModal(true);
	};

	const registerHandler = (datas) => {
		createUser({...datas})
		setIsOpenModal(false);
	};

	return (
		<div className={styles.titleBox}>
			<Title text="유저 리스트" />
			<Button text="신규 등록" onClick={ModalOpenHandler} />
			{isOpenModal && <UserRegistrationForm onRegister={registerHandler} />}
		</div>
	);
};

export default AdminHeader;
