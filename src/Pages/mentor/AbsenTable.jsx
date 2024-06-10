import Table from "../../Components/table/Index.jsx";
import {editdelete} from "../../Components/table/threedotmenu.js";
import {useState} from "react";
import InputModal from "../../Components/InputModal.jsx";

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
        option:editdelete,
        buttonLabel: "Absen"
    }

    return (
        <>
            <Table props={propsData}/>
        </>
    );
};

export default AbsenTable;
