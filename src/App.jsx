import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ParticlesBackground from './components/ParticlesBackground'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
import RealtyPage from './pages/RealtyPage'
import FoodTradingPage from './pages/FoodTradingPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <ParticlesBackground />
      <Navbar />
      <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/realty" element={<RealtyPage />} />
          <Route path="/food-trading" element={<FoodTradingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App