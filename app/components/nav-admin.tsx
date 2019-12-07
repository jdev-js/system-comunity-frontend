import { Link, useLocation } from '@remix-run/react'
import './component.css'

const links = [
  {
    to: '/admin',
    text: 'Home',
  },
  {
    to: '/create-miembro',
    text: 'Crear miembro de familia',
  },
  {
    to: '/create-jefe',
    text: 'Crear jefe de familia',
  },
  {
    to: '/get-jefes',
    text: 'Ver jefes de familia',
  },
  {
    to: '/get-miembros',
    text: 'Ver miembros de familia',
  },
]

export default function NavAdmin() {
  const { pathname } = useLocation()
  return (
    <nav className='nav-container'>
      {links.map((link) => {
        return (
          <Link
            key={link.to}
            className={`${pathname === link.to && 'active'}`}
            to={link.to}
          >
            {link.text}
          </Link>
        )
      })}
      <Link to='/login' className='link-button'>
        Cerrar Sesion
      </Link>
    </nav>
  )
}
