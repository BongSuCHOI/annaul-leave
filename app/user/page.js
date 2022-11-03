'use client';

import { useState } from 'react';
import styles from './styles/page.module.css';
import Title from '../../components/UI/Title';
import Button from '../../components/UI/Button';
import Calender from './Calendar';
import ApplyLeaveForm from './ApplyLeaveForm';

export default function UserHome() {
	const [isOpenModal, setIsOpenModal] = useState(false);

	const ModalOpenHandler = () => {
		setIsOpenModal(true);
	};

	const ModalCloseHandler = () => {
		setIsOpenModal(false);
	};

	return (
		<div className="admin-wrap">
			<div className={styles.titleBox}>
				<Title text="User01님" />
				입사일 재직기간 총연차 사용연차 남은연차
				<Button text="연차 신청" onClick={ModalOpenHandler} />
				{isOpenModal && <ApplyLeaveForm onModalClose={ModalCloseHandler} />}
			</div>
			<Calender />
		</div>
	);
}
