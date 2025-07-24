"use client";
// src/app/products/page.js
import '../globals.css'
import AnimatedFadeInUp from '../components/AnimatedFadeInUp';
import { useState, useEffect } from 'react';
import { AnimatedHeading, AnimatedPill } from '../components/Hero';
import ScrollDirectionEffect from '../components/ScrollDirectionEffect';

export default function Products() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 700);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafc', fontFamily: 'Inter, Helvetica, Arial, sans-serif' }}>
      <main style={{ padding: isMobile ? '0 8px' : '0 32px', maxWidth: '1200px', margin: '0 auto', background: 'transparent' }}>
        {/* Header Section */}
        <section style={{
          padding: isMobile ? '32px 0 16px 0' : '56px 0 32px 0',
          width: '100%',
          background: 'transparent',
          boxSizing: 'border-box',
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: isMobile ? '28px' : '48px',
            width: '100%',
          }}>
            <div style={{
              display: 'inline-block',
              background: '#fff',
              color: '#18181b',
              fontWeight: 700,
              fontSize: isMobile ? '0.95rem' : '1.1rem',
              borderRadius: '999px',
              padding: isMobile ? '7px 18px' : '10px 28px',
              marginBottom: '18px',
              letterSpacing: '0.04em',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            }}>
              ISAII PRODUCTS
            </div>
            <h1 style={{
              fontSize: isMobile ? '1.5rem' : '2.3rem',
              fontWeight: 800,
              color: '#18181b',
              margin: 0,
              marginBottom: isMobile ? '12px' : '18px',
              textAlign: 'center',
              letterSpacing: '-1px',
            }}>
              Discover the Power of Our AI Products
            </h1>
            <p style={{
              fontSize: isMobile ? '1.05rem' : '1.15rem',
              color: '#444',
              lineHeight: '1.6',
              maxWidth: isMobile ? '100%' : '500px',
              margin: 0,
              textAlign: 'center',
            }}>
              Explore our suite of advanced AI solutions crafted to optimize workflows, elevate user experiences, and foster innovation across diverse industries and platforms.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <div className="product-grid-responsive" style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: isMobile ? '20px' : '32px',
          width: '100%',
          padding: isMobile ? '16px 0' : '24px 0',
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
            <ScrollDirectionEffect key={product.title} style={{ width: '100%' }}>
              <div className="product-card-link" style={{
                background: '#fff',
                borderRadius: isMobile ? '14px' : '22px',
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
                minHeight: isMobile ? '220px' : '260px',
                height: 'auto',
                boxSizing: 'border-box',
                overflow: 'hidden',
                padding: isMobile ? '14px' : '24px',
              }}
              onMouseOver={e => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.14)'; }}
              onMouseOut={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)'; }}
              >
                <div style={{
                  width: '100%',
                  aspectRatio: '1.5/1',
                  borderRadius: isMobile ? '10px' : '18px',
                  overflow: 'hidden',
                  marginBottom: isMobile ? '14px' : '18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#f5f5f7',
                }}>
                  <img src={product.image} alt={product.title} style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: isMobile ? '10px' : '18px',
                    display: 'block',
                    boxShadow: 'none',
                    border: 'none',
                  }} />
                </div>
                <h3 style={{ fontSize: isMobile ? '1.08rem' : '1.18rem', fontWeight: 700, marginTop: 0, marginBottom: isMobile ? '6px' : '10px', textAlign: 'center', color: '#18181b', background: 'none', textShadow: 'none', wordBreak: 'break-word', overflow: 'visible' }}>{product.title}</h3>
                <div style={{ fontSize: isMobile ? '0.98rem' : '1.05rem', color: '#888', fontWeight: 600, marginBottom: isMobile ? '6px' : '10px', textAlign: 'center', textShadow: 'none', wordBreak: 'break-word', overflow: 'visible' }}>{product.subtitle}</div>
                <p style={{ fontSize: isMobile ? '0.97rem' : '1.01rem', color: '#444', lineHeight: '1.6', textAlign: 'left', margin: 0, marginTop: '6px', textShadow: 'none', wordBreak: 'break-word', overflow: 'visible' }}>{product.description}</p>
              </div>
            </ScrollDirectionEffect>
          ))}
        </div>

        {/* FAQ Section */}
        <section style={{
          padding: isMobile ? '32px 0 24px 0' : '56px 0 40px 0',
          width: '100%',
          background: 'transparent',
          boxSizing: 'border-box',
        }}>
          <div style={{
            maxWidth: '900px',
            margin: '0 auto',
            background: '#fff',
            borderRadius: '18px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            padding: isMobile ? '18px 8px' : '32px 32px',
          }}>
            <h2 style={{ fontSize: isMobile ? '1.2rem' : '1.5rem', fontWeight: 700, marginTop: 0, marginBottom: '18px', color: '#18181b', background: 'none', textShadow: 'none' }}>Explore Our FAQs</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: isMobile ? '12px' : '24px',
              textAlign: 'left',
            }}>
              {[
                { q: 'Trial Period?', a: 'We offer a risk-free trial period to allow you to experience the benefits of our AI solutions firsthand.' },
                { q: 'Performance Guarantees?', a: 'We deliver performance benchmarks and provide ongoing optimization to ensure your AI systems operate at their best.' },
                { q: 'Customer Support?', a: 'Dedicated 24/7 support is available through email, chat, and phone to assist with any questions or technical issues.' },
                { q: 'Customization Options?', a: 'Our AI systems are fully customizable to align with your business goals, workflows, and branding requirements.' },
                { q: 'Data Security?', a: 'We implement robust security measures, including encryption and compliance with GDPR and other data protection standards.' },
                { q: 'Updates and Maintenance?', a: 'Regular updates are included to keep your AI solutions cutting-edge, along with maintenance to ensure smooth operation.' },
              ].map((item, idx) => (
                <div key={item.q} style={{
                  background: '#fff',
                  borderRadius: '14px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  border: 'none',
                  padding: isMobile ? '14px 10px' : '22px 18px',
                  margin: 0,
                  marginBottom: 0,
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  cursor: 'default',
                }}>
                  <div style={{
                    fontSize: isMobile ? '1.01rem' : '1.13rem',
                    fontWeight: 700,
                    marginBottom: '8px',
                    color: '#18181b',
                    background: 'none',
                    textShadow: 'none',
                  }}>{item.q}</div>
                  <div style={{
                    fontSize: isMobile ? '0.97rem' : '1.01rem',
                    color: '#444',
                    lineHeight: '1.6',
                    textShadow: 'none',
                  }}>{item.a}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 