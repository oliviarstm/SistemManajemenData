import {Navigate, Outlet} from "react-router-dom";

// Jika role mentor, diarahkan ke OUTLET. Selain itu ke /mentor/dashboard
const AdminRoute = ({role})=>{
    return role==="admin"?<Outlet/> : <Navigate to="/mentor/dashboard"/>
}
export default AdminRoute