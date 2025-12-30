// this will hold the emotion wheel, notes and buttons
// try using the react bits circular gallery widget for the emotion wheel
// import EmotionWheel from "./EmotionWheel";
import EmotionPicker from "./EmotionPicker";

export default function DayTray() {
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
			/>

			{/* daily edit button container */}
			<div
				className="day-button-box"
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					width: "360px",
					color: "white",
				}}
			>
				<button
					style={{
						backgroundColor: "gray",
						height: "50px",
						width: "120px",
						borderRadius: "10px",
						fontSize: "1.2em",
					}}
				>
					Clear
				</button>
				<button
					style={{
						backgroundColor: "darkblue",
						height: "50px",
						width: "120px",
						borderRadius: "10px",
						fontWeight: "bold",
						fontSize: "1.2em",
					}}
				>
					Save
				</button>
			</div>
		</div>
	);
}
