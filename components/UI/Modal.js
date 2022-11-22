import styles from '@components/styles/Modal.module.css';
import ModalPortal from '@components/ModalPortal';

export default function Modal(props) {
	return (
		<ModalPortal>
			<div className={styles.box}>{props.children}</div>
		</ModalPortal>
	);
}
