export const absenOptions = {
    title: "Tanggal Absen",
    autoHide: true,
    todayBtn: true,
    clearBtn: false,
    clearBtnText: "Clear",
    maxDate: new Date("2030-01-01"),
    minDate: new Date("2023-01-01"),
    theme: {
        background: "bg-white dark:bg-gray-800",
        todayBtn: "",
        clearBtn: "",
        icons: "",
        text: "",
        disabledText: "bg-gray-100 dark:bg-gray-700",
        input: "",
        inputIcon: "",
        selected: "",
    },
    icons: {
        // () => ReactElement | JSX.Element
        prev: () => <span>Previous</span>,
        next: () => <span>Next</span>,
    },
    datepickerClassNames: "top-12",
    defaultDate: new Date(),
    language: "id",
    disabledDates: [],
    weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    inputNameProp: "date",
    inputIdProp: "date",
    inputPlaceholderProp: "Pilih Tanggal",
    inputDateFormatProp: {
        day: "numeric",
        month: "long",
        year: "numeric"
    }
}
