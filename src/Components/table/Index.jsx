import TableBar from "./TableBar.jsx";
import TableData from "./TableData.jsx";

// const propsData={
//     title:,
//     field:,
//     data:,
//     isEnable:,
//     desc:,
//     isButton:,
//     handleAdd:
// }


const Table =({props})=>{
    const {title, field, data, isEnable, desc, isButton, option, handleAdd}=props
    return <>
        <TableBar title={title} desc={desc} isButton={isButton} handleAdd={handleAdd}/>
        <TableData field={field} data={data} isEnable={isEnable} options={option}/>
    </>
}

export default Table