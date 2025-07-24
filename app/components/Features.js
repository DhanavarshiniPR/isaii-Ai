"use client";
// src/components/Features.jsx
import AnimatedFadeInUp from './AnimatedFadeInUp';
import { useState, useEffect } from 'react';
import { AnimatedHeading } from './Hero';

export default function Features() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 700);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Professional Services Section */}
      <section style={{
        padding: isMobile ? '32px 0' : '64px 0',
        background: '#fff',
        borderRadius: isMobile ? '16px' : '28px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
        maxWidth: isMobile ? '100%' : '1200px',
        margin: isMobile ? '0' : '32px auto',
        width: '100%',
        fontFamily: 'Inter, Helvetica, Arial, sans-serif',
        border: 'none',
      }}>
        <div style={{
          background: 'transparent',
          borderRadius: 0,
          boxShadow: 'none',
          padding: 0,
          width: '100%',
          boxSizing: 'border-box',
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: isMobile ? '24px' : '60px',
            gap: isMobile ? '12px' : 0,
            background: 'none',
            borderRadius: 0,
            boxShadow: 'none',
            width: '100%',
            textAlign: 'center',
          }}>
            <h2 style={{
              fontSize: isMobile ? '2rem' : '2.7rem',
              fontWeight: 800,
              marginTop: isMobile ? '8px' : '24px',
              marginBottom: isMobile ? '18px' : '32px',
              marginLeft: 0,
              marginRight: 0,
              color: '#18181b',
              background: 'none',
              textShadow: 'none',
              lineHeight: '1.2',
              maxWidth: isMobile ? '100%' : '700px',
              zIndex: 2,
              position: 'relative',
              justifyContent: 'center',
              width: '100%',
              textAlign: 'center',
              fontFamily: 'Inter, Helvetica, Arial, sans-serif',
            }}>
              Professional Services That<br />Showcase Our Expertise.
            </h2>
            <p style={{
              fontSize: isMobile ? '1.1rem' : '1.2rem',
              color: '#444',
              margin: 0,
              lineHeight: '1.6',
              maxWidth: isMobile ? '100%' : '400px',
              marginTop: '8px',
              background: 'none',
              borderRadius: 0,
              boxShadow: 'none',
              marginBottom: 0,
              zIndex: 2,
              position: 'relative',
              textShadow: 'none',
              fontFamily: 'Inter, Helvetica, Arial, sans-serif',
            }}>
              From creative design to technical solutions, our services define industry excellence.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="features-grid" style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: isMobile ? '24px' : '32px',
            width: '100%',
            margin: 0,
            padding: isMobile ? '24px 4px' : '32px 12px',
            background: 'none',
            borderRadius: 0,
            boxShadow: 'none',
            boxSizing: 'border-box',
            overflow: 'hidden',
          }}>
            {[
              {
                title: 'SaaS Products',
                content: 'We offer scalable SaaS products that streamline operations, enhance user experience, and provide efficient solutions tailored to your business needs.',
                img: '/saas.jpeg',
                bg: '#fef9c3',
              },
              {
                title: 'Outstaffing of IT specialists and project teams',
                content: 'We select specialists and connect them to projects in 48 hours.',
                img: '/it.jpeg',
                bg: '#ede9fe',
              },
              {
                title: 'Web Application',
                content: 'We develop custom web applications designed to deliver seamless functionality, improve user engagement, and drive business growth through intuitive, responsive design.',
                img: '/web.png',
                bg: '#cffafe',
              },
              {
                title: 'Designing',
                content: 'We provide expert design services that ensure your digital platforms are visually appealing, user-centric, and aligned with your brand\'s goals for optimal customer interaction.',
                img: '/app.jpeg',
                bg: '#fce7f3',
              },
              {
                title: 'Custom AI Solutions',
                content: 'We provide bespoke AI systems tailored to your business needs, enhancing efficiency, performance, and driving continuous innovation.',
                img: '/custom ai.jpeg',
                bg: '#f3e8ff',
              },
              {
                title: 'Mobile Application',
                content: 'Our mobile app development services create user-friendly, high-performance apps that cater to your business goals, offering a superior mobile experience for customers.',
                img: '/app.jpeg',
                bg: '#d1fae5',
              },
            ].map((card, idx, arr) => {
              return (
                <AnimatedFadeInUp key={card.title}>
                  <div className="feature-card" style={{
                    background: '#fff',
                    borderRadius: isMobile ? '12px' : '18px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                    border: 'none',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    width: '100%',
                    minHeight: isMobile ? '260px' : '320px',
                    boxSizing: 'border-box',
                    overflow: 'hidden',
                    padding: isMobile ? '20px' : '32px',
                  }}
                  onMouseOver={e => { e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.10)'; e.currentTarget.style.transform = 'scale(1.03)'; }}
                  onMouseOut={e => { e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)'; e.currentTarget.style.transform = 'scale(1)'; }}
                  >
                    <div style={{
                      width: isMobile ? '64px' : '90px',
                      height: isMobile ? '64px' : '90px',
                      background: '#f5f5f7',
                      borderRadius: '50%',
                      boxShadow: 'none',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: isMobile ? '0 auto 14px auto' : '0 auto 22px auto',
                    }}>
                      <img src={card.img} alt={card.title + ' image'} style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '50%',
                        display: 'block',
                        boxShadow: 'none',
                        border: 'none',
                      }} />
                    </div>
                    <h3 style={{ fontSize: isMobile ? '1.2rem' : '1.4rem', fontWeight: 700, marginTop: 0, marginBottom: isMobile ? '10px' : '18px', textAlign: 'center', color: '#18181b', background: 'none', textShadow: 'none', fontFamily: 'Inter, Helvetica, Arial, sans-serif' }}>{card.title}</h3>
                    <p style={{ fontSize: isMobile ? '1.05rem' : '1.08rem', color: '#444', lineHeight: '1.6', textAlign: 'center', margin: 0, textShadow: 'none', wordBreak: 'break-word', fontFamily: 'Inter, Helvetica, Arial, sans-serif' }}>{card.content}</p>
                  </div>
                </AnimatedFadeInUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* Empowerment Section with Decorative Shapes */}
      <section style={{
        background: '#fff',
        borderRadius: isMobile ? '16px' : '28px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
        padding: isMobile ? '48px 0 36px 0' : '96px 0 72px 0',
        textAlign: 'center',
        position: 'relative',
        width: '100%',
        fontFamily: 'Inter, Helvetica, Arial, sans-serif',
        color: '#18181b',
        border: 'none',
        margin: isMobile ? '24px 0' : '48px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <h2 style={{
          fontSize: isMobile ? '1.7rem' : '2.2rem',
          fontWeight: 700,
          marginTop: isMobile ? '8px' : '24px',
          marginBottom: isMobile ? '18px' : '32px',
          marginLeft: 0,
          marginRight: 0,
          color: '#18181b',
          background: 'none',
          textShadow: 'none',
          letterSpacing: '-1px',
          justifyContent: 'center',
          width: '100%',
          textAlign: 'center',
          fontFamily: 'Inter, Helvetica, Arial, sans-serif',
        }}>
          We craft AI solutions today that empower your<br />business for tomorrow and beyond.
        </h2>
      </section>

      {/* Digital Excellence Section */}
      <section style={{
        background: '#fff',
        borderRadius: isMobile ? '16px' : '28px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
        padding: isMobile ? '48px 0 36px 0' : '120px 0 90px 0',
        textAlign: 'center',
        width: '100%',
        fontFamily: 'Inter, Helvetica, Arial, sans-serif',
        color: '#18181b',
        border: 'none',
        margin: isMobile ? '24px 0' : '48px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <h2 style={{
          fontSize: isMobile ? '1.7rem' : '2.2rem',
          fontWeight: 700,
          marginTop: isMobile ? '8px' : '24px',
          marginBottom: isMobile ? '18px' : '32px',
          marginLeft: 0,
          marginRight: 0,
          color: '#18181b',
          background: 'none',
          textShadow: 'none',
          letterSpacing: '-1px',
          justifyContent: 'center',
          width: '100%',
          textAlign: 'center',
          fontFamily: 'Inter, Helvetica, Arial, sans-serif',
        }}>
          Building Digital Excellence<br />with Isaii.
        </h2>
        <p style={{
          fontSize: isMobile ? '1.05rem' : '1.1rem',
          color: '#444',
          maxWidth: '600px',
          margin: '18px auto 0 auto',
          lineHeight: '1.6',
          textShadow: 'none',
          fontFamily: 'Inter, Helvetica, Arial, sans-serif',
        }}>
          Discover the innovative marketing strategies that set Isaii-Ai apart, <br />driving success in the digital landscape.
        </p>
      </section>

      {/* Product Grid Section */}
      <section style={{
        padding: isMobile ? '32px 0 48px 0' : '56px 0 96px 0',
        maxWidth: isMobile ? '100%' : '1200px',
        margin: '0 auto',
        width: '100%',
        fontFamily: 'Inter, Helvetica, Arial, sans-serif',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: isMobile ? '24px' : '32px',
          width: '100%',
          margin: 0,
          padding: isMobile ? '24px 4px' : '32px 12px',
          background: 'none',
          borderRadius: 0,
          boxShadow: 'none',
          boxSizing: 'border-box',
          overflow: 'hidden',
        }}>
          {/* Product cards */}
          {[
            {
              img: './AI TELE.png',
              title: 'Isaii-Daillo',
              subtitle: 'Telephony AI',
              desc: 'Telephony AI',
            },
            {
              img: './AI CHAT.png',
              title: 'Isaii Whishper',
              subtitle: 'Voice AI',
              desc: 'Voice AI that can be integrated wherever he want',
            },
            {
              img: './AI VOICE.png',
              title: 'Isaii Assit',
              subtitle: 'Chatbot',
              desc: 'Chatbot that can be integrated to their website in 1 click',
            },
            {
              img: './AI WTSAP.png',
              title: 'Isaii WhatsApp',
              subtitle: 'Whatsapp',
              desc: 'Chatbot integrated to Whatsapp',
            },
            {
              img: './AI INSTA.png ',
              title: 'Isaii Instagram',
              subtitle: 'Instagram',
              desc: 'Chatbot integrated to Instagram',
            },
            {
              img: './AI MARKET.png',
              title: 'Isaii Direct',
              subtitle: 'Market place',
              desc: 'Directly Access our API with key and can limit your access',
            },
            {
              img: './AI BILLING.png',
              title: 'Self Billing',
              subtitle: 'Self Billing',
              desc: 'Self Billing System',
            },
            {
              img: './AI MARKET.png',
              title: 'Market place',
              subtitle: 'Market place',
              desc: 'For all type of products',
            },
            {
              img: './AI E-COMMERCE.png',
              title: 'E-commerce',
              subtitle: 'E-commerce',
              desc: 'E-commerce',
            },
          ].map((card, idx) => (
            <a
              key={card.title}
              href="/contact"
              className="product-card-link"
              style={{
                background: '#fff',
                borderRadius: isMobile ? '12px' : '18px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                border: 'none',
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                width: '100%',
                minHeight: isMobile ? '220px' : '260px',
                boxSizing: 'border-box',
                overflow: 'hidden',
                padding: isMobile ? '20px' : '32px',
              }}
              onMouseOver={e => { e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.10)'; e.currentTarget.style.transform = 'scale(1.03)'; }}
              onMouseOut={e => { e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)'; e.currentTarget.style.transform = 'scale(1)'; }}
            >
              <img src={card.img} alt={card.title + ' image'} style={{
                width: isMobile ? '90px' : '120px',
                height: isMobile ? '90px' : '120px',
                objectFit: 'contain',
                display: 'block',
                border: 'none',
                marginBottom: isMobile ? '14px' : '22px',
                background: '#f5f5f7',
                borderRadius: '12px',
              }} />
              <h3 style={{ fontSize: isMobile ? '1.2rem' : '1.3rem', fontWeight: 700, marginTop: 0, marginBottom: isMobile ? '10px' : '14px', textAlign: 'center', color: '#18181b', background: 'none', textShadow: 'none', fontFamily: 'Inter, Helvetica, Arial, sans-serif' }}>{card.title}</h3>
              <div style={{ fontSize: isMobile ? '1.05rem' : '1.08rem', color: '#ff9100', fontWeight: 600, marginBottom: '8px', textAlign: 'center', textShadow: 'none', fontFamily: 'Inter, Helvetica, Arial, sans-serif' }}>{card.subtitle}</div>
              <p style={{ fontSize: isMobile ? '1rem' : '1.05rem', color: '#444', lineHeight: '1.5', textAlign: 'center', margin: 0, textShadow: 'none', wordBreak: 'break-word', fontFamily: 'Inter, Helvetica, Arial, sans-serif' }}>{card.desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* FAQ Section (copied from product page) */}
      <section style={{
        padding: isMobile ? '48px 0 36px 0' : '96px 0 72px 0',
        textAlign: 'center',
        background: '#fff',
        borderRadius: isMobile ? '16px' : '28px',
        margin: 0,
        maxWidth: 'none',
        width: '100%',
        color: '#18181b',
        fontFamily: 'Inter, Helvetica, Arial, sans-serif',
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
        border: 'none',
      }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
        }}>
          <h2 style={{ fontSize: isMobile ? '1.5rem' : '2rem', fontWeight: 700, marginTop: 0, marginBottom: '12px', color: '#18181b', background: 'none', textShadow: 'none', fontFamily: 'Inter, Helvetica, Arial, sans-serif' }}>Explore Our FAQs</h2>
          <p style={{ color: '#444', fontSize: isMobile ? '1.05rem' : '1.08rem', marginBottom: '40px', textShadow: 'none', fontFamily: 'Inter, Helvetica, Arial, sans-serif' }}>
            Find quick answers to commonly asked questions about Isaii-AI.<br />
            Have a question not listed?
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: isMobile ? '18px' : '32px',
            textAlign: 'left',
          }}>
            {/* FAQ items as cards */}
            {[
              {
                q: 'Trial Period?',
                a: 'We offer a risk-free trial period to allow you to experience the benefits of our AI solutions firsthand.'
              },
              {
                q: 'Performance Guarantees?',
                a: 'We deliver performance benchmarks and provide ongoing optimization to ensure your AI systems operate at their best.'
              },
              {
                q: 'Customer Support?',
                a: 'Dedicated 24/7 support is available through email, chat, and phone to assist with any questions or technical issues.'
              },
              {
                q: 'Customization Options?',
                a: 'Our AI systems are fully customizable to align with your business goals, workflows, and branding requirements.'
              },
              {
                q: 'Data Security?',
                a: 'We implement robust security measures, including encryption and compliance with GDPR and other data protection standards.'
              },
              {
                q: 'Updates and Maintenance?',
                a: 'Regular updates are included to keep your AI solutions cutting-edge, along with maintenance to ensure smooth operation.'
              },
            ].map((item, idx) => (
              <div
                key={item.q}
                style={{
                  background: '#fff',
                  borderRadius: '14px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  border: 'none',
                  padding: isMobile ? '18px 14px' : '28px 24px',
                  margin: 0,
                  marginBottom: 0,
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  cursor: 'default',
                }}
                onMouseOver={e => { e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.10)'; e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)'; }}
                onMouseOut={e => { e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)'; e.currentTarget.style.transform = 'none'; }}
              >
                <div style={{
                  fontSize: isMobile ? '1.1rem' : '1.15rem',
                  fontWeight: 700,
                  marginBottom: '10px',
                  color: '#18181b',
                  background: 'none',
                  textShadow: 'none',
                  fontFamily: 'Inter, Helvetica, Arial, sans-serif',
                }}>{item.q}</div>
                <div style={{
                  fontSize: isMobile ? '1rem' : '1.05rem',
                  color: '#444',
                  lineHeight: '1.6',
                  textShadow: 'none',
                  fontFamily: 'Inter, Helvetica, Arial, sans-serif',
                }}>{item.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <style jsx global>{`
        @media (max-width: 600px) {
          .features-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .feature-card {
            border-radius: 16px !important;
            padding: 16px !important;
          }
          .feature-card h3 {
            font-size: 1.1rem !important;
          }
          .feature-card p {
            font-size: 0.98rem !important;
          }
          .feature-card div[style*='width: 80px'] {
            width: 56px !important;
            height: 56px !important;
            margin-bottom: 12px !important;
          }
        }
      `}</style>
    </>
  )
}
