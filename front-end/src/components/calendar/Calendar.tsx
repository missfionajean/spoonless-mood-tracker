// this will hold the logic for the calendar itself
// make sure to properly lift states so that the components can affect each other
// re-render calendar only when an update happens (put in logic to not do anything if no changes are made and submit is clicked)
// make sure there's also loading states and progress trackers (spinning wheel, progress bar, etc.) for when API calls are made

import "./Calendar.css";
import { useState } from "react";
import sampleMonthData from "../sample-data/SampleMonthData";

export default function Calendar() {
	// variables for dynamic calendar rendering
	const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

	const monthsOfYear = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	// set today's date and get current month and year in a state variable
	const currentDate = new Date();
	const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
	const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

	// state variable for selected date (may need to be lifted to parent component)
	const [selectedDate, setSelectedDate] = useState<Date | null>(currentDate);

	// creates date object to get no. of days in month
	const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

	// create date object to get first day of the month, returns as 0-6 (Sun-Sat)
	const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

	// logic for navigating months, uses ternary operators to check if it is Jan or Dec and adjusts month and year accordingly
	const prevMonth = () => {
		setCurrentMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
		setCurrentYear((prevYear) =>
			currentMonth === 0 ? prevYear - 1 : prevYear
		);
	};

	const nextMonth = () => {
		setCurrentMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
		setCurrentYear((prevYear) =>
			currentMonth === 11 ? prevYear + 1 : prevYear
		);
	};

	// function for rendering selected date
	const handleDayClick = (day: number) => {
		// create new date object based on clicked day
		const clickedDate = new Date(currentYear, currentMonth, day);
		setSelectedDate(clickedDate);
		// debugging log for clicked date
		// console.log("Selected date:", clickedDate);
	};

	// debugging logs for date objects
	console.log("GetDate:", currentDate.getDate());
	console.log("GetMonth:", currentDate.getMonth());
	console.log("GetFullYear:", currentDate.getFullYear());

	// state variable to hold sample data (will be replaced with API call later)
	const [userMonthData, setUserMonthData] = useState(sampleMonthData);

	return (
		<div className="full-calendar">
			<div className="month-navigator">
				{/* placeholder data will be updated to fill dynamically */}
				<button className="month-arrows" onClick={prevMonth}>
					⬅
				</button>
				{/* renders from monthsOfYear array */}
				<span className="month">{monthsOfYear[currentMonth]}</span>
				<span className="year">{currentYear}</span>
				<button className="month-arrows" onClick={nextMonth}>
					⮕
				</button>
			</div>
			<div className="weekday-names">
				{daysOfWeek.map((day) => (
					<span key={day} className="weekday">
						{day}
					</span>
				))}
			</div>
			<div className="day-grid">
				{[...Array(firstDayOfMonth).keys()].map((_, index) => (
					<span key={"empty-" + index} className="empty-day"></span>
				))}
				{[...Array(daysInMonth).keys()].map((day) => (
					<span
						key={day + 1}
						// uses ternary to split days into two different CSS classes, so you can render them differently (may need to contain a function stored above, so that you can create a third class for selected day)
						className={
							day + 1 === currentDate.getDate() &&
							currentMonth === currentDate.getMonth() &&
							currentYear === currentDate.getFullYear()
								? "day-circle-today"
								: "day-circle"
						}
						// adds CSS colors for days with data, gray if none
						style={
							// refine this later to be less AI-like
							userMonthData[
								`${currentYear.toString()}-${(currentMonth + 1)
									.toString()
									.padStart(2, "0")}-${(day + 1)
									.toString()
									.padStart(
										2,
										"0"
									)}` as keyof typeof userMonthData
							]
								? // this will need to be turned into a function above (or in a separate utils file)
								  {
										background:
											"conic-gradient(#8EC73F 33%, #FFC40F 66%, #02AFEF)",
								  }
								: { backgroundColor: "dimgray" }
						}
						// add 1 because days are 0 indexed
						onClick={() => handleDayClick(day + 1)}
					>
						{/* displayed day number */}
						{day + 1}
					</span>
				))}
			</div>
		</div>
	);
}
