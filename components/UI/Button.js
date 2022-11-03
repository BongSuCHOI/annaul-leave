import styles from './styles/Button.module.css';

export default function Button(props) {
	let classes = styles.btn;

	if (props.isCenter) {
		classes += ' ' + styles.center;
	}

	if (props.theme === 'red') {
		classes += ' ' + styles.red;
	}

	return (
		<button className={classes} onClick={props.onClick}>
			{props.text}
		</button>
	);
}
