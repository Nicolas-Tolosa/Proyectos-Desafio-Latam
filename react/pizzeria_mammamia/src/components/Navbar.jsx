import React from 'react'
import { formatCurrency } from '../utils/formatCurrency';
import { CiShoppingCart } from "react-icons/ci";


const Navbar = () => {
    const total = 25000;
    const token = false;
  return (
    <div className='flex border-2 border-red-500 justify-between'>
        <button>Pizzeria</button>

        <div>
            {
                token ? (
                    <div>
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
        <span ClassName='flex justify-center items-center'><CiShoppingCart /><button>${formatCurrency(total)}</button></span>

    </div>


  )
}

export default Navbar

