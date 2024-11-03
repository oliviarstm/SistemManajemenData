import {useEffect, useState} from "react";
import {tugaseditdelete} from "../../../Components/table/threedotmenu.js";
import Table from "../../../Components/table/Index.jsx";
import TugasModal from "../../../Components/inputModal/TugasModal.jsx";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import {removeTugasEditId} from "../../../store/reducer/tugas.js";
import axios from "../../../utils/axios.js";

const title = "Tugas";
const fields = ["Nama Tugas", "Batas Pengumpulan", ""];
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
    title: title,
    field: fields,
    data: tugasData,
    isEnable: role !== "mentee",
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
