import Table from "../../Components/table/Index.jsx";

const exTitle = "Data Mentee";
const exField = ["Nama", "Universitas", "Kelas", "Sesi", ""];
const exData = [
  ["Olivia", "Poltek", "A", "Pagi"],
  ["Kelvin", "ITEBA", "B", "Siang"],
];

const DataMentee = () => {
  return (
    <>
      <Table title={exTitle} field={exField} data={exData} isEnable={false} />
    </>
  );
};

export default DataMentee;
