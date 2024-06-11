import Table from "../../Components/table/Index.jsx";

const exTitle = "Data Kelas";
const exField = ["Nama", "Universitas", "Kelas", "Sesi"];
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
    Class:"A",
    Session:"Siang"
}]
const DataKelas=()=>{
    const propsData={
        title:exTitle,
        field:exField,
        data:exData,
        isEnable:false,
        tableType:"none"
    }

    return (
        <>
            <Table props={propsData}/>
        </>
    );
}
export default DataKelas