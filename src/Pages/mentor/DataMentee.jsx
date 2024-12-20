import Table from "../../Components/table/Index.jsx";
import {useLocation, useNavigate} from "react-router-dom";
import { menteeeditdelete } from "../../Components/table/threedotmenu.js";
import { useEffect, useState } from "react";
import MenteeInputModal from "../../Components/inputModal/MenteeInputModal.jsx";
import {useDispatch, useSelector} from "react-redux";
import axios from "../../utils/axios.js";
import {removeMenteeEditId} from "../../store/reducer/mentee.js";

const title = "Data Mentee";
const fields = ["Nama", "Universitas", "Kelas", "Sesi", ""];

const DataMentee = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const filterMenu = location.state?.filter;
  const [isModalOpen, setModalOpen] = useState(false);
  const { role } = useSelector((state) => state.Auth);
  const [menteeData, setMenteeData] = useState([]);
  const [filter, setFilter] = useState("");
  const menteeProfil = useSelector(state => state.Mentee)
  const dispatch = useDispatch()
  const {accountId} = useSelector(state => state.Auth)
  const [classFilter, setClassFilter] = useState(false)
  const [refresh, setRefresh] = useState(false); // State variable for managing refresh

  useEffect(() => {
    const fetchData = async () => {
      try {
        let result;
        if (
            filter &&
            (filter === "Kelas A" || filter === "Kelas B" || filter === "Kelas C")
        ) {
          const kelas =
              filter === "Kelas A" ? "A" : filter === "Kelas B" ? "B" : "C";
          const res = await axios.get(`/menteeclass/?class=${kelas}`);
          result = res.data.data;
        } else {
          const res = await axios.get("/mentee");
          result = res.data.data;
        }
        setClassFilter(true)
        setMenteeData(result); // Set menteeData
      } catch (error) {
        console.error("Error fetching mentee data:", error); // Log any errors
      }
    };
    const fetchIndividual = async ()=>{
      try {
        console.log(accountId)
        let result
        const res = await axios.get(`/menteeindividual/${accountId}`)
        result = res.data.data
        setClassFilter(false)
        setMenteeData(result)
      } catch (e) {
        console.error("Error fetching mentee data:", e)
      }
    }

    if (filterMenu!=="Mentor"){
      fetchData();
    } else {
      fetchIndividual()
    }
  }, [filter, menteeProfil, refresh]);

  const handleFilterChange = (selectedOption) => {
    setFilter(selectedOption.value);
  };

  const openModal = () => {
    console.log("OPEN");
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    dispatch(removeMenteeEditId())
  };
  const titles = [
    "Username",
    "NIM",
    "Nama",
    "Universitas",
    "Email",
    "No. Hp",
    "Kategori",
    "Kelas",
    "Sesi",
    "Individual Mentor",
    "Jurusan",
  ];
  const toDetail = (id) => {
    navigate("nilai", { state: { id_mentee: id } });
  };
  const handleRefresh = () => {
    setRefresh(!refresh); // Toggle refresh state to trigger re-fetching data
  }

  // FOR TABLE SETTINGS
  const propsData = {
    title: title,
    field: fields,
    data: menteeData,
    isEnable: false,
    type: role === "admin" ? "add" : null,
    option: menteeeditdelete,
    tableType: null,
    handleAdd: openModal,
    buttonLabel: role === "mentor" ? "Detail" : null,
    buttonClick: toDetail,
    classFilter:classFilter,
    classFilterFunction:handleFilterChange,
    handleRefresh:handleRefresh
  };

  return (
      <>
        <Table props={propsData} />
        <MenteeInputModal
            isOpen={isModalOpen}
            onClose={closeModal}
            title={titles}
            isButton={true}
        />
      </>
  );
};

export default DataMentee;
