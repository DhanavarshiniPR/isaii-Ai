'use client';

import React, { useState, useEffect } from 'react';

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <footer style={{
      background: 'rgba(18, 22, 34, 0.82)',
      backdropFilter: 'blur(18px) saturate(180%)',
      WebkitBackdropFilter: 'blur(18px) saturate(180%)',
      borderTopLeftRadius: '24px',
      borderTopRightRadius: '24px',
      borderTop: '2.5px solid #00fff7',
      boxShadow: '0 0 32px #00fff733',
      padding: isMobile ? '24px 8px 0 8px' : '32px 36px 0 36px',
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      justifyContent: isMobile ? 'flex-start' : 'space-between',
      alignItems: isMobile ? 'flex-start' : 'flex-start',
      minHeight: '180px',
      width: isMobile ? '100%' : '90%',
      minWidth: 0,
      margin: '32px auto 0 auto',
      fontFamily: 'Fira Mono, Menlo, Monaco, Consolas, monospace',
      color: '#fff',
      position: 'relative',
    }}>
      {/* Left: Brand and copyright */}
      <div style={{ minWidth: isMobile ? 0 : '320px', width: isMobile ? '100%' : undefined, marginBottom: isMobile ? '18px' : 0 }}>
        <div style={{
          fontFamily: 'Fira Mono, Menlo, Monaco, Consolas, monospace',
          fontWeight: 900,
          fontSize: '44px',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          marginBottom: '18px',
          background: 'linear-gradient(90deg, #00fff7 20%, #8B5CF6 80%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textShadow: '0 0 16px #00fff7cc',
        }}>
          ISAII-AI
        </div>
        <div style={{ color: '#00fff7', fontSize: '15px', marginTop: '8px', fontFamily: 'Inter, Arial, sans-serif', fontWeight: 400, textShadow: '0 0 8px #00fff799' }}>
          Empowering Business with AI
        </div>
        <div style={{ color: '#8b8d92', fontSize: '15px', marginTop: '8px', fontFamily: 'Inter, Arial, sans-serif', fontWeight: 400 }}>
          Copyright © 2024 - Isaii-AI
        </div>
      </div>
      {/* Right: Newsletter */}
      <div style={{ minWidth: isMobile ? 0 : '320px', width: isMobile ? '100%' : undefined, display: 'flex', flexDirection: 'column', alignItems: isMobile ? 'flex-start' : 'flex-end' }}>
        <div style={{ color: '#fff', fontWeight: 700, fontSize: '1.18rem', marginBottom: '12px', textAlign: isMobile ? 'left' : 'right', fontFamily: 'Inter, Arial, sans-serif', letterSpacing: '0.02em', textShadow: '0 0 8px #8B5CF6cc' }}>
          Subscribe to Our Newsletter
        </div>
        <form style={{ display: 'flex', alignItems: 'center', gap: '0', width: '100%', marginBottom: '12px', fontFamily: 'Inter, Arial, sans-serif' }} onSubmit={e => e.preventDefault()}>
          <input
            type="email"
            placeholder="Your Email"
            style={{
              background: 'rgba(30, 30, 40, 0.92)',
              border: 'none',
              borderBottom: '2px solid #8B5CF6',
              color: '#fff',
              fontSize: '1rem',
              padding: '8px 0',
              outline: 'none',
              width: isMobile ? '100%' : '160px',
              borderRadius: '0',
              marginRight: '8px',
              fontFamily: 'Inter, Arial, sans-serif',
              boxShadow: '0 0 8px #8B5CF633',
              transition: 'box-shadow 0.2s, border-color 0.2s',
            }}
            onFocus={e => {
              e.target.style.borderBottom = '2px solid #00fff7';
              e.target.style.boxShadow = '0 0 16px #00fff7cc';
            }}
            onBlur={e => {
              e.target.style.borderBottom = '2px solid #8B5CF6';
              e.target.style.boxShadow = '0 0 8px #8B5CF633';
            }}
          />
          <button
            type="submit"
            style={{
              display: 'flex',
              alignItems: 'center',
              background: 'none',
              border: 'none',
              color: '#00fff7',
              fontSize: '1.2rem',
              cursor: 'pointer',
              padding: '0',
              borderRadius: '50%',
              height: '32px',
              width: '32px',
              justifyContent: 'center',
              fontFamily: 'Inter, Arial, sans-serif',
              boxShadow: '0 0 8px #00fff7cc',
              transition: 'box-shadow 0.2s, color 0.2s',
            }}
            onMouseOver={e => {
              e.currentTarget.style.boxShadow = '0 0 16px #00fff7cc';
              e.currentTarget.style.color = '#8B5CF6';
            }}
            onMouseOut={e => {
              e.currentTarget.style.boxShadow = '0 0 8px #00fff7cc';
              e.currentTarget.style.color = '#00fff7';
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', filter: 'drop-shadow(0 0 4px #00fff7cc)' }}>
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </form>
        <div style={{ display: 'flex', gap: '8px', marginTop: '0', fontFamily: 'Inter, Arial, sans-serif' }}>
          <span style={{ background: 'rgba(30, 30, 40, 0.92)', color: '#00fff7', borderRadius: '6px', padding: '2px 8px', fontSize: '1.1rem', fontWeight: 500, boxShadow: '0 0 8px #00fff7cc', transition: 'box-shadow 0.2s, color 0.2s', cursor: 'pointer' }}
            onMouseOver={e => { e.currentTarget.style.boxShadow = '0 0 16px #8B5CF6cc'; e.currentTarget.style.color = '#8B5CF6'; }}
            onMouseOut={e => { e.currentTarget.style.boxShadow = '0 0 8px #00fff7cc'; e.currentTarget.style.color = '#00fff7'; }}
          >💬</span>
          <span style={{ background: 'rgba(30, 30, 40, 0.92)', color: '#00fff7', borderRadius: '6px', padding: '2px 8px', fontSize: '1.1rem', fontWeight: 500, boxShadow: '0 0 8px #00fff7cc', transition: 'box-shadow 0.2s, color 0.2s', cursor: 'pointer' }}
            onMouseOver={e => { e.currentTarget.style.boxShadow = '0 0 16px #8B5CF6cc'; e.currentTarget.style.color = '#8B5CF6'; }}
            onMouseOut={e => { e.currentTarget.style.boxShadow = '0 0 8px #00fff7cc'; e.currentTarget.style.color = '#00fff7'; }}
          >🌐</span>
          <span style={{ background: 'rgba(30, 30, 40, 0.92)', color: '#00fff7', borderRadius: '6px', padding: '2px 8px', fontSize: '1.1rem', fontWeight: 500, boxShadow: '0 0 8px #00fff7cc', transition: 'box-shadow 0.2s, color 0.2s', cursor: 'pointer' }}
            onMouseOver={e => { e.currentTarget.style.boxShadow = '0 0 16px #8B5CF6cc'; e.currentTarget.style.color = '#8B5CF6'; }}
            onMouseOut={e => { e.currentTarget.style.boxShadow = '0 0 8px #00fff7cc'; e.currentTarget.style.color = '#00fff7'; }}
          >🤖</span>
        </div>
      </div>
    </footer>
  );
} 