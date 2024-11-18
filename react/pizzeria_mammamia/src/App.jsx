import { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="mx-auto">
      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>
    </div>
  )
}

export default App
