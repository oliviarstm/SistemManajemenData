import { useState } from "react";
import InputModal from "../../Components/InputModal.jsx";

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
      <InputModal isOpen={isModalOpen} onClose={closeModal} title={titles} />
    </div>
  );
};

export default TesAddUser;
