'use client';

import { useState, useEffect } from 'react';
import AnimatedFadeInUp from '../components/AnimatedFadeInUp';
import { AnimatedHeading, AnimatedPill } from '../components/Hero';

export default function ServicesPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
      {/* Services Section */}
      {/* Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: '80px'
      }}>
        {/* Large, centered section pill */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          marginBottom: '32px',
        }}>
          <AnimatedPill text="ISAII SERVICES" />
        </div>
        <p style={{
          fontSize: '20px',
          color: '#222',
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: '1.6',
          textShadow: 'none',
        }}>
          Professional Services That Showcase Our Expertise
        </p>
      </div>
      <div className="features-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '32px',
        marginBottom: '80px',
        width: '100%',
        padding: '32px 12px',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}>
        {/* Service 1: Designing */}
        <AnimatedFadeInUp>
          <div className="feature-card" style={{
            background: 'rgba(30, 30, 40, 0.96)',
            borderRadius: '18px',
            boxShadow: '0 0 16px #00fff7, 0 0 0 2px #00fff7 inset',
            border: '2px solid #00fff7',
            transition: 'transform 0.3s, box-shadow 0.3s, border 0.3s',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            textDecoration: 'none',
            willChange: 'transform, box-shadow, border',
            width: '100%',
            minHeight: '380px',
            height: 'auto',
            boxSizing: 'border-box',
            overflow: 'visible',
            padding: '24px',
          }}
          onMouseOver={e => { e.currentTarget.style.boxShadow = '0 0 32px #00fff7, 0 0 0 2.5px #00fff7 inset'; e.currentTarget.style.transform = 'scale(1.04)'; }}
          onMouseOut={e => { e.currentTarget.style.boxShadow = '0 0 16px #00fff7, 0 0 0 2px #00fff7 inset'; e.currentTarget.style.transform = 'scale(1)'; }}
          >
            <img src="/S-1.png" alt="Designing" style={{
              height: '140px',
              width: 'auto',
              maxWidth: '90%',
              objectFit: 'contain',
              display: 'block',
              boxShadow: '0 0 12px #00fff7cc',
              border: 'none',
              marginTop: '12px',
              marginBottom: '24px',
            }} />
            <h3 style={{ fontSize: '1.18rem', fontWeight: 'bold', marginTop: 0, marginBottom: '12px', textAlign: 'center', color: '#fff', background: 'none', textShadow: 'none', wordBreak: 'break-word', overflow: 'visible' }}>Designing</h3>
            <p style={{ fontSize: '1rem', color: '#fff', lineHeight: '1.6', textAlign: 'left', margin: 0, marginTop: '8px', textShadow: 'none', wordBreak: 'break-word', overflow: 'visible' }}>
              We provide expert design services that ensure your digital platforms are visually appealing, user-centric, and aligned with your brand&apos;s goals for optimal customer interaction.
            </p>
          </div>
        </AnimatedFadeInUp>

        {/* Service 2: Custom AI Solutions */}
        <AnimatedFadeInUp>
          <div className="feature-card" style={{
            background: 'rgba(30, 30, 40, 0.96)',
            borderRadius: '18px',
            boxShadow: '0 0 16px #00fff7, 0 0 0 2px #00fff7 inset',
            border: '2px solid #00fff7',
            transition: 'transform 0.3s, box-shadow 0.3s, border 0.3s',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            textDecoration: 'none',
            willChange: 'transform, box-shadow, border',
            width: '100%',
            minHeight: '380px',
            height: 'auto',
            boxSizing: 'border-box',
            overflow: 'visible',
            padding: '24px',
          }}
          onMouseOver={e => { e.currentTarget.style.boxShadow = '0 0 32px #00fff7, 0 0 0 2.5px #00fff7 inset'; e.currentTarget.style.transform = 'scale(1.04)'; }}
          onMouseOut={e => { e.currentTarget.style.boxShadow = '0 0 16px #00fff7, 0 0 0 2px #00fff7 inset'; e.currentTarget.style.transform = 'scale(1)'; }}
          >
            <img src="./S-2.png" alt="Custom AI Solutions" style={{
              height: '140px',
              width: 'auto',
              maxWidth: '90%',
              objectFit: 'contain',
              display: 'block',
              boxShadow: '0 0 12px #00fff7cc',
              border: 'none',
              marginTop: '12px',
              marginBottom: '24px',
            }} />
            <h3 style={{ fontSize: '1.18rem', fontWeight: 'bold', marginTop: 0, marginBottom: '12px', textAlign: 'center', color: '#fff', background: 'none', textShadow: 'none', wordBreak: 'break-word', overflow: 'visible' }}>Custom AI Solutions</h3>
            <p style={{ fontSize: '1rem', color: '#fff', lineHeight: '1.6', textAlign: 'left', margin: 0, marginTop: '8px', textShadow: 'none', wordBreak: 'break-word', overflow: 'visible' }}>
              We provide bespoke AI systems tailored to your business needs, enhancing efficiency, performance, and driving continuous innovation.
            </p>
          </div>
        </AnimatedFadeInUp>

        {/* Service 3: SaaS Products */}
        <AnimatedFadeInUp>
          <div className="feature-card" style={{
            background: 'rgba(30, 30, 40, 0.96)',
            borderRadius: '18px',
            boxShadow: '0 0 16px #00fff7, 0 0 0 2px #00fff7 inset',
            border: '2px solid #00fff7',
            transition: 'transform 0.3s, box-shadow 0.3s, border 0.3s',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            textDecoration: 'none',
            willChange: 'transform, box-shadow, border',
            width: '100%',
            minHeight: '380px',
            height: 'auto',
            boxSizing: 'border-box',
            overflow: 'visible',
            padding: '24px',
          }}
          onMouseOver={e => { e.currentTarget.style.boxShadow = '0 0 32px #00fff7, 0 0 0 2.5px #00fff7 inset'; e.currentTarget.style.transform = 'scale(1.04)'; }}
          onMouseOut={e => { e.currentTarget.style.boxShadow = '0 0 16px #00fff7, 0 0 0 2px #00fff7 inset'; e.currentTarget.style.transform = 'scale(1)'; }}
          >
            <img src="/S-3.png" alt="SaaS Products" style={{
              height: '140px',
              width: 'auto',
              maxWidth: '90%',
              objectFit: 'contain',
              display: 'block',
              boxShadow: '0 0 12px #00fff7cc',
              border: 'none',
              marginTop: '12px',
              marginBottom: '24px',
            }} />
            <h3 style={{ fontSize: '1.18rem', fontWeight: 'bold', marginTop: 0, marginBottom: '12px', textAlign: 'center', color: '#fff', background: 'none', textShadow: 'none', wordBreak: 'break-word', overflow: 'visible' }}>SaaS Products</h3>
            <p style={{ fontSize: '1rem', color: '#fff', lineHeight: '1.6', textAlign: 'left', margin: 0, marginTop: '8px', textShadow: 'none', wordBreak: 'break-word', overflow: 'visible' }}>
              We offer scalable SaaS products that streamline operations, enhance user experience, and provide efficient solutions tailored to your business needs.
            </p>
          </div>
        </AnimatedFadeInUp>

        {/* Service 4: Web Application */}
        <AnimatedFadeInUp>
          <div className="feature-card" style={{
            background: 'rgba(30, 30, 40, 0.96)',
            borderRadius: '18px',
            boxShadow: '0 0 16px #00fff7, 0 0 0 2px #00fff7 inset',
            border: '2px solid #00fff7',
            transition: 'transform 0.3s, box-shadow 0.3s, border 0.3s',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            textDecoration: 'none',
            willChange: 'transform, box-shadow, border',
            width: '100%',
            minHeight: '380px',
            height: 'auto',
            boxSizing: 'border-box',
            overflow: 'visible',
            padding: '24px',
          }}
          onMouseOver={e => { e.currentTarget.style.boxShadow = '0 0 32px #00fff7, 0 0 0 2.5px #00fff7 inset'; e.currentTarget.style.transform = 'scale(1.04)'; }}
          onMouseOut={e => { e.currentTarget.style.boxShadow = '0 0 16px #00fff7, 0 0 0 2px #00fff7 inset'; e.currentTarget.style.transform = 'scale(1)'; }}
          >
            <img src="/S-4.png" alt="Web Application" style={{
              height: '140px',
              width: 'auto',
              maxWidth: '90%',
              objectFit: 'contain',
              display: 'block',
              boxShadow: '0 0 12px #00fff7cc',
              border: 'none',
              marginTop: '12px',
              marginBottom: '24px',
            }} />
            <h3 style={{ fontSize: '1.18rem', fontWeight: 'bold', marginTop: 0, marginBottom: '12px', textAlign: 'center', color: '#fff', background: 'none', textShadow: 'none', wordBreak: 'break-word', overflow: 'visible' }}>Web Application</h3>
            <p style={{ fontSize: '1rem', color: '#fff', lineHeight: '1.6', textAlign: 'left', margin: 0, marginTop: '8px', textShadow: 'none', wordBreak: 'break-word', overflow: 'visible' }}>
              We develop custom web applications designed to deliver seamless functionality, improve user engagement, and drive business growth through intuitive, responsive design.
            </p>
          </div>
        </AnimatedFadeInUp>

        {/* Service 5: Mobile Application */}
        <AnimatedFadeInUp>
          <div className="feature-card" style={{
            background: 'rgba(30, 30, 40, 0.96)',
            borderRadius: '18px',
            boxShadow: '0 0 16px #00fff7, 0 0 0 2px #00fff7 inset',
            border: '2px solid #00fff7',
            transition: 'transform 0.3s, box-shadow 0.3s, border 0.3s',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            textDecoration: 'none',
            willChange: 'transform, box-shadow, border',
            width: '100%',
            minHeight: '380px',
            height: 'auto',
            boxSizing: 'border-box',
            overflow: 'visible',
            padding: '24px',
          }}
          onMouseOver={e => { e.currentTarget.style.boxShadow = '0 0 32px #00fff7, 0 0 0 2.5px #00fff7 inset'; e.currentTarget.style.transform = 'scale(1.04)'; }}
          onMouseOut={e => { e.currentTarget.style.boxShadow = '0 0 16px #00fff7, 0 0 0 2px #00fff7 inset'; e.currentTarget.style.transform = 'scale(1)'; }}
          >
            <img src="/S-5.png" alt="Mobile Application" style={{
              height: '140px',
              width: 'auto',
              maxWidth: '90%',
              objectFit: 'contain',
              display: 'block',
              boxShadow: '0 0 12px #00fff7cc',
              border: 'none',
              marginTop: '12px',
              marginBottom: '24px',
            }} />
            <h3 style={{ fontSize: '1.18rem', fontWeight: 'bold', marginTop: 0, marginBottom: '12px', textAlign: 'center', color: '#fff', background: 'none', textShadow: 'none', wordBreak: 'break-word', overflow: 'visible' }}>Mobile Application</h3>
            <p style={{ fontSize: '1rem', color: '#fff', lineHeight: '1.6', textAlign: 'left', margin: 0, marginTop: '8px', textShadow: 'none', wordBreak: 'break-word', overflow: 'visible' }}>
              Our mobile app development services create user-friendly, high-performance apps that cater to your business goals, offering a superior mobile experience for customers.
            </p>
          </div>
        </AnimatedFadeInUp>
      </div>

      <style jsx global>{`
        @media (max-width: 600px) {
          .features-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .feature-card {
            border-radius: 16px !important;
            padding: 0 !important;
          }
          .feature-card img {
            height: 140px !important;
            border-radius: 16px 16px 0 0 !important;
          }
          .feature-card h3 {
            font-size: 1.1rem !important;
          }
          .feature-card p {
            font-size: 0.98rem !important;
          }
          section[style*='padding: 32px 24px 80px'] {
            padding: 18px 8px 32px 8px !important;
          }
        }
      `}</style>
    </div>
  );
} 