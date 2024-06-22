// import { useState } from "react";
// import Select from "react-select";

// const usernameOptions = [
//   { value: 1, label: "Andi" },
//   { value: 2, label: "Budi" },
// ];
// const universitasOptions = [
//   { value: "1", label: "Iteba" },
//   { value: "2", label: "Poltek" },
// ];
// const kategoriOptions = [
//   { value: "0", label: "Non-It" },
//   { value: "1", label: "IT" },
// ];
// const kelasOptions = [
//   { value: "A", label: "Kelas A" },
//   { value: "B", label: "Kelas B" },
//   { value: "C", label: "Kelas C" },
// ];
// const sesiOptions = [
//   { value: "pagi", label: "Pagi" },
//   { value: "siang", label: "Siang" },
// ];
// const mentorOptions = [
//   { value: "1", label: "Abdee" },
//   { value: "2", label: "Ilham" },
// ];

// const InputModal = ({ isOpen, onClose, title, isButton }) => {
//   const [formValues, setFormValues] = useState({});
//   // Function to handle input changes

//   const handleInputChange = (title, value) => {
//     setFormValues({ ...formValues, [title]: value });
//   };
//   const handleChange = (title, selectedOption) => {
//     // Update formValues with the selected option
//     setFormValues({ ...formValues, [title]: selectedOption });
//   };
//   const handleOption = (title) => {
//     switch (title) {
//       case "Username":
//         return usernameOptions; // No options for Username
//       case "Universitas":
//         // Return options for Universitas
//         return universitasOptions; // Assuming you have universitasOptions defined
//       case "Kategori":
//         // Return options for Kategori
//         return kategoriOptions; // Assuming you have kategoriOptions defined
//       case "Kelas":
//         // Return options for Kelas
//         return kelasOptions; // Assuming you have kelasOptions defined
//       case "Sesi":
//         // Return options for Sesi
//         return sesiOptions; // Assuming you have sesiOptions defined
//       case "Individual Mentor":
//         // Return options for Individual Mentor
//         return mentorOptions; // Assuming you have mentorOptions defined
//       default:
//         return null;
//     }
//   };

//   // Function to handle form submission
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Process form submission here
//     console.log("Form values:", formValues);
//     // Close modal after form submission
//     onClose();
//   };

//   return (
//     <dialog className="modal" open={isOpen} onClick={onClose}>
//       <div
//         className="modal-box flex flex-col gap-3"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <form onSubmit={handleSubmit}>
//           {title.map((title, index) => {
//             if (
//               title === "Username" ||
//               title === "Universitas" ||
//               title === "Kategori" ||
//               title === "Kelas" ||
//               title === "Sesi" ||
//               title === "Individual Mentor"
//             ) {
//               return (
//                 <label key={index} className="flex items-center gap-2 mt-5">
//                   <h1 className="w-[25%]">{title}</h1>
//                   <Select
//                     className="w-[75%] rounded-md"
//                     value={formValues[title]} // Use the corresponding state from formValues
//                     onChange={(selectedOption) =>
//                       handleChange(title, selectedOption)
//                     } // Pass the title to handleChange
//                     options={handleOption(title)} // Pass options based on the title
//                   />
//                   {/*<input*/}
//                   {/*    type="text"*/}
//                   {/*    className="w-[75%] grow py-2 px-3 rounded-md border-2 border-gray-500"*/}
//                   {/*    placeholder={`Enter ${title}`}*/}
//                   {/*    value={formValues[title] || ""}*/}
//                   {/*    onChange={(e) => handleInputChange(title, e.target.value)}*/}
//                   {/*/>*/}
//                 </label>
//               );
//             } else {
//               return (
//                 <label key={index} className="flex items-center gap-2 mt-5">
//                   <h1 className="w-[25%]">{title}</h1>
//                   <input
//                     type="text"
//                     className="w-[75%] grow py-2 px-3 rounded-md border border-gray-300"
//                     placeholder={`Enter ${title}`}
//                     value={formValues[title] || ""}
//                     onChange={(e) => handleInputChange(title, e.target.value)}
//                   />
//                 </label>
//               );
//             }
//           })}
//           {isButton ? (
//             <div className="modal-action justify-center">
//               <div style={{ textAlign: "center" }}>
//                 <button
//                   type="button"
//                   onClick={onClose}
//                   className="text-[#235EAC] border border-[#235EAC] py-1 px-5 rounded bg-white mr-6"
//                 >
//                   Batal
//                 </button>
//                 <button
//                   type="submit"
//                   className="text-white py-1 px-5 ml-6 rounded bg-[#235EAC]"
//                 >
//                   Simpan
//                 </button>
//               </div>
//             </div>
//           ) : null}
//         </form>
//       </div>
//     </dialog>
//   );
// };

// export default InputModal;

import { useState } from "react";
import Select from "react-select";

const usernameOptions = [
  { value: 1, label: "Andi" },
  { value: 2, label: "Budi" },
];
const universitasOptions = [
  { value: "1", label: "Iteba" },
  { value: "2", label: "Poltek" },
];
const kategoriOptions = [
  { value: "0", label: "Non-It" },
  { value: "1", label: "IT" },
];
const kelasOptions = [
  { value: "A", label: "Kelas A" },
  { value: "B", label: "Kelas B" },
  { value: "C", label: "Kelas C" },
];
const sesiOptions = [
  { value: "pagi", label: "Pagi" },
  { value: "siang", label: "Siang" },
];
const mentorOptions = [
  { value: "1", label: "Abdee" },
  { value: "2", label: "Ilham" },
];

const InputModal = ({ isOpen, onClose, title, isButton }) => {
  const [formValues, setFormValues] = useState({});

  const handleInputChange = (title, value) => {
    setFormValues({ ...formValues, [title]: value });
  };

  const handleChange = (title, selectedOption) => {
    setFormValues({ ...formValues, [title]: selectedOption });
  };

  const handleOption = (title) => {
    switch (title) {
      case "Username":
        return usernameOptions;
      case "Universitas":
        return universitasOptions;
      case "Kategori":
        return kategoriOptions;
      case "Kelas":
        return kelasOptions;
      case "Sesi":
        return sesiOptions;
      case "Individual Mentor":
        return mentorOptions;
      default:
        return [];
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form values:", formValues);
    onClose(); // Close modal after form submission
  };

  return (
    <dialog className="modal" open={isOpen} onClick={onClose}>
      <div
        className="modal-box flex flex-col gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        <form onSubmit={handleSubmit}>
          {title.map((title, index) => (
            <label key={index} className="flex items-center gap-2 mt-5">
              <h1 className="w-[25%]">{title}</h1>
              {[
                "Username",
                "Universitas",
                "Kategori",
                "Kelas",
                "Sesi",
                "Individual Mentor",
              ].includes(title) ? (
                <Select
                  className="w-[75%] rounded-md"
                  value={formValues[title]}
                  onChange={(selectedOption) =>
                    handleChange(title, selectedOption)
                  }
                  options={handleOption(title)}
                />
              ) : (
                <input
                  type="text"
                  className="w-[75%] grow py-2 px-3 rounded-md border border-gray-300"
                  placeholder={`Enter ${title}`}
                  value={formValues[title] || ""}
                  onChange={(e) => handleInputChange(title, e.target.value)}
                />
              )}
            </label>
          ))}
          {isButton && (
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
          )}
        </form>
      </div>
    </dialog>
  );
};

export default InputModal;
