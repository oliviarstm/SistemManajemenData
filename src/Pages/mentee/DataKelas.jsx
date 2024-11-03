import Table from "../../Components/table/Index.jsx";
import axios from "../../utils/axios.js";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

const title = "Data Kelas";
const fields = ["Nama", "Universitas", "Kelas", "Sesi"];
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
        title:title,
        field:fields,
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