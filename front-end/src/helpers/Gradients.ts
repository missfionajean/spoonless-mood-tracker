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

// these may need to change based on the database structure (meaning if emotions aren't stored in an array, this will need to be adjusted)

// daily gradient for calendar
function getGradient(emotions: string | any[]) {
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

// preview gradient for day tray (requires id indexing)
function getPreview(emotions: string | any[]) {
    // three emotions selected
    if (emotions.length === 3) {
        const color1 = colors[emotions[0].id];
        const color2 = colors[emotions[1].id];
        const color3 = colors[emotions[2].id];

        // three color gradient (starts at 3/4 turn for half circle rendering)
        return `conic-gradient(
        from 0.75turn at 50% 52%,
        ${color1} 30deg,
        ${color2} 60deg 120deg,
        ${color3} 150deg 180deg
        )`;
    }

    // two emotions selected
    else if (emotions.length === 2) {
        const color1 = colors[emotions[0].id];
        const color2 = colors[emotions[1].id];

        // two color gradiennt (starts at 3/4 turn for half circle rendering)
        return `conic-gradient(
        from 0.75turn at 50% 52%,
        ${color1} 75deg,
        ${color2} 105deg 180deg
        )`;
    }

    // one emotion selected
    else if (emotions.length === 1) {
        // single color fill
        return colors[emotions[0].id];
    }

    // no emotions selected
    else {
        return "dimgray";
    }
}

export { getGradient, getPreview };