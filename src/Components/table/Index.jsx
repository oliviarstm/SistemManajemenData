import TableBar from "./TableBar.jsx";
import TableData from "./TableData.jsx";

// const propsData={
//     title:,
//     field:,
//     data:,
//     isEnable:,
//     desc:,
//     isButton:,
//     isButton:
// }


const Table =({props})=>{
    const {title, field, data, isEnable, desc, isButton, option}=props
    return <>
        <TableBar title={title} desc={desc} isButton={isButton}/>
        <TableData field={field} data={data} isEnable={isEnable} options={option}/>
    </>
}

export default Table