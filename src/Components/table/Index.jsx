import TableBar from "./TableBar.jsx";
import TableData from "./TableData.jsx";

// const propsData={
//     title:,
//     field:,
//     data:,
//     isEnable:,
//     desc:,
//     type:,
//     handleAdd:,
//     buttonLabel:,
//     buttonDropDown:
// }


const Table =({props})=>{
    const {title, field, data, isEnable, desc, type, option, handleAdd, buttonLabel, buttonDropDown}=props
    return <>
        <TableBar title={title} desc={desc} type={type} handleAdd={handleAdd}/>
        <TableData field={field} data={data} isEnable={isEnable} options={option} buttonLabel={buttonLabel} buttonDropDown={buttonDropDown}/>
    </>
}

export default Table