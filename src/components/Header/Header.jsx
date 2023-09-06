import styles from "./Header.module.css";
import { getSubHeading } from "../../utils/getSubHeading.js";

export function Header({ isActive, setIsActive, todos }) {
	return (
		<div className={styles.header}>
			<header>
				<h1>Do wykonania</h1>
				<h2>{getSubHeading(todos.length)}</h2>
			</header>
			{!isActive && (
				<button onClick={() => setIsActive(true)} className={styles.btn}>
					+
				</button>
			)}
		</div>
	);
}
