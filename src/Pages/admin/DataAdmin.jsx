import Table from "../../Components/table/Index.jsx";
import {admineditdelete} from "../../Components/table/threedotmenu.js";
import {useEffect, useState} from "react";
import MenteeInputModal from "../../Components/inputModal/MenteeInputModal.jsx";
import axios from "../../utils/axios.js";

const exTitle = "Data Admin";
const exField = ["Nama", "Email", "Username",""];
const exData = [{
    id:1,
    Name:"kelvin",
    Email:"kelvin@email.com",
    Username:"kln",
},{
    id:2,
    Name:"olivia",
    Email:"olivia@email.com",
    Username:"oliv",
}]

const DataAdmin = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [adminData, setAdminData]=useState([])
    const [refresh, setRefresh] = useState(false); // State variable for managing refresh

    const openModal = () => {
        console.log("OPEN")
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    const titles = ["Nama", "Email", "Username"];
    useEffect(() => {
        axios.get('/admin')
            .then(res=>{
                const result = res.data.data
                setAdminData(result)
            })
            .catch(err=>{
                console.log(err)
            })
    }, [refresh]);

    const handleRefresh = () => {
        setRefresh(!refresh); // Toggle refresh state to trigger re-fetching data
    };

    const propsData={
        title:exTitle,
        field:exField,
        data:adminData,
        isEnable:false,
        type:'add',
        option:admineditdelete,
        handleAdd:openModal,
        handleRefresh:handleRefresh
    }

    return (
        <>
            <Table props={propsData}/>
            <MenteeInputModal
                isOpen={isModalOpen}
                onClose={closeModal}
                title={titles}
                isButton={true}
            />
        </>
    );
};

export default DataAdmin;
