'use client';

import { useState } from 'react';
import styles from './styles/page.module.css';
import Title from '../../components/UI/Title';
import Button from '../../components/UI/Button';
import UserRegistrationForm from './UserRegistrationForm';
import UserList from './UserList';

export default function AdminHome() {
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [userDatas, setUserDatas] = useState([]);

	const ModalOpenHandler = () => {
		setIsOpenModal(true);
	};

	const registerHandler = (datas) => {
		setUserDatas((prevState) => [...prevState, datas]);
		setIsOpenModal(false);
	};

	return (
		<div className="admin-wrap">
			<div className={styles.titleBox}>
				<Title text="유저 리스트" />
				<Button text="신규 등록" onClick={ModalOpenHandler} />
				{isOpenModal && <UserRegistrationForm onRegister={registerHandler} />}
			</div>
			<UserList userDatas={userDatas} />
		</div>
	);
}
