import {
  mentee,
  absen as absenAcion,
  mentor,
  admin,
  universitas,
} from "./optionAction.js";

export const menteeeditdelete = [
  {
    label: "Edit",
    value: "edit",
    onClick: (id, handleRefresh, dispatch, openInputModal) => mentee.edit(id, dispatch, openInputModal),
  },
  {
    label: "Delete",
    value: "delete",
    onClick: (id, handleRefresh) => mentee.delete(id),
  },
];
export const admineditdelete = [
  {
    label: "Edit",
    value: "edit",
    onClick: (id, handleRefresh) => admin.edit(id),
  },
  {
    label: "Delete",
    value: "delete",
    onClick: (id, handleRefresh) => admin.delete(id, handleRefresh),
  },
];
export const mentoreditdelete = [
  {
    label: "Edit",
    value: "edit",
    onClick: (id, handleRefresh) => mentor.edit(id),
  },
  {
    label: "Delete",
    value: "delete",
    onClick: (id, handleRefresh) => mentor.delete(id, handleRefresh),
  },
];
export const universitaseditdelete = [
  {
    label: "Edit",
    value: "edit",
    onClick: (id, handleRefresh) => universitas.edit(id),
  },
  {
    label: "Delete",
    value: "delete",
    onClick: (id, handleRefresh) => universitas.delete(id, handleRefresh),
  },
];
export const absen = [
  { label: "On Cam", value: "oncam", onClick: (id) => absenAcion.oncam(id) },
  { label: "Off Cam", value: "offcam", onClick: (id) => absenAcion.offcam(id) },
  { label: "Izin", value: "izin", onClick: (id) => absenAcion.izin(id) },
  { label: "Alpha", value: "aplha", onClick: (id) => absenAcion.alpha(id) },
];
