import { useState } from "react";
import styles from "./App.module.css";
import { Form } from "./components/Form/Form.jsx";
import { Header } from "./components/Header/Header.jsx";
import { Item } from "./components/Item/Item.jsx";

export function App() {
	const tasks = [
		{ name: "Wynieść śmieci", editable: false, done: false, id: 1 },
		{ name: "Nakarmić kota", editable: false, done: false, id: 2 },
		{ name: "Posprzątać kuwetę", editable: false, done: true, id: 3 },
	];

	let idNr = Math.random();

	const [isActive, setIsActive] = useState(false);
	const [todos, setTodos] = useState(tasks);

	function addTodos(newTodoName) {
		setTodos((prevTodos) => [
			...prevTodos,
			{
				name: newTodoName,
				done: false,
				editable: false,
				id: idNr + 1,
			},
		]);
	}
	function upArrowClick(id) {
		const i = todos.findIndex((t) => t.id == id);
		if (!i == 0) {
			setTodos([
				...todos.slice(0, i - 1),
				todos[i],
				todos[i - 1],
				...todos.slice(i + 1),
			]);
		} else {
			return;
		}
	}
	function downArrowClick(id) {
		const i = todos.findIndex((t) => t.id == id) + 1;
		if (!(i == todos.length)) {
			setTodos([
				...todos.slice(0, i - 1),
				todos[i],
				todos[i - 1],
				...todos.slice(i + 1),
			]);
		} else {
			return;
		}
	}

	function setDone(id) {
		setTodos((prevTodos) =>
			prevTodos.map((task) => {
				if (task.id !== id) {
					return task;
				} else {
					return { ...task, done: true };
				}
			})
		);
	}
	function setEditableTrue(id) {
		setTodos((prevTodos) =>
			prevTodos.map((task) => {
				if (task.id !== id) {
					return task;
				} else if (task.done) {
					return task;
				} else {
					return { ...task, editable: true };
				}
			})
		);
	}
	function taskUpdate(id, updatedName) {
		setTodos((prevTodos) =>
			prevTodos.map((task) => {
				if (task.id !== id) {
					return task;
				} else {
					return { ...task, name: updatedName, editable: false };
				}
			})
		);
	}

	function removeItem(id) {
		setTodos((prevTodos) => prevTodos.filter((task) => task.id !== id));
	}

	return (
		<div className={styles.appContainer}>
			<Header isActive={isActive} setIsActive={setIsActive} todos={todos} />
			<Form
				onFormSubmit={(newTodoName) => {
					addTodos(newTodoName);
				}}
				isActive={isActive}
				setIsActive={setIsActive}
			/>

			<ul>
				{todos.map(({ name, editable, done, id }) => (
					<Item
						name={name}
						editable={editable}
						done={done}
						key={id}
						onDoneClick={() => setDone(id)}
						onDeleteClick={() => removeItem(id)}
						onSpanClick={() => setEditableTrue(id)}
						onOkClick={(updatedName) => taskUpdate(id, updatedName)}
						upArrowClick={() => upArrowClick(id)}
						downArrowClick={() => downArrowClick(id)}
					/>
				))}
			</ul>
		</div>
	);
}
