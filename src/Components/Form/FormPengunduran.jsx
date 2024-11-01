import {useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import axios from "../../utils/axios.js";
import Swal from "sweetalert2";

const FormPengunduran =()=>{
    const {accountId} = useSelector(state => state.Auth)
    const [formValues, setFormValues] = useState({id:accountId, tanggal:new Date()});
    const navigate = useNavigate()
    const fileInputRef = useRef(null)
    const alasanInputRef = useRef(null)
    const handleInputChange = (title, value) => {
        setFormValues({ ...formValues, [title]: value });
    };

    const handleSubmit = async(event) => {
        event.preventDefault();
        // Process form submission here
        try {
            await axios.post("/pengunduran", formValues, {headers: {
                    'Content-Type': 'multipart/form-data'
                }})
            await Swal.fire({
                title: "Berhasil",
                text: "Pengunduran diri berhasil diajukan",
                icon: "success"
            })
            setFormValues({ id: accountId });
            if (fileInputRef.current) fileInputRef.current.value = ""; // Clear file input
            if (alasanInputRef.current) alasanInputRef.current.value = ""; // Clear file input
        }catch (e) {
            console.log(e)
        }
    };

    return <div className="bg-white mx-10 my-5 p-5">
        <form onSubmit={handleSubmit}>
            <label className="flex items-center mt-5">
                <h1 className="w-[25%] font-semibold text-lg">Alasan</h1>
                <input
                    type="text"
                    className="w-[75%] grow py-2 px-3 rounded-md border"
                    ref={alasanInputRef}
                    onChange={(e) => handleInputChange('alasan', e.target.value)}
                />
            </label>
            <label className="flex items-center mt-5">
                <h1 className="w-[25%] font-semibold text-lg">Lampiran</h1>
                <input
                    type="file"
                    className="w-[75%] grow py-2 px-3 rounded-md border"
                    ref={fileInputRef}
                    onChange={(e) => handleInputChange('lampiran', e.target.files[0])}
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
}

export default FormPengunduran