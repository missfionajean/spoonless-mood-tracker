type SpinnerImage = {
    id: string;
    src: string; // path from /public
};

type PreviewWheelProps = {
	selected: { id: string; src: string }[];
};

export type { SpinnerImage, PreviewWheelProps };