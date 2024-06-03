import {Navigate, Outlet} from "react-router-dom";

const MenteeRoute = ({role})=>{
    return role==="mentee"?<Outlet/> : <Navigate to="/admin/dashboard"/>
}
export default MenteeRoute