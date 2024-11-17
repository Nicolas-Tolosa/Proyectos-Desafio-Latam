import React from 'react'

const CardPizza = ({img, name, ingredients, price}) => {
  return (
    <div class="max-w-sm bg-white border border-gray-100 rounded-lg shadow dark:bg-gray-50 dark:border-gray-100">
       <div class="h-40 object-cover overflow-hidden">
            <a href="#">
                <img class="rounded-t-lg" src={img} alt="" />
            </a>
       </div>

        <div class="p-5">
            <a href="#">
                <h5 class="mb-2 sm:text-sm font-bold tracking-tight text-gray-900 dark:text-black">{name}</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{ingredients.join(', ')}</p>
            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
            </a>
            <button type="button" class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Red</button>


        </div>
    </div>

  )
}

export default CardPizza