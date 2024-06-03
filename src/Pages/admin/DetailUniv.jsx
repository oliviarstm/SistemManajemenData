import { useState } from "react";
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
  };

  return (
    <div className="flex mt-10 justify-center bg-gray-100">
      {/* Komponen FormCard menerima props untuk data formulir */}
      <FormCard
        title="Detail Universitas"
        fields={titles}
        onSubmit={handleSubmit}
        onChange={handleChange}
        editable={false} // nonaktifkan input
        formData={formData} // kirim data formData sebagai prop
      />
    </div>
  );
};

export default DetailUniv;
