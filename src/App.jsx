import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ParticlesBackground from './components/ParticlesBackground'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
import RealtyPage from './pages/RealtyPage'
import FoodTradingPage from './pages/FoodTradingPage'
import FoodProductsPage from './pages/FoodProductsPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <BrowserRouter>
      <ParticlesBackground />
      <Navbar />
      <main className="relative z-10 mx-auto min-h-screen w-full max-w-6xl px-3 pb-10 pt-6">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/realty" element={<RealtyPage />} />
          <Route path="/food-trading" element={<FoodTradingPage />} />
          <Route path="/food-trading/products" element={<FoodProductsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App