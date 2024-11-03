import Table from "../../../Components/table/izin/Index.jsx";
import { useEffect, useState } from "react";
import axios from "../../../utils/axios.js";

const title = "Form Absensi";
const fields = ["Nama", "Kelas", "Sesi", "Tanggal", "Alasan", "Lampiran"];

const FormAbsensi = () => {
    const [izinData, setIzinData] = useState([]);

    useEffect(() => {
        axios.get('/izin')
            .then(res => {
                const result = res.data.data;

                // Format the date field in each result
                const formattedData = result.map(item => {
                    const formattedDate = new Date(item.Tanggal).toLocaleDateString('en-GB'); // 'en-GB' for DD/MM/YYYY format
                    return {
                        ...item,
                        Tanggal: formattedDate // Replace Tanggal with the formatted date
                    };
                });

                setIzinData(formattedData);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    console.log(izinData)

    const propsData = {
        title: title,
        field: fields,
        data: izinData,
        isEnable: false,
        tableType: "none"
    };

    return (
        <>
            <Table props={propsData} />
        </>
    );
};

export default FormAbsensi;
