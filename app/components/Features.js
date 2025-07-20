"use client";
// src/components/Features.jsx
import AnimatedFadeInUp from './AnimatedFadeInUp';

export default function Features() {
  return (
    <>
      {/* Professional Services Section */}
      <section style={{
        padding: '48px 0',
        background: 'none',
        maxWidth: '1200px',
        margin: '0 auto',
        boxSizing: 'border-box',
        borderRadius: 0,
        boxShadow: 'none',
      }}>
        <div style={{
          background: '#fff',
          borderRadius: '28px',
          boxShadow: '0 4px 32px rgba(0,0,0,0.10)',
          padding: '48px 40px',
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '60px',
            background: 'none',
            borderRadius: 0,
            boxShadow: 'none',
          }}>
            <h2 style={{
              fontSize: '48px',
              fontWeight: 'bold',
              color: '#1f2937',
              lineHeight: '1.2',
              maxWidth: '600px',
              background: 'none',
              borderRadius: 0,
              boxShadow: 'none',
            }}>
              Professional Services That<br />
              Showcase Our Expertise.
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#6b7280',
              lineHeight: '1.6',
              maxWidth: '400px',
              marginTop: '8px',
              background: 'none',
              borderRadius: 0,
              boxShadow: 'none',
            }}>
              From creative design to technical solutions, our services define industry excellence.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="features-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
            width: '100%',
            margin: 0,
            padding: 0,
            background: 'none',
            borderRadius: 0,
            boxShadow: 'none',
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
                img: '/web.jpeg',
                bg: '#cffafe',
              },
              {
                title: 'Designing',
                content: 'We provide expert design services that ensure your digital platforms are visually appealing, user-centric, and aligned with your brand\'s goals for optimal customer interaction.',
                img: '/design.jpeg',
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
                    background: card.bg,
                    borderRadius: '18px',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                    padding: '28px',
                    border: '1px solid #e5e7eb',
                    transition: 'transform 0.3s, box-shadow 0.3s, background 0.3s',
                    cursor: 'pointer',
                    display: 'block',
                    textDecoration: 'none',
                    willChange: 'transform, box-shadow, background',
                  }}>
                    <div style={{
                      width: '80px',
                      height: '80px',
                      background: '#fff',
                      borderRadius: '50%',
                      boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
                      border: '2px solid #e5e7eb',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 18px auto',
                    }}>
                      <img src={card.img} alt={card.title + ' image'} style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '50%',
                        display: 'block',
                      }} />
                    </div>
                    <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '16px', textAlign: 'center' }}>{card.title}</h3>
                    <p style={{ fontSize: '16px', color: '#6b7280', lineHeight: '1.6', textAlign: 'center' }}>{card.content}</p>
                  </div>
                </AnimatedFadeInUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* Empowerment Section with Decorative Shapes */}
      <section style={{
        background: '#f9fafc',
        padding: '80px 0 60px 0',
        textAlign: 'center',
        position: 'relative',
        width: '100%'
      }}>
        {/* Left Decorative Shape */}
        <span style={{
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
        </span>
        {/* Right Decorative Shape */}
        <span style={{
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
        </span>
        <h2 style={{
          fontSize: '32px',
          fontWeight: '600',
          color: '#222',
          margin: 0,
          zIndex: 1,
          position: 'relative',
          letterSpacing: '-1px'
        }}>
          We craft AI solutions today that empower your<br />
          business for tomorrow and beyond.
        </h2>
      </section>

      {/* Digital Excellence Section */}
      <section style={{
        background: '#fff',
        padding: '100px 0 80px 0',
        textAlign: 'center',
        width: '100%'
      }}>
        <h2 style={{
          fontSize: '40px',
          fontWeight: '700',
          color: '#18181b',
          marginBottom: '24px',
          letterSpacing: '-1px'
        }}>
          Building Digital Excellence<br />
          with Isaii.
        </h2>
        <p style={{
          fontSize: '18px',
          color: '#52525b',
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          Discover the innovative marketing strategies that set Isaii-Ai apart, <br />
          driving success in the digital landscape.
        </p>
      </section>

      {/* Product Grid Section */}
      <section style={{
        padding: '40px 0 80px 0',
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '32px',
        }}>
          {/* Card 1 */}
          <a href="/contact" className="product-card-link" style={{ background: '#fff', borderRadius: '18px', boxShadow: '0 2px 12px rgba(0,0,0,0.04)', padding: '0 0 18px 0', overflow: 'hidden', textDecoration: 'none', display: 'block', transition: 'transform 0.3s ease, box-shadow 0.3s ease', cursor: 'pointer', position: 'relative' }}>
            <img src="./AI TELE.png" alt="Telephony" style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
            <div style={{ padding: '0 24px', position: 'relative' }}>
              <h3 style={{ fontSize: '28px', fontWeight: 700, margin: '18px 0 0 0', color: '#1f2937', display: 'flex', alignItems: 'center', gap: '8px' }}>
                Isaii-Daillo
                <span className="arrow-effect" style={{ fontSize: '20px', marginLeft: '4px', opacity: 0, transform: 'translateX(-8px)', transition: 'opacity 0.3s, transform 0.3s' }}>↗</span>
              </h3>
              <div style={{ color: '#666', fontWeight: 500, fontSize: '16px', margin: '4px 0 0 0' }}>Telephony AI</div>
              <div style={{ color: '#888', fontSize: '15px', marginTop: '8px' }}>Telephony AI</div>
            </div>
          </a>
          {/* Card 2 */}
          <a href="/contact" className="product-card-link" style={{ background: '#fff', borderRadius: '18px', boxShadow: '0 2px 12px rgba(0,0,0,0.04)', padding: '0 0 18px 0', overflow: 'hidden', textDecoration: 'none', display: 'block', transition: 'transform 0.3s ease, box-shadow 0.3s ease', cursor: 'pointer', position: 'relative' }}>
            <img src="./AI CHAT.png" alt="Custom Chat" style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
            <div style={{ padding: '0 24px', position: 'relative' }}>
              <h3 style={{ fontSize: '28px', fontWeight: 700, margin: '18px 0 0 0', color: '#1f2937', display: 'flex', alignItems: 'center', gap: '8px' }}>
                Isaii Whishper
                <span className="arrow-effect" style={{ fontSize: '20px', marginLeft: '4px', opacity: 0, transform: 'translateX(-8px)', transition: 'opacity 0.3s, transform 0.3s' }}>↗</span>
              </h3>
              <div style={{ color: '#666', fontWeight: 500, fontSize: '16px', margin: '4px 0 0 0' }}>Voice AI</div>
              <div style={{ color: '#888', fontSize: '15px', marginTop: '8px' }}>Voice AI that can be integrated wherever he want</div>
            </div>
          </a>
          {/* Card 3 */}
          <a href="/contact" className="product-card-link" style={{ background: '#fff', borderRadius: '18px', boxShadow: '0 2px 12px rgba(0,0,0,0.04)', padding: '0 0 18px 0', overflow: 'hidden', textDecoration: 'none', display: 'block', transition: 'transform 0.3s ease, box-shadow 0.3s ease', cursor: 'pointer', position: 'relative' }}>
            <img src="./AI VOICE.png" alt="Custom Voice" style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
            <div style={{ padding: '0 24px', position: 'relative' }}>
              <h3 style={{ fontSize: '28px', fontWeight: 700, margin: '18px 0 0 0', color: '#1f2937', display: 'flex', alignItems: 'center', gap: '8px' }}>
                Isaii Assit
                <span className="arrow-effect" style={{ fontSize: '20px', marginLeft: '4px', opacity: 0, transform: 'translateX(-8px)', transition: 'opacity 0.3s, transform 0.3s' }}>↗</span>
              </h3>
              <div style={{ color: '#666', fontWeight: 500, fontSize: '16px', margin: '4px 0 0 0' }}>Chatbot</div>
              <div style={{ color: '#888', fontSize: '15px', marginTop: '8px' }}>Chatbot that can be integrated to their website in 1 click</div>
            </div>
          </a>
          {/* Card 4 */}
          <a href="/contact" className="product-card-link" style={{ background: '#fff', borderRadius: '18px', boxShadow: '0 2px 12px rgba(0,0,0,0.04)', padding: '0 0 18px 0', overflow: 'hidden', textDecoration: 'none', display: 'block', transition: 'transform 0.3s ease, box-shadow 0.3s ease', cursor: 'pointer', position: 'relative' }}>
            <img src="./AI WTSAP.png" alt="Whatsapp" style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
            <div style={{ padding: '0 24px', position: 'relative' }}>
              <h3 style={{ fontSize: '28px', fontWeight: 700, margin: '18px 0 0 0', color: '#1f2937', display: 'flex', alignItems: 'center', gap: '8px' }}>
                Isaii WhatsApp
                <span className="arrow-effect" style={{ fontSize: '20px', marginLeft: '4px', opacity: 0, transform: 'translateX(-8px)', transition: 'opacity 0.3s, transform 0.3s' }}>↗</span>
              </h3>
              <div style={{ color: '#666', fontWeight: 500, fontSize: '16px', margin: '4px 0 0 0' }}>Whatsapp</div>
              <div style={{ color: '#888', fontSize: '15px', marginTop: '8px' }}>Chatbot integrated to Whatsapp</div>
            </div>
          </a>
          {/* Card 5 */}
          <a href="/contact" className="product-card-link" style={{ background: '#fff', borderRadius: '18px', boxShadow: '0 2px 12px rgba(0,0,0,0.04)', padding: '0 0 18px 0', overflow: 'hidden', textDecoration: 'none', display: 'block', transition: 'transform 0.3s ease, box-shadow 0.3s ease', cursor: 'pointer', position: 'relative' }}>
            <img src="./AI INSTA.png " alt="Instagram" style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
            <div style={{ padding: '0 24px', position: 'relative' }}>
              <h3 style={{ fontSize: '28px', fontWeight: 700, margin: '18px 0 0 0', color: '#1f2937', display: 'flex', alignItems: 'center', gap: '8px' }}>
                Isaii Instagram
                <span className="arrow-effect" style={{ fontSize: '20px', marginLeft: '4px', opacity: 0, transform: 'translateX(-8px)', transition: 'opacity 0.3s, transform 0.3s' }}>↗</span>
              </h3>
              <div style={{ color: '#666', fontWeight: 500, fontSize: '16px', margin: '4px 0 0 0' }}>Instagram</div>
              <div style={{ color: '#888', fontSize: '15px', marginTop: '8px' }}>Chatbot integrated to Instagram</div>
            </div>
          </a>
          {/* Card 6 */}
          <a href="/contact" className="product-card-link" style={{ background: '#fff', borderRadius: '18px', boxShadow: '0 2px 12px rgba(0,0,0,0.04)', padding: '0 0 18px 0', overflow: 'hidden', textDecoration: 'none', display: 'block', transition: 'transform 0.3s ease, box-shadow 0.3s ease', cursor: 'pointer', position: 'relative' }}>
            <img src="./AI MARKET.png" alt="Market Place" style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
            <div style={{ padding: '0 24px', position: 'relative' }}>
              <h3 style={{ fontSize: '28px', fontWeight: 700, margin: '18px 0 0 0', color: '#1f2937', display: 'flex', alignItems: 'center', gap: '8px' }}>
                Isaii Direct
                <span className="arrow-effect" style={{ fontSize: '20px', marginLeft: '4px', opacity: 0, transform: 'translateX(-8px)', transition: 'opacity 0.3s, transform 0.3s' }}>↗</span>
              </h3>
              <div style={{ color: '#666', fontWeight: 500, fontSize: '16px', margin: '4px 0 0 0' }}>Market place</div>
              <div style={{ color: '#888', fontSize: '15px', marginTop: '8px' }}>Directly Access our API with key and can limit your access</div>
            </div>
          </a>
          {/* Card 7 */}
          <a href="/contact" className="product-card-link" style={{ background: '#fff', borderRadius: '18px', boxShadow: '0 2px 12px rgba(0,0,0,0.04)', padding: '0 0 18px 0', overflow: 'hidden', textDecoration: 'none', display: 'block', transition: 'transform 0.3s ease, box-shadow 0.3s ease', cursor: 'pointer', position: 'relative' }}>
            <img src="./AI BILLING.png" alt="Self Billing" style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
            <div style={{ padding: '0 24px', position: 'relative' }}>
              <h3 style={{ fontSize: '28px', fontWeight: 700, margin: '18px 0 0 0', color: '#1f2937', display: 'flex', alignItems: 'center', gap: '8px' }}>
                Self Billing
                <span className="arrow-effect" style={{ fontSize: '20px', marginLeft: '4px', opacity: 0, transform: 'translateX(-8px)', transition: 'opacity 0.3s, transform 0.3s' }}>↗</span>
              </h3>
              <div style={{ color: '#666', fontWeight: 500, fontSize: '16px', margin: '4px 0 0 0' }}>Self Billing</div>
              <div style={{ color: '#888', fontSize: '15px', marginTop: '8px' }}>Self Billing System</div>
            </div>
          </a>
          {/* Card 8 */}
          <a href="/contact" className="product-card-link" style={{ background: '#fff', borderRadius: '18px', boxShadow: '0 2px 12px rgba(0,0,0,0.04)', padding: '0 0 18px 0', overflow: 'hidden', textDecoration: 'none', display: 'block', transition: 'transform 0.3s ease, box-shadow 0.3s ease', cursor: 'pointer', position: 'relative' }}>
            <img src="./AI MARKET.png" alt="Market Place" style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
            <div style={{ padding: '0 24px', position: 'relative' }}>
              <h3 style={{ fontSize: '28px', fontWeight: 700, margin: '18px 0 0 0', color: '#1f2937', display: 'flex', alignItems: 'center', gap: '8px' }}>
                Market place
                <span className="arrow-effect" style={{ fontSize: '20px', marginLeft: '4px', opacity: 0, transform: 'translateX(-8px)', transition: 'opacity 0.3s, transform 0.3s' }}>↗</span>
              </h3>
              <div style={{ color: '#666', fontWeight: 500, fontSize: '16px', margin: '4px 0 0 0' }}>Market place</div>
              <div style={{ color: '#888', fontSize: '15px', marginTop: '8px' }}>For all type of products</div>
            </div>
          </a>
          {/* Card 9 */}
          <a href="/contact" className="product-card-link" style={{ background: '#fff', borderRadius: '18px', boxShadow: '0 2px 12px rgba(0,0,0,0.04)', padding: '0 0 18px 0', overflow: 'hidden', textDecoration: 'none', display: 'block', transition: 'transform 0.3s ease, box-shadow 0.3s ease', cursor: 'pointer', position: 'relative' }}>
            <img src="./AI E-COMMERCE.png" alt="E-commerce" style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
            <div style={{ padding: '0 24px', position: 'relative' }}>
              <h3 style={{ fontSize: '28px', fontWeight: 700, margin: '18px 0 0 0', color: '#1f2937', display: 'flex', alignItems: 'center', gap: '8px' }}>
                E-commerce
                <span className="arrow-effect" style={{ fontSize: '20px', marginLeft: '4px', opacity: 0, transform: 'translateX(-8px)', transition: 'opacity 0.3s, transform 0.3s' }}>↗</span>
              </h3>
              <div style={{ color: '#666', fontWeight: 500, fontSize: '16px', margin: '4px 0 0 0' }}>E-commerce</div>
              <div style={{ color: '#888', fontSize: '15px', marginTop: '8px' }}>E-commerce</div>
            </div>
          </a>
        </div>
      </section>

      {/* FAQ Section (copied from product page) */}
      <section style={{
        padding: '80px 0 60px 0',
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
          <h2 style={{ fontSize: '36px', fontWeight: 700, marginBottom: '12px' }}>Explore Our FAQs</h2>
          <p style={{ color: '#444', fontSize: '17px', marginBottom: '40px' }}>
            Find quick answers to commonly asked questions about Isaii-AI.<br />
            Have a question not listed?
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            textAlign: 'left',
          }}>
            <div>
              <div style={{ fontWeight: 600, marginBottom: '6px' }}>Trial Period?</div>
              <div style={{ color: '#444', fontSize: '15px' }}>
                We offer a risk-free trial period to allow you to experience the benefits of our AI solutions firsthand.
              </div>
            </div>
            <div>
              <div style={{ fontWeight: 600, marginBottom: '6px' }}>Performance Guarantees?</div>
              <div style={{ color: '#444', fontSize: '15px' }}>
                We deliver performance benchmarks and provide ongoing optimization to ensure your AI systems operate at their best.
              </div>
            </div>
            <div>
              <div style={{ fontWeight: 600, marginBottom: '6px' }}>Customer Support?</div>
              <div style={{ color: '#444', fontSize: '15px' }}>
                Dedicated 24/7 support is available through email, chat, and phone to assist with any questions or technical issues.
              </div>
            </div>
            <div>
              <div style={{ fontWeight: 600, marginBottom: '6px' }}>Customization Options?</div>
              <div style={{ color: '#444', fontSize: '15px' }}>
                Our AI systems are fully customizable to align with your business goals, workflows, and branding requirements.
              </div>
            </div>
            <div>
              <div style={{ fontWeight: 600, marginBottom: '6px' }}>Data Security?</div>
              <div style={{ color: '#444', fontSize: '15px' }}>
                We implement robust security measures, including encryption and compliance with GDPR and other data protection standards.
              </div>
            </div>
            <div>
              <div style={{ fontWeight: 600, marginBottom: '6px' }}>Updates and Maintenance?</div>
              <div style={{ color: '#444', fontSize: '15px' }}>
                Regular updates are included to keep your AI solutions cutting-edge, along with maintenance to ensure smooth operation.
              </div>
            </div>
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
