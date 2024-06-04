import Table from "../../Components/table/Index.jsx";
import {useLocation} from "react-router-dom";

const exTitle = "Data Mentee";
const exField = ["Nama", "Universitas", "Kelas", "Sesi", ""];
const exData = [{
  Name:"Olivia",
  Universty:"Poltek",
  Class:"A",
  Session:"Pagi"
}, {
  Name:"Kelvin",
  Universty:"ITEBA",
  Class:"B",
  Session:"Siang"
}]

const DataMentee = () => {
  const location = useLocation()
  const filter = location.state?.filter

  console.log(filter)
  return (
      <>
        <Table title={exTitle} field={exField} data={exData} isEnable={false} desc={filter==="Individual Mentor"?"Individual Mentee":filter}/>
      </>
  );
};

export default DataMentee;
