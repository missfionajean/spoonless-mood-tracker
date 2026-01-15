export default function renderDayCircle(
	day: number,
	todaysDate: Date,
	selectedDate: Date | null
) {
	// required variables to compare dates
	const currentMonth = todaysDate.getMonth();
	const currentYear = todaysDate.getFullYear();

	// pass for selected date styling (can be neither)
	if (
		selectedDate &&
		day + 1 === selectedDate.getDate() &&
		currentMonth === selectedDate.getMonth() &&
		currentYear === selectedDate.getFullYear() &&
		day + 1 === todaysDate.getDate() &&
		currentMonth === todaysDate.getMonth() &&
		currentYear === todaysDate.getFullYear()
	) {
		return "day-circle-today-selected";
	} else if (
		selectedDate &&
		day + 1 === selectedDate.getDate() &&
		currentMonth === selectedDate.getMonth() &&
		currentYear === selectedDate.getFullYear()
	) {
		return "day-circle-selected";
	}

	// pass for if/else pass for whether to render today or basic styling (defaults to basic)
	if (
		day + 1 === todaysDate.getDate() &&
		currentMonth === todaysDate.getMonth() &&
		currentYear === todaysDate.getFullYear()
	) {
		return "day-circle-today";
	} else {
		return "day-circle";
	}
}
