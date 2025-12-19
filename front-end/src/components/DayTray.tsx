// this will hold the emotion wheel, notes and buttons
// try using the react bits circular gallery widget for the emotion wheel
// import EmotionWheel from "./EmotionWheel";
import HalfCircleSpinnerDemo from "./HalfCircleImageSpinner";

export default function DayTray() {
	return (
		<>
			{/* wheel needs to be in its own file */}
			{/* <EmotionWheel /> */}
            <HalfCircleSpinnerDemo />

			{/* notes input doesn't need own file */}
			<label htmlFor="notes-input"></label>
			<textarea
				className="notes-input"
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					border: "1px solid white",
					width: "320px",
					height: "75px",
					color: "white",
					padding: "10px",
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
					width: "320px",
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
		</>
	);
}
