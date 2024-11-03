import {combineReducers} from "@reduxjs/toolkit";
import Auth from "./auth.js";
import Mentee from "./mentee.js";
import Mentor from "./mentor.js";
import Univ from "./univ.js";
import Tugas from "./Tugas.js";
import Absen from "./absensi.js";

const reducer=combineReducers({
    Auth,
    Mentee,
    Mentor,
    Univ,
    Tugas,
    Absen
})

export default reducer