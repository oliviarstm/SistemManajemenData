import Table from "../../Components/table/Index.jsx";
import {editdelete} from "../../Components/table/threedotmenu.js";
import {useState} from "react";
import InputModal from "../../Components/InputModal.jsx";

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
    const openModal = () => {
        console.log("OPEN")
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    const titles = ["Username", "Role", "Password", "Confirm Password"];
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

export default DataUser;
