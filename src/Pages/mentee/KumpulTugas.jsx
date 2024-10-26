import FormHead from "../../Components/Form/FormHead.jsx";
import FormTugas from "../../Components/Form/FormTugas.jsx";
import {useLocation} from "react-router-dom";
import axios from "../../utils/axios.js";
import {useEffect, useState} from "react";

const data = {
    id:1,
    nama:"Crazy 8",
    batas_waktu:"10-10-2024"
}

const KumpulTugas=()=>{
    const location = useLocation()
    const id_tugas = location.state?.id_tugas
    const [tugasData,setTugasData] = useState({})

    const fetchData = async ()=>{
        const res = await axios.get(`/tugas/${id_tugas}`)
        setTugasData(res.data.data)
    }

    useEffect(() => {
        fetchData()
    }, []);

    console.log(id_tugas)
    console.log(tugasData)
    return <>
        <FormHead title="Pengumpulan Tugas"/>
        <FormTugas titleTugas={tugasData.subyek} batas={tugasData.batas_waktu}/>
    </>

}

export default KumpulTugas