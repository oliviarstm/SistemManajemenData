import semuaMentee from "../../../../public/semuaMentee.png";
import kelasA from "../../../../public/kelasA.png";
import kelasB from "../../../../public/kelasB.png";
import kelasC from "../../../../public/kelasC.png";
import menteeIndividual from "../../../../public/menteeIndividual.png";
import DashboardButton from "../../../Components/DashboardButton.jsx";

const PengumpulanTugas = () => {
  return (
    <div>
      <div className="  text-center p-12">
        <h1 className="text-[#6D737A] font-semibold text-4xl -pt4">
          Pengumpulan Tugas
        </h1>
      </div>
      <div className="flex gap-12 justify-center mt-4 flex-wrap pb-6">
        <DashboardButton title="Semua Mentee" image={semuaMentee} />
        <DashboardButton title="Kelas A" image={kelasA} />
        <DashboardButton title="Kelas B" image={kelasB} />
        <DashboardButton title="Kelas C" image={kelasC} />
      </div>
    </div>
  );
};

export default PengumpulanTugas;
