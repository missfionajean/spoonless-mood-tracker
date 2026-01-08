import Calendar from "./dashboard-components/calendar/Calendar";
import DayTray from "./dashboard-components/day-tray-components/DayTray";

// this is the main page of the app (once logged in)
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
            {/* div can probably go away once spacing is fixed; currently using border style to troubleshoot spacing */}
			<div
				style={
					{
						// border: "1px solid white",
					}
				}
			>
				<Calendar />
			</div>
			<DayTray />
		</div>
	);
}

export default Dashboard;
