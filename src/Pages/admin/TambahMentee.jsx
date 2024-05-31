import React from "react";

function TambahMentee() {
  const openModal = () => {
    document.getElementById("my_modal_1").showModal();
  };
  const closeModal = () => {
    document.getElementById("my_modal_1").closeModal();
  };

  return (
    <div>
      <button className="btn" onClick={openModal}>
        open modal
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box flex flex-col gap-3">
          <label className=" flex items-center gap-2 mt-12">
            <h1 className="w-[25%]">Nama</h1>
            <input
              type="text"
              className="w-[75%] grow py-2 px-3 rounded-md border-2 border-gray-500"
              placeholder=""
            />
          </label>
          <label className=" flex items-center gap-2">
            <h1 className="w-[25%]">Universitas</h1>
            <input
              type="text"
              className="w-[75%] grow py-2 px-3 rounded-md border-2 border-gray-500"
              placeholder=""
            />
          </label>
          <label className=" flex items-center gap-2">
            <h1 className="w-[25%]">Kelas</h1>
            <input
              type="text"
              className="w-[75%] grow py-2 px-3 rounded-md border-2 border-gray-500"
              placeholder=""
            />
          </label>
          <label className=" flex items-center gap-2">
            <h1 className="w-[25%]">Sesi</h1>
            <input
              type="text"
              className="w-[75%] grow py-2 px-3 rounded-md border-2 border-gray-500"
              placeholder=""
            />
          </label>
          <label className=" flex items-center gap-2">
            <h1 className="w-[25%]">Individual Mentor</h1>
            <input
              type="text"
              className="w-[75%] grow py-2 px-3 rounded-md border-2 border-gray-500"
              placeholder=""
            />
          </label>
          <div className="modal-action justify-center">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <div style={{ textAlign: "center" }}>
                <button
                  type="button"
                  onClick={closeModal}
                  className="text-[#235EAC] border border-[#235EAC] py-1 px-5 rounded bg-white mr-6"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="text-white py-1 px-5 ml-6 rounded bg-[#235EAC]"
                >
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default TambahMentee;
