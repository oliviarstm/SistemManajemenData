import Table from "../../Components/table/Index.jsx";
import {menteeeditdelete} from "../../Components/table/threedotmenu.js";
import {useEffect, useState} from "react";
import MenteeInputModal from "../../Components/inputModal/MenteeInputModal.jsx";
import axios from "../../utils/axios.js";

const title = "Data User";
const fields = ["Username", "Role", "Email",""];
const DataUser = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [adminData, setAdminData]=useState([])

    const openModal = () => {
        console.log("OPEN")
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    const titles = ["Username", "Role", "Password", "Confirm Password"];
    useEffect(() => {
        axios.get('/user')
            .then(res=>{
                const result = res.data.data
                setAdminData(result)
            })
            .catch(err=>{
                console.log(err)
            })
    }, []);

    const propsData={
        title:title,
        field:fields,
        data:adminData,
        isEnable:false,
        type:'add',
        option:menteeeditdelete,
        handleAdd:openModal
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

export default DataUser;
