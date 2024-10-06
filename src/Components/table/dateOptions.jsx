export const absenOptions = {
  title: "Tanggal Absen",
  autoHide: true,
  todayBtn: true,
  clearBtn: false,
  clearBtnText: "Clear",
  maxDate: new Date("2030-01-01"),
  minDate: new Date(),
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
    year: "numeric",
  },
};
export const absenFilter = {
  title: "Filter Tanggal",
  autoHide: true,
  todayBtn: true,
  clearBtn: false,
  clearBtnText: "Clear",
  maxDate: new Date("2030-01-01"),
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
    year: "numeric",
  },
};

export const monthOptions = {
  title: "Select Month",
  autoHide: true,
  todayBtn: false,
  clearBtn: true,
  theme: {
    background: "bg-gray-700",
    todayBtn: "bg-blue-500",
    clearBtn: "bg-red-500",
    icons: "bg-green-500",
    text: "text-white",
    disabledText: "text-gray-400",
    input: "text-gray-900",
    inputIcon: "text-gray-500",
  },
  datepickerOptions: {
    changeMonth: true, // Enable month selection
    changeYear: false, // Disable year selection to limit to month only
    showCalendar: false, // Hide days view in calendar
  },
};
