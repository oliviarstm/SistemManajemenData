import FormHead from "../../Components/Form/FormHead.jsx";
import FormTugas from "../../Components/Form/FormTugas.jsx";
import FormIzin from "../../Components/Form/FormIzin.jsx";

const data = {
    id:1,
    nama:"Crazy 8",
    batas_waktu:"10-10-2024"
}
const Izin=()=>{
    return <>
        <FormHead title="Pengumpulan Tugas"/>
        <FormIzin/>
    </>
}

export default Izin