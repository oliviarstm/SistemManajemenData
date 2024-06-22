import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import gambar11 from "../../public/gambar11.png";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {logout} from "../store/reducer/auth.js";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const ProfilButton = () => {
    const {name, role} = useSelector(state => state.Auth)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleEditProfile = ()=>{
        role==="admin"?navigate('/admin/profile'):null
        role==="mentor"?navigate('/mentor/profile'):null
        role==="mentee"?navigate('/mentee/profile'):null
    }
    const handleLogout=()=>{
        dispatch(logout())
        navigate("/login")
    }

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold">
                    <img src={gambar11} alt="" className="w-12" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute z-50 right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {role !== "admin"?
                            <>
                                <Menu.Item>
                                    {() => (
                                        <p
                                            className={classNames(
                                                "text-gray-700",
                                                "block px-4 py-2 text-sm mb-2 font-semibold"
                                            )}
                                        >
                                            {name}
                                        </p>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <button
                                            className={classNames(
                                                active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                                                "block w-full px-4 py-2 text-left text-sm"
                                            )}
                                            onClick={handleEditProfile}
                                        >
                                            Edit Profil
                                        </button>
                                    )}
                                </Menu.Item>
                            </>
                        :
                        null}
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    className={classNames(
                                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                                        "block w-full px-4 py-2 text-left text-sm"
                                    )}
                                    onClick={handleLogout}
                                >
                                    Keluar
                                </button>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
};

export default ProfilButton;
