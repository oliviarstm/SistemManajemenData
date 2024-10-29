// src/MonthSelector.js

import { useState, useRef, useEffect } from 'react';
import {useDispatch} from "react-redux";
import {setMonth} from "../../store/reducer/absensi.js";

const MonthSelector = ({ onSelect }) => {
    const [selectedMonth, setSelectedMonth] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);
    const dispatch = useDispatch()

    const monthNames = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];

    const handleSelect = (monthIndex) => {
        setSelectedMonth(monthIndex);
        setShowDropdown(false);
        if (onSelect) {
            onSelect(monthIndex);
        }
        dispatch(setMonth(monthIndex+1))
        console.log(monthIndex+1)
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setShowDropdown(false);
        }
    };
    useEffect(() => {
        dispatch(setMonth(""))
    }, []);
    useEffect(() => {
        if (showDropdown) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [showDropdown]);

    return (
        <div className="relative inline-block" ref={dropdownRef}>
            <button
                className="px-4 py-2 text-gray-500 border border-gray-500 rounded"
                onClick={() => setShowDropdown(!showDropdown)}
            >
                {selectedMonth !== null ? monthNames[selectedMonth] : "Select Month"}
            </button>
            {showDropdown && (
                <div className="absolute mt-2 bg-white border rounded shadow-lg">
                    {monthNames.map((month, index) => (
                        <div
                            key={index}
                            className="px-4 py-2 hover:bg-blue-500 hover:text-white cursor-pointer"
                            onClick={() => handleSelect(index)}
                        >
                            {month}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MonthSelector