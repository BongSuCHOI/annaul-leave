'use client';

import { useState } from 'react';
import { signOut, useSession } from 'next-auth/react';
import styles from '@app/user/styles/page.module.css';
import Title from '@components/UI/Title';
import Button from '@components/UI/Button';
import ApplyLeaveForm from '@app/user/ApplyLeaveForm';
import { calcPeriod, calcTotalVacation } from '@util/calculation';
import { useCreateVacation } from '@lib/db_controller';

export default function UserHeader({ userData }) {
	const [isOpenModal, setIsOpenModal] = useState(false);
	const { mutate: createVacation } = useCreateVacation();
	const { data: session } = useSession();

	const { id, user_name, startDate, vacations } = userData;
	const { diffYear, employmentPeriodText } = calcPeriod(startDate);
	const totalVacation = calcTotalVacation(diffYear);
	const useVacation = vacations.length;
	const remainingVacation = totalVacation - vacations.length;

	const ModalOpenHandler = () => {
		setIsOpenModal(true);
	};

	const registerHandler = (datas) => {
		createVacation({ ...datas, id });
		setIsOpenModal(false);
	};

	const logOutHandler = (e) => {
		e.preventDefault();
		signOut({ callbackUrl: '/' });
	};

	return (
		<div className={styles.titleBox}>
			<Title text={`${user_name}님`} />
			입사일 : {startDate.slice(0, 10)}
			재직기간 : {employmentPeriodText}
			총연차 : {totalVacation}
			사용연차 : {useVacation}
			남은연차 : {remainingVacation}
			<div className={styles.btnBox}>
				{session && <Button text="로그아웃" type={'text'} onClick={logOutHandler} />}
				<Button text="연차 신청" onClick={ModalOpenHandler} />
			</div>
			{isOpenModal && <ApplyLeaveForm onRegister={registerHandler} />}
		</div>
	);
}
