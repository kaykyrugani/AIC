import { useState } from 'react'
import './App.css'
import Header from '../src/sections/Header/Header';
import Hero from '../src/sections/Hero/Hero';
import SobAgenica from '../src/sections/SobAgencia/SobAgencia';
import Equipe from '../src/sections/Equipe/Equipe';
import Service from '../src/sections/Servicos/Servicos';
import SobService from '../src/sections/SobServicos/SobServicos';
import Footer from '../src/sections/Footer/Footer';

function App() {
  const [count, setCount] = useState(0)

 return (
    <>
      <Header />
      <Hero />
      <SobAgenica />  
      <Equipe /> 
      <Service />
      <SobService />
      <Footer />
    </>  

  )
}

export default App
