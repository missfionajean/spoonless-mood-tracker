// THIS NEEDS TO BE SIMPLIFIED AS MUCH AS POSSIBLE; RIGHT NOW, IT'S UNWIELDY AND HARD TO ADJUST - NEXT STEPS SHOULD BE CREATING CLEARER LOGIC, EVEN IF IT TAKES MORE LINES OF CODE (THIS LOGIC CAN BE STORED IN A SEPARATE FILE AND IMPORTED)

/* Local Types */

type ColorPreviewProps = {
	radius: number;
	colors: Record<string, string>;
	selected: { id: string; src: string }[];
};

/* Main Function */

export default function ColorPreview({
	radius,
	colors,
	selected,
}: ColorPreviewProps) {
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
	);
}
