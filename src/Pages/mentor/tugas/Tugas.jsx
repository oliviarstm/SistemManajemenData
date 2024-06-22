// TODO edit show modal

import { useState } from "react";
import { editdelete } from "../../../Components/table/threedotmenu.js";
import Table from "../../../Components/table/Index.jsx";
import TugasModal from "../../../Components/TugasModal.jsx";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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
  const { role } = useSelector((state) => state.Auth);
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    console.log("OPEN");
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const toKumpul = (id) => {
    navigate("kumpul", { state: { id_tugas: id } });
  };

  const titles = ["Nama", "Batas Pengumpulan"];
  const propsData = {
    title: exTitle,
    field: exField,
    data: exData,
    isEnable: true,
    type: role === "mentee" ? null : "add",
    option: role === "mentee" ? null : editdelete,
    handleAdd: openModal,
    dataClick: "moveToMenu",
    buttonLabel: role === "mentee" ? "Kumpul" : null,
    buttonClick: toKumpul,
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
