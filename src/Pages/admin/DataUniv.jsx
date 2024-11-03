import Table from "../../Components/table/Index.jsx";
import { universitaseditdelete} from "../../Components/table/threedotmenu.js";
import {useEffect, useState} from "react";
import axios from "../../utils/axios.js";
import UnivInputModal from "../../Components/inputModal/UnivInputModal.jsx";
import {removeUnivEditId} from "../../store/reducer/univ.js";
import {useDispatch} from "react-redux";

const title = "Data Universitas";
const fields = ["Nama", "Email", "Alamat", "Nama PIC", "Nomor PIC", "Email PIC",""];
const DataUniv = () => {
    const dispatch = useDispatch()
    const [isModalOpen, setModalOpen] = useState(false);
    const [univData, setUnivData]=useState([])
    const [refresh, setRefresh] = useState(false)

    const openModal = () => {
        console.log("OPEN")
        setModalOpen(true);
    };
    const closeModal = () => {
        dispatch(removeUnivEditId())
        setModalOpen(false);
        setRefresh(!refresh)
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
    }, [refresh])
    const handleRefresh = () => {
        setRefresh(!refresh); // Toggle refresh state to trigger re-fetching data
    }

    const propsData={
        title:title,
        field:fields,
        data:univData,
        isEnable:false,
        type:'add',
        option:universitaseditdelete,
        handleAdd:openModal,
        handleRefresh:handleRefresh
    }

    return (
        <>
            <Table props={propsData}/>
            <UnivInputModal
                isOpen={isModalOpen}
                onClose={closeModal}
                title={titles}
                isButton={true}
            />
        </>
    );
};

export default DataUniv;
