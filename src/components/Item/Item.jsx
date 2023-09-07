import { useState } from "react";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import styles from "./Item.module.css";

export function Item({
	name,
	editable,
	done,
	onDoneClick,
	onDeleteClick,
	onSpanClick,
	onOkClick,
	upArrowClick,
	downArrowClick,
}) {
	const [inputValue, setInputValue] = useState(name);

	return (
		<li className={styles.li} name={name}>
			{editable && (
				<Input
					inputValue={inputValue}
					setInputValue={setInputValue}
					value={inputValue}
				/>
			)}
			{!editable && (
				<span
					onClick={onSpanClick}
					className={`${styles.span} ${done ? styles.done : ""}`}>
					{name}
				</span>
			)}

			{editable && (
				<Button onClickHandler={() => onOkClick(inputValue)}>OK</Button>
			)}

			<div className={styles.buttonContainer}>
				<div>
					<Button onClickHandler={upArrowClick} disabled={false}>
						<i className="fa-solid fa-caret-up"></i>
					</Button>

					<Button onClickHandler={downArrowClick} disabled={false}>
						<i className="fa-solid fa-caret-down"></i>
					</Button>
				</div>
				<Button onClickHandler={onDoneClick} disabled={done}>
					Zrobione
				</Button>
				<Button onClickHandler={onDeleteClick}>Usuń</Button>
			</div>
		</li>
	);
}
