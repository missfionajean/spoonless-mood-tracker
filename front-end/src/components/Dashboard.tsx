import Calendar from "./Calendar";
import DayTray from "./DayTray";

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
				height: "100vh",
				backgroundColor: "black",
				paddingBlock: "10px",
			}}
		>
			<Calendar />
			<DayTray />
		</div>
	);
}

export default Dashboard;
