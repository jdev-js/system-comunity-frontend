import { Link, useLocation } from '@remix-run/react'
import './component.css'
import useAuth from '~/hooks/useAuth'
import { useRef } from 'react'

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
  {
    to: '/get-gas',
    text: 'Ver sensos de gas',
  },
  {
    to: '/create-gas',
    text: 'Registrar gas',
  },
]

export const Links = () => {
  const { pathname } = useLocation()
  const Auth = useAuth()
  return (
    <>
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
      {Auth?.auth?.role === 'super-user' && (
        <Link to='/create-lider'>Crear lider de calle</Link>
      )}
      {Auth?.auth?.role === 'super-user' && (
        <Link to='/get-users'>Ver lider de calle</Link>
      )}
      <Link
        onClick={() => {
          Auth?.logout()
        }}
        to='/login'
        className='link-button'
      >
        Cerrar Sesion
      </Link>
    </>
  )
}

export default function NavAdmin() {
  const menuRef = useRef<HTMLDivElement | null>(null)

  const handleClick = () => {
    menuRef.current?.classList.toggle('menu-active')
  }

  return (
    <>
      <nav className='nav-container'>
        <button onClick={handleClick} className='button-menu'>
          Menu
        </button>
        <Links />
      </nav>
      <div ref={menuRef} className='menu-responsive'>
        <button onClick={handleClick} className='button-menu'>
          Menu
        </button>
        <Links />
      </div>
    </>
  )
}
