type CalendarProps = {
    todaysDate: Date;
    selectedDate: Date | null;
    setSelectedDate: (date: Date | null) => void;
    userMonthData: any;
};

export type { CalendarProps };