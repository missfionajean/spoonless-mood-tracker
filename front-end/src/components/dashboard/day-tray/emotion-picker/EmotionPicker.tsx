/* Pseudocode */

// this will hold the image carousel that holds all eight emotions and rotates around a center point that holds the currently selected color(s)
// let them choose up to three emotions at a time, rendering gradient in order chosen (always append new emtion to the end of the array if there's not already three)
// if an emotion is not highlighted, clicking will add it to the array; if it is highlighted, clicking will remove it from the array
// therefore, it will always render the gradient in the order of the emotions chosen
// if no emotion is chosen, render a default color (gray like an unfilled day in the calendar above)

/* Imports */

// react imports
import { useState } from "react";

// component imports
import PreviewWheel from "./PreviewWheel.tsx";
import SpoonWheel from "./SpoonWheel.tsx";

// type imports
import type { SpinnerImage } from "./emotionPicker.types.ts";
import type { EmotionPickerProps } from "./emotionPicker.types.ts";

/* Prototype of color rendering logic */

const colors: Record<string, string> = {
	"1": "#8EC83F",
	"2": "#00A874",
	"3": "#02AFEF",
	"4": "#0054A7",
	"5": "#94278F",
	"6": "#EE0873",
	"7": "#EC1D25",
	"8": "#FFC40F",
};
const radius = 140;
const diameter = radius * 2;

export default function EmotionPicker({
    selectedDate,
    userMonthData,
    setUserMonthData,
}: EmotionPickerProps) {
	const [selected, setSelected] = useState<SpinnerImage[]>([]);

    // dummy references to props to avoid lint errors
    const val1 = selectedDate;
    const val2 = userMonthData;
    const val3 = setUserMonthData;

	return (
		<div
			style={{
				width: diameter + 64,
				height: radius + 32,
				overflow: "hidden",
				margin: "0 auto",
				position: "relative",
				// border: "1px solid white",
			}}
		>
			<PreviewWheel selected={selected} />
			<SpoonWheel
				selected={selected}
				setSelected={setSelected}
				radius={radius}
				diameter={diameter}
			/>
		</div>
	);
}
