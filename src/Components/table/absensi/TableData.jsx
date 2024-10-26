import { Checkbox } from "@material-tailwind/react";
import { useEffect, useState, useRef } from "react";
import axios from "../../../utils/axios.js";

const TableData = ({ field, data, date, handleRefresh }) => {
    const [checkedItems, setCheckedItems] = useState({});
    const hasInsertedForDate = useRef(null); // Track insertion for specific date

    useEffect(() => {
        const initialCheckedState = data.reduce((acc, item) => {
            acc[item.id] = item.checked === 1;
            return acc;
        }, {});
        setCheckedItems(initialCheckedState);
    }, [data]);

    useEffect(() => {
        const insertAllUnchecked = async () => {
            // Make a request to insert all unchecked data
            await axios.post('/insertallabsensi', { date });
            handleRefresh(); // Refresh data after insertion
        };

        // Only run if we haven't already run it for this date
        if (hasInsertedForDate.current !== date) {
            insertAllUnchecked();
            hasInsertedForDate.current = date; // Update ref to prevent re-runs for this date
        }
    }, [data, date]);

    const handleCheckboxChange = async (id, idMentee, checked) => {
        setCheckedItems({
            ...checkedItems,
            [id]: checked,
        });
        await axios.post('/insertabsensi', { date, id, id_mentee: idMentee });
        handleRefresh();
    };

    return (
        <div className="bg-white mx-10 my-5 flex flex-col items-center text-black">
            <table className="w-full min-w-max table-auto text-left">
                <tbody>
                <tr className="bg-[#FCFCFD] text-gray-600 text-sm h-12">
                    {field.map((field, index) => (
                        <td key={index} className="px-5 font-semibold">{field}</td>
                    ))}
                </tr>
                </tbody>
                <tbody>
                {data.map((val, index) => {
                    const itemKey = val.id ?? `item-${index}`;
                    return (
                        <tr key={itemKey} className="h-12">
                            <td className="px-5 text-black">{val.Name}</td>
                            <td className="px-5 text-black">{val.Kelas}</td>
                            <td className="px-5 text-black">{val.Sesi}</td>
                            <td className="px-5 text-black">
                                <Checkbox
                                    key={itemKey}
                                    name={itemKey}
                                    onChange={(e) => handleCheckboxChange(val.id, val.id_mentee, e.target.checked)}
                                    checked={checkedItems[itemKey] ?? false}
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
