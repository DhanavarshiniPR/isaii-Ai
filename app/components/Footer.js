'use client';

import React, { useState, useEffect } from 'react';

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!mounted) return null;

  return (
    <footer style={{
      background: 'rgba(24,24,27,0.96)',
      borderTopLeftRadius: '40px',
      borderTopRightRadius: '40px',
      borderTop: 'none',
      boxShadow: '0 4px 32px rgba(0,0,0,0.18)',
      padding: isMobile ? '36px 12px 0 12px' : '64px 60px 0 60px',
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      justifyContent: isMobile ? 'flex-start' : 'space-between',
      alignItems: isMobile ? 'flex-start' : 'flex-start',
      minHeight: '220px',
      width: '100%',
      minWidth: 0,
      margin: '0 auto 0 auto',
      fontFamily: 'Inter, Helvetica, Arial, sans-serif',
      color: '#fff',
      position: 'relative',
      borderRadius: '40px 40px 0 0',
    }}>
      {/* Left: Brand and copyright */}
      <div style={{ minWidth: isMobile ? 0 : '320px', width: isMobile ? '100%' : undefined, marginBottom: isMobile ? '18px' : 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
        <div style={{
          fontFamily: 'Georgia, Times, serif',
          fontWeight: 700,
          fontSize: isMobile ? '2.2rem' : '4rem',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginBottom: '18px',
          color: '#888',
          background: 'none',
          textShadow: 'none',
        }}>
          ISAII-AI
        </div>
        <div style={{ color: '#fff', fontSize: '1rem', marginTop: '8px', fontFamily: 'Inter, Arial, sans-serif', fontWeight: 400 }}>
          Copyright © 2024 - Isaii-AI
        </div>
      </div>
      {/* Right: Newsletter and social icons */}
      <div style={{ minWidth: isMobile ? 0 : '320px', width: isMobile ? '100%' : undefined, display: 'flex', flexDirection: 'column', alignItems: isMobile ? 'flex-start' : 'flex-end', justifyContent: 'space-between', height: '100%' }}>
        <div style={{ color: '#ccc', fontWeight: 600, fontSize: isMobile ? '1.1rem' : '1.5rem', marginBottom: '24px', textAlign: isMobile ? 'left' : 'right', fontFamily: 'Inter, Arial, sans-serif', letterSpacing: '0.02em', textShadow: 'none' }}>
          Subscribe to Our Newsletter
        </div>
        <form style={{ display: 'flex', alignItems: 'center', gap: '0', width: isMobile ? '100%' : '340px', marginBottom: '24px', fontFamily: 'Inter, Arial, sans-serif', borderBottom: '1.5px solid #444', paddingBottom: '8px' }} onSubmit={e => e.preventDefault()}>
          <input
            type="email"
            placeholder="Your Email"
            style={{
              background: 'transparent',
              border: 'none',
              color: '#fff',
              fontSize: '1.1rem',
              padding: '0',
              outline: 'none',
              width: '100%',
              fontFamily: 'Inter, Arial, sans-serif',
              boxShadow: 'none',
              transition: 'border-color 0.2s',
            }}
          />
          <button
            type="submit"
            style={{
              display: 'flex',
              alignItems: 'center',
              background: 'none',
              border: 'none',
              color: '#fff',
              fontSize: '1.3rem',
              cursor: 'pointer',
              padding: '0 0 0 8px',
              borderRadius: '50%',
              height: '32px',
              width: '32px',
              justifyContent: 'center',
              fontFamily: 'Inter, Arial, sans-serif',
              boxShadow: 'none',
              transition: 'color 0.2s',
            }}
            onMouseOver={e => {
              e.currentTarget.style.color = '#ff9100';
            }}
            onMouseOut={e => {
              e.currentTarget.style.color = '#fff';
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </form>
        <div style={{ display: 'flex', gap: '12px', marginTop: '0', fontFamily: 'Inter, Arial, sans-serif', justifyContent: isMobile ? 'flex-start' : 'flex-end' }}>
          <span style={{ color: '#fff', fontSize: '1.3rem', cursor: 'pointer' }}>🌐</span>
          <span style={{ color: '#fff', fontSize: '1.3rem', cursor: 'pointer' }}>💬</span>
          <span style={{ color: '#fff', fontSize: '1.3rem', cursor: 'pointer' }}>🤖</span>
        </div>
      </div>
    </footer>
  );
} 