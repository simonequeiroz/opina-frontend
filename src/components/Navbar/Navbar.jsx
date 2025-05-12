import { Link } from 'react-router-dom';
import './Navbar.css'; // Se estiver usando estilos personalizados

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Página Inicial</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/login">Login</Link>
      <Link to="/upload">Upload</Link>
      <Link to="/arquivos">Arquivos</Link>
    </nav>
  );
}

export default Navbar;
