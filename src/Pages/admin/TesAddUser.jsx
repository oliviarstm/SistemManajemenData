import { useState } from "react";
import TambahMentee from "../../Components/TambahMentee";

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
      <TambahMentee isOpen={isModalOpen} onClose={closeModal} title={titles} />
    </div>
  );
};

export default TesAddUser;
