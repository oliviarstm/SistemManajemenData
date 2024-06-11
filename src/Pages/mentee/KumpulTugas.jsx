import FormHead from "../../Components/Form/FormHead.jsx";
import FormTugas from "../../Components/Form/FormTugas.jsx";
import {useLocation} from "react-router-dom";

const data = {
    id:1,
    nama:"Crazy 8",
    batas_waktu:"10-10-2024"
}

const KumpulTugas=()=>{
    const location = useLocation()
    const id_tugas = location.state?.id_tugas
    console.log(id_tugas)
    return <>
        <FormHead title="Pengumpulan Tugas"/>
        <FormTugas titleTugas={data.nama} batas={data.batas_waktu}/>
    </>

}

export default KumpulTugas