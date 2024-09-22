import Swal from "sweetalert2";
import axios from "../../../utils/axios.js";

const TableData = ({ field, data, type, handleRefresh }) => {
    const showFile = (path) => {
        console.log(path);
    };

    const handleEdit = async (index, initialValue) => {
        console.log(index)
        console.log(initialValue)
        const {value:nilai}=await Swal.fire({
            title:"Masukkan Nilai",
            input:"number",
            inputLabel:"Nilai",
            inputValue:initialValue,
            showCancelButton:true,
            inputValidator: (value) => {
                if (!value) {
                    return "Masukkan Nilai!";
                }
            }
        })
        await axios.put(`/pengumpulan-tugas/${index}`, {nilai:nilai})
        if (nilai){
            Swal.fire(`Nilai di update`)
            handleRefresh()
        }
    };

    return (
        <div className="bg-white mx-10 my-5 flex flex-row justify-between items-center text-black">
            <table className="w-full min-w-max table-auto text-left">
                <thead>
                <tr className="bg-[#FCFCFD] text-gray-600 text-sm h-12">
                    {field.map((field, index, array) => {
                        const isLast = index === array.length - 1;
                        return !type ? (
                            <th
                                key={index}
                                className={`px-5 font-semibold ${
                                    isLast ? "text-right pe-8" : ""
                                }`}
                            >
                                {field}
                            </th>
                        ) : (
                            <th key={index} className={`px-5 font-semibold`}>
                                {field}
                            </th>
                        );
                    })}
                </tr>
                </thead>
                <tbody>
                {data.map((val, index) => (
                    <tr key={index} className="h-12">
                        <td className="px-5 text-black">{val.Name}</td>
                        <td className="px-5 text-black">{val.Class}</td>
                        <td className="px-5 text-black">{val.Session}</td>
                        <td className="px-5 text-black">
                            <button
                                className="border border-gray-700 hover:border-gray-500 text-gray-700 hover:text-gray-500 py-2 px-4 rounded-xl"
                                onClick={() => showFile(val.lampiran)}
                            >
                                Lihat File
                            </button>
                        </td>
                        <td className="px-5 text-black">
                            {val.nilai?val.nilai:"Belum Dinilai"}
                        </td>
                        <td>
                            <button
                                className="bg-gray-100 hover:bg-gray-300 text-gray-500 py-2 px-4 rounded ms-2"
                                onClick={() => handleEdit(val.id, val.nilai)}
                            >
                                Edit Nilai
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableData;
