import Datepicker from "tailwind-datepicker-react";
import Select from "react-select";
import { absenFilter } from "../dateOptions.jsx";
import { useState } from "react";

const options = [
    { value: "", label: "Semua Kelas" },
    { value: "Kelas A", label: "Kelas A" },
    { value: "Kelas B", label: "Kelas B" },
    { value: "Kelas C", label: "Kelas C" },
    { value: "Mentor", label: "Individual Mentee" },
];

const TableBar = ({ title, desc, classFilterFunction, dateFilterFunction }) => {
    const [filter, setFilter] = useState(null);
    const [show, setShow] = useState(false);
    const handleChange = (selectedDate) => {
        dateFilterFunction(selectedDate)
        console.log(selectedDate);
    };
    const handleClose = (state) => {
        setShow(state);
    };


    return (
        <div className="bg-white mx-10 my-5 p-5 flex flex-row justify-between items-center">
            <div className="flex flex-col">
                <h1 className="text-black font-medium text-2xl">{title}</h1>
                <h1 className="text-gray-700 font-normal">{desc}</h1>
            </div>
            <div className="flex items-center gap-4">
                <Select
                    className="w-48"
                    value={options.find((option) => option.value === filter)}
                    onChange={classFilterFunction}
                    options={options}
                    placeholder="Filter Kelas"
                />
                <Datepicker
                classNames="w-[75%] grow rounded-md border"
                options={absenFilter}
                onChange={handleChange}
                show={show}
                setShow={handleClose}
            />
            </div>
        </div>
    );
};

export default TableBar;
