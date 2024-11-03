import {Navigate, Outlet} from "react-router-dom";

// jika role mentor, diarahkan ke OUTLET. selain itu ke /mentee/dashboard
const MentorRoute = ({role})=>{
    return role==="mentor"?<Outlet/> : <Navigate to="/mentee/dashboard"/>
}
export default MentorRoute