const TableData = ({
                       field,
                       data,
                       type,
                       handleRefresh,
                   }) => {

    const showFile = (path) =>{
        console.log(path)
    }

    return (
        <div className="bg-white mx-10 my-5 flex flex-row justify-between items-center text-black">
            <table className="w-full min-w-max table-auto text-left">
                <tr className="bg-[#FCFCFD] text-gray-600 text-sm h-12">
                    {field.map((field, index, array) => {
                        const isLast = index === array.length - 1;
                        return !type ? (
                            <td
                                key={index}
                                className={`px-5 font-semibold ${
                                    isLast ? "text-right pe-8" : ""
                                }`}
                            >
                                {field}
                            </td>
                        ) : (
                            <td key={index} className={`px-5 font-semibold`}>
                                {field}
                            </td>
                        );
                    })}
                </tr>
                {data.map((val, index) => {
                    return (
                        <tr key={index} className="h-12">
                            <td className="px-5 text-black">
                                {val.Name}
                            </td>
                            <td className="px-5 text-black">
                                {val.Class}
                            </td>
                            <td className="px-5 text-black">
                                {val.Session}
                            </td>
                            <td className="px-5 text-black">
                                <button className=" border border-gray-700 hover:border-gray-500 text-gray-700 hover:text-gray-500 py-2 px-4 rounded-xl" onClick={()=>showFile(val.lampiran)}>
                                    Lihat File
                                </button>
                            </td>
                            <td className="px-5 text-black">
                                <input
                                    className="border border-gray-200 p-2"
                                    placeholder="Masukkan Nilai"
                                />
                            </td>
                        </tr>
                    );
                })}
            </table>
        </div>
    );
};

export default TableData;
