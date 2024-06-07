import Table from "../../Components/table/Index.jsx";
import {editdelete} from "../../Components/table/threedotmenu.js";
import {useState} from "react";
import InputModal from "../../Components/InputModal.jsx";

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
    const openModal = () => {
        console.log("OPEN")
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    const titles = ["Nama", "Email", "Username"];
    const propsData={
        title:exTitle,
        field:exField,
        data:exData,
        isEnable:false,
        isButton:true,
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
