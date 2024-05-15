import TableBar from "./TableBar.jsx";
import TableData from "./TableData.jsx";

const Table =({title, field, data, isEnable})=>{
    return <>
        <TableBar title={title}/>
        <TableData field={field} data={data} isEnable={isEnable}/>
    </>
}

export default Table