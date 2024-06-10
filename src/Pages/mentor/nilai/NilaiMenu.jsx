import {useNavigate} from "react-router-dom";
import DashboardButton from "../../../Components/DashboardButton.jsx";
import semuaMentee from "../../../../public/semuaMentee.png";
import kelasA from "../../../../public/kelasA.png";
import kelasB from "../../../../public/kelasB.png";
import kelasC from "../../../../public/kelasC.png";
import menteeIndividual from "../../../../public/menteeIndividual.png";

const NilaiMenu =()=>{
    const navigate = useNavigate()
    const handleClickAll = ()=>{
        navigate('data', {state:{filter:"Semua Mentee"}})
    }
    const handleClickA = ()=>{
        navigate('data', {state:{filter:"Kelas A"}})
    }
    const handleClickB = ()=>{
        navigate('data', {state:{filter:"Kelas B"}})
    }
    const handleClickC = ()=>{
        navigate('data', {state:{filter:"Kelas C"}})
    }
    const handleClickIndividual = ()=>{
        navigate('data', {state:{filter:"Mentee Individual"}})
    }
    return (
        <div>
            <div className="  text-center p-12">
                <h1 className="text-[#6D737A] font-semibold text-4xl -pt4">
                    Data Nilai
                </h1>
            </div>
            <div className="flex gap-12 justify-center mt-4 flex-wrap pb-6">
                <DashboardButton title="Semua Mentee" image={semuaMentee}  onClick={handleClickAll}/>
                <DashboardButton title="Kelas A" image={kelasA} onClick={handleClickA}/>
                <DashboardButton title="Kelas B" image={kelasB} onClick={handleClickB}/>
                <DashboardButton title="Kelas C" image={kelasC} onClick={handleClickC}/>
                <DashboardButton title="Mentee Individual" image={menteeIndividual} onClick={handleClickIndividual}/>
            </div>
        </div>
    );
}

export default NilaiMenu