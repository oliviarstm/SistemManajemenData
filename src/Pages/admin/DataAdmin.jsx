import Table from "../../Components/table/Index.jsx";
import {editdelete} from "../../Components/table/threedotmenu.js";
import {useEffect, useState} from "react";
import InputModal from "../../Components/InputModal.jsx";
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
    }, []);
    const propsData={
        title:exTitle,
        field:exField,
        data:adminData,
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

export default DataAdmin;
