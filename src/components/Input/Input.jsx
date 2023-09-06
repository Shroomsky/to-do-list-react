import styles from "./Input.module.css";
export function Input({ inputValue, setInputValue }) {
	return (
		<input
			type="text"
			onChange={(event) => {
				setInputValue(event.target.value);
			}}
			className={styles.input}
			value={inputValue}
		/>
	);
}
