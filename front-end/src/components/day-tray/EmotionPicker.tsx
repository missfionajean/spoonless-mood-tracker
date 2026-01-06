// this will hold the image carousel that holds all eight emotions and rotates around a center point that holds the currently selected color(s)
// let them choose up to three emotions at a time, rendering gradient in order chosen (always append new emtion to the end of the array if there's not already three)
// if an emotion is not highlighted, clicking will add it to the array; if it is highlighted, clicking will remove it from the array
// therefore, it will always render the gradient in the order of the emotions chosen
// if no emotion is chosen, render a default color (gray like an unfilled day in the calendar above)

import React, { useRef, useState } from "react";

/* Types */

type SpinnerImage = {
	id: string;
	src: string; // path from /public
};

type SpoonWheelProps = {
	images: SpinnerImage[];
	selected: SpinnerImage[];
	setSelected: React.Dispatch<React.SetStateAction<SpinnerImage[]>>;
	radius?: number;
};

/* Helpers */

const degToRad = (deg: number) => (deg * Math.PI) / 180;

const normalize = (deg: number) => ((deg % 360) + 360) % 360;

/* Spinner Component */

const SpoonWheel: React.FC<SpoonWheelProps> = ({
	images,
	selected,
	setSelected,
	radius = 140,
}) => {
	const [rotation, setRotation] = useState(0);

	const isDragging = useRef(false);
	const lastX = useRef(0);

	// circle dimensions and reusable diameter variable
	const step = 360 / images.length;
	const diameter = radius * 2;

	/* Pointer & Touch Handlers */

	const onPointerDown = (e: React.PointerEvent) => {
		isDragging.current = true;
		lastX.current = e.clientX;
	};

	const onPointerMove = (e: React.PointerEvent) => {
		if (!isDragging.current) return;
		const delta = e.clientX - lastX.current;
		setRotation((r) => r + delta * 0.6); // spin sensitivity
		lastX.current = e.clientX;
	};

	const onPointerUp = () => {
		isDragging.current = false;
	};

	/* Selection Logic */

	// controls which images in wheel are selected
	const addImage = (img: SpinnerImage) => {
		setSelected((prev) => {
			const alreadySelected = prev.some((i) => i.id === img.id);

			// deselection logic
			if (alreadySelected) {
				return prev.filter((i) => i.id !== img.id);
			}

			// quick check to ensure max of three selections
			if (prev.length >= 3) {
				return prev;
			}

			// defaults to adding new image if other checks fail
			console.log(prev);
			return [...prev, img];
		});
	};

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

	// THIS NEEDS TO BE SIMPLIFIED AS MUCH AS POSSIBLE; RIGHT NOW, IT'S UNWIELDY AND HARD TO ADJUST - NEXT STEPS SHOULD BE CREATING CLEARER LOGIC, EVEN IF IT TAKES MORE LINES OF CODE (THIS LOGIC CAN BE STORED IN A SEPARATE FILE AND IMPORTED)
	const colorPreview =
		selected.length >= 1
			? (() => {
					// defines number of selected emotions and portion of circle each will take up
					const n = selected.length;
					const portion = 180 / n;

					// returns conic-gradient string based on selected emotions
					return `conic-gradient(
          from -90deg at 50% 50%,
          ${selected
				// uses index to calculate start and end angles for each color portion
				.map((img, i) => {
					const start = i * portion;
					const end = (i + 1) * portion;

					const nextColor =
						colors[selected[(i + 1) % n]?.id] ?? colors[img.id];

					// blend logic
					const blend = 0;
					const blendEnd = end - blend;

					return `
                ${colors[img.id]} ${start}deg,
                ${colors[img.id]} ${blendEnd}deg,
                ${nextColor} ${end}deg
              `;
				})
				.join(", ")},
          transparent 180deg,
          transparent 360deg
        )`;
			  })()
			: "dimgray";

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
			{/* Preview Gradient */}
			<div
				style={{
					position: "absolute",
					top: radius + 32,
					left: radius + 32,
					width: 172,
					height: 172,
					background: colorPreview,
					clipPath: "inset(0 0 50% 0)",
					borderRadius: "50%",
					transform: "translate(-50%, -50%)",
					zIndex: 1,
					pointerEvents: "none",
					textAlign: "center",
					lineHeight: "96px",
					fontSize: "3.5em",
					color: "white",
				}}
			>
				30
			</div>

			{/* Spinning Wheel */}
			<div
				onPointerDown={onPointerDown}
				onPointerMove={onPointerMove}
				onPointerUp={onPointerUp}
				onPointerLeave={onPointerUp}
				style={{
					position: "absolute",
					top: 32,
					left: 32,
					width: diameter,
					height: diameter,
					touchAction: "none",
					userSelect: "none",
					zIndex: 0,
				}}
			>
				{images.map((img, index) => {
					const baseAngle = -90 + index * step;
					const angle = normalize(baseAngle + rotation);

					const centerX = radius;
					const centerY = radius;

					const x = centerX + radius * Math.cos(degToRad(angle));
					const y = centerY + radius * Math.sin(degToRad(angle));

					const isSelected = selected.some((i) => i.id === img.id);

					return (
						<button
							key={img.id}
							onClick={() => addImage(img)}
							style={{
								position: "absolute",
								left: x,
								top: y,
								transform: "translate(-50%, -50%)",
								width: 64,
								height: 64,
								borderRadius: "50%",
								background: "#fff",
								border: isSelected
									? "3px solid #1976d2"
									: "2px solid #ccc",
								cursor: "pointer",
							}}
						>
							<img
								src={img.src}
								alt=""
								draggable={false}
								style={{
									width: "100%",
									height: "100%",
									borderRadius: "50%",
									objectFit: "cover",
									pointerEvents: "none",
								}}
							/>
						</button>
					);
				})}
			</div>
		</div>
	);
};

/* Example Usage (Default Export) */

const IMAGES: SpinnerImage[] = [
	{ id: "1", src: "1.png" },
	{ id: "2", src: "2.png" },
	{ id: "3", src: "3.png" },
	{ id: "4", src: "4.png" },
	{ id: "5", src: "5.png" },
	{ id: "6", src: "6.png" },
	{ id: "7", src: "7.png" },
	{ id: "8", src: "8.png" },
];

export default function EmotionPicker() {
	const [selected, setSelected] = useState<SpinnerImage[]>([]);

	return (
		<SpoonWheel
			images={IMAGES}
			selected={selected}
			setSelected={setSelected}
		/>
	);
}
// MOVE SPOON WHEEL TO ITS OWN FILE!!
