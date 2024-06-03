import {Navigate, Outlet} from "react-router-dom";

const AdminRoute = ({role})=>{
    return role==="admin"?<Outlet/> : <Navigate to="/mentor/dashboard"/>
}
export default AdminRoute