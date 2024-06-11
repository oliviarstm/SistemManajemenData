import {useLocation} from "react-router-dom";
import Table from "../../../Components/table/Index.jsx";


const exField = ["Nama", "Kelas", "Sesi", "File", "Nilai"];
const exData = [{
    id:1,
    Name:"Olivia",
    Class:"A",
    Session:"Pagi"
}, {
    id:2,
    Name:"Kelvin",
    Class:"B",
    Session:"Siang"
}]

const DetailTugas=()=>{
    const location = useLocation()
    const id = location.state?.id
    const filter = location.state?.filter
    const exTitle = "id tugas"+id;
    console.log(id)
    console.log(filter)

    const propsData={
        title:exTitle,
        desc:filter,
        field:exField,
        data:exData,
        isEnable:false,
        tableType: "score"
    }
    return <>
        <Table props={propsData}/>
    </>
}

export default DetailTugas