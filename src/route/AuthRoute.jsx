import {Navigate, Outlet} from "react-router-dom";

// Jika telah login, diarahkan ke OUTLET. Selain itu ke halaman Login
const AuthRoute = ({isLogin}) =>{
    return isLogin ? <Outlet/> : <Navigate to="/login" replace/>
}

export default AuthRoute