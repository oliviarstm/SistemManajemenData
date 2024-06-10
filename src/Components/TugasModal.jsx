import { useState } from "react";
import 'react-datepicker/dist/react-datepicker.css';
import CalendarModal from "../Pages/mentor/tugas/CalendarModal.jsx";

const TugasModal = ({ isOpen, onClose, title, isButton }) => {
  const [formValues, setFormValues] = useState({});
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  // Function to handle input changes
  const handleInputChange = (title, value) => {
    setFormValues({ ...formValues, [title]: value });
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Process form submission here
    console.log("Form values:", formValues);
    // Close modal after form submission
    onClose();
  };

  // Function to handle date selection from CalendarModal
  const handleDateSelect = (date) => {
    handleInputChange("Batas Pengumpulan", date);
  };

  return (
      <>
        <dialog className="modal" open={isOpen} onClick={onClose}>
          <div className="modal-box w-full max-w-2xl flex flex-col gap-3" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleSubmit}>
              {title.map((title, index) => (
                  <label key={index} className="flex items-center gap-2 mt-5">
                    <h1 className="w-[25%]">{title}</h1>
                    {title === "Batas Pengumpulan" ? (
                        <input
                            type="text"
                            readOnly
                            className="w-[75%] grow py-2 px-3 rounded-md border-2 border-gray-500"
                            placeholder={`Enter ${title}`}
                            value={formValues[title] ? formValues[title].toLocaleDateString() : ""}
                            onClick={() => setIsCalendarOpen(true)}
                        />
                    ) : (
                        <input
                            type="text"
                            className="w-[75%] grow py-2 px-3 rounded-md border-2 border-gray-500"
                            placeholder={`Enter ${title}`}
                            value={formValues[title] || ""}
                            onChange={(e) => handleInputChange(title, e.target.value)}
                        />
                    )}
                  </label>
              ))}
              {isButton ? (
                  <div className="modal-action justify-center">
                    <div style={{ textAlign: "center" }}>
                      <button
                          type="button"
                          onClick={onClose}
                          className="text-[#235EAC] border border-[#235EAC] py-1 px-5 rounded bg-white mr-6"
                      >
                        Batal
                      </button>
                      <button
                          type="submit"
                          className="text-white py-1 px-5 ml-6 rounded bg-[#235EAC]"
                      >
                        Simpan
                      </button>
                    </div>
                  </div>
              ) : null}
            </form>
          </div>
        </dialog>

        <CalendarModal
            isOpen={isCalendarOpen}
            onClose={() => setIsCalendarOpen(false)}
            onDateSelect={handleDateSelect}
        />
      </>
  );
};

export default TugasModal;
