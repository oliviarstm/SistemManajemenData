import React from "react";
import Landing from "./Pages/Landing";
import Login from "./Pages/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout";
import DashboardMentor from "./Pages/mentor/DashboardMentor";
import DashboardAdmin from "./Pages/admin/DashboardAdmin";
import DashboardMentee from "./Pages/mentee/DashboardMentee";
import DataMenteeMenu from "./Pages/mentor/DataMenteeMenu";
import DataNilaiMenu from "./Pages/mentor/DataNilaiMenu.jsx";
import DataMentee from "./Pages/mentor/DataMentee.jsx";
import EditUserModal from "./Components/EditUserModal.jsx";
import EditProfilAdmin from "./Pages/admin/EditProfilAdmin.jsx";
import EditProfilMentee from "./Pages/mentee/EditProfilMentee.jsx";
import EditProfilMentor from "./Pages/mentor/EditProfilMentor.jsx";
import PengumpulanTugas from "./Pages/mentor/PengumpulanTugas.jsx";
import AbsenMentee from "./Pages/mentor/AbsenMentee.jsx";
import TestHapus from "./Pages/admin/TestHapus.jsx";
import TesAddMentee from "./Pages/admin/TesAddMentee.jsx";
import TambahMentee from "./Components/TambahMentee.jsx";
import TesAddUser from "./Pages/admin/TesAddUser.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route element={<MainLayout />}>
            <Route path="/admin" element={<DashboardAdmin />} />
            <Route path="/datamentee" element={<DataMenteeMenu />} />
            <Route path="/detailmentee" element={<DataMentee />} />
            <Route path="/datanilai" element={<DataNilaiMenu />} />
            <Route path="/test" element={<EditUserModal />} />
            <Route path="/editprofiladmin" element={<EditProfilAdmin />} />
            <Route path="/editprofilmentee" element={<EditProfilMentee />} />
            <Route path="/editprofilmentor" element={<EditProfilMentor />} />
            <Route path="/pengumpulantugas" element={<PengumpulanTugas />} />
            <Route path="/absenmentee" element={<AbsenMentee />} />
            <Route path="/testhapus" element={<TestHapus />} />
            <Route path="/tesaddmentee" element={<TesAddMentee />} />
            <Route path="/tesadduser" element={<TesAddUser />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
