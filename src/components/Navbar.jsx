import { Link } from 'react-router-dom';
import "./Navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook, faBell, faUser } from '@fortawesome/free-regular-svg-icons';
import { faBriefcase, faPlay } from '@fortawesome/free-solid-svg-icons';


const navigationItems = [
  { path: '/', icon: faUser, label: 'Perfiles' },
  { path: '/internado', icon: faAddressBook, label: 'Internado' },
  { path: '/chedraui', icon: faUser, label: 'Chedraui' },
  { path: '/notificacion', icon: faBell, label: 'Notificacion' },
  { path: '/empleo', icon: faBriefcase, label: 'Empleo' },
  { path: '/curso', icon: faPlay, label: 'Curso' },

];

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        {navigationItems.map((item) => (
          <li className="nav-item" key={item.path}>
            <Link to={item.path} className="nav-link">
              <FontAwesomeIcon icon={item.icon} size="2x" style={{ fontSize: '24px' }}/> {/* Renderiza el icono de Font Awesome */}
              <span className="text-small">{item.label}</span> {/* Agrega el span para mostrar la etiqueta */}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;