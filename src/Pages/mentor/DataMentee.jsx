import Table from "../../Components/table/Index.jsx";
import {useLocation} from "react-router-dom";
import {editdelete} from "../../Components/table/threedotmenu.js";

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

  const propsData={
    title:exTitle,
    field:exField,
    data:exData,
    isEnable:false,
    desc:filter==="Individual Mentor"?"Individual Mentee":filter,
    isButton:true,
    option:editdelete
  }

  return (
      <>
        <Table props={propsData}/>
      </>
  );
};

export default DataMentee;
