import {Navigate, Outlet} from "react-router-dom";

const PublicRoute = ({isLogin}) =>{
    return isLogin ?  <Navigate to="/admin/dashboard" replace/>: <Outlet/>
}

export default PublicRoute