import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Consulta from './pages/Consulta'
import Nosotros from './pages/Nosotros'
import Servicios from './pages/Servicios'
import Legal from './pages/Legal'
import ServicioDetalle from './pages/ServicioDetalle' // 👈 nuevo import

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/consulta" element={<Consulta />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/servicios/:slug" element={<ServicioDetalle />} /> {/* 👈 detalle dinámico */}
          <Route path="/legal" element={<Legal />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}


