import {useLocation, useNavigate} from "react-router-dom";
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
    const navigate = useNavigate()

    const toDetail = (id)=>{
        navigate('detail', {state:{id_mentee:id}})
    }

    const propsData={
        title:exTitle,
        field:exField,
        data:exData,
        isEnable:false,
        desc:filter==="Individual Mentor"?"Individual Mentee":filter,
        option:editdelete,
        buttonLabel:"Detail",
        buttonClick:toDetail
    }

    return (
        <>
            <Table props={propsData}/>
        </>
    );
}

export default DataNilai