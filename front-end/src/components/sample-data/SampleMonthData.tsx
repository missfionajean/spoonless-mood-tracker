const sampleMonthData = {
	"2025-12-01": {
		emotions: ["happy", "relaxed"],
		notes: "Had a great day at the park!",
	},
	"2025-12-02": {
		emotions: ["tense", "depressed"],
		notes: "Work deadlines are piling up.",
	},
	"2025-12-07": {
		emotions: ["bored"],
		notes: "Enjoyed a quiet evening with a book.",
	},
	"2025-12-04": {
		emotions: ["excited", "angry", "happy"],
		notes: "Went for a run and felt amazing!",
	},
	"2025-12-15": {
		emotions: ["relaxed", "happy"],
		notes: "Had a relaxing day with friends.",
	},
	"2025-12-20": {
		emotions: ["depressed", "tense"],
		notes: "Feeling overwhelmed with everything.",
	},
	"2025-12-25": {
		emotions: ["happy", "excited"],
		notes: "Celebrated Christmas with family!",
	},
};

// you can do a SQL table that has date (YYYY-MM-DD) as primary key (which you will use to do a search when a month is rendered) and columns for emotions (up to three) and notes (varchar(255))

export default sampleMonthData;
