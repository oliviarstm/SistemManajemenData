import { Checkbox } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import axios from "../../../utils/axios.js";

const TableData = ({ field, data, date, handleRefresh}) => {
    const [checkedItems, setCheckedItems] = useState({});
    console.log(data);


    useEffect(() => {
        // Populate the checkedItems state based on the passed data
        const initialCheckedState = data.reduce((acc, item) => {
            // Convert database values (1, 0) to boolean
            acc[item.id] = item.checked === 1; // true if checked is 1, false otherwise
            return acc;
        }, {});
        setCheckedItems(initialCheckedState);
    }, [data]);

    const handleCheckboxChange = async (id, idMentee, checked) => {
        // Update the checkbox state based on id
        setCheckedItems({
            ...checkedItems,
            [id]: checked, // Update the state for the clicked checkbox using id
        });
        await axios.post('/insertabsensi',{date, id, id_mentee:idMentee})
        handleRefresh()
        console.log(`Checkbox for id: ${id}, idMentee: ${idMentee} is ${checked ? "checked" : "unchecked"} at ${date}`);
    };

    return (
        <div className="bg-white mx-10 my-5 flex flex-row justify-between items-center text-black">
            <table className="w-full min-w-max table-auto text-left">
                <tbody>
                <tr className="bg-[#FCFCFD] text-gray-600 text-sm h-12">
                    {field.map((field, index) => {
                        return (
                            <td key={index} className={`px-5 font-semibold`}>
                                {field}
                            </td>
                        );
                    })}
                </tr>
                </tbody>
                <tbody>
                {data.map((val, index) => {
                    const itemKey = val.id ?? `item-${index}`; // Fallback to index if id is null
                    return (
                        <tr key={itemKey} className="h-12">
                            <td className="px-5 text-black">{val.Name}</td>
                            <td className="px-5 text-black">{val.Kelas}</td>
                            <td className="px-5 text-black">{val.Sesi}</td>
                            <td className="px-5 text-black">
                                <Checkbox
                                    key={itemKey} // Use itemKey here
                                    name={itemKey} // Use itemKey for the name as well
                                    onChange={(e) => handleCheckboxChange(val.id, val.id_mentee,  e.target.checked)} // Pass both id and id_mentee
                                    checked={checkedItems[itemKey] ?? false} // Fallback to false if undefined
                                />
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
};

export default TableData;
