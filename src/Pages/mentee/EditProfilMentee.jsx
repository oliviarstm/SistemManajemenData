import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import axiosInstance from "../../utils/axios.js";
import {useNavigate} from "react-router-dom";
import {setMentee} from "../../store/reducer/mentee.js";

const EditProfilMentee = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formData, setFormData]=useState({})
  const [name, setName] = useState("");
  const {username, accountId} = useSelector(state => state.Auth)
  useEffect(()=>setName(username),[])
  useEffect(()=> {
    axiosInstance.get(`/mentee/${accountId}`)
        .then(res => {
          const data = res.data.data;
          setFormData({
            nim: data.nim,
            name: data.name,
            university_name: data.university_name,
            email: data.email,
            phone_number: data.phone_number,
            category: data.category,
            class: data.class,
            session: data.session,
            mentor_name: data.mentor_name,
            major: data.major,
          });
        })
        .catch(err => {
          console.log(err)
        })
  }, [])

  const handleSave = (e) => {
    e.preventDefault();
    // Tambahkan logika untuk menyimpan perubahan profil
    console.log("Profil Disimpan");
    console.log(formData)
    if (formData.password===undefined){
      axiosInstance.put(`/mentee/${accountId}`, formData)
          .then(res=>{
            console.log(res.data.msg)

          })
          .catch(err => {
            console.log(err.response.data.msg)
          })
    }else{
      axiosInstance.put(`/mentee_pass/${accountId}`, formData)
          .then(res=>{
            console.log(res.data.msg)

          })
          .catch(err => {
            console.log(err.response.data.msg)
          })
    }
    dispatch(setMentee(formData))
    navigate('/mentee/dashboard')
  };

  const handleCancel = () => {
    navigate('/mentee/dashboard')
    console.log("Edit Dibatalkan");
  };

  return (
    <div style={{ maxWidth: "700px", margin: "auto", paddingTop: "100px" , paddingBottom: "100px" }}>
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
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Nim:
            <input
              className="rounded"
              type="text"
              value={formData.nim}
              onChange={(e) => setFormData({ ...formData, nim: e.target.value })}
              style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Nama:
            <input
                className="rounded"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Universitas:
            <input
                className="bg-gray-200 rounded"
                type="text"
                value={formData.university_name}
                disabled
                onChange={(e) => setFormData({ ...formData, university_name: e.target.value })}
                style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Email:
            <input
                className="bg-gray-200 rounded"
                type="text"
                value={formData.email}
                disabled
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            No. HP:
            <input
                className="rounded"
                type="text"
                value={formData.phone_number}
                onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
                style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Kategori:
            <input
                className="bg-gray-200 rounded"
                type="text"
                value={formData.category}
                disabled
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Kelas:
            <input
                className="bg-gray-200 rounded"
                type="text"
                value={formData.class}
                disabled
                onChange={(e) => setFormData({ ...formData, class: e.target.value })}
                style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Sesi:
            <input
                className="bg-gray-200 rounded"
                type="text"
                value={formData.session}
                disabled
                onChange={(e) => setFormData({ ...formData, session: e.target.value })}
                style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Individual Mentor:
            <input
                className="bg-gray-200 rounded"
                disabled
                type="text"
                value={formData.mentor_name}
                onChange={(e) => setFormData({ ...formData, mentor_name: e.target.value })}
                style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Jurusan:
            <input
                className="rounded"
                type="text"
                value={formData.major}
                onChange={(e) => setFormData({ ...formData, major: e.target.value })}
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

export default EditProfilMentee;
