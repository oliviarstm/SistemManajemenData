// const exField = ["Nama", "Universitas", "Kelas", "Sesi", ""]
// const exData = [["Olivia", "Poltek", "A", "Pagi"], ["Kelvin", "ITEBA", "B", "Siang"]]
const exData = [{
    Name:"Olivia",
    Universty:"Poltek",
    Class:"A",
    Session:"Pagi"
}, {
    Name:"Kelvin",
    Universty:"ITEBA",
    Class:"B",
    Session:"Siang"
}]


const TableData=({field, data, button, isEnable})=>{
    return <div className="bg-white mx-10 my-5 flex flex-row justify-between items-center text-black">
        <table className="w-full min-w-max table-auto text-left">
            <tr className="bg-[#FCFCFD] text-gray-600 text-sm h-12">
                {
                    field.map((field, index)=> <td key={index} className="px-5 font-semibold">{field}</td>)
                }
            </tr>
            {
                exData.map((val, index) => {
                    return <tr key={index} className="h-12">
                        {
                            Object.entries(val).map(([_, value], innerIndex) => {
                                console.log(innerIndex)
                                if (innerIndex===0){
                                    return <td key={innerIndex} className="px-5 text-black">
                                        {isEnable?<button className="hover:underline" disabled>{value}</button>:value}
                                    </td>
                                } else {
                                    return <td key={innerIndex} className="px-5 text-black">{value}</td>
                                }
                            })

                        }
                        <td className="px-5 text-black">:</td>
                    </tr>

                })
            }
        </table>
    </div>
}

export default TableData