import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import './Header.scss'

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Logo Kasa" className="header__logo" />
      </Link>
      <nav className="header__nav">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/a-propos"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header