import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import Table from "../../../Components/table/detailTugas/Index.jsx";
import axios from "../../../utils/axios.js";

const exField = ["Nama", "Kelas", "Sesi", "File", "Nilai"];
const exData = [
  {
    id: 1,
    Name: "Loading",
    Class: "Loading",
    Session: "Loading",
  },
];

const DetailTugas = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const id = location.state?.id_tugas;
  const filter = location.state?.filter;
  const exTitle = "id tugas" + id;
  const [listPengumpulan, setListPengumpulan] = useState([])
  console.log(id);
  console.log(filter);

  const propsData = {
    title: listPengumpulan.length > 0 ? listPengumpulan[0].subyek : "Loading...",
    desc: filter,
    field: exField,
    data: listPengumpulan.length > 0 ? listPengumpulan: exData,
    tableType: "score",
  };

  useEffect(() => {
    if (id===undefined){
      navigate("/mentor/tugas")
    }
    axios.post('/pengumpulan-tugas', {id})
        .then(res=>{
          const result = res.data.data
          setListPengumpulan(result)
        })
        .catch(err=>{
          console.log(err)
        })
  }, [id, navigate]);

  console.log(listPengumpulan)
  return (
    <>
      <Table props={propsData} />
    </>
  );
};

export default DetailTugas;
