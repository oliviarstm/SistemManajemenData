import gambar10 from "../../public/gambar10.png";
import gambar11 from "../../public/gambar11.png";
import DrawerButton from "../Components/DrawerButton";
import DashboardAdmin from "../Pages/admin/DashboardAdmin";
import DashboardMentor from "../Pages/mentor/DashboardMentor";
import { menuAdmin, menuMentee, menuMentor } from "./MenuList";
import { Outlet } from "react-router-dom";
import ProfilButton from "../Components/ProfilButton";

const MainLayout = ({role}) => {
  const roleMenu =
    role === "admin" ? menuAdmin : role === "mentor" ? menuMentor : role === "mentee" ? menuMentee: null ;
  return (
    <div className="flex min-h-screen">
      <div className="bg-[#235EAC] w-1/4 h-auto">
        <div className="bg-[#235EAC] h-24 flex items-center gap-2 shadow drop-shadow-lg">
          <img src={gambar10} alt="" className="w-20 pt-3 pl-1" />
          <div className="text-white font-semibold text-xl">
            <h1>LMS</h1>
            <p>Web Development</p>
          </div>
        </div>
        <div className=" relative pt-4">
          {roleMenu.map((value) => {
            return <DrawerButton title={value.title} />;
          })}
        </div>
      </div>
      <div className="bg-slate-100 w-screen relative">
        <div className="bg-[#FBFBFB] justify-between h-24 flex flex-row shadow drop-shadow-lg items-center px-9">
          <div className="text-3xl text-[#6D737A] font-semibold">{role.toUpperCase()}</div>
          <div>
            <ProfilButton />
          </div>
        </div>
        {/* TODO Outlet */}
        {/* <DashboardMentor /> */}
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
