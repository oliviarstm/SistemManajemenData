import {configureStore} from "@reduxjs/toolkit";
import reducer from "./reducer/reducer.js";
import {jwtDecode} from "jwt-decode";
import {login, logout} from "./reducer/auth.js";


const Store= configureStore({
    reducer: reducer
})

const token = localStorage.getItem("token");
if (token) {
    const decodedToken = jwtDecode(token);
    Store.dispatch(login(decodedToken));
} else {
    Store.dispatch(logout());
}

export default Store