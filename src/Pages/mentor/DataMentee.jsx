import Table from "../../Components/table/Index.jsx";
import {useLocation} from "react-router-dom";
import {editdelete} from "../../Components/table/threedotmenu.js";
import {useState} from "react";
import InputModal from "../../Components/InputModal.jsx";

const exTitle = "Data Mentee";
const exField = ["Nama", "Universitas", "Kelas", "Sesi", ""];
const exData = [{
  id:1,
  Name:"Olivia",
  Universty:"Poltek",
  Class:"A",
  Session:"Pagi"
}, {
  id:2,
  Name:"Kelvin",
  Universty:"ITEBA",
  Class:"B",
  Session:"Siang"
}]

const DataMentee = () => {
  const location = useLocation()
  const filter = location.state?.filter
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    console.log("OPEN")
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const titles = ["Username", "NIM", "Nama", "Universitas", "Email", "No. Hp", "Kategori", "Kelas", "Sesi", "Individual Mentor", "Jurusan"];
  const propsData={
    title:exTitle,
    field:exField,
    data:exData,
    isEnable:false,
    desc:filter==="Individual Mentor"?"Individual Mentee":filter,
    isButton:true,
    option:editdelete,
    handleAdd:openModal
  }

  return (
      <>
        <Table props={propsData}/>
        <InputModal
            isOpen={isModalOpen}
            onClose={closeModal}
            title={titles}
            isButton={true}
        />
      </>
  );
};

export default DataMentee;
