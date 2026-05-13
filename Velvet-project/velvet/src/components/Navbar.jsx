import React, { useState, useEffect } from 'react'

export default function Navbar({ cartCount, onCartOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo">The Velvet <span>TABLE</span></div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {['home','menu','reviews','about','contact'].map(link => (
          <li key={link}>
            <a href={`#${link}`} onClick={() => setMenuOpen(false)}>
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      <div className="nav-right">
        <button className="cart-btn" onClick={onCartOpen}>
          🛒 Cart {cartCount > 0 && <span className="badge">{cartCount}</span>}
        </button>
        <button className="reserve-btn">Reservations</button>
        <button className="burger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  )
}
