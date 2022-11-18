import styles from '@components/styles/Button.module.css';

export default function Button(props) {
	let classes = styles.btn;

	if (props.isCenter) {
		classes += ' ' + styles.center;
	}

	if (props.theme === 'red') {
		classes += ' ' + styles.red;
	}

	if (props.type === 'text') {
		classes += ' ' + styles.text;
	}

	return (
		<button className={classes} onClick={props.onClick}>
			{props.text}
		</button>
	);
}
