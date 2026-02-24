/* Imports */

// react imports
import { use, useState } from "react";

// component imports
import Calendar from "./calendar/Calendar.tsx";
import DayTray from "./day-tray/DayTray.tsx";

// helper imports
import sampleMonthData from "../../helpers/SampleMonthData.ts";

// date setup
const todaysDate = new Date();

// async function to fetch user data
const fetchDays = async () => {
	const response = await fetch("http://localhost:3000/days");
	if (!response.ok) {
		throw new Error("Failed to fetch day data");
	}
	return response.json();
};

/* Main Function */

function Dashboard() {
	// state variable for selected date
	const [selectedDate, setSelectedDate] = useState<Date | null>(todaysDate);

	// state variable to hold sample data (will be replaced with API call later)
	const [userMonthData, setUserMonthData] = useState(sampleMonthData);

    // new async function to fetch actual user data (front end will not work until sample data references are fully replaced)
	const fetchDays = async () => {
		const response = await fetch("https://localhost:3000/days");
		if (!response.ok) {
			throw new Error("Failed to fetch days");
		}
		return response.json();
	};
    // this will be called like this inside return statement: const userData = use(fetchDays());
    // remember to add suspense component to parent component to handle loading state while data is being fetched (will also require adding in a loading component - maybe a cutesy spoon animation?)

	// main dashboard view
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				flexWrap: "wrap",
				justifyContent: "center",
				alignItems: "center",
				width: "100vw",
				backgroundColor: "black",
			}}
		>
			<Calendar
				todaysDate={todaysDate}
				selectedDate={selectedDate}
				setSelectedDate={setSelectedDate}
				userMonthData={userMonthData}
			/>
			<DayTray
				selectedDate={selectedDate}
				userMonthData={userMonthData}
				setUserMonthData={setUserMonthData}
			/>
		</div>
	);
}

export default Dashboard;
