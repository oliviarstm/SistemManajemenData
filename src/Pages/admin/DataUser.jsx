import Table from "../../Components/table/Index.jsx";
import {editdelete} from "../../Components/table/threedotmenu.js";

const exTitle = "Data User";
const exField = ["Username", "Role", "Email",""];
const exData = [{
    id: 1,
    username: "kelvin",
    role: "mentee",
    email: "kelvin@email.com"
},{
    id: 6,
    username: "olivia",
    role: "mentor",
    email: "olivia@email.com"
}]

const DataUser = () => {

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

export default DataUser;
