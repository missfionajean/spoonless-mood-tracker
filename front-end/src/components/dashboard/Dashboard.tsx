/* Imports */

// component imports
import Calendar from "./calendar/Calendar.tsx";
import DayTray from "./day-tray/DayTray.tsx";

/* Main Function */

function Dashboard() {
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
			<Calendar />
			<DayTray />
		</div>
	);
}

export default Dashboard;
