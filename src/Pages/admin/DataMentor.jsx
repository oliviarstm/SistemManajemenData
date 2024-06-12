import Table from "../../Components/table/Index.jsx";
import {editdelete} from "../../Components/table/threedotmenu.js";
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

    const openModal = () => {
        console.log("OPEN")
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    const titles = ["Nama", "Email", "Username"];
    useEffect(() => {
        axios.get('/mentoradmin')
            .then(res=>{
                const result = res.data.data
                setMentorData(result)
            })
            .catch(err=>{
                console.log(err)
            })
    }, []);
    const propsData={
        title:exTitle,
        field:exField,
        data:mentorData,
        isEnable:false,
        type:'add',
        option:editdelete,
        handleAdd:openModal
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
