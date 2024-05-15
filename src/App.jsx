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
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
