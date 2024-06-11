import Table from "../../../Components/table/Index.jsx";
import {absen} from "../../../Components/table/threedotmenu.js";

const exTitle = "Absensi";
const exField = ["Nama", "Kelas", "Sesi","Kehadiran"];
const exData = [{
    id:1,
    Name:"Kelvin",
    Kelas:"A",
    Sesi:"Morning"
},{
    id:2,
    Name:"Abdee",
    Kelas:"C",
    Sesi:"Afternoon"
}]

const AbsenTable = () => {
    const propsData={
        title:exTitle,
        field:exField,
        data:exData,
        isEnable:false,
        type:'date',
        option:absen,
        buttonLabel: "Absen",
        buttonDropDown:true
    }

    return (
        <>
            <Table props={propsData}/>
        </>
    );
};

export default AbsenTable;
