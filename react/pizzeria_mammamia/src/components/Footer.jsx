import React from 'react'

const Footer = () => {
  return (
    <div>

      <div className="bg-slate-900 h-auto grid-cols-1 grid md-grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5 pt-6 justify-center pb-6">
        <div className="ml-12 flex items-center mb-6">
          <img src="/logo.jpg" alt="" className="rounded-full h-20"/>
        </div>

        <div className="flex flex-col mx-6 text-white mb-4">
          <h2 className="font-bold">MAMMA MÍA
          </h2>
          <a href="#" className="hover:underline">Acerca de nosotros</a>
          <a href="#" className="hover:underline">Ingredientes</a>
          <a href="#" className="hover:underline">Mamma Mía SpA</a>
          <a href="#" className="hover:underline">Pizzas</a>
        </div>
        <div className="flex flex-col mx-6 text-white mb-4">
          <h2 className="font-bold">AYUDA</h2>
          <a href="#" className="hover:underline">Preguntas frecuentes</a>
          <a href="#" className="hover:underline">Contacto</a>
          <a href="#" className="hover:underline">Pide por teléfono 666 666 6666</a>
        </div>
        <div className="flex flex-col mx-6 text-white mb-4">
          <h2 className="font-bold">LEGAL</h2>
          <a href="#" className="hover:underline">Términos y condiciones</a>
          <a href="#" className="hover:underline">Política de privacidad</a>
          <a href="#" className="hover:underline">Codigo Ético</a>
          <a href="#" className="hover:underline">Canal Ético</a>
        </div>
        <div className="flex flex-col mx-6 text-white mb-4">
          <h2 className="font-bold">LOCALES</h2>
          <a href="#" className="hover:underline">Nuestros locales</a>
        </div>

      </div>

      <div className="bg-red-800 h-10 flex items-center justify-center">
        <p className="text-white text-xs">© 2024 - Pizzería Mamma Mia! - Todos los derechos reservados</p>
      </div>
    </div>
  )
}

export default Footer