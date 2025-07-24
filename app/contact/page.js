'use client';

import { useState } from 'react';
import ScrollDirectionEffect from '../components/ScrollDirectionEffect';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would handle the form submission (API call, etc.)
  };

  const isFormFilled = Object.values(form).some(v => v.trim() !== '');

  return (
    <div style={{ minHeight: '100vh', background: '#fff', fontFamily: 'Inter, Helvetica, Arial, sans-serif', padding: '0', margin: 0 }}>
      <ScrollDirectionEffect>
        <div style={{
          maxWidth: '1100px',
          margin: '48px auto 0 auto',
          background: '#fff',
          borderRadius: '18px',
          boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
          padding: '40px 32px 32px 32px',
          boxSizing: 'border-box',
        }}>
          {/* Pill and Heading */}
          <div style={{ textAlign: 'center', marginBottom: '18px' }}>
            <div style={{
              display: 'inline-block',
              background: '#fff',
              color: '#18181b',
              fontWeight: 700,
              fontSize: '1.1rem',
              borderRadius: '999px',
              padding: '8px 24px',
              marginBottom: '12px',
              letterSpacing: '0.04em',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              border: '1px solid #e5e7eb',
            }}>
              CONTACT US
            </div>
            <h1 style={{
              fontSize: '2.1rem',
              fontWeight: 800,
              color: '#18181b',
              margin: 0,
              marginBottom: '8px',
              textAlign: 'center',
              letterSpacing: '-1px',
            }}>
              Get in touch with us today!
            </h1>
            <p style={{
              fontSize: '1.08rem',
              color: '#444',
              lineHeight: '1.6',
              maxWidth: '600px',
              margin: '0 auto',
              textAlign: 'center',
            }}>
              Contact our sales and support teams for demos, onboarding assistance, or any product inquiries.
            </p>
          </div>
          {/* Info Cards Row */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            justifyContent: 'center',
            margin: '32px 0 32px 0',
          }}>
            {[
              {
                icon: '💬',
                title: 'Messaging us',
                desc: 'Message us using our online chat system for quick and efficient support.',
                email: 'support@isaii.com',
              },
              {
                icon: '📞',
                title: 'Contact Us',
                desc: 'Let’s have a chat – there’s nothing quite like talking to another person.',
                email: 'hr@isaii.in',
              },
              {
                icon: '📍',
                title: 'Address',
                desc: 'We’d be delighted to welcome you to our Head Office.',
                email: 'Coimbatore',
              },
            ].map((card, idx) => (
              <div key={card.title} style={{
                flex: '1 1 260px',
                minWidth: '260px',
                maxWidth: '320px',
                background: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                padding: '22px 18px 18px 18px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '8px',
              }}>
                <span style={{ fontSize: '1.6rem', marginBottom: '6px' }}>{card.icon}</span>
                <div style={{ fontWeight: 700, fontSize: '1.08rem', color: '#18181b', marginBottom: '2px' }}>{card.title}</div>
                <div style={{ fontSize: '0.98rem', color: '#444', marginBottom: '2px' }}>{card.desc}</div>
                <div style={{ fontSize: '0.97rem', color: '#222', fontWeight: 500 }}>{card.email}</div>
              </div>
            ))}
          </div>
          {/* Two-column layout: left message, right form */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '32px',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}>
            {/* Left: Message */}
            <div style={{
              flex: '1 1 320px',
              minWidth: '280px',
              maxWidth: '420px',
              background: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              padding: '28px 22px',
              marginBottom: '18px',
            }}>
              <div style={{ fontWeight: 700, fontSize: '1.08rem', color: '#18181b', marginBottom: '8px' }}>Feel free to send our friendly team a message</div>
              <div style={{ fontSize: '0.98rem', color: '#444' }}>Message us using our online chat system for quick and efficient support.</div>
            </div>
            {/* Right: Form */}
            <div style={{
              flex: '1 1 320px',
              minWidth: '280px',
              maxWidth: '420px',
              background: isFormFilled ? '#eaf4ff' : '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              padding: '28px 22px',
              marginBottom: '18px',
              transition: 'background 0.3s',
            }}>
              {submitted ? (
                <div style={{ color: '#18181b', fontWeight: 600, textAlign: 'center', marginTop: '32px', fontSize: '1.1rem' }}>
                  Thank you for contacting us! We will respond soon.
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '0' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <label htmlFor="name" style={{ fontWeight: 600, color: '#18181b', fontSize: '1.01rem', marginBottom: '2px' }}>Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      style={{
                        padding: '10px 12px',
                        borderRadius: '7px',
                        border: form.name.trim() !== '' ? '2px solid #0066ff' : '1px solid #e5e7eb',
                        fontSize: '1rem',
                        color: '#222',
                        background: '#fff',
                        outline: 'none',
                        fontFamily: 'inherit',
                        transition: 'border 0.2s',
                      }}
                      onFocus={e => e.target.style.border = '2px solid #0066ff'}
                      onBlur={e => e.target.style.border = form.name.trim() !== '' ? '2px solid #0066ff' : '1px solid #e5e7eb'}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <label htmlFor="phone" style={{ fontWeight: 600, color: '#18181b', fontSize: '1.01rem', marginBottom: '2px' }}>Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      style={{
                        padding: '10px 12px',
                        borderRadius: '7px',
                        border: form.phone.trim() !== '' ? '2px solid #0066ff' : '1px solid #e5e7eb',
                        fontSize: '1rem',
                        color: '#222',
                        background: '#fff',
                        outline: 'none',
                        fontFamily: 'inherit',
                        transition: 'border 0.2s',
                      }}
                      onFocus={e => e.target.style.border = '2px solid #0066ff'}
                      onBlur={e => e.target.style.border = form.phone.trim() !== '' ? '2px solid #0066ff' : '1px solid #e5e7eb'}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <label htmlFor="email" style={{ fontWeight: 600, color: '#18181b', fontSize: '1.01rem', marginBottom: '2px' }}>Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      style={{
                        padding: '10px 12px',
                        borderRadius: '7px',
                        border: form.email.trim() !== '' ? '2px solid #0066ff' : '1px solid #e5e7eb',
                        fontSize: '1rem',
                        color: '#222',
                        background: '#fff',
                        outline: 'none',
                        fontFamily: 'inherit',
                        transition: 'border 0.2s',
                      }}
                      onFocus={e => e.target.style.border = '2px solid #0066ff'}
                      onBlur={e => e.target.style.border = form.email.trim() !== '' ? '2px solid #0066ff' : '1px solid #e5e7eb'}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <label htmlFor="message" style={{ fontWeight: 600, color: '#18181b', fontSize: '1.01rem', marginBottom: '2px' }}>Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      style={{
                        padding: '10px 12px',
                        borderRadius: '7px',
                        border: form.message.trim() !== '' ? '2px solid #0066ff' : '1px solid #e5e7eb',
                        fontSize: '1rem',
                        color: '#222',
                        background: '#fff',
                        outline: 'none',
                        fontFamily: 'inherit',
                        resize: 'vertical',
                        transition: 'border 0.2s',
                      }}
                      onFocus={e => e.target.style.border = '2px solid #0066ff'}
                      onBlur={e => e.target.style.border = form.message.trim() !== '' ? '2px solid #0066ff' : '1px solid #e5e7eb'}
                    />
                  </div>
                  <button type="submit" style={{
                    background: '#0066ff',
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: '1.08rem',
                    border: 'none',
                    borderRadius: '7px',
                    padding: '12px 0',
                    marginTop: '8px',
                    cursor: 'pointer',
                    transition: 'background 0.2s',
                    fontFamily: 'inherit',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                    letterSpacing: '0.04em',
                  }}>
                    SUBMIT
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </ScrollDirectionEffect>
    </div>
  );
} 