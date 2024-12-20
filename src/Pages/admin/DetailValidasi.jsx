import { useEffect, useState } from "react";
import FormCard from "../../Components/FormCard.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../../utils/axios.js";
import {onPreview} from "../../utils/helper.js";
import Swal from "sweetalert2";

const DetailValidasi = () => {
  const location = useLocation();
  const id_pengajuan = location.state?.id_pengajuan;
  const navigate = useNavigate();
  console.log(id_pengajuan);
  const [formData, setFormData] = useState([]);
  useEffect(() => {
    axios
      .get(`/pengunduran/${id_pengajuan}`)
      .then((res) => {
        const [result] = res.data.data;
        setFormData(result);
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
  console.log(formData);

  const goBack = () => {
    navigate(-1);
  };

  const handleTerima = () => {

    Swal.fire({
      title:"Apakah anda yakin?",
      text:"Setelah ini data tidak akan ditampilkan lagi!",
      icon:"warning",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText:'Oke!',
      cancelButtonText:"Tidak"
    }).then((result) => {
      if (result.isConfirmed) {
        axios
            .delete(`/pengunduran/${id_pengajuan}`)
            .then((res) => {
              console.log(res.data.msg);
              navigate(-1);
            })
            .catch((err) => {
              console.log(err);
            });
      }
    })
  };

  return (
    <div className="flex flex-col items-center mt-10 leading-10 mx-20 justify-center bg-gray-100">
      <FormCard
        title="Pengunduran Diri"
        fields={titles}
        editable={false} // Set nilai editable sesuai dengan status input
        formData={formData} // kirim data formData sebagai prop
          onView={onPreview}
      />
      <div className="mt-4 flex flex-row gap-5">
        <button
          className="text-white py-0 px-5 rounded bg-[#235EAC] w-24 "
          onClick={handleTerima}
        >
          Terima
        </button>
        <button
          className="text-[#235EAC] py-0 px-5 rounded bg-white w-24 border border-[#235EAC]"
          onClick={goBack}
        >
          Kembali
        </button>
      </div>
    </div>
  );
};

export default DetailValidasi;
