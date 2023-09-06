import { useState } from "react";
import { Button } from "../Button/Button";
import styles from "./Form.module.css";

export function Form({ isActive, setIsActive, onFormSubmit }) {
	const [inputValue, setInputValue] = useState("");

	function changeInputValue(event) {
		setInputValue(event.target.value);
	}
	
	
	
	function handleSubmitClick(event) {
		event.preventDefault();
		setIsActive(false);
		onFormSubmit(inputValue);
	}
	return (
		<>
			{isActive && (
				<form onSubmit={handleSubmitClick} className={styles.form}>
					<input
						onChange={changeInputValue}
						className={styles.input}
						type="text"
					/>
					<Button>Dodaj</Button>
				</form>
			)}
		</>
	);
}
