// const exField = ["Nama", "Universitas", "Kelas", "Sesi", ""]
// const exData = [{
//     Name:"Olivia",
//     Universty:"Poltek",
//     Class:"A",
//     Session:"Pagi"
// }, {
//     Name:"Kelvin",
//     Universty:"ITEBA",
//     Class:"B",
//     Session:"Siang"
// }]

import ThreeDot from "../ThreeDot.jsx";
import AbsenButton from "../../AbsenButton.jsx";
import { useNavigate } from "react-router-dom";

const TableData = ({
                     field,
                     data,
                     isEnable,
                     options,
                     buttonLabel,
                     buttonDropDown,
                     dataClick,
                     type,
                     buttonClick,
                     handleRefresh,
                     openInputModal
                   }) => {
  const navigate = useNavigate();
  const moveToMenuPage = (id) => {
    console.log(id);
    navigate("menu/detail", { state: { id_tugas: id } });
  };

  return (
      <div className="bg-white mx-10 my-5 flex flex-row justify-between items-center text-black">
        <table className="w-full min-w-max table-auto text-left">
          <tr className="bg-[#FCFCFD] text-gray-600 textee-sm h-12">
            {field.map((field, index, array) => {
              const isLast = index === array.length - 1;
              return !type ? (
                  <td
                      key={index}
                      className={`px-5 font-semibold ${
                          isLast ? "text-right pe-8" : ""
                      }`}
                  >
                    {field}
                  </td>
              ) : (
                  <td key={index} className={`px-5 font-semibold`}>
                    {field}
                  </td>
              );
              // return (
              //     <td key={index} className={`px-5 font-semibold ${isLast ? "text-right pe-8" : ""}`}>
              //         {field}
              //     </td>
              // );
            })}
          </tr>
          {data.map((val, index) => {
            return (
                <tr key={index} className="h-12">
                  {Object.entries(val)
                      .slice(1)
                      .map(([key, value], innerIndex) => {
                        if (innerIndex === 0) {
                          return (
                              <td key={key} className="px-5 text-black">
                                {isEnable ? (
                                    <button
                                        className="hover:underline"
                                        onClick={
                                          dataClick === "moveToMenu"
                                              ? () => moveToMenuPage(val.id)
                                              : () => console.log("hello")
                                        }
                                    >
                                      {value}
                                    </button>
                                ) : (
                                    value
                                )}
                              </td>
                          );
                        } else {
                          return (
                              <td key={key} className="px-5 text-black">
                                {value}
                              </td>
                          );
                        }
                      })}
                  {type === "score" ? (
                      <>
                        <td className="px-5 text-black">
                          <button className=" border border-gray-700 hover:border-gray-500 text-gray-700 hover:text-gray-500 py-2 px-4 rounded-xl">
                            Lihat File
                          </button>
                        </td>
                        <td className="px-5 text-black">
                          <input
                              className="border border-gray-200 p-2"
                              placeholder="Masukkan Nilai"
                          />
                        </td>
                      </>
                  ) : type === "none" ? null : (
                      <td className="px-5 text-black text-right">
                        {buttonLabel ? (
                            buttonDropDown ? (
                                <AbsenButton
                                    buttonLabel={buttonLabel}
                                    options={options}
                                    dataId={val.id}
                                />
                            ) : (
                                <button
                                    className="bg-[#0070FF] hover:bg-[#4593f7] text-white py-2 px-4 rounded-xl"
                                    onClick={() => buttonClick(val.id)}
                                >
                                  {buttonLabel}
                                </button>
                            )
                        ) : (
                            <ThreeDot
                                openInputModal={openInputModal}
                                options={options}
                                dataId={val.id}
                                handleRefresh={handleRefresh}
                            />
                        )}
                      </td>
                  )}
                </tr>
            );
          })}
        </table>
      </div>
  );
};

export default TableData;
