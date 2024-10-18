import Table from "../../Components/table/Index.jsx";
import axios from "../../utils/axios.js";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

const exTitle = "Data Kelas";
const exField = ["Nama", "Universitas", "Kelas", "Sesi"];
const exData = [{
    id:1,
    Name:"Olivia",
    Universty:"Poltek",
    Class:"A",
    Session:"Pagi"
}, {
    id:2,
    Name:"Kelvin",
    Universty:"ITEBA",
    Class:"A",
    Session:"Siang"
}]
const DataKelas=()=>{
    const [menteeData, setMenteeData] = useState([]);
    const {accountId} = useSelector(state => state.Auth)

    const fetchData =async ()=>{
        try {
            const getKelas =await axios.get(`/mentee/${accountId}`)
            const kelas = getKelas.data.data.class
            let result;
            const res = await axios.get(`/menteeclass/?class=${kelas}`);
            result = res.data.data;
            setMenteeData(result); // Set menteeData
        } catch (error) {
            console.error("Error fetching mentee data:", error); // Log any errors
        }
    }

    useEffect(() => {
        fetchData()
    }, []);

    const propsData={
        title:exTitle,
        field:exField,
        data:menteeData,
        isEnable:false,
        tableType:"none"
    }

    return (
        <>
            <Table props={propsData}/>
        </>
    );
}
export default DataKelas