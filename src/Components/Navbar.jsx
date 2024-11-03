import ButtonLogin from "./ButtonLogin";
import LogoIL from "../../public/logo-il.png"

const Navbar = () => {
  return (
    <>
      <div className="navbar shadow drop-shadow-lg px-10">
        <div className="flex-1">
          <img src={LogoIL} className="w-28 h-14" alt="" />
        </div>
        <div className="flex gap-5">
          <button>Beranda</button>
          <button>Tentang</button>
          <button>Kontak</button>
          <ButtonLogin />
        </div>
      </div>
    </>
  );
};

export default Navbar;
