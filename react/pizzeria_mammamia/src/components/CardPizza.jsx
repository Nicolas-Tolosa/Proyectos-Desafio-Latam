import React from 'react'
import { formatCurrency } from '../utils/formatCurrency'

const CardPizza = ({img, name, ingredients, price}) => {
  return (
    <div className="max-w-xs flex flex-col items-center bg-white border border-gray-100 rounded-lg shadow dark:bg-gray-50 dark:border-gray-100">
       <div className="h-40 object-cover overflow-hidden">
            <a href="#">
                <img className="rounded-t-lg" src={img} alt="" />
            </a>
       </div>

        <div>
            <a href="#">
                <h5 className="mb-2 mx-4 mt-2 text-2xl md:text-2xl lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-black">{name}</h5>
            </a>
            <p className="mb-3 mx-4 font-normal text-gray-700 dark:text-gray-400">{ingredients.join(', ')}</p>

            <div className="flex justify-between items-center ">
                <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-bold rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 mx-4">Añadir: ${formatCurrency(price)}</button>

                <button type="button" className="text-white bg-green-600 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-900 font-bold rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-green-600 dark:hover:bg-green-800 dark:focus:bg-green-800 mx-4">Ver más</button>
            </div>

        </div>
        <div>

        </div>
    </div>

  )
}

export default CardPizza