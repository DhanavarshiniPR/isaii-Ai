// src/components/Navbar.jsx
'use client'
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on resize if desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={`navbar-header${isScrolled ? ' scrolled' : ''}`}>  
      {isScrolled ? (
        <div className="navbar-collapsed-container">
          <div className="navbar-logo">
            <h1 className="navbar-title">Isaii</h1>
            <span className="navbar-ai">AI</span>
          </div>
          <nav className={`navbar-links${menuOpen ? ' open' : ''}`}>
            <a href="/" className={pathname === '/' ? 'active' : ''}>Home</a>
            <a href="/products" className={pathname === '/products' ? 'active' : ''}>Our Products</a>
            <a href="/services" className={pathname === '/services' ? 'active' : ''}>Services</a>
            <a href="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact</a>
          </nav>
        </div>
      ) : (
        <>
          <div className="navbar-logo">
            <h1 className="navbar-title">Isaii</h1>
            <span className="navbar-ai">AI</span>
          </div>
          <nav className={`navbar-links${menuOpen ? ' open' : ''}`}>
            <a href="/" className={pathname === '/' ? 'active' : ''}>Home</a>
            <a href="/products" className={pathname === '/products' ? 'active' : ''}>Our Products</a>
            <a href="/services" className={pathname === '/services' ? 'active' : ''}>Services</a>
            <a href="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact</a>
          </nav>
        </>
      )}
      <button
        className={`navbar-hamburger${menuOpen ? ' open' : ''}`}
        aria-label="Toggle navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}
