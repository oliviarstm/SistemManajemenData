import semuaMentee from "../../../public/semuaMentee.png";
import menteeIndividual from "../../../public/menteeIndividual.png";
import DashboardButton from "../../Components/DashboardButton";
import { useNavigate } from "react-router-dom";

const DataMenteeMenu = ({ role }) => {
  const navigate = useNavigate();
  const handleClickAll = () => {
    navigate("detail", { state: { filter: "Semua Mentee" } });
  };
  const handleClickIndividual = () => {
    navigate("detail", { state: { filter: "Mentor" } });
  };
  return (
    <div>
      <div className="  text-center p-12">
        <h1 className="text-[#6D737A] font-semibold text-4xl -pt4">
          Data Mentee
        </h1>
      </div>
      <div className="flex gap-12 justify-center mt-4 flex-wrap pb-6">
        <DashboardButton
          title="Semua Mentee"
          image={semuaMentee}
          onClick={handleClickAll}
        />
        {role === "mentor" ? (
          <DashboardButton
            title="Mentee Individual"
            image={menteeIndividual}
            onClick={handleClickIndividual}
          />
        ) : null}
      </div>
    </div>
  );
};

export default DataMenteeMenu;
