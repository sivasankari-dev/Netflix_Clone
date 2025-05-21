import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Trending from './components/Trending'
import MoreToAdd from './components/MoreToAdd'
import Faq from './components/Faq'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className='bg-gradient-to-b from-[#1D0B0D] to-stone-950'>
      <Header />
    <Hero />
    <Trending />
    <MoreToAdd />
    <Faq />
    <Footer />
    </div>
    </>
  )
}

export default App
