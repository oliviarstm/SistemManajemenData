import konfirhapus from "../../../public/konfirhapus.png";

const KonfirmasiHapus = ({ show, fileName, onConfirm, onCancel }) => {
  if (!show) {
    return null;
  }

  const modalOverlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const modalContentStyle = {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  };

  const modalButtonsStyle = {
    marginTop: "20px",
  };

  const buttonStyle = {
    padding: "10px 20px",
    margin: "5px",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  };

  const confirmButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#235EAC",
    color: "white",
  };

  const cancelButtonStyle = {
    ...buttonStyle,
    backgroundColor: "grey",
    color: "white",
  };

  const textStyle = {
    fontSize: "20px",
  };

  return (
    <div style={modalOverlayStyle}>
      <div style={modalContentStyle}>
        <img src={konfirhapus} alt="Question Mark" className="mx-auto" />
        <h2 style={textStyle}>Konfirmasi penghapusan</h2>
        <p>
          Apakah Anda yakin ingin menghapus <strong>{fileName}</strong>?
        </p>
        <div style={modalButtonsStyle}>
          <button style={confirmButtonStyle} onClick={onConfirm}>
            Ya, Hapus
          </button>
          <button style={cancelButtonStyle} onClick={onCancel}>
            Batal
          </button>
        </div>
      </div>
    </div>
  );
};

export default KonfirmasiHapus;
