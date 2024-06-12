import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import axiosInstance from "../../utils/axios.js";

const EditProfilMentor = () => {
  const navigate = useNavigate()
  const [formData, setFormData]=useState({})
  const [name, setName] = useState("");
  const {username, accountId} = useSelector(state => state.Auth)
  useEffect(()=>setName(username),[])
  useEffect(()=> {
    axiosInstance.get(`/mentor/${accountId}`)
        .then(res => {
          const data = res.data.data;
          setFormData({
            nama: data.nama,
            email: data.email,
          });
          console.log(data.nama)
        })
        .catch(err => {
          console.log(err)
        })
  }, [])

  const handleSave = (e) => {
    e.preventDefault();
    console.log("Profil Disimpan");
    console.log(formData)
    if (formData.password===undefined){
      axiosInstance.put(`/mentor/${accountId}`, formData)
          .then(res=>{
            console.log(res.data.msg)

          })
          .catch(err => {
            console.log(err.response.data.msg)
          })
    }else{
      axiosInstance.put(`/mentor_pass/${accountId}`, formData)
          .then(res=>{
            console.log(res.data.msg)

          })
          .catch(err => {
            console.log(err.response.data.msg)
          })
    }
    navigate('/mentor/dashboard')
  };

  const handleCancel = () => {
    navigate('/mentor/dashboard')
    console.log("Edit Dibatalkan");
  };

  return (
    <div style={{ maxWidth: "700px", margin: "auto", paddingTop: "100px" }}>
      <form onSubmit={handleSave}>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Username:
            <input
                className="bg-gray-200 rounded"
                disabled
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
            />
          </label>
          <label>
            Nama:
            <input
              className="rounded"
              type="text"
              value={formData.nama}
              onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
              style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Email:
            <input
              className="rounded"
              type="text"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Password Lama:
            <input
              className="rounded"
              type="password"
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Password Baru:
            <input
              className="rounded"
              type="password"
              onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
              style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Konfirmasi Password Baru:
            <input
              className="rounded"
              type="password"
              onChange={(e) => setFormData({ ...formData, confNewPassword: e.target.value })}
              style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
            />
          </label>
        </div>
        <div style={{ textAlign: "center", marginTop: "60px" }}>
          <button
            type="button"
            onClick={handleCancel}
            className="text-[#235EAC] border border-[#235EAC] py-1 px-5 rounded bg-white mr-6"
          >
            Batal
          </button>
          <button
            type="submit"
            className="text-white py-1 px-5 ml-6 rounded bg-[#235EAC]"
          >
            Simpan
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfilMentor;
