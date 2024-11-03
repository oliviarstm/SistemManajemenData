import FormHead from "../../Components/Form/FormHead.jsx";
import FormTugas from "../../Components/Form/FormTugas.jsx";
import {useLocation} from "react-router-dom";
import axios from "../../utils/axios.js";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

const KumpulTugas=()=>{
    const location = useLocation()
    const id_tugas = location.state?.id_tugas
    const [tugasData,setTugasData] = useState({})
    const {accountId} = useSelector(state => state.Auth)


    const fetchData = async ()=>{
        const res = await axios.get(`/tugas/${id_tugas}`)
        setTugasData(res.data.data)
    }

    useEffect(() => {
        fetchData()
    }, []);


    return <>
        <FormHead title="Pengumpulan Tugas"/>
        <FormTugas titleTugas={tugasData.subyek} batas={tugasData.batas_waktu} idMentee={accountId} idTugas={id_tugas}/>
    </>

}

export default KumpulTugas