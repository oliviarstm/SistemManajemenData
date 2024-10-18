import TableBar from "./TableBar.jsx";
import TableData from "./TableData.jsx";

// const propsData={
//     title: table bar title,
//     field: table fields,
//     data: table data for map,
//     isEnable: can click each data,
//     desc: table bar description,
//     type: table bar add button or date,
//     handleAdd: if add, callback function,
//     buttonLabel: label for each data button,  if null, three dot appear ,
//     buttonDropDown: true false ,
//     dataClick:,
//     tableType: "score"/null
//     buttonClick: onClick when data button is clicked,
//     handleRefresh:
// }

const Table = ({ props }) => {
    const {
        title,
        field,
        data,
        desc,
        handleRefresh,
        classFilterFunction,
        dateFilterFunction,
        date
    } = props;
    return (
        <>
            <TableBar
                title={title}
                desc={desc}
                classFilterFunction={classFilterFunction}
                dateFilterFunction={dateFilterFunction}
            />
            <TableData
                field={field}
                data={data}
                handleRefresh={handleRefresh}
                date={date}
            />
        </>
    );
};

export default Table;
