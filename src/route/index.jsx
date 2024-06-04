import {Route, Routes} from "react-router-dom";
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
import ValidasiPengunduran from "../Pages/admin/ValidasiPengunduran.jsx";
import DataMenteeMenu from "../Pages/mentor/DataMenteeMenu.jsx";
import DataMentee from "../Pages/mentor/DataMentee.jsx";
import EditUserModal from "../Components/EditUserModal.jsx";
import EditProfilAdmin from "../Pages/admin/EditProfilAdmin.jsx";
import EditProfilMentee from "../Pages/mentee/EditProfilMentee.jsx";
import EditProfilMentor from "../Pages/mentor/EditProfilMentor.jsx";
import PengumpulanTugas from "../Pages/mentor/PengumpulanTugas.jsx";
import AbsenMentee from "../Pages/mentor/AbsenMentee.jsx";
import TestHapus from "../Pages/admin/TestHapus.jsx";
import TesAddMentee from "../Pages/admin/TesAddMentee.jsx";
import TesAddUser from "../Pages/admin/TesAddUser.jsx";
import DetailUniv from "../Pages/admin/EditUniv.jsx";
import EditUniv from "../Pages/admin/EditUniv.jsx";

const Routing = ()=>{
    const isLogin = true
    const role = "admin"
    // console.log("ROUTING")
    // const dispatch = useDispatch()
    // const {role, isLogin} = useSelector(state => state)
    // useEffect(() => {
    //     console.log("USE EFFECT")
    //     const getToken = localStorage.getItem("Authorization")
    //     if(getToken!==null){
    //         dispatch(loginAction.setUserData())
    //     }
    //     console.log("###########"+isLogin+"##########")
    // }, [isLogin]);
    //
    // console.log(isLogin + role)

    return <>
        <Routes>
            {/*public route*/}
            <Route element={<PublicRoute isLogin={isLogin}/>}>
                <Route path="login" element={<Login/>}/>
            </Route>
            {/*auth route*/}
            <Route element={<AuthRoute isLogin={isLogin}/>}>
                <Route element={<MainLayout role={role}/>}>
                    <Route element={<AdminRoute role={role}/>}>
                        <Route path="admin">
                            <Route path="dashboard" element={<DashboardAdmin/>}/>
                            <Route path="mentee">
                                <Route path="" element={<DataMenteeMenu />} />
                                <Route path="detail" element={<DataMentee />} />
                            </Route>
                            <Route path="pengunduran" element={<ValidasiPengunduran />}/>
                            <Route path="profile" element={<EditProfilAdmin />} />
                            {/*<Route path="pengajuan" element={<ValidasiPengajuan />}/>*/}
                        </Route>
                    </Route>
                    <Route element={<MentorRoute role={role}/>}>
                        <Route path="mentor">
                            <Route path="dashboard" element={<DashboardMentor/>}/>
                            <Route path="mentee">
                                <Route path="" element={<DataMenteeMenu />} />
                                <Route path="detail" element={<DataMentee />} />
                            </Route>
                            <Route path="profile" element={<EditProfilMentor />} />
                            <Route path="tugas" element={<PengumpulanTugas />} />
                            <Route path="absen" element={<AbsenMentee />} />
                        </Route>
                    </Route>
                    <Route element={<MenteeRoute role={role}/>}>
                        <Route path="mentee">
                            <Route path="dashboard" element={<DashboardMentee/>}/>
                            <Route path="profile" element={<EditProfilMentee />} />
                        </Route>
                    </Route>
                </Route>
            </Route>
            <Route path="/" element={<Landing/>}/>
            <Route path="*" element={<NotFound/>}/>

            <Route element={<MainLayout role="admin"/>}>
                <Route path="test" element={<EditUserModal />} />

                <Route path="testhapus" element={<TestHapus />} />
                <Route path="tesaddmentee" element={<TesAddMentee />} />
                <Route path="tesadduser" element={<TesAddUser />} />
                <Route path="detailuniv" element={<DetailUniv />} />
                <Route path="edituniv" element={<EditUniv />} />
            </Route>

        </Routes>
    </>
}

export default Routing