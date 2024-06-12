import Table from "../../Components/table/Index.jsx";
import {editdelete} from "../../Components/table/threedotmenu.js";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "../../utils/axios.js";

const exTitle = "Validasi Pengajuan";
const exField = ["Nama Pengajuan",""];
const exData = [{
    id:1,
    Name:"Olivia",
},{
    id:2,
    Name:"Kelvin",
}]


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
        title:exTitle,
        field:exField,
        data:pengunduranData,
        isEnable:false,
        option:editdelete,
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
