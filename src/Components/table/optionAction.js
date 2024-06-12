import axios from "../../utils/axios.js";

export const mentee={
    delete:(id)=>{
        console.log("delete ",id)
    },
    edit:(id)=>{
        console.log("edit ",id)
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
        axios.delete(`/mentor/${id}`)
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
export const universitas={
    delete:(id, handleRefresh)=>{
        console.log("delete ",id)
        axios.delete(`/universitas/${id}`)
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
