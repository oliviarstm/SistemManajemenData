import {useState} from "react";
import {editdelete} from "../../../Components/table/threedotmenu.js";
import Table from "../../../Components/table/Index.jsx";
import InputModal from "../../../Components/InputModal.jsx";
import TugasModal from "../../../Components/TugasModal.jsx";

const exTitle = "Tugas";
const exField = ["Nama Tugas", "Batas Pengumpulan", ""];
const exData = [{
    id: 1,
    subyek: "Crazy 8",
    batas_waktu: "2024-10-21",
},{
    id: 2,
    subyek: "Portofolio",
    batas_waktu: "2024-10-25",
}]

const Tugas = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        console.log("OPEN")
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    const titles = ["Nama", "Batas Pengumpulan"];
    const propsData={
        title:exTitle,
        field:exField,
        data:exData,
        isEnable:false,
        type:'add',
        option:editdelete,
        handleAdd:openModal
    }

    return (
        <>
            <Table props={propsData}/>
            <TugasModal
                isOpen={isModalOpen}
                onClose={closeModal}
                title={titles}
                isButton={true}
            />
        </>
    );
};

export default Tugas;
