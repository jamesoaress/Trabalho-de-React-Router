import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="site-header">
      <nav className="navbar navbar-expand-lg navbar-dark"><div className="container">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/"><span className="brand-mark"><i className="bi bi-bar-chart-fill" /></span><span>Controller <small>Contabilidade</small></span></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Abrir menu"><span className="navbar-toggler-icon" /></button>
        <div className="collapse navbar-collapse" id="mainNav"><div className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
          <Link className="nav-link" to="/">Início</Link><Link className="nav-link" to="/quem-somos">Quem somos</Link><Link className="nav-link" to="/servicos">Serviços</Link><Link className="nav-link nav-contact" to="/contato">Fale conosco <i className="bi bi-arrow-up-right" /></Link>
        </div></div>
      </div></nav>
    </header>
  );
}