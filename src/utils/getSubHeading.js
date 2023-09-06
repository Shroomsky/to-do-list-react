export function getSubHeading(nuberOfTask) {
	switch (true) {
		case nuberOfTask > 4:
			return `${nuberOfTask} zadań`;
		case nuberOfTask > 1:
			return `${nuberOfTask} zadania`;
		case (nuberOfTask === 1):
			return `1 zadanie`;
		case nuberOfTask === 0:
		default:
			return "brak zadań";
	}
}