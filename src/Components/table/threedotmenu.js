import {mentee} from "./optionAction.js";

export const editdelete = [
    {label:"Edit", value:"edit", onClick:(id)=>mentee.edit(id)},
    {label:"Delete", value:"delete", onClick: (id)=>mentee.delete(id)},
]