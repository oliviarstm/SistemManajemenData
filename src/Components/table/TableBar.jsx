import Datepicker from "tailwind-datepicker-react";
import Select from "react-select";
import { absenOptions } from "./dateOptions.jsx";
import { useState } from "react";
import MonthSelector from "../tempTabelRekap/MonthSelector.jsx";

const options = [
    { value: "", label: "Semua Kelas" },
    { value: "Kelas A", label: "Kelas A" },
    { value: "Kelas B", label: "Kelas B" },
    { value: "Kelas C", label: "Kelas C" },
];

const TableBar = ({ title, desc, type, handleAdd, classFilter, classFilterFunction }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [filter, setFilter] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedFilter(selectedOption);
    // Lakukan sesuatu dengan nilai filter yang dipilih, misalnya mengirimnya ke parent component
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };
  return (
    <div className="bg-white mx-10 my-5 p-5 flex flex-row justify-between items-center">
      <div className="flex flex-col">
        <h1 className="text-black font-medium text-2xl">{title}</h1>
        <h1 className="text-gray-700 font-normal">{desc}</h1>
      </div>
      <div className="flex items-center gap-4">
          {classFilter?
              <Select
                  className="w-48"
                  value={options.find((option) => option.value === filter)}
                  onChange={classFilterFunction}
                  options={options}
                  placeholder="Filter Kelas"
              />
              :null}
        {type === "add" ? (
          <button
            className="bg-[#0070FF] hover:bg-[#4593f7] text-white font-bold py-2 px-4 rounded inline-flex items-center"
            onClick={handleAdd}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 me-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <p>Tambahkan</p>
          </button>
        ) : null}
        {type === "date" ? (
          <>
            <button
              className="bg-[#0070FF] hover:bg-[#4593f7] text-white font-bold py-2 px-4 rounded inline-flex items-center mr-4"
              onClick={toggleDropdown}
            >
              Filter
            </button>
            {showDropdown && (
              <div className="absolute mt-1 bg-white rounded-md shadow-lg">
                <Select
                  classNames="px-10"
                  value={filter}
                  options={absenOptions}
                  onChange={handleChange}
                  show={show}
                  setShow={closeDropdown}
                  placeholder="Pilih Filter"
                />
              </div>
            )}
          </>
        ) : null}
        {type === "month" ? <MonthSelector /> : null}
      </div>
    </div>
  );
};

export default TableBar;
