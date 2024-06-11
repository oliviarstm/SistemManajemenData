import Table from "../../../Components/table/Index.jsx";

const exTitle = "Form Absensi";
const exField = ["Nama", "Kelas", "Sesi", "Tanggal", "Alasan"];
const exData = [{
    id:1,
    Name:"Olivia",
    Class:"A",
    Session:"Pagi",
    Tanggal:"14/10/2024",
    Alasan:"Sakit Perut"
}, {
    id:2,
    Name:"Kelvin",
    Class:"C",
    Session:"Siang",
    Tanggal:"18/10/2024",
    Alasan:"Kucing Melahirkan"
}]
const FormAbsensi = ()=>{
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
export default FormAbsensi