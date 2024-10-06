import Table from "../../../Components/table/absensi/Index.jsx";
import {absen} from "../../../Components/table/threedotmenu.js";
import {useEffect, useState} from "react";
import axios from "../../../utils/axios.js";

const exTitle = "Absensi";
const exField = ["Nama", "Kelas", "Sesi", "Kehadiran", "Aksi"];
const exData = [
  {
    id: 1,
    Name: "Kelvin",
    Kelas: "A",
    Sesi: "Morning",
    Kehadiran:"On Cam"
  },
  {
    id: 2,
    Name: "Abdee",
    Kelas: "C",
    Sesi: "Afternoon",
    Kehadiran:""
  },
];

const AbsenTable = () => {
  const [filter, setFilter] = useState("");
  const [dateFilter, setDateFilter] = useState(formatDate(new Date()));

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
          console.log(kelas)
          console.log(dateFilter)
          // const res = await axios.get(`/menteeclass/?class=${kelas}`);
          // result = res.data.data;
        } else {
          // const res = await axios.get("/mentee");
          // result = res.data.data;
        }
        // setMenteeData(result); // Set menteeData
      } catch (error) {
        console.error("Error fetching mentee data:", error); // Log any errors
      }
    }
    fetchData()
  }, [filter, dateFilter]);

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



  const propsData = {
    title: exTitle,
    field: exField,
    data: exData,
    isEnable: false,
    type: "date",
    option: absen,
    buttonLabel: "Absen",
    buttonDropDown: true,
    classFilterFunction:handleFilterChange,
    dateFilterFunction:dateFilterFunction
  };

  return (
    <>
      <Table props={propsData} />
    </>
  );
};

export default AbsenTable;
