import "./App.css";
import Calendar from "./components/Calendar";
import Dashboard from "./components/Dashboard";
import { useState } from "react";

function App() {
    const [view, setView] = useState("dashboard");
	return (
		<>
        { view == "dashboard" ? <Dashboard /> : ""}
        { view == "calendar" ? <Calendar /> : ""}
        <button onClick={() => setView("dashboard")}>Dash</button>
        <button onClick={() => setView("calendar")}>Cal</button>
		</>
	);
}

export default App;
