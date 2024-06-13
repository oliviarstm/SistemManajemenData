import { useState } from "react";
import FormCard from "../../Components/FormCard.jsx";

const ValidasiPengajuan = () => {
  // State untuk menyimpan data formulir
  const [formData, setFormData] = useState({
    Nama: "Nama",
    Kelas: "Kelas",
    Sesi: "Sesi",
    "Individual Mentor": "Individual Mentor",
    Alasan: "Alasan",
    File: "File",
  });

  // State untuk mengontrol status input

  // Daftar judul bidang formulir
  const titles = [
    "Nama",
    "Kelas",
    "Sesi",
    "Individual Mentor",
    "Alasan",
    "File",
  ];

  return (
    <div className="flex flex-col items-center mt-10 leading-10 mx-20 justify-center bg-gray-100">
      <FormCard
        title="Validasi Pengajuan"
        fields={titles}
        editable={false} // Set nilai editable sesuai dengan status input
        formData={formData} // kirim data formData sebagai prop
      />
      <div className="mt-4 flex flex-row gap-5">
        <button className="text-white py-0 px-5 rounded bg-[#235EAC] w-24">
          Terima
        </button>
        <button className="text-[#235EAC] py-0 px-5 rounded bg-white w-24 border border-[#235EAC]">
          Kembali
        </button>
      </div>
    </div>
  );
};

export default ValidasiPengajuan;
