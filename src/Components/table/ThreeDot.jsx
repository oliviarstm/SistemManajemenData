import {useEffect, useRef, useState} from 'react';
import {useDispatch} from "react-redux";

const ThreeDot = ({ options, dataId, handleRefresh, openInputModal}) => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef();
    const dispatch = useDispatch()

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    return (
        <div className="relative inline-block text-left" ref={menuRef}>
            <div>
                <button
                    type="button"
                    className="z-0 inline-flex justify-center w-full rounded-md  px-4 py-2 bg-white text-sm font-medium text-gray-700 focus:outline-none"
                    onClick={toggleMenu}
                >
                    &#x22EE; {/* Three vertical dots */}
                </button>
            </div>

            {isOpen && (
                <div className="z-10 origin-top absolute left-1/2 transform -translate-x-1/2 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {options.map((option)=>(
                            <button key={option.label} className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left" role="menuitem" onClick={()=>option.onClick(dataId, handleRefresh, dispatch, openInputModal)}>{option.label}</button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
};

export default ThreeDot;
