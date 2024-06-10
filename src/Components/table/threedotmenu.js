import {mentee, absen as absenAcion} from "./optionAction.js";

export const editdelete = [
    {label:"Edit", value:"edit", onClick:(id)=>mentee.edit(id)},
    {label:"Delete", value:"delete", onClick: (id)=>mentee.delete(id)},
]
export const absen = [
    {label:"On Cam", value:"oncam", onClick:(id)=>absenAcion.oncam(id)},
    {label:"Off Cam", value:"offcam", onClick: (id)=>absenAcion.offcam(id)},
    {label:"Izin", value:"izin", onClick: (id)=>absenAcion.izin(id)},
    {label:"Alpha", value:"aplha", onClick: (id)=>absenAcion.alpha(id)},
]