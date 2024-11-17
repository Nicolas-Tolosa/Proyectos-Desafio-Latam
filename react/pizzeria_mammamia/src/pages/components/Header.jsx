import React from 'react';

const Header = () => {
  return (
    <div className="relative w-full bg-cover bg-center flex flex-col items-center justify-center text-white" style={{ backgroundImage: "url('/Header.jpg')" }}>
      <img src="/logo.jpg" alt="Logo Pizzeria Mamma Mía" className="object-cover rounded-full"/>
      <h1 className="text-4xl font-bold">¡Pizzeria Mamma Mía!</h1>
      <p className="mt-2 text-lg">Tradición Italiana directa a tu mesa</p>
    </div>
  );
};

export default Header;
