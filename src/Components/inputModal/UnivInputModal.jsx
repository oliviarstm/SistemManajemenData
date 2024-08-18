import {useEffect, useState} from "react";
import Select from "react-select";
import axios from "../../utils/axios.js";
import Swal from "sweetalert2";
import {tempPassword} from "../../utils/helper.js";
import {useDispatch, useSelector} from "react-redux";
import {setListMentee} from "../../store/reducer/mentee.js";
import {setListMentor} from "../../store/reducer/mentor.js";
import {setListUniv} from "../../store/reducer/univ.js";

const UnivInputModal = ({ isOpen, onClose, title, isButton }) => {
  const dispatch = useDispatch()
  const [formValues, setFormValues] = useState({});
  const editId = useSelector(state => state.Univ.editId)
  console.log(editId)


  useEffect(() => {
    console.log("THIS EFFECT RUNSSS")
    const callData = async ()=>{
      try {
        if (editId!==""){
          const response = await axios.get(`/universitas/${editId}`)
          const data = response.data.data
          setFormValues({
            "Nama Universitas":data.university_name,
            "Email Universitas":data.email,
            "Alamat":data.address,
            "Nama PIC":data.pic_name,
            "Nomor Telepon PIC":data.pic_phone,
            "Email PIC":data.pic_email,
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

  const createUniv = async ()=>{
    try {
      const univData = {
        "university_name": formValues["Nama Universitas"],
        "email": formValues["Email Universitas"],
        "address": formValues["Alamat"],
        "pic_name": formValues["Nama PIC"],
        "pic_phone": formValues["Nomor Telepon PIC"],
        "pic_email": formValues["Email PIC"],
      }
      console.log(univData)
      await axios.post("/universitas", univData)
    }catch (e) {
      console.log(e)
      throw e
    }
  }

  const editUniv = async ()=>{
    console.log("EDITTTT")
    try {
      const univData = {
        "university_name": formValues["Nama Universitas"],
        "email": formValues["Email Universitas"],
        "address": formValues["Alamat"],
        "pic_name": formValues["Nama PIC"],
        "pic_phone": formValues["Nomor Telepon PIC"],
        "pic_email": formValues["Email PIC"],
      }
      await axios.put(`/universitas/${editId}`, univData)
    }catch (e) {
      console.log(e)
      throw e
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    editId===""?await createUniv():await editUniv()
    console.log("THIS RUNSS")
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
    dispatch(setListUniv(formValues))
    setFormValues({})
    await Swal.fire({
      position: "center",
      icon: "success",
      title: `Data berhasil ${editId===""?"ditambahkan":"diubah"}`,
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
                  <input
                      type={title === "Email PIC" ||title === "Email Universitas" ? "email" : title === "Nomor Telepon PIC" ? "tel" : "text"}
                      className="w-[75%] grow py-2 px-3 rounded-md border border-gray-300"
                      placeholder={`Enter ${title}`}
                      value={formValues[title] || ""}
                      onChange={(e) => handleInputChange(title, e.target.value)}
                      pattern={title === "Nomor Telepon PIC" ? "[0-9]*" : undefined}
                      title={title === "Nomor Telepon PIC" ? "Please enter a valid phone number" : ""}
                      required
                  />
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

export default UnivInputModal;
