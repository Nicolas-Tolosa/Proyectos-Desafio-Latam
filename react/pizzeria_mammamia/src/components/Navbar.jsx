import React from 'react';
import { formatCurrency } from '../utils/formatCurrency';
import { FaCartShopping } from "react-icons/fa6";
import { CiPizza } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { BiSolidLogIn } from "react-icons/bi";
import { BiSolidLogOut } from "react-icons/bi";

const Navbar = () => {
    const total = 25000;
    const token = false;

    return (
        <div className="flex justify-between bg-slate-900 items-center px-2 py-3">

            <div className="flex items-center space-x-3 text-white">
                <div className="flex items-center">
                    <a href="#home" className="flex items-center space-x-1">
                        <CiPizza className="text-xs md:text-lg lg:text-lg xl:text-base 2xl:text-base" />
                        <button className="text-xs md:text-lg lg:text-lg xl:text-base 2xl:text-base" >Pizzería</button>
                    </a>
                </div>

                <div className="flex space-x-3">
                    {token ? (
                        <>
                            <a href="#login" className="flex items-center space-x-1">
                                <BiSolidLogIn className="text-xs md:text-lg lg:text-lg xl:text-base 2xl:text-base"  />
                                <span className="text-xs md:text-lg lg:text-lg xl:text-base 2xl:text-base"  >Login</span>
                            </a>
                            <a href="#register" className="flex items-center space-x-1">
                                <span className="text-xs md:text-lg lg:text-lg xl:text-base 2xl:text-base"  >Registrar</span>
                            </a>
                        </>
                    ) : (
                        <>
                            <a href="#profile" className="flex items-center space-x-1">
                                <FaUser className="text-xs md:text-lg lg:text-lg xl:text-base 2xl:text-base"   />
                                <span className="text-xs md:text-lg lg:text-lg xl:text-base 2xl:text-base"  >Perfil</span>
                            </a>
                            <a href="#logout" className="flex items-center space-x-1">
                                <BiSolidLogOut className="text-xs md:text-lg lg:text-lg xl:text-base 2xl:text-base"    />
                                <span className="text-xs md:text-lg lg:text-lg xl:text-base 2xl:text-base"  >Logout</span>
                            </a>
                        </>
                    )}
                </div>
            </div>

            <div className="flex items-center space-x-3 text-white">
                <a href="#cart" className="flex items-center space-x-1">
                    <FaCartShopping className="text-xs md:text-lg lg:text-lg xl:text-base 2xl:text-base" />
                    <p className="text-xs md:text-lg lg:text-lg xl:text-base 2xl:text-base" >Total:</p>
                    <button className="text-xs md:text-lg lg:text-lg xl:text-base 2xl:text-base" >
                        ${formatCurrency(total)}
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Navbar;
