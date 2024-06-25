import gambar9 from "../../public/gambar9.png";
import { useNavigate } from "react-router-dom";
import {useState} from "react";
import axios from "../utils/axios.js";
import {useDispatch} from "react-redux";
import {login} from "../store/reducer/auth.js";
import {jwtDecode} from "jwt-decode";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const handleBack = () => {
    navigate("/");
  };
  const handleLogin = (e)=>{
    e.preventDefault();
    axios.post("/login", formData)
        .then((res) => {
          console.log(res.data);
          const decodedToken = jwtDecode(res.data.token);
          dispatch(login(decodedToken));
          localStorage.setItem("token", res.data.token);
          navigate("/login");
        })
        .catch((err) => {
          console.log(err.response.data.msg);
          Swal.fire({
            icon: "error",
            title: "Login Failed",
            text: err.response.data.msg,
          })
        });


    navigate("/login")
  }
  const [formData, setFormData]=useState({})
  return (
    <div className="flex flex-row h-screen">
      <div className="w-1/2  flex flex-col justify-center">
        <img src={gambar9} alt="gambar login" className="w-3/4 mb-5 mx-auto" />
        <p className="text-center text-[#235EAC] text-2xl font-semibold">
          Selamat datang di portal kami! Silahkan masuk dan nikmati pembelajaran
          web yang lebih baik
        </p>
      </div>
      <div className="rounded-s-3xl shadow-2xl w-1/2 px-14">
        <h1 className="px-8 pt-14 text-2xl text-[#235EAC] font-bold">Masuk</h1>
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Masukkan Username atau Email"
              className="input input-bordered"
              required
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Masukkan Password"
              className="input input-bordered"
              required
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#235EAC] text-white" onClick={handleLogin}>Login</button>
          </div>
        </form>
        <p className="text-center text-gray-500">Atau</p>
        <button
          className=" w-full text-center text-[#235EAC] pt-8 font-semibold"
          onClick={() => handleBack()}
        >
          Kembali ke Beranda
        </button>
      </div>
    </div>
  );
};

export default Login;
