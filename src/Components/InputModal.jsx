import {useEffect, useState} from "react";
import Select from "react-select";
import axios from "../utils/axios.js";
import Swal from "sweetalert2";

// Options for Select
// let universitasOptions = [];
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
  { value: "Pagi", label: "Pagi" },
  { value: "Siang", label: "Siang" },
];

const InputModal = ({ isOpen, onClose, title, isButton }) => {
  const [formValues, setFormValues] = useState({});
  const [universitas, setUniversitas]=useState({})
  const [mentor, setMentor]=useState({})
  const [universitasOptions, setUniversitasOptions]=useState([])
  const [mentorOptions, setMentorOptions]=useState([])

  useEffect(() => {
    const callOptions = async ()=>{
      try {
        const mentorData = await axios.get("/mentor")
        const univ = await axios.get("/universitas")
        setMentor(mentorData.data.data)
        setUniversitas(univ.data.data)

      }catch (e) {
        console.log(e)
      }
    }
    callOptions()
  }, []);

  useEffect(()=>{
    if (universitas.length > 0) {
      const options = universitas.map(data => ({
        value: data.id,
        label: data.university_name
      }));
      setUniversitasOptions(options);
    }
  },[universitas])

  useEffect(()=>{
    if (mentor.length > 0) {
      const options = mentor.map(data => ({
        value: data.id,
        label: data.nama
      }));
      setMentorOptions(options);
    }
  },[mentor])

  const handleInputChange = (title, value) => {
    setFormValues({ ...formValues, [title]: value });
  };

  const handleChange = (title, selectedOption) => {
    setFormValues({ ...formValues, [title]: selectedOption });
  };

  // Option based on title
  const handleOption = (title) => {
    switch (title) {
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
    for (let titles of title) {
      if (!formValues[titles]) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `Please fill in the ${titles}`
        });
        return;
      }
    }
    console.log("Form values:", formValues);
    setFormValues({})
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Data mentee berhasil ditambahkan",
      showConfirmButton: false,
      timer: 1500
    });
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
                  "Universitas",
                  "Kategori",
                  "Kelas",
                  "Sesi",
                  "Individual Mentor",
                ].includes(title) ? (
                    <Select
                        className="w-[75%] rounded-md"
                        value={formValues[title] || null}
                        onChange={(selectedOption) =>
                            handleChange(title, selectedOption)
                        }
                        options={handleOption(title)}
                        isClearable
                        isRequired
                    />
                ) : (
                    <input
                        type={title === "Email" ? "email" : title === "No. Hp" ? "tel" : "text"}
                        className="w-[75%] grow py-2 px-3 rounded-md border border-gray-300"
                        placeholder={`Enter ${title}`}
                        value={formValues[title] || ""}
                        onChange={(e) => handleInputChange(title, e.target.value)}
                        pattern={title === "No. Hp" ? "[0-9]*" : undefined}
                        title={title === "No. Hp" ? "Please enter a valid phone number" : ""}
                        required
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
