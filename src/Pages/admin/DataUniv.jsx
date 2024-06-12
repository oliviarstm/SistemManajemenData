import Table from "../../Components/table/Index.jsx";
import {editdelete} from "../../Components/table/threedotmenu.js";
import {useEffect, useState} from "react";
import InputModal from "../../Components/InputModal.jsx";
import axios from "../../utils/axios.js";

const exTitle = "Data Universitas";
const exField = ["Nama", "Email", "Alamat", "Nama PIC", "Nomor PIC", "Email PIC",""];
const exData = [{
    id:1,
    Name:"institut teknologi batam",
    Email:"iteba@email.com",
    Alamat:"tiban",
    NamaPic:"bapak1",
    NomorPic:"081111",
    EmailPic:"bapak1@email.com"
},{
    id:2,
    Name:"politeknik negeri batam",
    Email:"polibatam@email.com",
    Alamat:"batam center",
    NamaPic:"bapak2",
    NomorPic:"081122",
    EmailPic:"bapak2@email.com"
}]

const DataUniv = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [univData, setUnivData]=useState([])

    const openModal = () => {
        console.log("OPEN")
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    const titles = ["Nama Universitas", "Email Universitas", "Alamat", "Nama PIC", "Nomor Telepon PIC", "Email PIC"];
    useEffect(() => {
        axios.get('/universitas')
            .then(res=>{
                const result = res.data.data
                setUnivData(result)
            })
            .catch(err=>{
                console.log(err)
            })
    }, []);
    const propsData={
        title:exTitle,
        field:exField,
        data:univData,
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

export default DataUniv;
