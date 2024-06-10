import {useLocation} from "react-router-dom";

const DetailTugas=()=>{
    const location = useLocation()
    const id = location.state?.id
    const filter = location.state?.filter
    console.log(id)
    console.log(filter)
    return <></>
}

export default DetailTugas