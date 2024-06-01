import Table from "../../Components/table/Index.jsx";

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
  return (
    <>
      <Table title={exTitle} field={exField} data={exData} isEnable={false} />
    </>
  );
};

export default DataMentee;
