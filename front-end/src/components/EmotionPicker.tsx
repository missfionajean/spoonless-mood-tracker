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

type EmotionWheelProps = {
	images: SpinnerImage[];
	selected: SpinnerImage[];
	setSelected: React.Dispatch<React.SetStateAction<SpinnerImage[]>>;
	radius?: number;
};

/* Helpers */

const degToRad = (deg: number) => (deg * Math.PI) / 180;

const normalize = (deg: number) => ((deg % 360) + 360) % 360;

/* Spinner Component */

const EmotionWheel: React.FC<EmotionWheelProps> = ({
	images,
	selected,
	setSelected,
	radius = 140,
}) => {
	const [rotation, setRotation] = useState(0);

	const isDragging = useRef(false);
	const lastX = useRef(0);

	const step = 360 / images.length;
	const size = radius * 2;

	/* Pointer / Touch Handlers */

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

	const addImage = (img: SpinnerImage) => {
		setSelected((prev) =>
			prev.some((i) => i.id === img.id) ? prev : [...prev, img]
		);
	};

	return (
		<div
			style={{
				width: size + 64,
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
					borderRadius: "50%",
					background: "dimgray",
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
					width: size,
					height: size,
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
		<EmotionWheel
			images={IMAGES}
			selected={selected}
			setSelected={setSelected}
		/>
	);
}
