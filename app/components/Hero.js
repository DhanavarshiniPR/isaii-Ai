"use client";
// src/components/Hero.jsx
import { useRef, useEffect, useState } from 'react';
import AnimatedFadeInUp from './AnimatedFadeInUp';
export default function Hero({ isProductsPage = false }) {
  const scheduleRef = useRef(null);
  const [hoverDir, setHoverDir] = useState(null); // 'up' | 'down' | null
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 700);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mouse enter handler to detect direction
  function handleMouseEnter(e) {
    const rect = scheduleRef.current.getBoundingClientRect();
    const y = e.clientY;
    if (y < rect.top + rect.height / 2) {
      setHoverDir('up');
    } else {
      setHoverDir('down');
    }
  }
  function handleMouseLeave() {
    setHoverDir(null);
  }

  return (
    <>
      <section style={{
        backgroundColor: '#111112',
        color: '#fff',
        padding: isMobile ? '28px 0 28px 0' : '48px 0 48px 32px',
        borderRadius: isMobile ? '16px' : '32px',
        margin: isMobile ? '20px 0' : '40px auto',
        maxWidth: isMobile ? '100%' : '900px',
        minHeight: isMobile ? '180px' : '320px',
        position: 'relative',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'flex-start',
        alignItems: isMobile ? 'flex-start' : 'center',
        boxShadow: '0 12px 48px rgba(0,0,0,0.22)'
      }}>
        {/* Main hero text and CTA directly in section */}
        <div style={{ flex: '1', maxWidth: isMobile ? '100%' : '650px', zIndex: 2 }}>
          <h1 style={{ 
            fontSize: isMobile ? '2.2rem' : '72px', 
            fontWeight: '900', 
            marginBottom: isMobile ? '18px' : '32px',
            lineHeight: isMobile ? '1.15' : '1.08',
            background: 'linear-gradient(135deg, #fff, #e5e7eb)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            wordBreak: 'break-word',
            textAlign: isMobile ? 'left' : 'inherit',
          }}>
            Innovate, Automate,<br />
            and Succeed with AI
          </h1>
          <p style={{ 
            fontSize: isMobile ? '1rem' : '22px', 
            color: '#d1d5db', 
            marginBottom: isMobile ? '28px' : '48px',
            lineHeight: isMobile ? '1.5' : '1.6',
            textAlign: isMobile ? 'left' : 'inherit',
          }}>
            Innovative AI technology designed to solve pressing challenges,<br />
            providing businesses with strategic, actionable problem-solving<br />
            tools.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '10px' : '20px', flexDirection: isMobile ? 'column' : 'row', width: isMobile ? '100%' : 'auto' }}>
            <a
              href="/contact"
              ref={scheduleRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#444',
                borderRadius: '16px',
                textDecoration: 'none',
                overflow: 'hidden',
                fontWeight: 700,
                fontSize: isMobile ? '1rem' : '20px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
                transition: 'box-shadow 0.2s',
                cursor: 'pointer',
                border: 'none',
                padding: 0,
                height: isMobile ? '44px' : '56px',
                width: isMobile ? '100%' : 'auto',
                justifyContent: 'center',
              }}
            >
              <span
                style={{
                  color: '#fff',
                  padding: isMobile ? '0 18px' : '0 36px',
                  display: 'flex',
                  alignItems: 'center',
                  height: '100%',
                  fontWeight: 700,
                  fontSize: isMobile ? '1rem' : '20px',
                  letterSpacing: '0.01em',
                  whiteSpace: 'nowrap',
                  transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1)',
                  transform:
                    hoverDir === 'up' ? 'translateY(-12px)' :
                    hoverDir === 'down' ? 'translateY(12px)' :
                    'translateY(0)',
                }}
              >
                Schedule a call
              </span>
              <span
                style={{
                  background: '#ff6a00',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: isMobile ? '44px' : '56px',
                  height: isMobile ? '44px' : '56px',
                  borderRadius: '16px',
                  transition: 'background 0.2s',
                  fontSize: isMobile ? '20px' : '28px',
                }}
              >
                <svg width={isMobile ? '24' : '32'} height={isMobile ? '24' : '32'} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </span>
            </a>
          </div>
        </div>
        {/* Absolutely positioned 3D images for modern effect */}
        {!isMobile && (
          <>
            <img
              src="/robo.jpeg"
              alt="Tech Abstract Top Right"
              style={{
                position: 'absolute',
                top: '16px',
                right: '32px',
                width: '160px',
                height: '160px',
                objectFit: 'cover',
                borderRadius: '50%',
                filter: 'drop-shadow(0 8px 32px #0008)',
                zIndex: 1,
                transition: 'transform 0.3s',
                cursor: 'pointer',
              }}
              onMouseOver={e => e.currentTarget.style.transform = 'scale(1.08)'}
              onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
            />
            <img
              src="/ai.jpeg"
              alt="Tech Abstract Bottom Right"
              style={{
                position: 'absolute',
                bottom: '-60px',
                right: '16px',
                width: '220px',
                height: '220px',
                objectFit: 'cover',
                borderRadius: '50%',
                filter: 'drop-shadow(0 12px 48px #000a)',
                zIndex: 1,
                transition: 'transform 0.3s',
                cursor: 'pointer',
              }}
              onMouseOver={e => e.currentTarget.style.transform = 'scale(1.08)'}
              onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
            />
            <img
              src="/tech.jpeg"
              alt="Tech Abstract Bottom Center Right"
              style={{
                position: 'absolute',
                bottom: '-80px',
                right: '240px',
                width: '160px',
                height: '160px',
                objectFit: 'cover',
                borderRadius: '50%',
                filter: 'drop-shadow(0 8px 32px #0008)',
                zIndex: 1,
                transition: 'transform 0.3s',
                cursor: 'pointer',
              }}
              onMouseOver={e => e.currentTarget.style.transform = 'scale(1.08)'}
              onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
            />
          </>
        )}
      </section>

      {/* Additional paragraph section below the Hero container */}
      <section style={{
        padding: '60px 20px',
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '48px',
          fontWeight: 'bold',
          color: '#1f2937',
          marginBottom: '24px',
          lineHeight: '1.2'
        }}>
          {isProductsPage ? (
            <>
              AI Telephony &<br />
              Communication Solutions
            </>
          ) : (
            <>
              Unleash the Power of<br />
              Our AI Innovations
            </>
          )}
        </h2>
        <p style={{
          fontSize: '20px',
          color: '#6b7280',
          lineHeight: '1.6',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          {isProductsPage ? (
            <>
              From voice recognition to intelligent chatbots, our AI products<br />
              seamlessly integrate into your existing infrastructure, empowering<br />
              you to deliver exceptional customer experiences.
            </>
          ) : (
            <>
              From data processing to intelligent automation, our AI solutions<br />
              seamlessly integrate into your existing infrastructure, empowering<br />
              you to make smarter, faster decisions.
            </>
          )}
        </p>
      </section>
     
    </>
  )
}
