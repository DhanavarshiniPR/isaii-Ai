'use client';

import { useState, useEffect } from 'react';
import AnimatedFadeInUp from '../components/AnimatedFadeInUp';
import { AnimatedHeading, AnimatedPill } from '../components/Hero';
import ScrollDirectionEffect from '../components/ScrollDirectionEffect';

export default function ServicesPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafc', fontFamily: 'Inter, Helvetica, Arial, sans-serif' }}>
      <ScrollDirectionEffect>
        {/* Services Section */}
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '48px',
          maxWidth: '900px',
          margin: '0 auto 48px auto',
        }}>
          <div style={{
            display: 'inline-block',
            background: '#fff',
            color: '#18181b',
            fontWeight: 700,
            fontSize: '1.1rem',
            borderRadius: '999px',
            padding: '10px 28px',
            marginBottom: '18px',
            letterSpacing: '0.04em',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
          }}>
            ISAII SERVICES
          </div>
          <h1 style={{
            fontSize: '2.2rem',
            fontWeight: 800,
            color: '#18181b',
            margin: 0,
            marginBottom: '14px',
            textAlign: 'center',
            letterSpacing: '-1px',
          }}>
            Professional Services That Showcase Our Expertise
          </h1>
          <p style={{
            fontSize: '1.13rem',
            color: '#444',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto',
            textAlign: 'center',
          }}>
            From creative design to technical solutions, our services define industry excellence.
          </p>
        </div>
        <div className="features-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
          marginBottom: '48px',
          width: '100%',
          padding: '24px 0',
          boxSizing: 'border-box',
          overflow: 'hidden',
        }}>
          {[
            {
              title: 'Designing',
              description: 'We provide expert design services that ensure your digital platforms are visually appealing, user-centric, and aligned with your brand\'s goals for optimal customer interaction.',
              image: '/S-1.png',
            },
            {
              title: 'Custom AI Solutions',
              description: 'We provide bespoke AI systems tailored to your business needs, enhancing efficiency, performance, and driving continuous innovation.',
              image: '/S-2.png',
            },
            {
              title: 'SaaS Products',
              description: 'We offer scalable SaaS products that streamline operations, enhance user experience, and provide efficient solutions tailored to your business needs.',
              image: '/S-3.png',
            },
            {
              title: 'Web Application',
              description: 'We develop custom web applications designed to deliver seamless functionality, improve user engagement, and drive business growth through intuitive, responsive design.',
              image: '/S-4.png',
            },
            {
              title: 'Mobile Application',
              description: 'Our mobile app development services create user-friendly, high-performance apps that cater to your business goals, offering a superior mobile experience for customers.',
              image: '/S-5.png',
            },
          ].map((service, idx) => (
            <div key={service.title} className="feature-card" style={{
              background: '#fff',
              borderRadius: '18px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              border: 'none',
              transition: 'transform 0.2s, box-shadow 0.2s',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-start',
              textDecoration: 'none',
              width: '100%',
              minHeight: '220px',
              height: 'auto',
              boxSizing: 'border-box',
              overflow: 'visible',
              padding: '24px',
            }}
            onMouseOver={e => { e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.10)'; e.currentTarget.style.transform = 'scale(1.03)'; }}
            onMouseOut={e => { e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)'; e.currentTarget.style.transform = 'scale(1)'; }}
          >
              <img src={service.image} alt={service.title} style={{
                height: '120px',
                width: 'auto',
                maxWidth: '90%',
                objectFit: 'contain',
                display: 'block',
                boxShadow: 'none',
                border: 'none',
                marginTop: '8px',
                marginBottom: '18px',
              }} />
              <h3 style={{ fontSize: '1.13rem', fontWeight: 700, marginTop: 0, marginBottom: '8px', textAlign: 'center', color: '#18181b', background: 'none', textShadow: 'none', wordBreak: 'break-word', overflow: 'visible' }}>{service.title}</h3>
              <p style={{ fontSize: '1.01rem', color: '#444', lineHeight: '1.6', textAlign: 'left', margin: 0, marginTop: '6px', textShadow: 'none', wordBreak: 'break-word', overflow: 'visible' }}>{service.description}</p>
            </div>
          ))}
        </div>
      </ScrollDirectionEffect>
    </div>
  );
} 