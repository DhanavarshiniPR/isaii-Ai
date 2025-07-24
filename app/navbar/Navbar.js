// src/components/Navbar.jsx
'use client'
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import './Navbar.css';
import Link from 'next/link';

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
          <div className="navbar-logo-pill">
            <h1 className="navbar-title">Isaii</h1>
            <span className="navbar-ai">AI</span>
          </div>
          <div className="navbar-links-pill">
            <nav className={`navbar-links${menuOpen ? ' open' : ''}`}>
              <Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
              <Link href="/products" className={pathname === '/products' ? 'active' : ''}>Our Products</Link>
              <Link href="/services" className={pathname === '/services' ? 'active' : ''}>Services</Link>
              <Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact</Link>
            </nav>
          </div>
          <button
            className={`navbar-hamburger${menuOpen ? ' open' : ''}`}
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      ) : (
        <>
          <div className="navbar-logo navbar-logo-pill">
            <h1 className="navbar-title">Isaii</h1>
            <span className="navbar-ai">AI</span>
          </div>
          <nav className={`navbar-links${menuOpen ? ' open' : ''}`}>  
            <Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
            <Link href="/products" className={pathname === '/products' ? 'active' : ''}>Our Products</Link>
            <Link href="/services" className={pathname === '/services' ? 'active' : ''}>Services</Link>
            <Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact</Link>
          </nav>
          <button
            className={`navbar-hamburger${menuOpen ? ' open' : ''}`}
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </>
      )}
    </header>
  );
}
