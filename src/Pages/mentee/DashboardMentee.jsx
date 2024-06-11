import gambar15 from "../../../public/gambar15.png";
import gambar16 from "../../../public/gambar16.png";
import gambar17 from "../../../public/gambar17.png";
import DashboardButton from "../../Components/DashboardButton";

const DashboardMentee = () => {
  const data = {
    nama: "Olivia",
    univ: "Universitas Terbuka",
    kelas: "B",
    sesi: "Malam",
    mentor: "Kelvin",
  };
  return (
    <div>
      <div className="max-w-6xl bg-white rounded-lg mx-auto mt-12 h-40 p-5 shadow drop-shadow-xl">
        <h1 className="text-[#6D737A] font-semibold text-4xl pt-4">
          Selamat Datang, Mentee!
        </h1>
      </div>
      <div className="max-w-6xl bg-white rounded-lg mx-auto mt-8 px-16 shadow drop-shadow-xl">
        <h1 className="text-[#6D737A] font-semibold text-3xl pt-3 text-center">
          Data Diri Mentee
        </h1>
        <hr className="bg-[#6D737A] w-full border border-[#6D737A]" />
        <div className="flex flex-row justify-center py-8 ">
          <div className=" w-80 font-medium text-xl flex flex-col gap-2 text-[#6D737A]">
            <p>Nama</p>
            <p>Universitas</p>
            <p>Kelas</p>
            <p>Sesi</p>
            <p>Individual Mentor</p>
          </div>
          <div className=" w-80 font-semibold text-xl flex flex-col gap-2 text-[#6D737A]">
            <p>: {data.nama}</p>
            <p>: {data.univ}</p>
            <p>: {data.kelas}</p>
            <p>: {data.sesi}</p>
            <p>: {data.mentor}</p>
          </div>
        </div>
      </div>
      <div className="flex gap-24 justify-center mt-8">
        <DashboardButton title="Data Kelas" image={gambar15} path="/mentee/kelas"/>
        <DashboardButton title="Absensi" image={gambar17} path="/mentee/absen"/>
        <DashboardButton title="Tugas" image={gambar16} path="/mentee/tugas"/>
      </div>
    </div>
  );
};

export default DashboardMentee;
