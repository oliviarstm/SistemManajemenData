import { useState } from "react";
import MenteeInputModal from "../../Components/inputModal/MenteeInputModal.jsx";

const TesAddUser = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const titles = ["Username", "Role", "Email", "Password"];

  return (
    <div>
      <button className="btn" onClick={openModal}>
        open modal
      </button>
      <MenteeInputModal isOpen={isModalOpen} onClose={closeModal} title={titles} />
    </div>
  );
};

export default TesAddUser;
