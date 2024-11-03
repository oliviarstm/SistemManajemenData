import {useEffect, useRef, useState} from "react";
import { absenOptions } from "../table/dateOptions.jsx";
import Datepicker from "tailwind-datepicker-react";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import axios from "../../utils/axios.js";
import Swal from "sweetalert2";

const FormIzin = () => {
  const {accountId} = useSelector(state => state.Auth)
  const [formValues, setFormValues] = useState({id:accountId});
  const [show, setShow] = useState(false);
  const navigate = useNavigate()
  const fileInputRef = useRef(null)
  const alasanInputRef = useRef(null)
  const handleInputChange = (title, value) => {
    setFormValues({ ...formValues, [title]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Process form submission here
    console.log("Form values:", formValues);
    try {
      await axios.post("/izin", formValues, {headers: {
          'Content-Type': 'multipart/form-data'
        }})
      await Swal.fire({
        title: "Berhasil",
        text: "Izin berhasil diajukan",
        icon: "success"
      })
      setFormValues({ id: accountId });
      if (fileInputRef.current) fileInputRef.current.value = ""; // Clear file input
      if (alasanInputRef.current) alasanInputRef.current.value = ""; // Clear file input
      setShow(false);
    }catch (e) {
      console.log(e)
      await Swal.fire({
        title: "Terjadi Kesalahan",
        text: "Periksa Koneksi",
        icon: "error"
      })
    }
  };
  const handleChange = (selectedDate) => {
    handleInputChange("Tanggal", selectedDate);
    console.log(selectedDate);
  };
  const handleClose = (state) => {
    setShow(state);
  };
  useEffect(() => {
    handleInputChange("Tanggal", new Date());
  }, []);

  return (
    <div className="bg-white mx-10 my-5 p-5">
      <form onSubmit={handleSubmit}>
        <label className="flex items-center mt-5">
          <h1 className="w-[25%] font-semibold text-lg">Alasan</h1>
          <input
            type="text"
            className="w-[75%] grow py-2 px-3 rounded-md border"
            ref={alasanInputRef}
            onChange={(e) => handleInputChange("alasan", e.target.value)}
          />
        </label>
        <label className="flex items-center mt-5">
          <h1 className="w-[25%] font-semibold text-lg">Tanggal</h1>
          <Datepicker
            classNames="w-[75%] grow rounded-md border"
            options={absenOptions}
            onChange={handleChange}
            show={show}
            setShow={handleClose}
          />
        </label>
        <label className="flex items-center mt-5">
          <h1 className="w-[25%] font-semibold text-lg">Lampiran</h1>
          <input
            type="file"
            className="w-[75%] grow py-2 px-3 rounded-md border"
            ref={fileInputRef}
            onChange={(e) => handleInputChange("lampiran", e.target.files[0])}
          />
        </label>
        <div className="m-8 justify-center">
          <div style={{ textAlign: "center" }}>
            <button
              type="button"
              className="text-[#235EAC] border border-[#235EAC] py-1 px-5 rounded bg-white ml-6"
              onClick={()=>navigate('/mentee/dashboard')}
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
      </form>
    </div>
  );
};

export default FormIzin;
