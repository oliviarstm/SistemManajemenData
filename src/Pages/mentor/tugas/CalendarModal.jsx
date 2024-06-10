import { useState } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

const CalendarModal = ({ isOpen, onClose, onDateSelect }) => {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleDateSelect = () => {
        onDateSelect(selectedDate);
        onClose();
    };

    return (
        <dialog className="modal" open={isOpen} onClick={onClose}>
            <div className="modal-box w-full max-w-sm flex flex-col gap-3" onClick={(e) => e.stopPropagation()}>
                <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    inline
                />
                <div className="modal-action justify-center">
                    <button
                        type="button"
                        onClick={onClose}
                        className="text-[#235EAC] border border-[#235EAC] py-1 px-5 rounded bg-white mr-6"
                    >
                        Batal
                    </button>
                    <button
                        type="button"
                        onClick={handleDateSelect}
                        className="text-white py-1 px-5 ml-6 rounded bg-[#235EAC]"
                    >
                        Simpan
                    </button>
                </div>
            </div>
        </dialog>
    );
};

export default CalendarModal;
