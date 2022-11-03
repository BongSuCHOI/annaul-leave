import styles from './styles/Modal.module.css';

export default function Modal(props) {
	return <div className={styles.box}>{props.children}</div>;
}
