import { useState } from "react";
import InputModal from "../../Components/InputModal.jsx";

const TesAddMentee = () => {
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
      <InputModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={titles}
        isButton={true}
      />
    </div>
  );
};

export default TesAddMentee;
