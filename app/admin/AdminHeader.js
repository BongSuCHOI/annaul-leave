'use client';

import { useState } from 'react';
import PageHeader from '@components/PageHeader';
import UserRegistrationForm from '@app/admin/UserRegistrationForm';
import { useDBPOST } from '@lib/db_controller';

const AdminHeader = () => {
	const [isOpenModal, setIsOpenModal] = useState(false);
	const { mutateAsync: createUser } = useDBPOST('/user', ['allUser']);

	const ModalOpenHandler = () => {
		setIsOpenModal(true);
	};

	const ModalCloseHandler = () => {
		setIsOpenModal(false);
	};

	const registerHandler = async (datas) => {
		const result = await createUser({ ...datas });

		if (result.message) {
			alert(result.message);
		} else {
			alert('등록되었습니다.');
		}

		setIsOpenModal(false);
	};

	return (
		<>
			<PageHeader
				title_text="관리자 페이지"
				btn_text="유저 등록"
				onModalOpen={ModalOpenHandler}
			/>
			{isOpenModal && (
				<UserRegistrationForm onRegister={registerHandler} onClose={ModalCloseHandler} />
			)}
		</>
	);
};

export default AdminHeader;
