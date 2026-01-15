/* Imports */

// react imports
import { useState } from "react";

// component imports
import Calendar from "./calendar/Calendar.tsx";
import DayTray from "./day-tray/DayTray.tsx";

// helper imports
import sampleMonthData from "../../helpers/SampleMonthData.ts";

// date setup
const currentDate = new Date();

/* Main Function */

function Dashboard() {
	// state variable for selected date
	const [selectedDate, setSelectedDate] = useState<Date | null>(currentDate);

	// state variable to hold sample data (will be replaced with API call later)
	const [userMonthData, setUserMonthData] = useState(sampleMonthData);

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
