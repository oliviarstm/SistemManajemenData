import Table from "../../Components/table/Index.jsx";
import {editdelete} from "../../Components/table/threedotmenu.js";

const exTitle = "Data Universitas";
const exField = ["Nama", "Email", "Alamat", "Nama PIC", "Nomor PIC", "Email PIC",""];
const exData = [{
    id:1,
    Name:"institut teknologi batam",
    Email:"iteba@email.com",
    Alamat:"tiban",
    NamaPic:"bapak1",
    NomorPic:"081111",
    EmailPic:"bapak1@email.com"
},{
    id:2,
    Name:"politeknik negeri batam",
    Email:"polibatam@email.com",
    Alamat:"batam center",
    NamaPic:"bapak2",
    NomorPic:"081122",
    EmailPic:"bapak2@email.com"
}]

const DataUniv = () => {

    const propsData={
        title:exTitle,
        field:exField,
        data:exData,
        isEnable:false,
        isButton:true,
        option:editdelete
    }

    return (
        <>
            <Table props={propsData}/>
        </>
    );
};

export default DataUniv;
