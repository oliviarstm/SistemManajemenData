import Table from "../../Components/table/Index.jsx";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "../../utils/axios.js";

const Title = "Rekap Absen Mentee";
const Field = ["Tanggal", "Status"];
const emptyData = [
    {
        id: 0,
        waktu: "Pilih bulan",
        status: ""
    }
];

const Absen = () => {
    const { AbsensiMonth } = useSelector((state) => state.Absen);
    const { accountId } = useSelector(state => state.Auth);
    const [absen, setAbsen] = useState([]);

    const fetchData = async () => {
        try {
            if (AbsensiMonth !== "") {
                const res = await axios.post(`/absensimentee`, { date: AbsensiMonth, idMentee: accountId });
                const result = res.data.data.map(item => ({
                    ...item,
                    waktu: new Date(item.waktu).toLocaleDateString('id-ID', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric'
                    }),
                    status: item.status === 1 ? "Hadir" : "Tidak Hadir"
                }));
                setAbsen(result);
            }
        } catch (error) {
            console.error("Error fetching attendance data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [AbsensiMonth]);

    const propsData = {
        title: Title,
        field: Field,
        data: absen,
        isEnable: false,
        tableType: "none",
        type: "month"
    };

    console.log(absen.length)

    return (
        <>
            <Table props={propsData} />
            {AbsensiMonth?null:
                <div>
                    <h1 className="text-2xl text-gray-400 text-center">Data Tidak Ada</h1>
                    <h1 className="text-2xl text-gray-400 text-center">Silahkan Pilih Bulan</h1>
                </div>
            }
            {absen.length!==0?null:
                <div>
                    <h1 className="text-2xl text-gray-400 text-center">Data Tidak Ada</h1>
                    <h1 className="text-2xl text-gray-400 text-center">Silahkan Pilih Bulan</h1>
                </div>
            }
        </>
    );
};

export default Absen;
