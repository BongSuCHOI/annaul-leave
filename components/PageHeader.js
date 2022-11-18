import { signOut, useSession } from 'next-auth/react';
import styles from '@components/styles/PageHeader.module.css';
import Title from '@components/UI/Title';
import Button from '@components/UI/Button';

const PageHeader = (props) => {
	const { data: session } = useSession();

	const logOutHandler = (e) => {
		e.preventDefault();
		signOut({ callbackUrl: '/' });
	};

	return (
		<div className={styles.titleBox}>
			<Title text={props.title_text} />
			{props.children}
			<div className={styles.btnBox}>
				{session && <Button text="로그아웃" type={'text'} onClick={logOutHandler} />}
				<Button text={props.btn_text} onClick={props.onModalOpen} />
			</div>
		</div>
	);
};

export default PageHeader;
