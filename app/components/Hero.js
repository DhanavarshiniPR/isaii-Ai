"use client";
// src/components/Hero.jsx
import { useRef, useEffect, useState } from 'react';
import AnimatedFadeInUp from './AnimatedFadeInUp';
export default function Hero({ isProductsPage = false }) {
  const scheduleRef = useRef(null);
  const [hoverDir, setHoverDir] = useState(null); // 'up' | 'down' | null

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
        padding: '48px 0 48px 32px',
        borderRadius: '32px',
        margin: '40px auto',
        maxWidth: '900px',
        minHeight: '320px',
        position: 'relative',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        boxShadow: '0 12px 48px rgba(0,0,0,0.22)'
      }}>
        {/* Main hero text and CTA directly in section */}
        <div style={{ flex: '1', maxWidth: '650px', zIndex: 2 }}>
          <h1 style={{ 
            fontSize: '72px', 
            fontWeight: '900', 
            marginBottom: '32px',
            lineHeight: '1.08',
            background: 'linear-gradient(135deg, #fff, #e5e7eb)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Innovate, Automate,<br />
            and Succeed with AI
          </h1>
          <p style={{ 
            fontSize: '22px', 
            color: '#d1d5db', 
            marginBottom: '48px',
            lineHeight: '1.6'
          }}>
            Innovative AI technology designed to solve pressing challenges,<br />
            providing businesses with strategic, actionable problem-solving<br />
            tools.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
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
                fontSize: '20px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
                transition: 'box-shadow 0.2s',
                cursor: 'pointer',
                border: 'none',
                padding: 0,
                height: '56px',
              }}
            >
              <span
                style={{
                  color: '#fff',
                  padding: '0 36px',
                  display: 'flex',
                  alignItems: 'center',
                  height: '100%',
                  fontWeight: 700,
                  fontSize: '20px',
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
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  transition: 'background 0.2s',
                  fontSize: '28px',
                }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </span>
            </a>
          </div>
        </div>
        {/* Absolutely positioned 3D images for modern effect */}
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
      {/* Feature cards below hero text */}
      <section style={{
        background: 'none',
        padding: '32px 0 0 0',
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '32px',
          width: '100%',
          maxWidth: '1200px',
        }}>
          {/* Card 1 */}
          <div style={{
            background: '#fff',
            borderRadius: '28px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
            padding: '36px 32px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            maxHeight: '300px',
            maxWidth: '600px',
          }}>
            <span style={{ fontSize: '38px', color: '#aaa', marginBottom: '18px' }}>🚀</span>
            <div style={{ fontWeight: 700, fontSize: '22px', marginBottom: '12px', color: '#222' }}>Products</div>
            <div style={{ color: '#555', fontSize: '16px', lineHeight: '1.6' }}>
              Explore our suite of advanced AI solutions crafted to optimize workflows, elevate user experiences, and foster innovation across diverse industries and platforms.
            </div>
          </div>
          {/* Card 2 */}
          <div style={{
            background: '#fff',
            borderRadius: '28px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
            padding: '36px 32px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            maxHeight: '300px',
            maxWidth: '500px',
          }}>
            <span style={{ fontSize: '38px', color: '#aaa', marginBottom: '18px' }}>🧭</span>
            <div style={{ fontWeight: 700, fontSize: '22px', marginBottom: '12px', color: '#222' }}>Design</div>
            <div style={{ color: '#555', fontSize: '16px', lineHeight: '1.6' }}>
              Redefine digital experiences with our dynamic design expertise, crafted to engage users through visually compelling and purpose-driven creations.
            </div>
          </div>
          {/* Card 3 */}
          <div style={{
            background: '#fff',
            borderRadius: '28px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
            padding: '36px 32px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            maxHeight: '300px',
            maxWidth: '500px',
          }}>
            <span style={{ fontSize: '38px', color: '#aaa', marginBottom: '18px' }}>🖼️</span>
            <div style={{ fontWeight: 700, fontSize: '22px', marginBottom: '12px', color: '#222' }}>Customised Products</div>
            <div style={{ color: '#555', fontSize: '16px', lineHeight: '1.6' }}>
              Experience our tailored AI services designed to automate processes, improve decision-making, and deliver transformative results for businesses across various domains.
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
