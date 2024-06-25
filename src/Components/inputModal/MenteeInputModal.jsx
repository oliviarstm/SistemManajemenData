import {useEffect, useState} from "react";
import Select from "react-select";
import axios from "../../utils/axios.js";
import Swal from "sweetalert2";
import {tempPassword} from "../../utils/helper.js";
import {useDispatch, useSelector} from "react-redux";
import {setListMentee} from "../../store/reducer/mentee.js";

// Options for Select
// let universitasOptions = [];
const kategoriOptions = [
  { value: 0, label: "Non-It" },
  { value: 1, label: "IT" },
];
const kelasOptions = [
  { value: "a", label: "Kelas A" },
  { value: "b", label: "Kelas B" },
  { value: "c", label: "Kelas C" },
];
const sesiOptions = [
  { value: "Pagi", label: "Pagi" },
  { value: "Siang", label: "Siang" },
];

const MenteeInputModal = ({ isOpen, onClose, title, isButton }) => {
  const dispatch = useDispatch()
  const [formValues, setFormValues] = useState({});
  const [universitas, setUniversitas]=useState({})
  const [mentor, setMentor]=useState({})
  const [universitasOptions, setUniversitasOptions]=useState([])
  const [mentorOptions, setMentorOptions]=useState([])
  const editId = useSelector(state => state.Mentee.editId)
  console.log(editId)

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

  useEffect(() => {
    const callData = async ()=>{
      try {
        if (editId!==""){
          const response = await axios.get(`/mentee/${editId}`)
          // setFormValues((await axios.get(`/mentee/1`)).response)
          const data = response.data.data
          setFormValues({
            "Username":data.username,
            "NIM":data.nim,
            "Nama":data.name,
            "Universitas":universitasOptions.filter(item=>item.value === data.id_university)[0],
            "Email":data.email,
            "No. Hp":data.phone_number,
            "Kategori":kategoriOptions.filter(item=>item.value === data.category)[0],
            "Kelas":kelasOptions.filter(item => item.value === data.class.toLowerCase())[0],
            "Sesi":sesiOptions.filter(item=>item.value === data.session)[0],
            "Individual Mentor":mentorOptions.filter(item=>item.value === data.id_mentor)[0],
            "Jurusan":data.major,
          })
        }

      }catch (e) {
        console.log(e)
      }
    }
    callData()
  }, [editId]);

  const handleInputChange = (title, value) => {
    setFormValues({ ...formValues, [title]: value });
  };

  const handleChange = (title, selectedOption) => {
    console.log({[title]: selectedOption })
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

  const createMentee = async ()=>{
    const userData = {
      username:formValues["Username"].toLowerCase(),
      role:"mentee",
      password:tempPassword(formValues["Email"], formValues["No. Hp"]),
      email:formValues["Email"].toLowerCase()
    }
    const menteeData = {
      "nim": formValues["NIM"].toLowerCase(),
      "name": formValues["Nama"].toLowerCase(),
      "class": formValues["Kelas"]["value"],
      "session": formValues["Sesi"]["value"],
      "phone_number": formValues["No. Hp"],
      "category": formValues["Kategori"]["value"],
      "major": formValues["Jurusan"].toLowerCase(),
      // "id_user": 16,
      "id_mentor": formValues["Individual Mentor"]["value"],
      "id_university": formValues["Universitas"]["value"]
    }
    try {
      console.log(userData)
      const {data}=await axios.post("/user", userData)
      console.log({...menteeData, id_user:data.result})
      await axios.post("/mentee", {...menteeData, id_user:data.result})
    }catch (e) {
      console.log(e)
      throw e
    }
  }

  const editMentee = async ()=>{
    const menteeData = {
      "nim": formValues["NIM"].toLowerCase(),
      "name": formValues["Nama"].toLowerCase(),
      "class": formValues["Kelas"]["value"],
      "session": formValues["Sesi"]["value"],
      "phone_number": formValues["No. Hp"],
      "category": formValues["Kategori"]["value"],
      "major": formValues["Jurusan"].toLowerCase(),
      "id_mentor": formValues["Individual Mentor"]["value"],
      "id_university": formValues["Universitas"]["value"]
    }
    try {
      await axios.put(`/mentee_admin/${editId}`, menteeData)
    }catch (e) {
      console.log(e)
      throw e
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    editId===""?await createMentee():await editMentee()
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
    dispatch(setListMentee(formValues))
    setFormValues({})
    await Swal.fire({
      position: "center",
      icon: "success",
      title: `Data mentee berhasil ${editId===""?"ditambahkan":"diubah"}`,
      showConfirmButton: false,
      timer: 1500
    });
    closeModal(); // Close modal after form submission
  };

  const closeModal = ()=>{
    setFormValues({})
    onClose()
  }

  return (
    <dialog className="modal" open={isOpen} onClick={closeModal}>
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
                        disabled={
                            (title === "Username" || title === "Email") && editId !== ""
                        }
                    />
                )}
              </label>
          ))}
          {isButton && (
              <div className="modal-action justify-center">
                <div style={{ textAlign: "center" }}>
                  <button
                      type="button"
                      onClick={closeModal}
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

export default MenteeInputModal;
