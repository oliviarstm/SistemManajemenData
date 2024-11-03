import {useNavigate} from "react-router-dom";

const TableData=({field, data, isEnable, dataClick})=>{
    const navigate = useNavigate()
    const moveToMenuPage=(id)=>{
        console.log(id)
        navigate("menu", {state:{id_tugas:id}})
    }

    return <div className="bg-white mx-10 my-5 flex flex-row justify-between items-center text-black">
        <table className="w-full min-w-max table-auto text-left">
            <tr className="bg-[#FCFCFD] text-gray-600 text-sm h-12">
                {
                    field.map((field, index, array) => {
                        const isLast = index === array.length - 1;
                        return (
                            <td key={index} className={`px-5 font-semibold ${isLast ? "text-center" : ""}`}>
                                {field}
                            </td>
                        );
                    })                }
            </tr>
            {
                data.map((val, index) => {
                    return <tr key={index} className="h-12">
                        {
                            Object.entries(val).slice(1).map(([value, array], innerIndex) => {
                                console.log(array)
                                if (innerIndex===0){
                                    return <td key={innerIndex} className="px-5 text-black">
                                        {isEnable?<button className="hover:underline" onClick={dataClick==="moveToMenu"?()=>moveToMenuPage(val.id):()=>console.log("hello")}>{value}</button>:value}
                                    </td>
                                } else {
                                    return <td key={innerIndex} className= {`px-5 text-black text-center`}>{value}</td>
                                }
                            })

                        }
                    </tr>

                })
            }
        </table>
    </div>
}

export default TableData