import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Table from "../../../Components/table/detailTugas/Index.jsx";
import axios from "../../../utils/axios.js";

const exField = ["Nama", "Kelas", "Sesi", "File", "Nilai", "Aksi"];
const loadingData = [
  {
    id: 1,
    Name: "Loading",
    Class: "Loading",
    Session: "Loading",
  },
];

const DetailTugas = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state?.id_tugas;
  const [listPengumpulan, setListPengumpulan] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    console.log("REFRESS")
    setRefresh(prev => !prev); // Toggle refresh state
  };

  const fetchData = () => {
    if (id !== undefined) {
      axios.post('/pengumpulan-tugas', { id })
          .then(res => {
            const result = res.data.data;
            setListPengumpulan(result);
          })
          .catch(err => {
            console.log(err);
          });
    }
  };

  useEffect(() => {
    if (id === undefined) {
      navigate("/mentor/tugas");
}
}, [id, navigate]);

useEffect(() => {
  fetchData();
}, [id]); // Fetch data when id changes

useEffect(() => {
    fetchData();
  }, [refresh]); // Refetch data when refresh changes

  console.log(listPengumpulan)
  const propsData = {
    // title: listPengumpulan.length > 0 ? listPengumpulan[0].subyek : "Loading...",
    title: listPengumpulan.length > 0 ? listPengumpulan[0].subyek : "No Data",
    field: exField,
    // data: listPengumpulan.length > 0 ? listPengumpulan : loadingData,
    data: listPengumpulan,
    tableType: "score",
    handleRefresh: handleRefresh,
  };

  return (
      <>
        <Table props={propsData} />
      </>
  );
};

export default DetailTugas;
