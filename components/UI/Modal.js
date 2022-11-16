import styles from '@components/UI/styles/Modal.module.css';

export default function Modal(props) {
	return <div className={styles.box}>{props.children}</div>;
}
