import Table from "../../Components/table/Index.jsx";
import {editdelete} from "../../Components/table/threedotmenu.js";

const exTitle = "Data Mentor";
const exField = ["Nama", "Email", "Username",""];
const exData = [{
    id:1,
    Name:"budi",
    Email:"budi@email.com",
    Username:"budiii",
},{
    id:2,
    Name:"hanif",
    Email:"hanif@email.com",
    Username:"hanip",
}]

const DataMentor = () => {

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

export default DataMentor;
