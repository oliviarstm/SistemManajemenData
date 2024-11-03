import axios from "../../utils/axios.js";
import {setMenteeEditId} from "../../store/reducer/mentee.js";
import {setMentorEditId} from "../../store/reducer/mentor.js";
import {setUnivEditId} from "../../store/reducer/univ.js";
import {setTugasEditId} from "../../store/reducer/tugas.js";
import Swal from "sweetalert2";



export const mentee={
    delete:(id, handleRefresh)=>{
        console.log("delete ",id)
        Swal.fire({
            title:"Apakah anda yakin?",
            text:"Setelah menghapus data tidak akan ditampilkan lagi!",
            icon:"warning",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText:'Iya, hapus!',
            cancelButtonText:"Tidak"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`/mentee/${id}`)
                    .then(res=>{
                        console.log(res.data.msg)
                        handleRefresh()
                    })
                    .catch(err=>{
                        Swal.fire({
                            title: "Terjadi Kesalahan",
                            text: "Periksa kembali Koneksi",
                            icon: "error"
                        })
                        console.log(err)
                    })
            }
        })
    },
    edit:(id, dispatch, openInputModal)=>{
        console.log("edit ",id)
        openInputModal()
        dispatch(setMenteeEditId(id))
    }
}

export const admin={
    delete:(id, handleRefresh)=>{
        console.log("delete ",id)
        axios.delete(`/admin/${id}`)
            .then(res=>{
                console.log(res.data.msg)
                handleRefresh()
            })
            .catch(err=>{
                console.log(err)
            })

    },
    edit:(id)=>{
        console.log("edit ",id)
    }
}

export const mentor={
    delete:(id, handleRefresh)=>{
        console.log("delete ",id)
        Swal.fire({
            title:"Apakah anda yakin?",
            text:"Setelah menghapus data tidak akan ditampilkan lagi!",
            icon:"warning",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText:'Iya, hapus!',
            cancelButtonText:"Tidak"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`/mentor/${id}`)
                    .then(res=>{
                        console.log(res.data.msg)
                        handleRefresh()
                    })
                    .catch(err=>{
                        Swal.fire({
                            title: "Terjadi Kesalahan",
                            text: "Periksa Koneksi dan pastikan mentee tidak terasosiasi",
                            icon: "error"
                        })
                        console.log(err)
                    })
            }
        })
    },
    edit:(id, dispatch, openInputModal)=>{
        console.log("edit ",id)
        openInputModal()
        dispatch(setMentorEditId(id))
    }
}
export const universitas={
    delete:(id, handleRefresh)=>{
        console.log("delete ",id)
        Swal.fire({
            title:"Apakah anda yakin?",
            text:"Setelah menghapus data tidak akan ditampilkan lagi!",
            icon:"warning",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText:'Iya, hapus!',
            cancelButtonText:"Tidak"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`/universitas/${id}`)
                    .then(res=>{
                        console.log(res.data.msg)
                        handleRefresh()
                    })
                    .catch(err=>{
                        Swal.fire({
                            title: "Terjadi Kesalahan",
                            text: "Periksa Koneksi dan pastikan mentee tidak terasosiasi",
                            icon: "error"
                        })
                        console.log(err)
                    })
            }
        })
    },
    edit:(id, dispatch, openInputModal)=>{
        console.log("edit ",id)
        openInputModal()
        dispatch(setUnivEditId(id))
    }
}
export const tugas={
    delete:(id, handleRefresh)=>{
        console.log("delete ",id)
        Swal.fire({
            title:"Apakah anda yakin?",
            text:"Data pengumpulan akan ikut terhapus",
            icon:"warning",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText:'Iya, hapus!',
            cancelButtonText:"Tidak"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`/tugas/${id}`)
                    .then(res=>{
                        console.log(res.data.msg)
                        handleRefresh()
                    })
                    .catch(err=>{
                        Swal.fire({
                            title: "Terjadi Kesalahan",
                            text: "Periksa Koneksi",
                            icon: "error"
                        })
                        console.log(err)
                    })
            }
        })
    },
    edit:(id, dispatch, openInputModal)=>{
        console.log("edit ",id)
        openInputModal()
        dispatch(setTugasEditId(id))
    }
}


export const absen={
    oncam:(id)=>{
        console.log("oncam ",id)
    },
    offcam:(id)=>{
        console.log("offcam ",id)
    },
    izin:(id)=>{
        console.log("izin ",id)
    },
    alpha:(id)=>{
        console.log("alpha ",id)
    }
}
