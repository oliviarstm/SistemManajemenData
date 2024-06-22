import semuaMentee from "../../../../public/semuaMentee.png";
import kelasA from "../../../../public/kelasA.png";
import kelasB from "../../../../public/kelasB.png";
import kelasC from "../../../../public/kelasC.png";
import DashboardButton from "../../../Components/DashboardButton.jsx";
import { useLocation, useNavigate } from "react-router-dom";

const PengumpulanTugas = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state?.id_tugas;
  const handleClickAll = () => {
    navigate("detail", { state: { id, filter: "Semua Mentee" } });
  };
  const handleClickA = () => {
    navigate("detail", { state: { id, filter: "Kelas A" } });
  };
  const handleClickB = () => {
    navigate("detail", { state: { id, filter: "Kelas B" } });
  };
  const handleClickC = () => {
    navigate("detail", { state: { id, filter: "Kelas C" } });
  };
  return (
    <div>
      <div className="  text-center p-12">
        <h1 className="text-[#6D737A] font-semibold text-4xl -pt4">
          Pengumpulan Tugas
        </h1>
      </div>
      <div className="flex gap-12 justify-center mt-4 flex-wrap pb-6">
        <DashboardButton
          title="Semua Mentee"
          image={semuaMentee}
          onClick={handleClickAll}
        />
        <DashboardButton
          title="Kelas A"
          image={kelasA}
          onClick={handleClickA}
        />
        <DashboardButton
          title="Kelas B"
          image={kelasB}
          onClick={handleClickB}
        />
        <DashboardButton
          title="Kelas C"
          image={kelasC}
          onClick={handleClickC}
        />
      </div>
    </div>
  );
};

export default PengumpulanTugas;
