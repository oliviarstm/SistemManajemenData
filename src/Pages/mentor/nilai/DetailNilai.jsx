import Table from "../../../Components/table/Index.jsx";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "../../../utils/axios.js";

const fields = ["Nama Tugas", "Nilai"];
const DetailNilai=()=>{
    const location = useLocation()
    const id_mentee = location.state?.id_mentee
    const [mentee,setMentee] = useState([])
    const [tugas,setTugas] = useState([])
    console.log(id_mentee)

    const fetchMentee = async ()=>{
        try {
            const res = await axios.get(`/mentee/${id_mentee}`);
            setMentee(res.data.data)
        }catch (e) {
            console.error("Error fetching mentee data:", e)
        }
    }
    const fetchTugas = async ()=>{
        try {
            const res = await axios.get(`/tugasmentee/${id_mentee}`);
            const processedData = res.data.data.map((item) => ({
                ...item,
                Nilai: item.Nilai === null ? 'Belum Dinilai' : item.Nilai,
            }));
            setTugas(processedData)
        }catch (e) {
            console.error("Error fetching mentee data:", e)
        }
    }
    useEffect( () => {
        fetchMentee()
        fetchTugas()
    }, []);

    const propsData={
        title: mentee.name,
        field: fields,
        data: tugas,
        isEnable: false,
        tableType:"none"
    }
    return <>
        <Table props={propsData}/>
    </>
}
export default DetailNilai