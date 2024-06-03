import {useNavigate} from "react-router-dom";

const DrawerButton = ({ title, destination }) => {
    const navigate = useNavigate()
    const handleClick = ()=>{
        navigate(destination)
    }
    return (
        <div>
            <button className="w-full text-lg py-3 font-semibold text-white text-left ps-16 hover:bg-[#FBFBFB] hover:text-[#235EAC]" onClick={()=>handleClick()}>
                {title}
            </button>
        </div>
    );
};

export default DrawerButton;
