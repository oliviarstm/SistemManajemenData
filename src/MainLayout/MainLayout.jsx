import gambar10 from "../../public/gambar10.png";
import DrawerButton from "../Components/DrawerButton";
import { menuAdmin, menuMentee, menuMentor } from "./MenuList.js";
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
          {roleMenu.map((value,index) => {
            return <DrawerButton key={index} title={value.title} destination={value.path} />;
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
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
