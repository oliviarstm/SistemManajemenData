import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "../../utils/axios.js";
import Swal from "sweetalert2";

const FormTugas =({titleTugas, batas, idMentee, idTugas})=>{
    const [formValues, setFormValues] = useState({id_tugas:idTugas, id_mentee:idMentee});
    const navigate = useNavigate()
    const [isSubmit, setIsSubmit] = useState(false)
    const [refresh, setRefresh] = useState(false)
    const [pengumpulan, setPengumpulan] = useState("")

    const handleInputChange = (title, value) => {
        setFormValues({ ...formValues, [title]: value });
    };
    const handleRefresh = () => {
        console.log("REFRESS")
        setRefresh(prev => !prev); // Toggle refresh state
    }
    const fetchData = async () =>{
        const res = await axios.post("/pengumpulan-tugas-mentee", {id_tugas:idTugas, id_mentee:idMentee})
        const data = res.data.data
        if(data.length!==0){
            setPengumpulan(data[0])
        }
        data.length===1?setIsSubmit(true):null
    }

    useEffect(() => {
        setIsSubmit(false)
        fetchData()
    }, [refresh]);

    console.log(idTugas)
    console.log(idMentee)
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("/kumpul-tugas", formValues, {headers: {
                    'Content-Type': 'multipart/form-data'
                }})
            await Swal.fire({
                title: "Berhasil",
                text: "Tugas berhasil dikumpulkan",
                icon: "success"
            })
            handleRefresh()
        }catch (e) {
            console.log(e)
            await Swal.fire({
                title: "Terjadi Kesalahan",
                text: "Periksa Koneksi",
                icon: "error"
            })
        }
    };

    const handleDelete = async ()=>{
        console.log(pengumpulan.id_pengumpulan)
        Swal.fire({
            title:"Apakah anda yakin?",
            text:"Pengumpulan tugas akan terhapus",
            icon:"warning",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText:'Iya, hapus!',
            cancelButtonText:"Tidak"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`/kumpul-tugas/${pengumpulan.id_pengumpulan}`)
                    .then(res=>{
                        console.log(res.data.msg)
                        handleRefresh()
                    })
                    .catch(err=>{
                        Swal.fire({
                            title: "Terjadi Kesalahan",
                            text: "Periksa Koneksi",
                            icon: "error"
                        })
                        console.log(err)
                    })
            }
        })
    }
    console.log(pengumpulan.nilai)
    return <div className="bg-white mx-10 my-5 p-5">
        <form onSubmit={handleSubmit}>
            <label className="flex items-center mt-5">
                <h1 className="w-[25%] font-semibold text-lg">Nama</h1>
                <input
                    type="text"
                    className="w-[75%] grow py-2 px-3 rounded-md border"
                    value={titleTugas}
                    disabled
                />
            </label>
            <label className="flex items-center mt-5">
                <h1 className="w-[25%] font-semibold text-lg">Batas Pengumpulan</h1>
                <input
                    type="text"
                    className="w-[75%] grow py-2 px-3 rounded-md border"
                    value={batas}
                    disabled
                />
            </label>
            <label className="flex items-center mt-5">
                <h1 className="w-[25%] font-semibold text-lg">Status</h1>
                <input
                    type="text"
                    className="w-[75%] grow py-2 px-3 rounded-md border"
                    value={!isSubmit?"Belum Dikumpul":"Sudah Terkumpul"}
                    disabled
                />
            </label>
            <label className="flex items-center mt-5">
                <h1 className="w-[25%] font-semibold text-lg">Lampiran</h1>
                <input
                    type="file"
                    className="w-[75%] grow py-2 px-3 rounded-md border"
                    onChange={(e) => handleInputChange('lampiran', e.target.files[0])}
                    disabled={isSubmit}
                />
            </label>
            <div className="m-8 justify-center">
                <div style={{ textAlign: "center" }}>
                    <button
                        type="button"
                        className="text-[#235EAC] border border-[#235EAC] py-1 px-5 rounded bg-white ml-6"
                        onClick={()=>navigate('/mentee/tugas')}
                    >
                        Batal
                    </button>
                    <button
                        type="submit"
                        className={!isSubmit?"text-white py-1 px-5 ml-6 rounded bg-[#235EAC]":"text-white py-1 px-5 ml-6 rounded bg-gray-200"}
                        disabled={isSubmit}
                    >
                        Simpan
                    </button>
                    <button
                        type="button"
                        className={isSubmit&&!pengumpulan.nilai?"text-white py-1 px-5 ml-6 rounded bg-gray-500":"text-white py-1 px-5 ml-6 rounded bg-gray-200"}
                        disabled={!isSubmit||pengumpulan.nilai}
                        onClick={handleDelete}
                    >
                        Hapus
                    </button>
                </div>
            </div>
        </form>
    </div>
}

export default FormTugas