'use client';

import { useState, useEffect } from 'react';
import AnimatedFadeInUp from '../components/AnimatedFadeInUp';

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
      <section style={{
        padding: '32px 24px 80px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '80px'
        }}>
          <h1 style={{
            fontSize: '48px',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '16px'
          }}>
            Our Services
          </h1>
          <p style={{
            fontSize: '20px',
            color: '#6b7280',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Professional Services That Showcase Our Expertise
          </p>
        </div>

        {/* Services Grid */}
        <div className="features-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '32px',
          marginBottom: '80px',
        }}>
          {/* Service 1: Designing */}
          <AnimatedFadeInUp>
            <div className="feature-card" style={{
              backgroundColor: '#fff',
              borderRadius: '24px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              border: '1px solid #e5e7eb',
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              overflow: 'hidden',
            }}>
              <img src="/S-1.png" alt="Designing" style={{
                width: '100%',
                height: '220px',
                objectFit: 'cover',
                borderRadius: '24px 24px 0 0',
                display: 'block',
              }} />
              <div style={{ padding: '28px' }}>
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  marginBottom: '16px'
                }}>
                  Designing
                </h3>
                <p style={{
                  fontSize: '16px',
                  color: '#6b7280',
                  lineHeight: '1.6'
                }}>
                  We provide expert design services that ensure your digital platforms are visually appealing, user-centric, and aligned with your brand&apos;s goals for optimal customer interaction.
                </p>
              </div>
            </div>
          </AnimatedFadeInUp>

          {/* Service 2: Custom AI Solutions */}
          <AnimatedFadeInUp>
            <div className="feature-card" style={{
              backgroundColor: '#fff',
              borderRadius: '24px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              border: '1px solid #e5e7eb',
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              overflow: 'hidden',
            }}>
              <img src="./S-2.png" alt="Custom AI Solutions" style={{
                width: '100%',
                height: '220px',
                objectFit: 'cover',
                borderRadius: '24px 24px 0 0',
                display: 'block',
              }} />
              <div style={{ padding: '28px' }}>
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  marginBottom: '16px'
                }}>
                  Custom AI Solutions
                </h3>
                <p style={{
                  fontSize: '16px',
                  color: '#6b7280',
                  lineHeight: '1.6'
                }}>
                  We provide bespoke AI systems tailored to your business needs, enhancing efficiency, performance, and driving continuous innovation.
                </p>
              </div>
            </div>
          </AnimatedFadeInUp>

          {/* Service 3: SaaS Products */}
          <AnimatedFadeInUp>
            <div className="feature-card" style={{
              backgroundColor: '#fff',
              borderRadius: '24px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              border: '1px solid #e5e7eb',
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              overflow: 'hidden',
            }}>
              <img src="/S-3.png" alt="SaaS Products" style={{
                width: '100%',
                height: '220px',
                objectFit: 'cover',
                borderRadius: '24px 24px 0 0',
                display: 'block',
              }} />
              <div style={{ padding: '28px' }}>
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  marginBottom: '16px'
                }}>
                  SaaS Products
                </h3>
                <p style={{
                  fontSize: '16px',
                  color: '#6b7280',
                  lineHeight: '1.6'
                }}>
                  We offer scalable SaaS products that streamline operations, enhance user experience, and provide efficient solutions tailored to your business needs.
                </p>
              </div>
            </div>
          </AnimatedFadeInUp>

          {/* Service 4: Web Application */}
          <AnimatedFadeInUp>
            <div className="feature-card" style={{
              backgroundColor: '#fff',
              borderRadius: '24px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              border: '1px solid #e5e7eb',
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              overflow: 'hidden',
            }}>
              <img src="/S-4.png" alt="Web Application" style={{
                width: '100%',
                height: '220px',
                objectFit: 'cover',
                borderRadius: '24px 24px 0 0',
                display: 'block',
              }} />
              <div style={{ padding: '28px' }}>
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  marginBottom: '16px'
                }}>
                  Web Application
                </h3>
                <p style={{
                  fontSize: '16px',
                  color: '#6b7280',
                  lineHeight: '1.6'
                }}>
                  We develop custom web applications designed to deliver seamless functionality, improve user engagement, and drive business growth through intuitive, responsive design.
                </p>
              </div>
            </div>
          </AnimatedFadeInUp>

          {/* Service 5: Mobile Application */}
          <AnimatedFadeInUp>
            <div className="feature-card" style={{
              backgroundColor: '#fff',
              borderRadius: '24px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              border: '1px solid #e5e7eb',
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              overflow: 'hidden',
            }}>
              <img src="/S-5.png" alt="Mobile Application" style={{
                width: '100%',
                height: '220px',
                objectFit: 'cover',
                borderRadius: '24px 24px 0 0',
                display: 'block',
              }} />
              <div style={{ padding: '28px' }}>
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  marginBottom: '16px'
                }}>
                  Mobile Application
                </h3>
                <p style={{
                  fontSize: '16px',
                  color: '#6b7280',
                  lineHeight: '1.6'
                }}>
                  Our mobile app development services create user-friendly, high-performance apps that cater to your business goals, offering a superior mobile experience for customers.
                </p>
              </div>
            </div>
          </AnimatedFadeInUp>
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