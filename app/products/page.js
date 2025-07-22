"use client";
// src/app/products/page.js
import '../globals.css'
import AnimatedFadeInUp from '../components/AnimatedFadeInUp';
import { useState, useEffect } from 'react';
import { AnimatedHeading, AnimatedPill } from '../components/Hero';

export default function Products() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 700);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
      <main style={{ padding: isMobile ? '0 4px' : '0 20px', background: '#f9fafc', fontFamily: 'Fira Mono, Menlo, Monaco, Consolas, monospace' }}>
        {/* Header Section */}
        <section style={{
          padding: isMobile ? '32px 0 16px 0' : '56px 0 32px 0',
          width: '100%',
          background: 'transparent',
          boxSizing: 'border-box',
        }}>
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'space-between',
            alignItems: isMobile ? 'flex-start' : 'flex-start',
            marginBottom: isMobile ? '28px' : '60px',
            gap: isMobile ? '12px' : 0
          }}>
            {/* Large, centered section pill */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              marginBottom: '32px',
              textAlign: 'center',
            }}>
              <AnimatedPill text="ISAII PRODUCTS" style={{ fontSize: isMobile ? '16px' : '20px', padding: isMobile ? '10px 18px' : '12px 28px', marginBottom: '18px' }} />
              <p style={{
                fontSize: isMobile ? '1.1rem' : '20px',
                color: '#222',
                lineHeight: '1.6',
                maxWidth: isMobile ? '100%' : '500px',
                margin: 0,
                textShadow: 'none',
              }}>
                Discover the innovative marketing strategies that set Isaii-AI apart, driving success in the digital landscape.
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <div className="product-grid-responsive" style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: isMobile ? '24px' : '32px',
          width: '100%',
          padding: isMobile ? '24px 4px' : '32px 12px',
          boxSizing: 'border-box',
          overflow: 'hidden',
        }}>
          {[
            {
              title: 'Isaii-Daillo',
              subtitle: 'Telephony AI',
              description: 'Telephony AI',
              image: '/AI TELE.png',
            },
            {
              title: 'Isaii Whishper',
              subtitle: 'Voice AI',
              description: 'Voice AI that can be integrated wherever he want',
              image: '/AI VOICE.png',
            },
            {
              title: 'Isaii Assit',
              subtitle: 'Chatbot',
              description: 'Chatbot that can be integrated to their website in 1 click',
              image: '/AI CHAT.png',
            },
            {
              title: 'Whatsapp',
              subtitle: 'Messaging',
              description: 'WhatsApp integration for business communication',
              image: '/AI WTSAP.png',
            },
            {
              title: 'Instagram',
              subtitle: 'Social AI',
              description: 'Instagram AI for social media automation',
              image: '/AI INSTA.png',
            },
            {
              title: 'Self Billing',
              subtitle: 'Billing AI',
              description: 'Automated self-billing for SaaS products',
              image: '/AI BILLING.png',
            },
            {
              title: 'Market Place',
              subtitle: 'E-commerce',
              description: 'Marketplace platform for digital products',
              image: '/AI MARKET.png',
            },
            {
              title: 'E-commerce',
              subtitle: 'Online Store',
              description: 'E-commerce solutions for your business',
              image: '/AI E-COMMERCE.png',
            },
          ].map((product, idx) => (
            <AnimatedFadeInUp key={product.title}>
              <a href="/contact" className="product-card-link" style={{
                background: 'rgba(30, 30, 40, 0.96)',
                borderRadius: isMobile ? '14px' : '22px',
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
                minHeight: isMobile ? '320px' : '380px',
                height: 'auto',
                boxSizing: 'border-box',
                overflow: 'visible',
                padding: isMobile ? '14px' : '24px',
              }}
              onMouseOver={e => { e.currentTarget.style.boxShadow = '0 0 32px #00fff7, 0 0 0 2.5px #00fff7 inset'; e.currentTarget.style.transform = 'scale(1.04)'; }}
              onMouseOut={e => { e.currentTarget.style.boxShadow = '0 0 16px #00fff7, 0 0 0 2px #00fff7 inset'; e.currentTarget.style.transform = 'scale(1)'; }}
            >
              <img src={product.image} alt={product.title} style={{
                height: isMobile ? '100px' : '140px',
                width: 'auto',
                maxWidth: '90%',
                objectFit: 'contain',
                display: 'block',
                boxShadow: '0 0 12px #00fff7cc',
                border: 'none',
                marginTop: isMobile ? '8px' : '12px',
                marginBottom: isMobile ? '18px' : '24px',
              }} />
              <h3 style={{ fontSize: isMobile ? '1.18rem' : '22px', fontWeight: 'bold', marginTop: 0, marginBottom: isMobile ? '8px' : '14px', textAlign: 'center', color: '#fff', background: 'none', textShadow: 'none', wordBreak: 'break-word', overflow: 'visible' }}>{product.title}</h3>
              <div style={{ fontSize: isMobile ? '1.05rem' : '16px', color: '#fff', fontWeight: 600, marginBottom: isMobile ? '8px' : '12px', textAlign: 'center', textShadow: 'none', wordBreak: 'break-word', overflow: 'visible' }}>{product.subtitle}</div>
              <p style={{ fontSize: isMobile ? '1rem' : '15px', color: '#fff', lineHeight: '1.6', textAlign: 'left', margin: 0, marginTop: '8px', textShadow: 'none', wordBreak: 'break-word', overflow: 'visible' }}>{product.description}</p>
            </a>
          </AnimatedFadeInUp>
        ))}
      </div>
      <div style={{ width: '100%', height: '1px', background: '#e5e7eb', margin: '32px 0 0 0' }} />

     {/* FAQ Section (copied from product page) */}
        {/* FAQ section can be added here with the same glassy/neon style as Features.js if needed */}

      </main>
    </div>
  );
} 