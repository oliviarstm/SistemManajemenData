import {
  mentee,
  absen as absenAcion,
  mentor,
  admin,
  universitas, tugas,
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
    onClick: (id, handleRefresh) => mentee.delete(id, handleRefresh),
  },
];
export const mentoreditdelete = [
  {
    label: "Edit",
    value: "edit",
    onClick: (id, handleRefresh, dispatch, openInputModal) => mentor.edit(id, dispatch, openInputModal),
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
    onClick: (id, handleRefresh, dispatch, openInputModal) => universitas.edit(id, dispatch, openInputModal),
  },
  {
    label: "Delete",
    value: "delete",
    onClick: (id, handleRefresh) => universitas.delete(id, handleRefresh),
  },
];
export const tugaseditdelete = [
  {
    label: "Edit",
    value: "edit",
    onClick: (id, handleRefresh, dispatch, openInputModal) => tugas.edit(id, dispatch, openInputModal),
  },
  {
    label: "Delete",
    value: "delete",
    onClick: (id, handleRefresh) => tugas.delete(id, handleRefresh),
  },
];
