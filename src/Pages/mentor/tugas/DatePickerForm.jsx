import React, { useState } from 'react';
import Modal from 'react-modal';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

Modal.setAppElement('#root'); // Important for accessibility, specify your app root element

const DatePickerForm = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);
    const handleDateChange = (date) => {
        setSelectedDate(date);
        closeModal();
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Selected date: ${selectedDate}`);
        // Add your form submission logic here
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="p-4">
                <div className="mb-4">
                    <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
                        Date
                    </label>
                    <input
                        type="text"
                        id="date"
                        readOnly
                        value={selectedDate.toDateString()}
                        onClick={openModal}
                        className="w-full px-3 py-2 border rounded-lg cursor-pointer"
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                    Submit
                </button>
            </form>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Select Date"
                className="flex items-center justify-center h-full"
                overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-75 z-50"
                style={{
                    content: {
                        zIndex: '60', // Make sure the modal itself has a high z-index
                    },
                    overlay: {
                        zIndex: '50', // Ensure the overlay is behind the modal content but above other elements
                    },
                }}
            >
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-lg font-bold mb-4">Select Date</h2>
                    <div className="relative">
                        <DatePicker
                            selected={selectedDate}
                            onChange={handleDateChange}
                            inline
                            popperPlacement="top-end" // Optional: Customize placement
                            popperModifiers={{
                                preventOverflow: {
                                    enabled: true,
                                    escapeWithReference: false,
                                    boundariesElement: 'viewport',
                                },
                            }}
                        />
                    </div>
                    <button onClick={closeModal} className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg">
                        Cancel
                    </button>
                </div>
            </Modal>
        </div>
    );
};

export default DatePickerForm;
