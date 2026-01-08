/* Imports */

// react imports
import React, { useState, useRef } from "react";

// type imports
import type { SpinnerImage } from "./emotionPicker.types.ts"

/* Local Types */

type SpoonWheelProps = {
	images: SpinnerImage[];
	selected: SpinnerImage[];
	setSelected: React.Dispatch<React.SetStateAction<SpinnerImage[]>>;
    radius: number
    diameter: number;
};

/* Helpers */

const degToRad = (deg: number) => (deg * Math.PI) / 180;

const normalize = (deg: number) => ((deg % 360) + 360) % 360;

/* Main Component */

export default function SpoonWheel({
	images,
	selected,
	setSelected,
    radius,
    diameter
}: SpoonWheelProps) {
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

	const [rotation, setRotation] = useState(0);

	const isDragging = useRef(false);
	const lastX = useRef(0);

	// circle dimensions
	const step = 360 / images.length;

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

	return (
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
	);
}
