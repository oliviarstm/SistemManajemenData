import Table from "../../Components/table/Index.jsx";
import {editdelete} from "../../Components/table/threedotmenu.js";

const exTitle = "Data Admin";
const exField = ["Nama", "Email", "Username",""];
const exData = [{
    id:1,
    Name:"kelvin",
    Email:"kelvin@email.com",
    Username:"kln",
},{
    id:2,
    Name:"olivia",
    Email:"olivia@email.com",
    Username:"oliv",
}]

const DataAdmin = () => {

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

export default DataAdmin;
