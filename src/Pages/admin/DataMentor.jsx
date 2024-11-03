import Table from "../../Components/table/Index.jsx";
import {mentoreditdelete} from "../../Components/table/threedotmenu.js";
import {useEffect, useState} from "react";
import MenteeInputModal from "../../Components/inputModal/MenteeInputModal.jsx";
import axios from "../../utils/axios.js";
import {removeMentorEditId} from "../../store/reducer/mentor.js";
import {useDispatch} from "react-redux";

const title = "Data Mentor";
const fields = ["Nama", "Email", "Username",""];

const DataMentor = () => {
    const dispatch = useDispatch()
    const [isModalOpen, setModalOpen] = useState(false);
    const [mentorData, setMentorData]=useState([])
    const [refresh, setRefresh] = useState(false); // State variable for managing refresh


    const openModal = () => {
        console.log("OPEN")
        setModalOpen(true);
    };
    const closeModal = () => {
        dispatch(removeMentorEditId())
        setModalOpen(false);
        setRefresh(!refresh)
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
        title:title,
        field:fields,
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
            <MenteeInputModal
                isOpen={isModalOpen}
                onClose={closeModal}
                title={titles}
                isButton={true}
            />
        </>
    );
};

export default DataMentor;
