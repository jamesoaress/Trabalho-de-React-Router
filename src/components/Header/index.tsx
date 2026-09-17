import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={{ padding: '20px', backgroundColor: '#002B5B', color: 'white' }}>
      <h1>Contabilidade Confiança</h1>
      <nav style={{ display: 'flex', gap: '15px' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        <Link to="/quem-somos" style={{ color: 'white', textDecoration: 'none' }}>Quem Somos</Link>
        <Link to="/servicos" style={{ color: 'white', textDecoration: 'none' }}>Serviços</Link>
        <Link to="/contato" style={{ color: 'white', textDecoration: 'none' }}>Contato</Link>
      </nav>
    </header>
  );
}