import Table from "../../Components/table/Index.jsx";
import {editdelete} from "../../Components/table/threedotmenu.js";

const exTitle = "Validasi Pengajuan";
const exField = ["Nama Pengaju",""];
const exData = [{
    id:1,
    Name:"Olivia",
},{
    id:2,
    Name:"Kelvin",
}]

const Validasi = () => {
    const propsData={
        title:exTitle,
        field:exField,
        data:exData,
        isEnable:false,
        isButton:false,
        option:editdelete,
        buttonLabel:"Detail"
    }

    return (
        <>
            <Table props={propsData}/>
        </>
    );
};

export default Validasi;
