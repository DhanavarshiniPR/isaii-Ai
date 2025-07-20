'use client';

import React, { useState } from 'react';

export default function Footer() {
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <footer style={{
      background: '#18181a',
      borderTopLeftRadius: '24px',
      borderTopRightRadius: '24px',
      padding: '32px 36px 0 36px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      minHeight: '180px',
      width: '90%',
      margin: '32px auto 0 auto',
    }}>
      {/* Left: Brand and copyright */}
      <div style={{ minWidth: '320px' }}>
        <div style={{
          fontFamily: '"Fira Mono", "Menlo", "Monaco", "Consolas", monospace',
          fontWeight: 900,
          fontSize: '44px',
          color: '#8b8d92',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          marginBottom: '18px',
        }}>
          ISAII-AI
        </div>
        <div style={{ color: '#8b8d92', fontSize: '15px', marginTop: '8px', fontFamily: 'Inter, Arial, sans-serif', fontWeight: 400 }}>
          Copyright © 2024 - Isaii-AI
        </div>
      </div>
      {/* Right: Newsletter */}
      <div style={{ minWidth: '320px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
        <div style={{ color: '#f3f3f3', fontWeight: 700, fontSize: '1.18rem', marginBottom: '12px', textAlign: 'right', fontFamily: 'Inter, Arial, sans-serif', letterSpacing: '0.02em' }}>
          Subscribe to Our Newsletter
        </div>
        <form style={{ display: 'flex', alignItems: 'center', gap: '0', width: '100%', marginBottom: '12px', fontFamily: 'Inter, Arial, sans-serif' }} onSubmit={e => e.preventDefault()}>
          <input
            type="email"
            placeholder="Your Email"
            style={{
              background: 'transparent',
              border: 'none',
              borderBottom: '1.5px solid #444',
              color: '#8b8d92',
              fontSize: '1rem',
              padding: '8px 0',
              outline: 'none',
              width: '160px',
              borderRadius: '0',
              marginRight: '8px',
              fontFamily: 'Inter, Arial, sans-serif',
            }}
          />
          <button
            type="submit"
            style={{
              display: 'flex',
              alignItems: 'center',
              background: 'none',
              border: 'none',
              color: '#8b8d92',
              fontSize: '1.2rem',
              cursor: 'pointer',
              padding: '0',
              borderRadius: '50%',
              height: '32px',
              width: '32px',
              justifyContent: 'center',
              fontFamily: 'Inter, Arial, sans-serif',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </form>
        <div style={{ display: 'flex', gap: '8px', marginTop: '0', fontFamily: 'Inter, Arial, sans-serif' }}>
          <span style={{ background: '#232325', color: '#8b8d92', borderRadius: '6px', padding: '2px 8px', fontSize: '0.95rem', fontWeight: 500 }}>in</span>
          <span style={{ background: '#232325', color: '#8b8d92', borderRadius: '6px', padding: '2px 8px', fontSize: '0.95rem', fontWeight: 500 }}>ig</span>
        </div>
      </div>
    </footer>
  );
} 