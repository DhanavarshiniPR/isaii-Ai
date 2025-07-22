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
        background: 'rgba(24, 24, 27, 0.92)',
        backdropFilter: 'blur(12px) saturate(140%)',
        WebkitBackdropFilter: 'blur(12px) saturate(140%)',
        borderRadius: isMobile ? '18px' : '32px',
        boxShadow: '0 4px 32px #18181b44',
        maxWidth: isMobile ? '100%' : '1200px',
        margin: isMobile ? '0' : '32px auto',
        width: '100%',
        fontFamily: 'Fira Mono, Menlo, Monaco, Consolas, monospace',
        border: '1.5px solid #8B5CF6',
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
            <AnimatedHeading
              as="h2"
              text={"Professional Services That\nShowcase Our Expertise."}
              style={{
                fontSize: isMobile ? '2rem' : '48px',
                fontWeight: 'bold',
                marginTop: isMobile ? '8px' : '24px',
                marginBottom: isMobile ? '18px' : '32px',
                marginLeft: 0,
                marginRight: 0,
                background: 'linear-gradient(90deg, #00fff7 20%, #8B5CF6 80%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 8px #00fff799',
                lineHeight: '1.2',
                maxWidth: isMobile ? '100%' : '700px',
                zIndex: 2,
                position: 'relative',
                justifyContent: 'center',
                width: '100%',
                textAlign: 'center',
              }}
            />
            <p style={{
              fontSize: isMobile ? '1.1rem' : '20px',
              color: '#fff',
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
                    background: 'rgba(30, 30, 40, 0.96)',
                    borderRadius: isMobile ? '14px' : '22px',
                    boxShadow: '0 0 16px #00fff7, 0 0 0 2px #00fff7 inset',
                    border: '2px solid #00fff7',
                    transition: 'transform 0.3s, box-shadow 0.3s, border 0.3s',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    willChange: 'transform, box-shadow, border',
                    width: '100%',
                    aspectRatio: '1 / 1',
                    boxSizing: 'border-box',
                    overflow: 'hidden',
                    padding: isMobile ? '20px' : '32px',
                  }}
                  onMouseOver={e => { e.currentTarget.style.boxShadow = '0 0 32px #00fff7, 0 0 0 2.5px #00fff7 inset'; e.currentTarget.style.transform = 'scale(1.04)'; }}
                  onMouseOut={e => { e.currentTarget.style.boxShadow = '0 0 16px #00fff7, 0 0 0 2px #00fff7 inset'; e.currentTarget.style.transform = 'scale(1)'; }}
                  >
                    <div style={{
                      width: isMobile ? '64px' : '90px',
                      height: isMobile ? '64px' : '90px',
                      background: 'rgba(24, 24, 27, 0.92)',
                      borderRadius: '50%',
                      boxShadow: '0 1px 4px #00fff799',
                      border: '1.5px solid #8B5CF6',
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
                        boxShadow: '0 0 8px #00fff7cc',
                        border: '1.5px solid #8B5CF6',
                      }} />
                    </div>
                    <h3 style={{ fontSize: isMobile ? '1.2rem' : '26px', fontWeight: 'bold', marginTop: 0, marginBottom: isMobile ? '10px' : '18px', textAlign: 'center', background: 'linear-gradient(90deg, #00fff7 20%, #8B5CF6 80%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', textShadow: '0 0 8px #00fff799' }}>{card.title}</h3>
                    <p style={{ fontSize: isMobile ? '1.05rem' : '17px', color: '#fff', lineHeight: '1.6', textAlign: 'center', margin: 0, textShadow: 'none', wordBreak: 'break-word' }}>{card.content}</p>
                  </div>
                </AnimatedFadeInUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* Empowerment Section with Decorative Shapes */}
      <section style={{
        background: 'rgba(24, 24, 27, 0.92)',
        backdropFilter: 'blur(12px) saturate(140%)',
        WebkitBackdropFilter: 'blur(12px) saturate(140%)',
        borderRadius: isMobile ? '18px' : '32px',
        boxShadow: '0 2px 16px #18181b44',
        padding: isMobile ? '48px 0 36px 0' : '96px 0 72px 0',
        textAlign: 'center',
        position: 'relative',
        width: '100%',
        fontFamily: 'Fira Mono, Menlo, Monaco, Consolas, monospace',
        color: '#fff',
        border: '1.5px solid #8B5CF6',
        margin: isMobile ? '24px 0' : '48px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {/* Decorative shapes hidden on mobile for simplicity */}
        {!isMobile && <span style={{
          position: 'absolute',
          left: '60px',
          top: '40px',
          width: '60px',
          height: '60px',
          display: 'inline-block'
        }}>
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 5 Q40 10 45 20 Q55 30 45 40 Q40 50 30 55 Q20 50 15 40 Q5 30 15 20 Q20 10 30 5 Z" stroke="#111827" strokeWidth="3" fill="none"/>
          </svg>
        </span>}
        {!isMobile && <span style={{
          position: 'absolute',
          right: '60px',
          top: '0',
          width: '80px',
          height: '80px',
          display: 'inline-block',
          transform: 'rotate(20deg)'
        }}>
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="40" cy="40" rx="35" ry="20" stroke="#111827" strokeWidth="6" fill="none"/>
          </svg>
        </span>}
        <AnimatedHeading
          as="h2"
          text={"We craft AI solutions today that empower your\nbusiness for tomorrow and beyond."}
          style={{
            fontSize: isMobile ? '1.7rem' : '36px',
            fontWeight: '600',
            marginTop: isMobile ? '8px' : '24px',
            marginBottom: isMobile ? '18px' : '32px',
            marginLeft: 0,
            marginRight: 0,
            background: 'linear-gradient(90deg, #00fff7 20%, #8B5CF6 80%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: '0 0 8px #00fff799',
            letterSpacing: '-1px',
            justifyContent: 'center',
            width: '100%',
            textAlign: 'center',
          }}
        />
      </section>

      {/* Digital Excellence Section */}
      <section style={{
        background: 'rgba(30, 30, 40, 0.96)',
        backdropFilter: 'blur(12px) saturate(140%)',
        WebkitBackdropFilter: 'blur(12px) saturate(140%)',
        borderRadius: isMobile ? '18px' : '32px',
        boxShadow: '0 2px 16px #8B5CF655',
        padding: isMobile ? '48px 0 36px 0' : '120px 0 90px 0',
        textAlign: 'center',
        width: '100%',
        fontFamily: 'Fira Mono, Menlo, Monaco, Consolas, monospace',
        color: '#fff',
        border: '1.5px solid #8B5CF6',
        margin: isMobile ? '24px 0' : '48px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <AnimatedHeading
          as="h2"
          text={"Building Digital Excellence\nwith Isaii."}
          style={{
            fontSize: isMobile ? '1.7rem' : '40px',
            fontWeight: '700',
            marginTop: isMobile ? '8px' : '24px',
            marginBottom: isMobile ? '18px' : '32px',
            marginLeft: 0,
            marginRight: 0,
            background: 'linear-gradient(90deg, #00fff7 20%, #8B5CF6 80%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: '0 0 8px #00fff799',
            letterSpacing: '-1px',
            justifyContent: 'center',
            width: '100%',
            textAlign: 'center',
          }}
        />
        <p style={{
          fontSize: isMobile ? '1.05rem' : '18px',
          color: '#fff',
          maxWidth: '600px',
          margin: '18px auto 0 auto',
          lineHeight: '1.6',
          textShadow: 'none',
        }}>
          Discover the innovative marketing strategies that set Isaii-Ai apart, <br />
          driving success in the digital landscape.
        </p>
      </section>

      {/* Product Grid Section */}
      <section style={{
        padding: isMobile ? '32px 0 48px 0' : '56px 0 96px 0',
        maxWidth: isMobile ? '100%' : '1200px',
        margin: '0 auto',
        width: '100%',
        fontFamily: 'Fira Mono, Menlo, Monaco, Consolas, monospace',
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
                background: 'rgba(30, 30, 40, 0.96)',
                borderRadius: isMobile ? '14px' : '22px',
                boxShadow: '0 0 16px #00fff7, 0 0 0 2px #00fff7 inset',
                border: '2px solid #00fff7',
                transition: 'transform 0.3s, box-shadow 0.3s, border 0.3s',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                willChange: 'transform, box-shadow, border',
                width: '100%',
                aspectRatio: '1 / 1',
                boxSizing: 'border-box',
                overflow: 'hidden',
                padding: isMobile ? '20px' : '32px',
              }}
              onMouseOver={e => { e.currentTarget.style.boxShadow = '0 0 32px #00fff7, 0 0 0 2.5px #00fff7 inset'; e.currentTarget.style.transform = 'scale(1.04)'; }}
              onMouseOut={e => { e.currentTarget.style.boxShadow = '0 0 16px #00fff7, 0 0 0 2px #00fff7 inset'; e.currentTarget.style.transform = 'scale(1)'; }}
            >
              <img src={card.img} alt={card.title + ' image'} style={{
                width: isMobile ? '90px' : '120px',
                height: isMobile ? '90px' : '120px',
                objectFit: 'contain',
                display: 'block',
                border: '2px solid #00fff7',
                marginBottom: isMobile ? '14px' : '22px',
              }} />
              <h3 style={{ fontSize: isMobile ? '1.2rem' : '26px', fontWeight: 'bold', marginTop: 0, marginBottom: isMobile ? '10px' : '18px', textAlign: 'center', background: 'linear-gradient(90deg, #00fff7 20%, #8B5CF6 80%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', textShadow: '0 0 8px #00fff799' }}>{card.title}</h3>
              <div style={{ fontSize: isMobile ? '1.05rem' : '17px', color: '#00fff7', fontWeight: 600, marginBottom: '8px', textAlign: 'center', textShadow: '0 0 8px #00fff799' }}>{card.subtitle}</div>
              <p style={{ fontSize: isMobile ? '1rem' : '15px', color: '#fff', lineHeight: '1.5', textAlign: 'center', margin: 0, textShadow: 'none', wordBreak: 'break-word' }}>{card.desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* FAQ Section (copied from product page) */}
      <section style={{
        padding: isMobile ? '48px 0 36px 0' : '96px 0 72px 0',
        textAlign: 'center',
        background: 'rgba(24, 24, 27, 0.92)',
        borderRadius: isMobile ? '18px' : '32px',
        margin: 0,
        maxWidth: 'none',
        width: '100%',
        color: '#fff',
        fontFamily: 'Fira Mono, Menlo, Monaco, Consolas, monospace',
        boxShadow: '0 2px 16px #18181b44',
        border: '1.5px solid #8B5CF6',
      }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
        }}>
          <h2 style={{ fontSize: isMobile ? '1.5rem' : '36px', fontWeight: 700, marginTop: 0, marginBottom: '12px', background: 'linear-gradient(90deg, #00fff7 20%, #8B5CF6 80%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', textShadow: '0 0 8px #00fff799' }}>Explore Our FAQs</h2>
          <p style={{ color: '#fff', fontSize: isMobile ? '1.05rem' : '17px', marginBottom: '40px', textShadow: 'none' }}>
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
                  background: 'rgba(30, 30, 40, 0.96)',
                  borderRadius: '16px',
                  boxShadow: '0 1px 8px #8B5CF655',
                  border: '1.5px solid #8B5CF6',
                  padding: isMobile ? '18px 14px' : '28px 24px',
                  margin: 0,
                  marginBottom: 0,
                  transition: 'transform 0.2s, box-shadow 0.2s, border 0.2s',
                  cursor: 'default',
                  willChange: 'transform, box-shadow, border',
                }}
                onMouseOver={e => { e.currentTarget.style.boxShadow = '0 0 16px #00fff799'; e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)'; e.currentTarget.style.border = '1.5px solid #00fff7'; }}
                onMouseOut={e => { e.currentTarget.style.boxShadow = '0 1px 8px #8B5CF655'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.border = '1.5px solid #8B5CF6'; }}
              >
                <div style={{
                  fontSize: isMobile ? '1.1rem' : '20px',
                  fontWeight: 700,
                  marginBottom: '10px',
                  background: 'linear-gradient(90deg, #00fff7 20%, #8B5CF6 80%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: '0 0 8px #00fff799',
                }}>{item.q}</div>
                <div style={{
                  fontSize: isMobile ? '1rem' : '16px',
                  color: '#fff',
                  lineHeight: '1.6',
                  textShadow: 'none',
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
