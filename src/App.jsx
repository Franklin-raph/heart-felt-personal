import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Pricing from './pages/pricing/Pricing'
import Footer from './components/footer/Footer'
import TryDemo from './pages/try-demo/TryDemo'
import PrivacyPolicy from './pages/privacy-policy/PricacyPolicy'
import TermsOfUse from './pages/terms-of-use/TermsOfUse'
import CookiePolicy from './pages/cookie-policy/CookiePolicy'
import FAQ from './pages/faq/FAQ'
import ContactUs from './pages/contact-us/ContactUs'
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
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/terms-of-use' element={<TermsOfUse />} />
        <Route path='/cookie-policy' element={<CookiePolicy />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/contact-us' element={<ContactUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
