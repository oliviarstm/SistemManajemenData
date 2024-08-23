// TODO edit show modal

import {useEffect, useState} from "react";
import {menteeeditdelete, tugaseditdelete} from "../../../Components/table/threedotmenu.js";
import Table from "../../../Components/table/Index.jsx";
import TugasModal from "../../../Components/inputModal/TugasModal.jsx";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import {removeTugasEditId} from "../../../store/reducer/tugas.js";
import axios from "../../../utils/axios.js";

const exTitle = "Tugas";
const exField = ["Nama Tugas", "Batas Pengumpulan", ""];
const exData = [
  {
    id: 1,
    subyek: "Crazy 8",
    batas_waktu: "8-10-2024",
  },
  {
    id: 2,
    subyek: "Portofolio",
    batas_waktu: "25-10-2024",
  },
];

const Tugas = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { role } = useSelector((state) => state.Auth);
  const [isModalOpen, setModalOpen] = useState(false);
  const [tugasData, setTugasData]=useState([])
  const [refresh, setRefresh] = useState(false)
  const openModal = () => {
    console.log("OPEN");
    setModalOpen(true);
  };
  const closeModal = () => {
    dispatch(removeTugasEditId())
    setModalOpen(false);
    setRefresh(!refresh)
  };
  const toKumpul = (id) => {
    navigate("kumpul", { state: { id_tugas: id } });
  };

  const titles = ["Nama", "Batas Pengumpulan"];

  useEffect(() => {
    axios.get('/tugas')
        .then(res=>{
          const result = res.data.data
          setTugasData(result)
        })
        .catch(err=>{
          console.log(err)
        })
  }, [refresh]);
  const handleRefresh = () => {
    setRefresh(!refresh); // Toggle refresh state to trigger re-fetching data
  }
  const propsData = {
    title: exTitle,
    field: exField,
    data: tugasData,
    isEnable: true,
    type: role === "mentee" ? null : "add",
    option: role === "mentee" ? null : tugaseditdelete,
    handleAdd: openModal,
    dataClick: "moveToMenu",
    buttonLabel: role === "mentee" ? "Kumpul" : null,
    buttonClick: toKumpul,
    handleRefresh:handleRefresh
  };

  return (
    <>
      <Table props={propsData} />
      <TugasModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={titles}
        isButton={true}
      />
    </>
  );
};

export default Tugas;
