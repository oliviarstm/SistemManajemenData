import ButtonLogin from "./ButtonLogin";

const Navbar = () => {
  return (
    <>
      <div className="navbar shadow drop-shadow-lg px-10">
        <div className="flex-1">
          <img src="./logo-il.png" className="w-28 h-14" alt="" />
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
