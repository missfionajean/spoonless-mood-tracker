type SpinnerImage = {
    id: string;
    src: string; // path from /public
};

type PreviewWheelProps = {
	selected: { id: string; src: string }[];
};

type EmotionPickerProps = {
    selectedDate: Date | null;
    userMonthData: any;
    setUserMonthData: (data: any) => void;
};

export type { SpinnerImage, PreviewWheelProps, EmotionPickerProps };