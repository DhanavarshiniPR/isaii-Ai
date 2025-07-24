"use client";
// src/components/Hero.jsx
import { useRef, useEffect, useState } from 'react';
import AnimatedFadeInUp from './AnimatedFadeInUp';

// Reusable AnimatedHeading component (move to top level)
function AnimatedHeading({ text, as = 'h1', style = {}, className = '' }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);
  const Tag = as;
  let idx = 0;
  return (
    <Tag ref={ref} className={className} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.04em', ...style }}>
      {text.split(/(\s|,|\n)/g).map((part, i) => {
        if (part === ' ') return <span key={i} style={{ minWidth: '0.5em', display: 'inline-block' }}>&nbsp;</span>;
        if (part === ',') return <span key={i} style={{ minWidth: '0.2em', display: 'inline-block' }}>,</span>;
        if (part === '\n') return <br key={i} />;
        const letterStyle = {
          opacity: visible ? 1 : 0,
          transform: visible ? 'none' : 'translateX(-32px)',
          transition: `opacity 0.5s ${0.08 * idx}s, transform 0.5s ${0.08 * idx++}s`,
          display: 'inline-block',
        };
        return <span key={i} style={letterStyle}>{part}</span>;
      })}
    </Tag>
  );
}

// Reusable AnimatedPill component
function AnimatedPill({ text, style = {}, className = '' }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);
  return (
    <span
      ref={ref}
      className={className}
      style={{
        display: 'inline-block',
        background: 'linear-gradient(90deg, #00fff7 20%, #8B5CF6 80%)',
        color: '#18181b',
        fontSize: '20px',
        fontWeight: 700,
        padding: '12px 28px',
        borderRadius: '28px',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textShadow: '0 0 8px #00fff799',
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(32px)',
        transition: 'opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)',
        ...style,
      }}
    >
      {text}
    </span>
  );
}

export default function Hero({ isProductsPage = false }) {
  const scheduleRef = useRef(null);
  const [hoverDir, setHoverDir] = useState(null); // 'up' | 'down' | null
  const [isMobile, setIsMobile] = useState(false);
  const [headingVisible, setHeadingVisible] = useState(false);
  const headingRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 700);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Intersection Observer for heading animation
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHeadingVisible(true);
      },
      { threshold: 0.3 }
    );
    if (headingRef.current) observer.observe(headingRef.current);
    return () => { if (headingRef.current) observer.unobserve(headingRef.current); };
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
        background: '#18181b',
        color: '#fff',
        padding: isMobile ? '32px 8px' : '64px 56px',
        borderRadius: '32px',
        margin: isMobile ? '24px 0' : '48px auto',
        maxWidth: isMobile ? '100%' : '980px',
        minHeight: isMobile ? '180px' : '340px',
        position: 'relative',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'flex-start',
        alignItems: isMobile ? 'flex-start' : 'center',
        boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
        fontFamily: 'Inter, Helvetica, Arial, sans-serif',
      }}>
        {/* Main hero text and CTA directly in section */}
        <div style={{ flex: '1', maxWidth: isMobile ? '100%' : '600px', zIndex: 2, textAlign: 'left' }}>
          <h1 style={{
            fontSize: isMobile ? '2.1rem' : '3.5rem',
            fontWeight: 800,
            marginBottom: isMobile ? '16px' : '28px',
            lineHeight: isMobile ? '1.15' : '1.08',
            color: '#fff',
            letterSpacing: '-1px',
            textAlign: 'left',
          }}>
            Innovate, Automate,<br />and Succeed with AI
          </h1>
          <p style={{
            fontSize: isMobile ? '1.05rem' : '1.35rem',
            color: '#fff',
            marginBottom: isMobile ? '24px' : '40px',
            lineHeight: '1.5',
            textAlign: 'left',
            fontWeight: 400,
          }}>
            Innovative AI technology designed to solve pressing challenges, providing businesses with strategic, actionable problem-solving tools.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexDirection: isMobile ? 'column' : 'row', width: isMobile ? '100%' : 'auto' }}>
            <a
              href="/contact"
              style={{
                display: 'flex',
                alignItems: 'center',
                background: '#222',
                borderRadius: '12px',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: isMobile ? '1rem' : '1.1rem',
                color: '#fff',
                padding: isMobile ? '12px 18px' : '14px 28px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
                border: 'none',
                cursor: 'pointer',
                marginBottom: isMobile ? '10px' : 0,
                transition: 'background 0.2s',
                gap: '12px',
              }}
            >
              <span>Schedule a call</span>
              <span style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#ff9100',
                borderRadius: '8px',
                width: isMobile ? '32px' : '36px',
                height: isMobile ? '32px' : '36px',
                marginLeft: '10px',
                transition: 'background 0.2s',
              }}>
                <svg width={isMobile ? 18 : 20} height={isMobile ? 18 : 20} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </span>
            </a>
          </div>
        </div>
        {/* Absolutely positioned 3D images for modern effect */}
        {!isMobile && (
          <>
            <img
              src="/3d-shape-1.svg"
              alt="3D Abstract Top Right"
              style={{
                position: 'absolute',
                top: '32px',
                right: '48px',
                width: '120px',
                height: '120px',
                objectFit: 'contain',
                zIndex: 1,
                transition: 'transform 0.3s',
                cursor: 'pointer',
              }}
              onMouseOver={e => e.currentTarget.style.transform = 'scale(1.08)'}
              onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
            />
            <img
              src="/3d-shape-2.svg"
              alt="3D Abstract Bottom Right"
              style={{
                position: 'absolute',
                bottom: '-60px',
                right: '32px',
                width: '140px',
                height: '140px',
                objectFit: 'contain',
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

export { AnimatedHeading, AnimatedPill };
