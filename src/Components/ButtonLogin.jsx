import { Link } from "react-router-dom";

const ButtonLogin = () => {
  return (
    <div>
      <Link to="/Login">
        <button className=" text-white py-1 px-5 rounded bg-[#235EAC]">
          Masuk
        </button>
      </Link>
    </div>
  );
};

export default ButtonLogin;
