/*
COLORS ARE CURRENTLY ACCESSED BY NUMBER, AS FOLLOWS. THIS WAS THE PoLR to get the Emotion Picker working, but should be updated to be keywords eventually, to prevent confusion when it comes to database configuration. For now, use numbers.

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

1 - Excited (Green)
2 - Happy (Teal)
3 - Calm (Light Blue)
4 - Bored (Dark Blue)
5 - Depressed (Purple)
6 - Sad (Pink)
7 - Angry (Red)
8 - Tense (Yellow)

Think about how you want to present these categories to the users, since "happy" and "sad" are loaded terms. Doing a spoon mascot image/emoji would be the preference, with more info when you click the help icon.

*/

const sampleMonthData = {
	"2026-01-01": {
		emotions: ["7", "2"],
		notes: "Had a great day at the park!",
	},
	"2026-01-02": {
		emotions: ["5", "7"],
		notes: "Work deadlines are piling up.",
	},
	"2026-01-04": {
		emotions: ["2", "5", "7"],
		notes: "Went for a run and felt amazing!",
	},
    "2026-01-07": {
		emotions: ["8"],
		notes: "Enjoyed a quiet evening with a book.",
	},
	"2026-01-15": {
		emotions: ["4", "1"],
		notes: "Had a relaxing day with friends.",
	},
	"2026-01-20": {
		emotions: ["5", "4"],
		notes: "Feeling overwhelmed with everything.",
	},
	"2026-01-25": {
		emotions: ["2", "3", "4"],
		notes: "Celebrated Christmas with family!",
	},
};

// you can do a SQL table that has date (YYYY-MM-DD) as primary key (which you will use to do a search when a month is rendered) and columns for emotions (up to three) and notes (varchar(255))

export default sampleMonthData;
