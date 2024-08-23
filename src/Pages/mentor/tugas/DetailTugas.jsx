import {useLocation, useNavigate} from "react-router-dom";
import Table from "../../../Components/table/Index.jsx";
import {useEffect} from "react";

const exField = ["Nama", "Kelas", "Sesi", "File", "Nilai"];
const exData = [
  {
    id: 1,
    Name: "Olivia",
    Class: "A",
    Session: "Pagi",
  },
  {
    id: 2,
    Name: "Kelvin",
    Class: "B",
    Session: "Siang",
  },
];

const DetailTugas = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const id = location.state?.id_tugas;
  const filter = location.state?.filter;
  const exTitle = "id tugas" + id;
  console.log(id);
  console.log(filter);

  const propsData = {
    title: exTitle,
    desc: filter,
    field: exField,
    data: exData,
    isEnable: false,
    tableType: "score",
  };

  useEffect(() => {
    if (id===undefined){
      navigate("/mentor/tugas")
    }
  }, [id, navigate]);


  return (
    <>
      <Table props={propsData} />
    </>
  );
};

export default DetailTugas;
