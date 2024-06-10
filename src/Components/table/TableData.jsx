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


import ThreeDot from "./ThreeDot.jsx";
import AbsenButton from "../AbsenButton.jsx";

const TableData=({field, data, isEnable, options, buttonLabel, buttonDropDown})=>{
    // Temporary

    return <div className="bg-white mx-10 my-5 flex flex-row justify-between items-center text-black">
        <table className="w-full min-w-max table-auto text-left">
            <tr className="bg-[#FCFCFD] text-gray-600 text-sm h-12">
                {
                    field.map((field, index, array) => {
                        const isLast = index === array.length - 1;
                        return (
                            <td key={index} className={`px-5 font-semibold w- ${isLast ? "text-right pe-8" : ""}`}>
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
                        <td className="px-5 text-black text-right">{buttonLabel? buttonDropDown?<AbsenButton buttonLabel={buttonLabel} options={options} dataId={val.id}/>:<button className="bg-[#0070FF] hover:bg-[#4593f7] text-white py-2 px-4 rounded-xl" onClick={()=>console.log("Detail ", val.id)}>{buttonLabel}</button>:<ThreeDot options={options} dataId={val.id}/>}</td>
                    </tr>

                })
            }
        </table>
    </div>
}

export default TableData