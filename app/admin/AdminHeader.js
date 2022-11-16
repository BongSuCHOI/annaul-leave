'use client';

import { useState } from 'react';
import { signOut, useSession } from 'next-auth/react';
import styles from './styles/page.module.css';
import Title from '../../components/UI/Title';
import Button from '../../components/UI/Button';
import UserRegistrationForm from './UserRegistrationForm';
import { useCreateUser } from '../../lib/db_controller';

const AdminHeader = () => {
	const [isOpenModal, setIsOpenModal] = useState(false);
	const { mutateAsync: createUser } = useCreateUser();
	const { data: session } = useSession();

	const ModalOpenHandler = () => {
		setIsOpenModal(true);
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

	const logOutHandler = (e) => {
		e.preventDefault();
		signOut({ callbackUrl: '/' });
	};

	return (
		<div className={styles.titleBox}>
			<Title text="관리자 페이지" />
			<div className={styles.btnBox}>
				{session && <Button text="로그아웃" type={'text'} onClick={logOutHandler} />}
				<Button text="신규 등록" onClick={ModalOpenHandler} />
			</div>
			{isOpenModal && <UserRegistrationForm onRegister={registerHandler} />}
		</div>
	);
};

export default AdminHeader;
