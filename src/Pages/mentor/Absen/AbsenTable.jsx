import Table from "../../../Components/table/absensi/Index.jsx";
import {useEffect, useState} from "react";
import axios from "../../../utils/axios.js";
import {useSelector} from "react-redux";

const title = "Absensi";
const fields = ["Nama", "Kelas", "Sesi", "Hadir"];

const AbsenTable = () => {
  const [filter, setFilter] = useState("");
  const [dateFilter, setDateFilter] = useState(formatDate(new Date(new Date().getTime() + 3600 * 1000)));
  const [absensiData,setAbsensiData]=useState([])
  const [refresh, setRefresh] = useState(false);
  const {accountId} = useSelector(state => state.Auth)

  const fetchData = async () => {
    try {
      let result;
      if (
          filter === "Kelas A" || filter === "Kelas B" || filter === "Kelas C"
      ) {
        const kelas =
            filter === "Kelas A" ? "A" : filter === "Kelas B" ? "B" : "C";
        const res = await axios.post(`/absensiclass`, {date:dateFilter,class:kelas});
        console.log("CLASS")
        result = res.data.data;
      } else if(
          filter === "Mentor"
      ) {
        console.log("MENTOR")
        const res = await axios.post(`/absensimentor`, {date:dateFilter,idMentor:accountId});
        result = res.data.data;
      } else {
        console.log("ALL")
        const res = await axios.post("/absensi", {date:dateFilter});
        result = res.data.data;
      }
      setAbsensiData(result); // Set menteeData
    } catch (error) {
      console.error("Error fetching attendance data:", error); // Log any errors
    }
  }

  useEffect(() => {
    fetchData()
  }, [filter, dateFilter]);

  useEffect(() => {
    fetchData();
  }, [refresh]);

  function formatDate(date) {
    const initialDate = new Date(date);
    const localDate = new Date(initialDate.getTime() - initialDate.getTimezoneOffset() * 60000);
    return localDate.toISOString().split('T')[0];
  }

  const handleFilterChange = (selectedOption) => {
    setFilter(selectedOption.value);
  }
  const dateFilterFunction = (selectedDate) => {
    // setFilter(selectedOption.value);
    const date = formatDate(selectedDate)
    setDateFilter(date)
  }
  const handleRefresh = () => {
    console.log("REFRESS")
    setRefresh(prev => !prev); // Toggle refresh state
  };


  const propsData = {
    title: title,
    field: fields,
    data: absensiData,
    // data: exData,
    classFilterFunction:handleFilterChange,
    dateFilterFunction:dateFilterFunction,
    date: dateFilter,
    handleRefresh: handleRefresh
  };

  return (
      <>
        <Table props={propsData} />
      </>
  );
};

export default AbsenTable;
