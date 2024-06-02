import React, { useState } from "react";
import FormCard from "../../Components/FormCard";

const DetailUniv = () => {
  // State untuk menyimpan data formulir
  const [formData, setFormData] = useState({
    "Nama Universitas": "Universitas ABC",
    Alamat: "Jalan Universitas No. 123",
    "Email Universitas": "info@univabc.com",
    "Nama PIC": "John Doe",
    "Email PIC": "john.doe@univabc.com",
    "No. HP PIC": "08123456789",
  });

  // State untuk mengontrol status input
  const [inputActive, setInputActive] = useState(false);

  // Daftar judul bidang formulir
  const titles = [
    "Nama Universitas",
    "Alamat",
    "Email Universitas",
    "Nama PIC",
    "Email PIC",
    "No. HP PIC",
  ];

  // Handler perubahan nilai input
  const handleChange = (e, fieldName) => {
    const { value } = e.target;
    // Perbarui state formData dengan nilai baru
    setFormData({ ...formData, [fieldName]: value });
  };

  // Handler saat formulir disubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Outputkan data formulir ke konsol
    // Lakukan sesuatu dengan data formulir, misalnya kirim ke backend
    setInputActive(false); // Nonaktifkan mode input setelah disimpan
  };

  // Fungsi untuk mengubah status input
  const toggleInput = () => {
    setInputActive(!inputActive);
  };

  return (
    <div className="flex flex-col items-center mt-10 leading-10 mx-20 justify-center bg-gray-100">
      {/* Komponen FormCard menerima props untuk data formulir */}
      <FormCard
        title="Detail Universitas"
        fields={titles}
        onSubmit={handleSubmit}
        onChange={handleChange}
        editable={inputActive} // Set nilai editable sesuai dengan status input
        formData={formData} // kirim data formData sebagai prop
      />
      {/* Tampilkan tombol Edit atau Simpan sesuai dengan status input */}
      <div className="mt-4 ">
        {!inputActive ? (
          <button
            onClick={toggleInput}
            className="text-white py-0 px-5  rounded bg-[#235EAC]"
          >
            Edit
          </button>
        ) : (
          <button
            type="submit"
            onClick={handleSubmit}
            className="text-white py-0 px-5  rounded bg-[#235EAC]"
          >
            Simpan
          </button>
        )}
      </div>
    </div>
  );
};

export default DetailUniv;
