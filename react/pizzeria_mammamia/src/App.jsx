import { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar></Navbar>
    </div>
  )
}

export default App
