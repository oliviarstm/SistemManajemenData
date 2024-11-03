import Table from "../../Components/table/Index.jsx";
import {menteeeditdelete} from "../../Components/table/threedotmenu.js";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "../../utils/axios.js";

const title = "Validasi Pengajuan";
const fields = ["Nama Pengajuan",""];
const Validasi = () => {
    const navigate = useNavigate()
    const [pengunduranData, setPengunduranData]=useState([])
    useEffect(() => {
        axios.get('/pengunduran')
            .then(res=>{
                const result = res.data.data
                setPengunduranData(result)
            })
            .catch(err=>{
                console.log(err)
            })
    }, []);

    const handleDetail = (id)=>{
        console.log(id)
        navigate('detail', {state:{id_pengajuan:id}})
    }

    const propsData={
        title:title,
        field:fields,
        data:pengunduranData,
        isEnable:false,
        option:menteeeditdelete,
        buttonLabel:"Detail",
        buttonClick:handleDetail
    }

    return (
        <>
            <Table props={propsData}/>
        </>
    );
};

export default Validasi;
