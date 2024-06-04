import TableBar from "./TableBar.jsx";
import TableData from "./TableData.jsx";

const Table =({title, field, data, isEnable, desc})=>{
    return <>
        <TableBar title={title} desc={desc}/>
        <TableData field={field} data={data} isEnable={isEnable}/>
    </>
}

export default Table