import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Pricing from './pages/pricing/Pricing'
import Footer from './components/footer/Footer'
import TryDemo from './pages/try-demo/TryDemo'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/try-demo' element={<TryDemo />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
