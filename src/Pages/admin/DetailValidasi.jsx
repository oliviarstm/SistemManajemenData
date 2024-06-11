import {useState} from "react";
import FormCard from "../../Components/FormCard.jsx";


const DetailValidasi = ()=>{
    // State untuk menyimpan data formulir
    const [formData, setFormData] = useState({
        "Nama":"Kelvin",
        "Universitas":"Institut Teknologi Batam",
        "Kelas":"A",
        "Sesi":"Morning",
        "Individual Mentor":"Olivia",
        "Alasan":"Jadwal sudah tidak mendukung",
        "File":"File",
    });

    // State untuk mengontrol status input

    // Daftar judul bidang formulir
    const titles = [
        "Nama",
        "Universitas",
        "Kelas",
        "Sesi",
        "Individual Mentor",
        "Alasan",
        "File",
    ];

    return (
        <div className="flex flex-col items-center mt-10 leading-10 mx-20 justify-center bg-gray-100">
            <FormCard
                title="Pengunduran Diri"
                fields={titles}
                editable={false} // Set nilai editable sesuai dengan status input
                formData={formData} // kirim data formData sebagai prop
            />
            <div className="mt-4 flex flex-row gap-5">
                <button className="text-white py-0 px-5 rounded bg-[#235EAC] w-24 ">Terima</button>
                {/*<button className="text-white py-0 px-5 rounded bg-[#858585] w-24 hover:bg-[#c2c2c2]">Tolak</button>*/}
                <button className="text-[#235EAC] py-0 px-5 rounded bg-white w-24 border border-[#235EAC]">Batal</button>
            </div>
        </div>
    )
}

export default DetailValidasi