import gambar15 from "../../../public/gambar15.png";
import gambar14 from "../../../public/gambar14.png";
import gambar16 from "../../../public/gambar16.png";
import DashboardButton from "../../Components/DashboardButton";

const DashboardMentor = () => {
  return (
    <div>
      <div className="max-w-6xl bg-white rounded-lg mx-auto mt-12 h-40 p-5 shadow drop-shadow-xl">
        <h1 className="text-[#6D737A] font-semibold text-4xl pt-4">
          Selamat Datang, Mentor!
        </h1>
      </div>
      <div className="flex gap-24 justify-center mt-8">
        <DashboardButton title="Data Mentee" image={gambar15} path="/mentor/mentee"/>
        <DashboardButton title="Absensi" image={gambar14} path="/mentor/absen"/>
        <DashboardButton title="Tugas" image={gambar16} path="/mentor/tugas"/>
      </div>
    </div>
  );
};

export default DashboardMentor;
