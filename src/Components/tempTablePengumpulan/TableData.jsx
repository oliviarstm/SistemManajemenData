// const exField = ["Nama", "Universitas", "Kelas", "Sesi", ""]
// const exData = [{
//     Name:"Olivia",
//     Universty:"Poltek",
//     Class:"A",
//     Session:"Pagi"
// }, {
//     Name:"Kelvin",
//     Universty:"ITEBA",
//     Class:"B",
//     Session:"Siang"
// }]



const TableData=({field, data, isEnable, options, buttonLabel, buttonDropDown})=>{
    // Temporary

    return <div className="bg-white mx-10 my-5 flex flex-row justify-between items-center text-black">
        <table className="w-full min-w-max table-auto text-left">
            <tr className="bg-[#FCFCFD] text-gray-600 text-sm h-12">
                {
                    field.map((field, index) => {
                        return (
                            <td key={index} className="px-5 font-semibold">
                                {field}
                            </td>
                        );
                    })                }
            </tr>
            {
                data.map((val, index) => {
                    return <tr key={index} className="h-12">
                        {
                            Object.entries(val).slice(1).map(([key, value], innerIndex) => {
                                if (innerIndex===0){
                                    return <td key={innerIndex} className="px-5 text-black">
                                        {isEnable?<button className="hover:underline" onClick={()=>console.log("CLICKED")}>{value}</button>:value}
                                    </td>
                                } else {
                                    return <td key={innerIndex} className="px-5 text-black">{value}</td>
                                }
                            })

                        }
                        <td className="px-5 text-black"><button className=" border border-gray-700 hover:border-gray-500 text-gray-700 hover:text-gray-500 py-2 px-4 rounded-xl">Lihat File</button></td>
                        <td className="text-black"><input className="border border-gray-200" placeholder="Masukkan Nilai"/></td>
                    </tr>

                })
            }
        </table>
    </div>
}

export default TableData