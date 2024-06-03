import { BrowserRouter} from "react-router-dom";
import Routing from "./route/index.jsx"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routing/>


        {/*<Routes>*/}
        {/*  <Route path="/" element={<Landing />} />*/}
        {/*  <Route path="/login" element={<Login />} />*/}
        {/*  <Route element={<MainLayout />}>*/}
        {/*    /!*ADMIN*!/*/}
        {/*    <Route path="/admin" element={<DashboardAdmin />} />*/}
        {/*    <Route path="/validasipengunduran" element={<ValidasiPengunduran />} />*/}
        {/*    <Route path="/validasipengajuan" element={<ValidasiPengajuan />} />*/}


        {/*    /!*MENTOR*!/*/}


        {/*    /!*MENTEE*!/*/}
        {/*    <Route path="/datamentee" element={<DataMenteeMenu />} />*/}

        {/*    <Route path="/detailmentee" element={<DataMentee />} />*/}
        {/*    <Route path="/datanilai" element={<DataNilaiMenu />} />*/}
        {/*    <Route path="/test" element={<EditUserModal />} />*/}
        {/*    <Route path="/editprofiladmin" element={<EditProfilAdmin />} />*/}
        {/*    <Route path="/editprofilmentee" element={<EditProfilMentee />} />*/}
        {/*    <Route path="/editprofilmentor" element={<EditProfilMentor />} />*/}
        {/*    <Route path="/pengumpulantugas" element={<PengumpulanTugas />} />*/}
        {/*    <Route path="/absenmentee" element={<AbsenMentee />} />*/}
        {/*    <Route path="/testhapus" element={<TestHapus />} />*/}
        {/*    <Route path="/tesaddmentee" element={<TesAddMentee />} />*/}
        {/*    <Route path="/tesadduser" element={<TesAddUser />} />*/}
        {/*    <Route path="/detailuniv" element={<DetailUniv />} />*/}
        {/*    <Route path="/edituniv" element={<EditUniv />} />*/}
        {/*  </Route>*/}
        {/*</Routes>*/}
      </BrowserRouter>
    </>
  );
};

export default App;
