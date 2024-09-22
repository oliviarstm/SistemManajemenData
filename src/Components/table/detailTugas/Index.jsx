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
        tableType,
        handleRefresh,
        handleScoreChange
    } = props;
    return (
        <>
            <TableBar
                title={title}
                desc={desc}
            />
            <TableData
                field={field}
                data={data}
                type={tableType}
                handleRefresh={handleRefresh}
                handleScoreChange={handleScoreChange}
            />
        </>
    );
};

export default Table;
