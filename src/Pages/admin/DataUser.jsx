import Table from "../../Components/table/Index.jsx";
import {menteeeditdelete} from "../../Components/table/threedotmenu.js";
import {useEffect, useState} from "react";
import MenteeInputModal from "../../Components/inputModal/MenteeInputModal.jsx";
import axios from "../../utils/axios.js";

const exTitle = "Data User";
const exField = ["Username", "Role", "Email",""];
const exData = [{
    id: 1,
    username: "kelvin",
    role: "mentee",
    email: "kelvin@email.com"
},{
    id: 6,
    username: "olivia",
    role: "mentor",
    email: "olivia@email.com"
}]

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
        title:exTitle,
        field:exField,
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
