// src/Pages/admin/DashboardAdmin.js
import React, { useState } from "react";
import KonfirmasiHapus from "./KonfirmasiHapus";

const TestHapus = () => {
  const [showModal, setShowModal] = useState(false);
  const [fileName, setFileName] = useState("file.txt");

  const handleDelete = () => {
    setShowModal(true);
  };

  const handleConfirm = () => {
    setShowModal(false);
    // Logika untuk menghapus file
    console.log(`${fileName} telah dihapus`);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={handleDelete}>Delete File</button>
      <KonfirmasiHapus
        show={showModal}
        fileName={fileName}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default TestHapus;
