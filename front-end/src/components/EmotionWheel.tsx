// this will hold the image carousel that holds all eight emotions and rotates around a center point that holds the currently selected color(s)
// let them choose up to three emotions at a time, rendering gradient in order chosen (always append new emtion to the end of the array if there's not already three)
// if an emotion is not highlighted, clicking will add it to the array; if it is highlighted, clicking will remove it from the array
// therefore, it will always render the gradient in the order of the emotions chosen
// if no emotion is chosen, render a default color (gray like an unfilled day in the calendar above)
export default function EmotionWheel() {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				border: "1px solid white",
				width: "320px",
				height: "100px",
				color: "white",
			}}
		>
			Emotion Wheel
		</div>
	);
}
