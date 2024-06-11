import Table from "../../Components/table/Index.jsx";

const exTitle = "Rekap Absen Mentee";
const exField = ["Tanggal", "Status"];
const exData = [{
    id: 1,
    waktu: "2024-10-1",
    status:"On Cam"
},{
    id: 6,
    waktu: "2024-10-2",
    status:"Off Cam"
}]
const Absen = ()=>{
    const propsData={
        title:exTitle,
        field:exField,
        data:exData,
        isEnable:false,
        tableType:"none",
        type:"month"
    }
    return <>
        <Table props={propsData}/>
    </>
}
export default Absen