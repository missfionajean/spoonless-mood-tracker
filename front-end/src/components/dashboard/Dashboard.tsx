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

// new async function to fetch actual user data (front end will not work with UI until sample data references are fully replaced)
	const fetchDays = async () => {
		const response = await fetch("http://localhost:3000/days");
		if (!response.ok) {
			throw new Error("Failed to fetch days");
		} else {
			return response.json();
		}
	};

/* Main Function */

/*

~ ~ ~ ~ ~ NEXT UP ~ ~ ~ ~ ~

- Follow userMonthData down through children structure to fix the way it handles the data, as it is now indexed differently (i.e. no longer by date as an object key, but an array); look at the way your server orders the data and see how much the rendering functions need to be changed
- Update all instances of sampleMonthData to userMonthData and make sure data is being handled correctly for proper rendering
- Make it the fetch grabs three months at once (previous, current, next) to allow for seamless month navigation without having to wait for data to load (updating when switched to a different month will be a bit more complex, as it will require checking if the month being switched to is already in the data, and if not, fetching the new month and updating the state accordingly)

*/

function Dashboard() {

	// testing
	console.log(fetchDays());

	// state variable for selected date
	const [selectedDate, setSelectedDate] = useState<Date | null>(todaysDate);

	// state variable to hold sample data (will be replaced with API call later)
	const [userMonthData, setUserMonthData] = useState(fetchDays());

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
