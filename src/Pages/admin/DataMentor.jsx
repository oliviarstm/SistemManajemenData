import Table from "../../Components/table/Index.jsx";
import {editdelete, mentoreditdelete} from "../../Components/table/threedotmenu.js";
import {useEffect, useState} from "react";
import InputModal from "../../Components/InputModal.jsx";
import axios from "../../utils/axios.js";

const exTitle = "Data Mentor";
const exField = ["Nama", "Email", "Username",""];
const exData = [{
    id:1,
    Name:"budi",
    Email:"budi@email.com",
    Username:"budiii",
},{
    id:2,
    Name:"hanif",
    Email:"hanif@email.com",
    Username:"hanip",
}]

const DataMentor = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [mentorData, setMentorData]=useState([])
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
        axios.get('/mentor')
            .then(res=>{
                const result = res.data.data
                setMentorData(result)
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
        data:mentorData,
        isEnable:false,
        type:'add',
        option:mentoreditdelete,
        handleAdd:openModal,
        handleRefresh:handleRefresh

    }

    return (
        <>
            <Table props={propsData}/>
            <InputModal
                isOpen={isModalOpen}
                onClose={closeModal}
                title={titles}
                isButton={true}
            />
        </>
    );
};

export default DataMentor;
