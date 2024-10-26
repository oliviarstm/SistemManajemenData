import {useState} from "react";
import {useNavigate} from "react-router-dom";

const FormPengunduran =()=>{
    const [formValues, setFormValues] = useState({});
    const navigate = useNavigate()
    const handleInputChange = (title, value) => {
        setFormValues({ ...formValues, [title]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Process form submission here
        console.log("Form values:", formValues);
    };

    return <div className="bg-white mx-10 my-5 p-5">
        <form onSubmit={handleSubmit}>
            <label className="flex items-center mt-5">
                <h1 className="w-[25%] font-semibold text-lg">Alasan</h1>
                <input
                    type="text"
                    className="w-[75%] grow py-2 px-3 rounded-md border"
                    onChange={(e) => handleInputChange('alasan', e.target.value)}
                />
            </label>
            <label className="flex items-center mt-5">
                <h1 className="w-[25%] font-semibold text-lg">Lampiran</h1>
                <input
                    type="file"
                    className="w-[75%] grow py-2 px-3 rounded-md border"
                    onChange={(e) => handleInputChange('lampiran', e.target.value)}
                />
            </label>
            <div className="m-8 justify-center">
                <div style={{ textAlign: "center" }}>
                    <button
                        type="button"
                        className="text-[#235EAC] border border-[#235EAC] py-1 px-5 rounded bg-white ml-6"
                        onClick={()=>navigate('/mentee/dashboard')}
                    >
                        Batal
                    </button>
                    <button
                        type="submit"
                        className="text-white py-1 px-5 ml-6 rounded bg-[#235EAC]"
                    >
                        Simpan
                    </button>
                </div>
            </div>
        </form>
    </div>
}

export default FormPengunduran