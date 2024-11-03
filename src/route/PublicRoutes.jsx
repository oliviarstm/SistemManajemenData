import {Navigate, Outlet} from "react-router-dom";

// Jika sudah login, diarahkan ke /admin/dashboard. Selain itu ke OUTLET
const PublicRoute = ({isLogin}) =>{
    return isLogin ?  <Navigate to="/admin/dashboard" replace/>: <Outlet/>
}

export default PublicRoute