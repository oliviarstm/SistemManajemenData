import Table from "../../Components/table/Index.jsx";
import {useLocation} from "react-router-dom";
import {editdelete} from "../../Components/table/threedotmenu.js";
import {useEffect, useState} from "react";
import InputModal from "../../Components/InputModal.jsx";
import {useSelector} from "react-redux";
import axios from "../../utils/axios.js";

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
  const {role} = useSelector(state=>state.Auth)
  const [menteeData, setMenteeData]=useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        let result;
        if (filter === "Kelas A" || filter === "Kelas B" || filter === "Kelas C") {
          const kelas = filter === "Kelas A" ? "A" : filter === "Kelas B" ? "B" : "C";
          const res = await axios.get(`/menteeclass/?class=${kelas}`);
          result = res.data.data;
        } else {
          const res = await axios.get("/mentee");
          result = res.data.data;
        }
        console.log("API Response:", result); // Log the entire response
        setMenteeData(result); // Set menteeData
      } catch (error) {
        console.error("Error fetching mentee data:", error); // Log any errors
      }
    };

    fetchData();
  }, [filter]);


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
    data:menteeData,
    isEnable:false,
    desc:filter==="Individual Mentor"?"Individual Mentee":filter,
    type: role==='admin'?'add':null,
    option:editdelete,
    tableType:role==="mentor"?"none":null,
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
