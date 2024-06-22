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
    isEnable,
    desc,
    type,
    option,
    handleAdd,
    buttonLabel,
    buttonDropDown,
    dataClick,
    tableType,
    buttonClick,
    handleRefresh,
  } = props;
  return (
    <>
      <TableBar
        title={title}
        desc={desc}
        type={type}
        handleAdd={handleAdd}
        buttonDropDown={buttonDropDown}
      />
      <TableData
        field={field}
        data={data}
        isEnable={isEnable}
        options={option}
        buttonLabel={buttonLabel}
        buttonDropDown={buttonDropDown}
        dataClick={dataClick}
        type={tableType}
        buttonClick={buttonClick}
        handleRefresh={handleRefresh}
      />
    </>
  );
};

export default Table;
