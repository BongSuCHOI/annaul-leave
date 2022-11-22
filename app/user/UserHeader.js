'use client';

import { useState } from 'react';
import PageHeader from '@components/PageHeader';
import LeaveForm from '@app/user/LeaveForm';
import { calcPeriod, calcTotalVacation } from '@util/calculation';
import { useDBPOST } from '@lib/db_controller';

export default function UserHeader({ userData }) {
	const [isOpenModal, setIsOpenModal] = useState(false);
	const { mutate: createVacation } = useDBPOST('/vacation/create', ['user']);

	const { id, user_name, startDate, vacations } = userData;
	const { diffYear, employmentPeriodText } = calcPeriod(startDate);
	const totalVacation = calcTotalVacation(diffYear);
	const useVacation = vacations.length;
	const remainingVacation = totalVacation - vacations.length;

	const ModalOpenHandler = () => {
		setIsOpenModal(true);
	};

	const ModalCloseHandler = () => {
		setIsOpenModal(false);
	};

	const registerHandler = (datas) => {
		createVacation({ ...datas, id });
		setIsOpenModal(false);
	};

	const userInfoElem = (
		<div>
			입사일 : {startDate.slice(0, 10)}
			재직기간 : {employmentPeriodText}
			총연차 : {totalVacation}
			사용연차 : {useVacation}
			남은연차 : {remainingVacation}
		</div>
	);

	return (
		<>
			<PageHeader
				title_text={`${user_name}님`}
				btn_text="연차 등록"
				onModalOpen={ModalOpenHandler}>
				{userInfoElem}
			</PageHeader>
			{isOpenModal && (
				<LeaveForm
					onRegister={registerHandler}
					onClose={ModalCloseHandler}
					title="연차 등록"
					btnText="등록"
				/>
			)}
		</>
	);
}
