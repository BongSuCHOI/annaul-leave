'use client';

import { forwardRef } from 'react';
import styles from './styles/Input.module.css';

export default forwardRef(function Input(props, forwardedRef) {
	const noMarginB = props?.noMarginB ? styles.nomarginB : '';

	return (
		<div className={`${styles.box} ${noMarginB}`}>
			<label className={styles.label} htmlFor={props.id}>
				{props.label}
			</label>
			<input
				className={styles.input}
				ref={forwardedRef}
				type={props.type}
				placeholder={props.placeholder}
				id={props.id}
			/>
		</div>
	);
});
