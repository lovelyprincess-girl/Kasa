import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import './Header.scss'

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Logo Kasa" className="header__logo" />
      </Link>
      <nav className="header__nav">
        <Link to="/">Accueil</Link>
        <Link to="/a-propos">A Propos</Link>
      </nav>
    </header>
  )
}

export default Header