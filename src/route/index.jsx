import { Route, Routes } from "react-router-dom";
import NotFound from "../Pages/NotFound.jsx";
import Landing from "../Pages/Landing.jsx";
import Login from "../Pages/Login.jsx";
import AdminRoute from "./AdminRoute.jsx";
import MentorRoute from "./MentorRoute.jsx";
import MenteeRoute from "./MenteeRoute.jsx";
import PublicRoute from "./PublicRoutes.jsx";
import AuthRoute from "./AuthRoute.jsx";
import MainLayout from "../MainLayout/MainLayout.jsx";
import DashboardAdmin from "../Pages/admin/DashboardAdmin.jsx";
import DashboardMentor from "../Pages/mentor/DashboardMentor.jsx";
import DashboardMentee from "../Pages/mentee/DashboardMentee.jsx";
import DetailValidasi from "../Pages/admin/DetailValidasi.jsx";
import DataMenteeMenu from "../Pages/mentor/DataMenteeMenu.jsx";
import DataMentee from "../Pages/mentor/DataMentee.jsx";
import EditProfilMentee from "../Pages/mentee/EditProfilMentee.jsx";
import EditProfilMentor from "../Pages/mentor/EditProfilMentor.jsx";
import AbsenMentee from "../Pages/mentor/Absen/AbsenMentee.jsx";
import { useSelector } from "react-redux";
import DataMentor from "../Pages/admin/DataMentor.jsx";
import DataUniv from "../Pages/admin/DataUniv.jsx";
import Validasi from "../Pages/admin/Validasi.jsx";
import AbsenTable from "../Pages/mentor/Absen/AbsenTable.jsx";
import Tugas from "../Pages/mentor/tugas/Tugas.jsx";
import DetailTugas from "../Pages/mentor/tugas/DetailTugas.jsx";
import KumpulTugas from "../Pages/mentee/KumpulTugas.jsx";
import DetailNilai from "../Pages/mentor/nilai/DetailNilai.jsx";
import FormAbsensi from "../Pages/mentor/Absen/FormAbsensi.jsx";
import DataKelas from "../Pages/mentee/DataKelas.jsx";
import Absen from "../Pages/mentee/Absen.jsx";
import Izin from "../Pages/mentee/Izin.jsx";
import Pengunduran from "../Pages/mentee/Pengunduran.jsx";

const Routing = () => {
  const { role, isLogin } = useSelector((state) => state.Auth);
  console.log(role);

  return (
      <>
        <Routes>
          {/*public route*/}
          <Route element={<PublicRoute isLogin={isLogin} />}>
            <Route path="login" element={<Login />} />
          </Route>
          {/*auth route*/}
          <Route element={<AuthRoute isLogin={isLogin} />}>
            <Route element={<MainLayout role={role} />}>
              <Route element={<AdminRoute role={role} />}>
                <Route path="admin">
                  <Route path="dashboard" element={<DashboardAdmin />} />
                  <Route path="mentee">
                    <Route path="detail" element={<DataMentee />} />
                  </Route>
                  <Route path="mentor" element={<DataMentor />} />
                  <Route path="universitas" element={<DataUniv />} />
                  <Route path="validasi">
                    <Route path="" element={<Validasi />} />
                    <Route path="detail" element={<DetailValidasi />} />
                  </Route>
                </Route>
              </Route>
              <Route element={<MentorRoute role={role} />}>
                <Route path="mentor">
                  <Route path="dashboard" element={<DashboardMentor />} />
                  <Route path="mentee">
                    <Route path="" element={<DataMenteeMenu role={role} />} />
                    <Route path="detail" >
                      <Route path="" element={<DataMentee />} />
                      <Route path="nilai" element={<DetailNilai />} />
                    </Route>
                  </Route>
                  <Route path="absen">
                    <Route path="" element={<AbsenMentee role={role} />} />
                    <Route path="detail" element={<AbsenTable />} />
                    <Route path="form" element={<FormAbsensi />} />
                  </Route>
                  <Route path="tugas">
                    <Route path="" element={<Tugas />} />
                    <Route path="menu">
                      <Route path="detail" element={<DetailTugas />} />
                    </Route>
                  </Route>
                  <Route path="profile" element={<EditProfilMentor />} />
                </Route>
              </Route>
              <Route element={<MenteeRoute role={role} />}>
                <Route path="mentee">
                  <Route path="dashboard" element={<DashboardMentee />} />
                  <Route path="profile" element={<EditProfilMentee />} />
                  <Route path="kelas" element={<DataKelas />} />
                  <Route path="absensi" element={<Absen />} />
                  <Route path="izin" element={<Izin />} />
                  <Route path="pengunduran" element={<Pengunduran />} />
                  <Route path="tugas">
                    <Route path="" element={<Tugas />} />
                    <Route path="kumpul" element={<KumpulTugas />} />
                  </Route>
                </Route>
              </Route>
            </Route>
          </Route>
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
  );
};

export default Routing;
