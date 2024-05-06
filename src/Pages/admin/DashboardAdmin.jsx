import React from "react";
import gambar15 from "../../../public/gambar15.png";
import gambar13 from "../../../public/gambar13.png";
import gambar12 from "../../../public/gambar12.png";
import DashboardButton from "../../Components/DashboardButton";

const DashboardAdmin = () => {
  return (
    <div className="relative z-0">
      <div className="max-w-6xl bg-white rounded-lg mx-auto mt-12 h-40 p-5 shadow drop-shadow-xl">
        <h1 className=" text-[#6D737A] font-semibold text-4xl pt-4">
          Selamat Datang, Admin!
        </h1>
      </div>
      <div className="flex gap-24 justify-center mt-8">
        <DashboardButton title="Data Mentee" image={gambar15} />
        <DashboardButton title="Data User" image={gambar13} />
        <DashboardButton title="Validasi" image={gambar12} />
      </div>
    </div>
  );
};

export default DashboardAdmin;
