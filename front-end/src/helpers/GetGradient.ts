/*
COLORS ARE CURRENTLY ACCESSED BY NUMBER, AS FOLLOWS. THIS WAS THE PoLR to get the Emotion Picker working, but should be updated to be keywords eventually, to prevent confusion when it comes to database configuration. For now, use numbers.
*/

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

// this may need to change based on the database structure (meaning if emotions aren't stored in an array, this will need to be adjusted)

export default function getGradient(emotions: string | any[]) {
	// three emotions selected
	if (emotions.length === 3) {
		// saved emotions in database
		const color1 = colors[emotions[0]];
		const color2 = colors[emotions[1]];
		const color3 = colors[emotions[2]];

		// three color gradient (offset start for smooth transitions)
        return `conic-gradient(
        ${color1} 65deg,
        ${color2} 95deg 185deg,
        ${color3} 215deg 305deg,
        ${color1} 335deg
        )`;
	}

	// two emotions selected
	else if (emotions.length === 2) {
		const color1 = colors[emotions[0]];
		const color2 = colors[emotions[1]];

		// two color gradient
		return `conic-gradient(
        ${color1} 60deg,
        ${color2} 90deg 240deg,
        ${color1} 270deg
        )`;
	}

	// one emotion selected
	else if (emotions.length === 1) {
		// single color fill
		return colors[emotions[0]];
	}

	// no emotions selected
	else {
		return "dimgray";
	}
}
