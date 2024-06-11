import semuaMentee from "../../../../public/semuaMentee.png";
import kelasA from "../../../../public/kelasA.png";
import kelasB from "../../../../public/kelasB.png";
import kelasC from "../../../../public/kelasC.png";
import absen from "../../../../public/absen.png";
import DashboardButton from "../../../Components/DashboardButton.jsx";
import menteeIndividual from "../../../../public/menteeIndividual.png";
import {useNavigate} from "react-router-dom";

const AbsenMentee = ({role}) => {
    const navigate = useNavigate()
    const handleClickAll = ()=>{
        navigate('detail', {state:{filter:"Semua Mentee"}})
    }
    const handleClickA = ()=>{
        navigate('detail', {state:{filter:"Kelas A"}})
    }
    const handleClickB = ()=>{
        navigate('detail', {state:{filter:"Kelas B"}})
    }
    const handleClickC = ()=>{
        navigate('detail', {state:{filter:"Kelas C"}})
    }
    const handleClickIndividual = ()=>{
        navigate('detail', {state:{filter:"Mentee Individual"}})
    }
    const handleClickForm = ()=>{
        navigate('form')
    }
  return (
    <div>
      <div className="  text-center p-12">
        <h1 className="text-[#6D737A] font-semibold text-4xl -pt4">Absensi</h1>
      </div>
      <div className="flex gap-12 justify-center mt-4 flex-wrap pb-6">
        <DashboardButton title="Semua Mentee" image={semuaMentee} onClick={handleClickAll}/>
        <DashboardButton title="Kelas A" image={kelasA} onClick={handleClickA}/>
        <DashboardButton title="Kelas B" image={kelasB} onClick={handleClickB}/>
        <DashboardButton title="Kelas C" image={kelasC} onClick={handleClickC}/>
          {role==='mentor'?<DashboardButton title="Mentee Individual" image={menteeIndividual} onClick={handleClickIndividual}/>:null}
          {role==='mentor'?<DashboardButton title="Form Absensi" image={absen} onClick={handleClickForm()}/>:null}
      </div>
    </div>
  );
};

export default AbsenMentee;
