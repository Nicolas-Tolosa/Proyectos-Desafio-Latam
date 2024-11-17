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

            {/* Logo y botones de usuario */}
            <div className="flex items-center space-x-3 text-white">
                {/* Logo con link al Home */}
                <div className="flex items-center">
                    <a href="#home" className="flex items-center space-x-1">
                        <CiPizza className="text-sm md:text-lg lg:text-xl xl:text-xl 2xl:text-xl" />
                        <button className="text-sm md:text-lg lg:text-xl xl:text-xl 2xl:text-xl" >Pizzeria</button>
                    </a>
                </div>

                {/* Botones de usuario */}
                <div className="flex space-x-3">
                    {token ? (
                        <>
                            <a href="#login" className="flex items-center space-x-1">
                                <BiSolidLogIn className="text-sm md:text-lg lg:text-xl xl:text-xl 2xl:text-xl"  />
                                <span className="text-sm md:text-lg lg:text-xl xl:text-xl 2xl:text-xl"  >Login</span>
                            </a>
                            <a href="#register" className="flex items-center space-x-1">
                                <span className="text-sm md:text-lg lg:text-xl xl:text-xl 2xl:text-xl"  >Register</span>
                            </a>
                        </>
                    ) : (
                        <>
                            <a href="#profile" className="flex items-center space-x-1">
                                <FaUser className="text-sm md:text-lg lg:text-xl xl:text-xl 2xl:text-xl"   />
                                <span className="text-sm md:text-lg lg:text-xl xl:text-xl 2xl:text-xl"  >Profile</span>
                            </a>
                            <a href="#logout" className="flex items-center space-x-1">
                                <BiSolidLogOut className="text-sm md:text-lg lg:text-xl xl:text-xl 2xl:text-xl"    />
                                <span className="text-sm md:text-lg lg:text-xl xl:text-xl 2xl:text-xl"  >Logout</span>
                            </a>
                        </>
                    )}
                </div>
            </div>

            {/* Total y carrito con link al carrito */}
            <div className="flex items-center space-x-3 text-white">
                <a href="#cart" className="flex items-center space-x-1">
                    <FaCartShopping className="text-sm md:text-lg lg:text-xl xl:text-xl 2xl:text-xl"   />
                    <p className="text-sm md:text-lg lg:text-xl xl:text-xl 2xl:text-xl"  >Total:</p>
                    <button className="text-sm md:text-lg lg:text-xl xl:text-xl 2xl:text-xl"  >
                        ${formatCurrency(total)}
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Navbar;
