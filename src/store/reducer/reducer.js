import {combineReducers} from "@reduxjs/toolkit";
import Auth from "./auth.js";
import Mentee from "./mentee.js";
import Mentor from "./mentor.js";
import Univ from "./univ.js";
// import slice2 from "./slice2.js";

const reducer=combineReducers({
    Auth,
    Mentee,
    Mentor,
    Univ
})

export default reducer