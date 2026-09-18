import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importando os componentes
import Header from './components/Header';
import Footer from './components/Footer';

// Importando as páginas
import Home from './pages/Home';
import Servicos from './pages/Servicos';
import QuemSomos from './pages/QuemSomos';
import Contato from './pages/Contato';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}