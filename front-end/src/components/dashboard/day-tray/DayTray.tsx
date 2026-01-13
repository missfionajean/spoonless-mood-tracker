// this will hold the emotion wheel, notes and buttons
// try using the react bits circular gallery widget for the emotion wheel
// import EmotionWheel from "./EmotionWheel";

/* Imports */

// react imports
import { useState } from "react";

// component imports
import EmotionPicker from "./emotion-picker/EmotionPicker";

/* Main Function */

export default function DayTray() {
	// state variables for daily user data (will be lifted later)
	const [dayNotes, setDayNotes] = useState("");
	// array will hold between 0 and 3 moods and render using a map
	// const [savedEmotions, setSavedEmotions] = useState([
	// 	{ id: "1", src: "1.png" },
	// 	{ id: "2", src: "2.png" },
	// 	{ id: "3", src: "3.png" },
	// ]);

	return (
		<div
			className="day-tray"
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			{/* wheel needs to be in its own file */}
			<EmotionPicker />

			{/* notes input doesn't need own file */}
			<label htmlFor="notes-input"></label>
			<textarea
				className="notes-input"
				style={{
					width: "360px",
					height: "75px",
					color: "white",
					padding: "10px",
					marginTop: "0.2em",
					marginBottom: "0.5em",
					borderRadius: "10px",
				}}
				placeholder={"Add a note here (Optional)"}
				value={dayNotes}
				onChange={(e) => setDayNotes(e.target.value)}
			/>

			{/* daily edit button container */}
			<div
				className="day-button-box"
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					width: "355px",
				}}
			>
				<button
					style={{
						backgroundColor: "dimgray",
						height: "50px",
						width: "120px",
						borderRadius: "12px",
						fontSize: "1.2em",
						color: "#d7d7d7ff",
					}}
				>
					Clear
				</button>
				<button
					style={{
						backgroundColor: "#1e1e1eff",
						height: "50px",
						width: "50px",
						borderRadius: "50%",
						fontSize: "1.2em",
						fontWeight: "bold",
						color: "darkgray",
					}}
				>
					?
				</button>
				<button
					style={{
						backgroundColor: "darkblue",
						height: "50px",
						width: "120px",
						borderRadius: "12px",
						fontWeight: "bold",
						fontSize: "1.2em",
						color: "#e2e2e2ff",
					}}
				>
					Save
				</button>
			</div>
		</div>
	);
}
