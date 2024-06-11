import Table from "../../../Components/table/Index.jsx";
import {useLocation} from "react-router-dom";

const exField = ["Nama Tugas", "Nilai"];
const exData = [{
    id:1,
    NameTugas:"Crazy 8",
    Nilai:"80"
}, {
    id:2,
    NameTugas:"Portofolio",
    Nilai:"82"
},{
    id:3,
    NameTugas:"Front end",
    Nilai:"91"
}]



const DetailNilai=()=>{
    const location = useLocation()
    const id_mentee = location.state?.id_mentee
    console.log(id_mentee)
    const exTitle = "Mentee Id "+id_mentee;
    const propsData={
        title: exTitle,
        field: exField,
        data: exData,
        isEnable: false,
        tableType:"none"
    }
    return <>
        <Table props={propsData}/>
    </>
}
export default DetailNilai