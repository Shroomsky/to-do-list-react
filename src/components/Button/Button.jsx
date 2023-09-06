import styles from "./Button.module.css";

export function Button({ children, onClickHandler, disabled=false }) {
	return (
		<button onClick={onClickHandler} className={styles.button} disabled={disabled}>
			{children}
		</button>
	);
}
