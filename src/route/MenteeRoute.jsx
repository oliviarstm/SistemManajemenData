import {Navigate, Outlet} from "react-router-dom";

// Jika role mentee, diarahkan ke OUTLET. Selain itu ke /admin/dashboard
const MenteeRoute = ({role})=>{
    return role==="mentee"?<Outlet/> : <Navigate to="/admin/dashboard"/>
}
export default MenteeRoute