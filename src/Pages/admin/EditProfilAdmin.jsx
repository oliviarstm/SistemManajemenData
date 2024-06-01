import MainLayout from "../../MainLayout/MainLayout";

const EditProfilAdmin = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [name, setName] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  <MainLayout />;
  const handleSave = (e) => {
    e.preventDefault();
    // Tambahkan logika untuk menyimpan perubahan profil
    console.log("Profile Saved");
  };

  const handleCancel = () => {
    // Tambahkan logika untuk membatalkan perubahan
    console.log("Edit Canceled");
  };

  return (
    <form onSubmit={handleSave} style={{ maxWidth: "400px", margin: "auto" }}>
      <div
        style={{ marginBottom: "20px", marginTop: "20px", textAlign: "center" }}
      >
        <img
          src={profileImage || "https://via.placeholder.com/150"}
          alt="Profile"
          style={{ width: "150px", height: "150px", borderRadius: "50%" }}
        />
        <div>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
          <button type="button" onClick={() => fileInputRef.current.click()}>
            Ubah Gambar
          </button>
        </div>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label>
          Nama:
          <input
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
            type="password"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
          />
        </label>
      </div>
      <div style={{ textAlign: "center" }}>
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
  );
};

export default EditProfilAdmin;
