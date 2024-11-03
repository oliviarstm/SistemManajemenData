import semuaMentee from "../../../../public/semuaMentee.png";
import absen from "../../../../public/absen.png";
import DashboardButton from "../../../Components/DashboardButton.jsx";
import { useNavigate } from "react-router-dom";

const AbsenMentee = ({ role }) => {
  const navigate = useNavigate();
  const handleClickAll = () => {
    navigate("detail", { state: { filter: "Semua Mentee" } });
  };
  const handleClickForm = () => {
    navigate("form");
  };
  return (
    <div>
      <div className="  text-center p-12">
        <h1 className="text-[#6D737A] font-semibold text-4xl -pt4">Absensi</h1>
      </div>
      <div className="flex gap-12 justify-center mt-4 flex-wrap pb-6">
        <DashboardButton
          title="Semua Mentee"
          image={semuaMentee}
          onClick={handleClickAll}
        />
        {role === "mentor" ? (
          <DashboardButton
            title="Form Absensi"
            image={absen}
            onClick={handleClickForm}
          />
        ) : null}
      </div>
    </div>
  );
};

export default AbsenMentee;
