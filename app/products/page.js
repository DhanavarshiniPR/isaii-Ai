"use client";
// src/app/products/page.js
import '../globals.css'
import AnimatedFadeInUp from '../components/AnimatedFadeInUp';
import { useState, useEffect } from 'react';

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
      <main style={{ padding: isMobile ? '0 4px' : '0 20px' }}>
        {/* Header Section */}
        <section style={{
          padding: isMobile ? '28px 0 16px 0' : '48px 0 32px 0',
          width: '100%',
          background: 'linear-gradient(135deg, #f9fafc 60%, #f3f4f6 100%)',
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
            <h1 style={{
              fontSize: isMobile ? '2rem' : '48px',
              fontWeight: 'bold',
              color: '#1f2937',
              lineHeight: '1.2',
              marginBottom: isMobile ? '8px' : 0
            }}>
              Our Products
            </h1>
            <p style={{
              fontSize: isMobile ? '1rem' : '18px',
              color: '#6b7280',
              lineHeight: '1.6',
              maxWidth: isMobile ? '100%' : '500px',
              marginTop: '8px',
              marginBottom: 0
            }}>
              Discover the innovative marketing strategies that set Isaii-AI apart, driving success in the digital landscape.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section style={{
          padding: isMobile ? '0 0 32px 0' : '0 0 64px 0',
          margin: '0 auto',
          boxSizing: 'border-box',
        }}>
          <div className="product-grid-responsive" style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: isMobile ? '16px' : '24px',
            width: '100%'
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
                  backgroundColor: '#fff',
                  borderRadius: isMobile ? '16px' : '24px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                  border: '1px solid #e5e7eb',
                  padding: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  overflow: 'hidden',
                  textDecoration: 'none',
                  transition: 'box-shadow 0.3s',
                  willChange: 'transform, box-shadow',
                }}>
                  <img src={product.image} alt={product.title} style={{
                    width: '100%',
                    height: isMobile ? '140px' : '220px',
                    objectFit: 'cover',
                    borderRadius: isMobile ? '16px 16px 0 0' : '24px 24px 0 0',
                    display: 'block',
                  }} />
                  <div style={{ padding: '24px' }}>
                    <h3 style={{
                      fontSize: isMobile ? '1.1rem' : '20px',
                      fontWeight: 'bold',
                      color: '#1f2937',
                      marginBottom: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      {product.title}
                      <span className="arrow-effect" style={{ fontSize: '18px', marginLeft: '4px', opacity: 0, transform: 'translateX(-8px)', transition: 'opacity 0.3s, transform 0.3s' }}>↗</span>
                    </h3>
                    <p style={{
                      fontSize: isMobile ? '0.98rem' : '16px',
                      color: '#6b7280',
                      lineHeight: '1.5',
                      marginBottom: '8px'
                    }}>
                      {product.subtitle}
                    </p>
                    <p style={{
                      fontSize: isMobile ? '0.98rem' : '16px',
                      color: '#6b7280',
                      lineHeight: '1.5'
                    }}>
                      {product.description}
                    </p>
                  </div>
                </a>
              </AnimatedFadeInUp>
            ))}
          </div>
        </section>
        <div style={{ width: '100%', height: '1px', background: '#e5e7eb', margin: '32px 0 0 0' }} />

     {/* FAQ Section (copied from product page) */}
     <section style={{
        padding: isMobile ? '40px 0 30px 0' : '80px 0 60px 0',
        textAlign: 'center',
        background: 'rgba(204, 204, 204, 0.88)',
        borderRadius: 0,
        margin: 0,
        maxWidth: 'none',
        width: '100%',
      }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
        }}>
          <h2 style={{ fontSize: isMobile ? '1.4rem' : '36px', fontWeight: 700, marginBottom: '12px' }}>Explore Our FAQs</h2>
          <p style={{ color: '#444', fontSize: isMobile ? '0.98rem' : '17px', marginBottom: '40px' }}>
            Find quick answers to commonly asked questions about Isaii-AI.&apos;<br />
            Have a question not listed?
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: isMobile ? '16px' : '32px',
            textAlign: 'left',
          }}>
            <div>
              <div style={{ fontWeight: 600, marginBottom: '6px' }}>Trial Period?</div>
              <div style={{ color: '#444', fontSize: isMobile ? '0.98rem' : '15px' }}>
                We offer a risk-free trial period to allow you to experience the benefits of our AI solutions firsthand.
              </div>
            </div>
            <div>
              <div style={{ fontWeight: 600, marginBottom: '6px' }}>Performance Guarantees?</div>
              <div style={{ color: '#444', fontSize: isMobile ? '0.98rem' : '15px' }}>
                We deliver performance benchmarks and provide ongoing optimization to ensure your AI systems operate at their best.
              </div>
            </div>
            <div>
              <div style={{ fontWeight: 600, marginBottom: '6px' }}>Customer Support?</div>
              <div style={{ color: '#444', fontSize: isMobile ? '0.98rem' : '15px' }}>
                Dedicated 24/7 support is available through email, chat, and phone to assist with any questions or technical issues.
              </div>
            </div>
            <div>
              <div style={{ fontWeight: 600, marginBottom: '6px' }}>Customization Options?</div>
              <div style={{ color: '#444', fontSize: isMobile ? '0.98rem' : '15px' }}>
                Our AI systems are fully customizable to align with your business goals, workflows, and branding requirements.
              </div>
            </div>
            <div>
              <div style={{ fontWeight: 600, marginBottom: '6px' }}>Data Security?</div>
              <div style={{ color: '#444', fontSize: isMobile ? '0.98rem' : '15px' }}>
                We implement robust security measures, including encryption and compliance with GDPR and other data protection standards.
              </div>
            </div>
            <div>
              <div style={{ fontWeight: 600, marginBottom: '6px' }}>Updates and Maintenance?</div>
              <div style={{ color: '#444', fontSize: isMobile ? '0.98rem' : '15px' }}>
                Regular updates are included to keep your AI solutions cutting-edge, along with maintenance to ensure smooth operation.
              </div>
            </div>
          </div>
        </div>
      </section>

      </main>
    </div>
  );
} 