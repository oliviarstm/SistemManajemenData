import {useEffect, useState} from "react";
import 'react-datepicker/dist/react-datepicker.css';
import CalendarModal from "../../Pages/mentor/tugas/CalendarModal.jsx";
import {useDispatch, useSelector} from "react-redux";
import axios from "../../utils/axios.js";
import {setListTugas} from "../../store/reducer/tugas.js";
import Swal from "sweetalert2";

const TugasModal = ({ isOpen, onClose, title, isButton }) => {
    const dispatch = useDispatch()
    const [formValues, setFormValues] = useState({});
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const editId = useSelector(state => state.Tugas.editId)
    console.log(editId)

    useEffect(() => {
        const callData = async ()=>{
            try {
                if (editId!==""){
                    const response = await axios.get(`/tugas/${editId}`)
                    const data = response.data.data
                    console.log(data)
                    const [day, month, year] = data.batas_waktu.split('-').map(Number)
                    const batasWaktu = new Date(year, month - 1, day)
                    setFormValues({
                        "Nama":data.subyek,
                        "Batas Pengumpulan":batasWaktu.toLocaleDateString(),
                    })
                }
            }catch (e) {
                console.log(e)
                await Swal.fire({
                    title: "Terjadi Kesalahan",
                    text: "Periksa Koneksi",
                    icon: "error"
                })
            }
        }
        callData()
    }, [editId]);

    const formatDate = (date)=>{
        const [month, day, year] = date.split('/').map(Number); // Split and convert to numbers
        return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    }

    // Function to handle input changes
    const handleInputChange = (title, value) => {
        setFormValues({ ...formValues, [title]: value });
    };

    const createTugas = async ()=>{
        try {
            const tugasData = {
                "subyek": formValues["Nama"],
                "batas_waktu": formatDate(formValues["Batas Pengumpulan"]),
            }
            console.log(tugasData)
            await axios.post("/tugas", tugasData)
        }catch (e) {
            console.log(e)
            throw e
        }
    }

    const editTugas = async ()=>{
        try {
            const tugasData = {
                "subyek": formValues["Nama"],
                "batas_waktu": formatDate(formValues["Batas Pengumpulan"]),
            }
            console.log(tugasData)
            await axios.put(`/tugas/${editId}`, tugasData)
        }catch (e) {
            console.log(e)
            throw e
        }
    }

    // Function to handle form submission
    const handleSubmit = async(event) => {
        event.preventDefault();
        editId===""?await createTugas():await editTugas()
        for (let titles of title) {
            if (!formValues[titles]) {
                await Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `Please fill in the ${titles}`
                });
                return;
            }
        }
        dispatch(setListTugas(formValues))
        setFormValues({})
        await Swal.fire({
            position: "center",
            icon: "success",
            title: `Data berhasil ${editId===""?"ditambahkan":"diubah"}`,
            showConfirmButton: false,
            timer: 1500
        });
        closeModal()
    };

    // Function to handle date selection from CalendarModal
    const handleDateSelect = (date) => {
        handleInputChange("Batas Pengumpulan", date.toLocaleDateString());
    };

    const closeModal = ()=>{
        setFormValues({})
        onClose()
    }

    return (
        <>
            <dialog className="modal" open={isOpen} onClick={closeModal}>
                <div className="modal-box w-full max-w-2xl flex flex-col gap-3" onClick={(e) => e.stopPropagation()}>
                    <form onSubmit={handleSubmit}>
                        {title.map((title, index) => {
                            {
                                if (formValues[title]!==undefined){
                                }
                            }
                            return (
                                <label key={index} className="flex items-center gap-2 mt-5">
                                    <h1 className="w-[25%]">{title}</h1>
                                    {title === "Batas Pengumpulan" ? (
                                        <input
                                            type="text"
                                            readOnly
                                            className="w-[75%] grow py-2 px-3 rounded-md border-2 border-gray-500"
                                            placeholder={`Enter ${title}`}
                                            value={formValues[title] ? formValues[title]: ""}
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
                            )
                        })}
                        {isButton ? (
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
