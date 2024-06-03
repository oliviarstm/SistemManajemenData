import {Navigate, Outlet} from "react-router-dom";

const MentorRoute = ({role})=>{
    return role==="mentor"?<Outlet/> : <Navigate to="/mentee/dashboard"/>
}
export default MentorRoute