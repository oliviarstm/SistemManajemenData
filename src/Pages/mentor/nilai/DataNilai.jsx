import {useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {editdelete} from "../../../Components/table/threedotmenu.js";
import Table from "../../../Components/table/Index.jsx";

const exTitle = "Data Nilai";
const exField = ["Nama", ""];
const exData = [{
    id:1,
    Name:"Olivia"
}, {
    id:2,
    Name:"Kelvin"
}]

const DataNilai=()=>{
    const location = useLocation()
    const filter = location.state?.filter
    const {role} = useSelector(state=>state.Auth)

    const propsData={
        title:exTitle,
        field:exField,
        data:exData,
        isEnable:false,
        desc:filter==="Individual Mentor"?"Individual Mentee":filter,
        option:editdelete,
        buttonLabel:"Detail"
    }

    return (
        <>
            <Table props={propsData}/>
        </>
    );
}

export default DataNilai