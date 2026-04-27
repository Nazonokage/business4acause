import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ParticlesBackground from './components/ParticlesBackground'
import Navbar from './components/Navbar'
import WelcomePage from './pages/WelcomePage'
import GetStartedPage from './pages/GetStartedPage'
import AboutPage from './pages/AboutPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <ParticlesBackground />
      <Navbar />
      <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/get-started" element={<GetStartedPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App