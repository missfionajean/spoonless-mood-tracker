// THIS NEEDS TO BE SIMPLIFIED AS MUCH AS POSSIBLE; RIGHT NOW, IT'S UNWIELDY AND HARD TO ADJUST - NEXT STEPS SHOULD BE CREATING CLEARER LOGIC, EVEN IF IT TAKES MORE LINES OF CODE (THIS LOGIC CAN BE STORED IN A SEPARATE FILE AND IMPORTED)

/* Imports */

// helper imports
import sampleMonthData from '../../../../helpers/SampleMonthData.ts';
import { getPreview } from '../../../../helpers/Gradients';

// type imports
import type { PreviewWheelProps } from './emotionPicker.types.ts';

/* Main Function */
export default function PreviewWheel({ selected }: PreviewWheelProps) {
	return (
		<div
			style={{
				position: "absolute",
				top: 172,
				left: 172,
				width: 172,
				height: 172,
				background: getPreview(selected),
				clipPath: "inset(0 0 50% 0)",
				borderRadius: "50%",
				transform: "translate(-50%, -50%)",
				zIndex: 1,
				pointerEvents: "none",
				textAlign: "center",
				lineHeight: "96px",
				fontSize: "3.6em",
				color: "white",
                textShadow: "2px 2px 8px black"
			}}
		>
			30
		</div>
	);
}
