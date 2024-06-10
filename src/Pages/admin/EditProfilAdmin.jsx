import { useState } from "react";

const EditProfilAdmin = () => {
  const [name, setName] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handleSave = (e) => {
    e.preventDefault();
    // Tambahkan logika untuk menyimpan perubahan profil
    console.log("Profil Disimpan");
  };

  const handleCancel = () => {
    // Tambahkan logika untuk membatalkan perubahan
    console.log("Edit Dibatalkan");
  };

  return (
    <div style={{ maxWidth: "700px", margin: "auto", paddingTop: "100px" }}>
      <form onSubmit={handleSave}>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Nama:
            <input
              className="rounded"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Email:
            <input
              className="rounded"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Password Lama:
            <input
              className="rounded"
              type="password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Password Baru:
            <input
              className="rounded"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Konfirmasi Password Baru:
            <input
              className="rounded"
              type="password"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
            />
          </label>
        </div>
        <div style={{ textAlign: "center", marginTop: "60px" }}>
          <button
            type="button"
            onClick={handleCancel}
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
  );
};

export default EditProfilAdmin;
