import React, { useState } from "react";
import TambahMentee from "../../Components/TambahMentee";

const TesAddMentee = ({}) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const titles = ["Nama", "Universitas", "Kelas", "Sesi", "Individual Mentor"];

  return (
    <div>
      <button className="btn" onClick={openModal}>
        open modal
      </button>
      <TambahMentee isOpen={isModalOpen} onClose={closeModal} title={titles} />
    </div>
  );
};

export default TesAddMentee;
