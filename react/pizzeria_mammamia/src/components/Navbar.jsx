import React from 'react'
import { formatCurrency } from '../utils/formatCurrency';
import { CiShoppingCart } from "react-icons/ci";
import { CiPizza } from "react-icons/ci";


const Navbar = () => {
    const total = 25000;
    const token = true;
  return (
    <div class="flex justify-between items-center p-4">

        <div class="flex items-center">
            <CiPizza />
            <button class="text-base">Pizzeria</button>
        </div>

        <div>
            {
                token ? (
                    <div class="flex ">
                        <button>Login</button>
                        <button>Register</button>         
                    </div>

                ) : (
                    <div>
                        <button>Profile</button>
                        <button>Logout</button>
                    </div>
                )
            }
        </div>
        <div Class="flex items-center">
            <CiShoppingCart/>
            <button>${formatCurrency(total)}</button>
        </div>

    </div>


  )
}

export default Navbar

