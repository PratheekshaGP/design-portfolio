import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() { setScrolled(window.scrollY > 40) }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = ['Work', 'About', 'Contact']

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    padding: scrolled ? '0.75rem 2.5rem' : '1.25rem 2.5rem',
    backgroundColor: scrolled ? 'rgba(237,228,219,0.92)' : 'transparent',
    backdropFilter: scrolled ? 'blur(14px)' : 'none',
    boxShadow: scrolled ? '0 2px 30px rgba(44,28,34,0.08)' : 'none',
    transition: 'all 0.35s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }

  const logoStyle = {
    fontFamily: 'Bebas Neue, cursive',
    fontSize: '1.8rem',
    color: 'var(--surface)',
    textDecoration: 'none',
    letterSpacing: '0.08em'
  }

  const ulStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '2.5rem',
    listStyle: 'none',
    margin: 0,
    padding: 0
  }

  const linkStyle = {
    fontSize: '0.72rem',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: 'var(--muted)',
    textDecoration: 'none',
    fontFamily: 'DM Sans, sans-serif'
  }

  return (
    <nav style={navStyle}>
      <a href="#hero" style={logoStyle}>PG</a>
      <ul style={ulStyle}>
        {links.map(function(link) {
          return (
            <li key={link}>
              <a href={'#' + link.toLowerCase()} style={linkStyle}>{link}</a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
