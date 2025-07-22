'use client';

import { useState, useEffect } from 'react';
import AnimatedFadeInUp from '../components/AnimatedFadeInUp';
import { AnimatedHeading, AnimatedPill } from '../components/Hero';

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  function validate(form) {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required.';
    if (!form.phone.trim()) errs.phone = 'Phone number is required.';
    else if (!/^\d{7,15}$/.test(form.phone.replace(/\D/g, ''))) errs.phone = 'Enter a valid phone number.';
    if (!form.email.trim()) errs.email = 'Email is required.';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'Enter a valid email address.';
    if (!form.message.trim()) errs.message = 'Message is required.';
    return errs;
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    setSubmitted(true);
    if (Object.keys(errs).length === 0) {
      // Submit logic here (e.g., API call)
      alert('Form submitted successfully!');
      setForm({ name: '', phone: '', email: '', message: '' });
      setSubmitted(false);
    }
  }

  if (!mounted) {
    return null;
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
      {/* Contact Section */}
      <section style={{
        padding: '48px 0 96px 0',
        maxWidth: '1200px',
        margin: '0 auto',
        background: '#f9fafc',
        fontFamily: 'Fira Mono, Menlo, Monaco, Consolas, monospace',
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '80px'
        }}>
          <AnimatedPill text="ISAII CONTACT" style={{ fontSize: '20px', padding: '12px 28px', marginBottom: '24px' }} />
          {/* Replace h1 with AnimatedHeading */}
          <AnimatedHeading
            text="Get in touch with us today!"
            as="h1"
            style={{
              fontSize: '48px',
              fontWeight: 'bold',
              marginTop: 0,
              marginBottom: '16px',
              color: '#18181b',
              background: 'none',
              textShadow: 'none',
            }}
          />
          <p style={{
            fontSize: '18px',
            color: '#222',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6',
            textShadow: 'none',
          }}>
            Contact our sales and support teams for demos, onboarding assistance, or any product inquiries.
          </p>
        </div>

        {/* Contact Information Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px',
          marginBottom: '80px',
          background: 'none',
          border: 'none',
          boxShadow: 'none',
          padding: 0,
        }}>
          {/* Card 1: Message us */}
          <AnimatedFadeInUp>
          <div style={{
            background: 'rgba(30, 30, 40, 0.96)',
            borderRadius: '16px',
            padding: '20px',
            boxShadow: '0 0 16px #00fff7, 0 0 0 2px #00fff7 inset',
            border: '2px solid #00fff7',
            textAlign: 'center',
            color: '#fff',
            fontFamily: 'Fira Mono, Menlo, Monaco, Consolas, monospace',
            transition: 'transform 0.3s, box-shadow 0.3s, border 0.3s',
            willChange: 'transform, box-shadow, border',
            minHeight: 0,
            minHeight: '380px',
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            wordBreak: 'break-word',
            overflow: 'visible',
          }}
          onMouseOver={e => { e.currentTarget.style.boxShadow = '0 0 32px #00fff7, 0 0 0 2.5px #00fff7 inset'; e.currentTarget.style.transform = 'scale(1.04)'; }}
          onMouseOut={e => { e.currentTarget.style.boxShadow = '0 0 16px #00fff7, 0 0 0 2px #00fff7 inset'; e.currentTarget.style.transform = 'scale(1)'; }}
          >
            <div style={{
              width: '48px',
              height: '48px',
              backgroundColor: '#f3f4f6',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
              color: '#374151',
              fontSize: '24px'
            }}>
              💬
            </div>
            <h3 style={{ fontSize: '1.18rem', fontWeight: 'bold', marginTop: 0, marginBottom: '12px', textAlign: 'center', color: '#fff', background: 'none', textShadow: 'none', wordBreak: 'break-word', overflow: 'visible' }}>
              Message us
            </h3>
            <p style={{ fontSize: '1rem', color: '#fff', lineHeight: '1.6', textAlign: 'left', margin: 0, marginTop: '8px', textShadow: 'none', wordBreak: 'break-word', overflow: 'visible' }}>
              Message us using our online chat system for quick and efficient support.
            </p>
            <a href="mailto:support@isaii.ai" style={{
              color: '#3b82f6',
              textDecoration: 'underline',
              fontSize: '14px',
              fontWeight: '500'
            }}>
              support@isaii.ai
            </a>
          </div>
          </AnimatedFadeInUp>

          {/* Card 2: Contact Us */}
          <AnimatedFadeInUp>
          <div style={{
            background: 'rgba(30, 30, 40, 0.96)',
            borderRadius: '16px',
            padding: '20px',
            boxShadow: '0 0 16px #00fff7, 0 0 0 2px #00fff7 inset',
            border: '2px solid #00fff7',
            textAlign: 'center',
            color: '#fff',
            fontFamily: 'Fira Mono, Menlo, Monaco, Consolas, monospace',
            transition: 'transform 0.3s, box-shadow 0.3s, border 0.3s',
            willChange: 'transform, box-shadow, border',
            minHeight: 0,
            minHeight: '380px',
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            wordBreak: 'break-word',
            overflow: 'visible',
          }}
          onMouseOver={e => { e.currentTarget.style.boxShadow = '0 0 32px #00fff7, 0 0 0 2.5px #00fff7 inset'; e.currentTarget.style.transform = 'scale(1.04)'; }}
          onMouseOut={e => { e.currentTarget.style.boxShadow = '0 0 16px #00fff7, 0 0 0 2px #00fff7 inset'; e.currentTarget.style.transform = 'scale(1)'; }}
          >
            <div style={{
              width: '48px',
              height: '48px',
              backgroundColor: '#f3f4f6',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
              color: '#374151',
              fontSize: '24px'
            }}>
              📞
            </div>
            <h3 style={{ fontSize: '1.18rem', fontWeight: 'bold', marginTop: 0, marginBottom: '12px', textAlign: 'center', color: '#fff', background: 'none', textShadow: 'none', wordBreak: 'break-word', overflow: 'visible' }}>
              Contact Us
            </h3>
            <p style={{ fontSize: '1rem', color: '#fff', lineHeight: '1.6', textAlign: 'left', margin: 0, marginTop: '8px', textShadow: 'none', wordBreak: 'break-word', overflow: 'visible' }}>
              Let&apos;s have a chat - there&apos;s nothing quite like talking to another person.
            </p>
            <a href="mailto:hr@isaii.ai" style={{
              color: '#3b82f6',
              textDecoration: 'underline',
              fontSize: '14px',
              fontWeight: '500'
            }}>
              hr@isaii.ai
            </a>
          </div>
          </AnimatedFadeInUp>

          {/* Card 3: Address */}
          <AnimatedFadeInUp>
          <div style={{
            background: 'rgba(30, 30, 40, 0.96)',
            borderRadius: '16px',
            padding: '20px',
            boxShadow: '0 0 16px #00fff7, 0 0 0 2px #00fff7 inset',
            border: '2px solid #00fff7',
            textAlign: 'center',
            color: '#fff',
            fontFamily: 'Fira Mono, Menlo, Monaco, Consolas, monospace',
            transition: 'transform 0.3s, box-shadow 0.3s, border 0.3s',
            willChange: 'transform, box-shadow, border',
            minHeight: 0,
            minHeight: '380px',
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            wordBreak: 'break-word',
            overflow: 'visible',
          }}
          onMouseOver={e => { e.currentTarget.style.boxShadow = '0 0 32px #00fff7, 0 0 0 2.5px #00fff7 inset'; e.currentTarget.style.transform = 'scale(1.04)'; }}
          onMouseOut={e => { e.currentTarget.style.boxShadow = '0 0 16px #00fff7, 0 0 0 2px #00fff7 inset'; e.currentTarget.style.transform = 'scale(1)'; }}
          >
            <div style={{
              width: '48px',
              height: '48px',
              backgroundColor: '#f3f4f6',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
              color: '#374151',
              fontSize: '24px'
            }}>
              📍
            </div>
            <h3 style={{ fontSize: '1.18rem', fontWeight: 'bold', marginTop: 0, marginBottom: '12px', textAlign: 'center', color: '#fff', background: 'none', textShadow: 'none', wordBreak: 'break-word', overflow: 'visible' }}>
              Address
            </h3>
            <p style={{ fontSize: '1rem', color: '#fff', lineHeight: '1.6', textAlign: 'left', margin: 0, marginTop: '8px', textShadow: 'none', wordBreak: 'break-word', overflow: 'visible' }}>
              We&apos;d be delighted to welcome you to our Head Office.
            </p>
            <span style={{
              color: '#3b82f6',
              textDecoration: 'underline',
              fontSize: '14px',
              fontWeight: '500'
            }}>
              Coimbatore
            </span>
          </div>
          </AnimatedFadeInUp>
        </div>

        {/* Contact Form Section */}
        <AnimatedFadeInUp>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '48px',
          alignItems: 'start',
          margin: '0 auto',
          maxWidth: '950px',
          padding: '48px 0',
        }}>
          {/* Left Side - Text */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '24px'
            }}>
              <span style={{ fontSize: '28px', marginRight: '12px' }}>📨</span>
              <h2 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#1f2937',
                margin: 0
              }}>
                Feel free to send our friendly team a message
              </h2>
            </div>
            <p style={{
              fontSize: '16px',
              color: '#6b7280',
              lineHeight: '1.6'
            }}>
              Message us using our online chat system for quick and efficient support.
            </p>
          </div>

          {/* Right Side - Form */}
          <div style={{ paddingRight: '16px' }}>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }} onSubmit={handleSubmit} noValidate>
              {/* Name Field */}
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#18181b',
                  marginBottom: '8px'
                }}>
                  Name
                </label>
                <input
                  type="text"
                    name="name"
                  placeholder="Enter your name"
                    value={form.name}
                    onChange={handleChange}
                  style={{
                    width: '100%',
                      padding: '12px 20px 12px 16px',
                      border: errors.name ? '1.5px solid #ef4444' : '1px solid #d1d5db',
                    borderRadius: '8px',
                    fontSize: '16px',
                    outline: 'none',
                      transition: 'border-color 0.3s',
                      background: form.name ? '#f3f4f6' : '#fff'
                  }}
                />
                  {errors.name && <div style={{ color: '#ef4444', fontSize: '13px', marginTop: '4px' }}>{errors.name}</div>}
              </div>

              {/* Phone Number Field */}
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#18181b',
                  marginBottom: '8px'
                }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                    name="phone"
                  placeholder="Enter your phone number"
                    value={form.phone}
                    onChange={handleChange}
                  style={{
                    width: '100%',
                      padding: '12px 20px 12px 16px',
                      border: errors.phone ? '1.5px solid #ef4444' : '1px solid #d1d5db',
                    borderRadius: '8px',
                    fontSize: '16px',
                    outline: 'none',
                      transition: 'border-color 0.3s',
                      background: form.phone ? '#f3f4f6' : '#fff'
                  }}
                />
                  {errors.phone && <div style={{ color: '#ef4444', fontSize: '13px', marginTop: '4px' }}>{errors.phone}</div>}
              </div>

              {/* Email Field */}
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#18181b',
                  marginBottom: '8px'
                }}>
                  Email
                </label>
                <input
                  type="email"
                    name="email"
                  placeholder="Enter your email"
                    value={form.email}
                    onChange={handleChange}
                  style={{
                    width: '100%',
                      padding: '12px 20px 12px 16px',
                      border: errors.email ? '1.5px solid #ef4444' : '1px solid #d1d5db',
                    borderRadius: '8px',
                    fontSize: '16px',
                    outline: 'none',
                      transition: 'border-color 0.3s',
                      background: form.email ? '#f3f4f6' : '#fff'
                  }}
                />
                  {errors.email && <div style={{ color: '#ef4444', fontSize: '13px', marginTop: '4px' }}>{errors.email}</div>}
              </div>

              {/* Message Field */}
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#18181b',
                  marginBottom: '8px'
                }}>
                  Message
                </label>
                <textarea
                    name="message"
                  placeholder="Type your message"
                  rows="4"
                    value={form.message}
                    onChange={handleChange}
                  style={{
                    width: '100%',
                      padding: '12px 20px 12px 16px',
                      border: errors.message ? '1.5px solid #ef4444' : '1px solid #d1d5db',
                    borderRadius: '8px',
                    fontSize: '16px',
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                      transition: 'border-color 0.3s',
                      background: form.message ? '#f3f4f6' : '#fff'
                  }}
                />
                  {errors.message && <div style={{ color: '#ef4444', fontSize: '13px', marginTop: '4px' }}>{errors.message}</div>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                style={{
                  backgroundColor: '#3b82f6',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '16px 32px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s',
                    width: '100%'
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        </AnimatedFadeInUp>
      </section>

      <style jsx global>{`
        @media (max-width: 600px) {
          .contact-form-container {
            width: 100% !important;
            padding: 16px !important;
            border-radius: 12px !important;
          }
          .contact-form-container input,
          .contact-form-container textarea {
            font-size: 1rem !important;
            padding: 8px !important;
          }
          .contact-form-container label {
            font-size: 1rem !important;
          }
          .contact-form-container button {
            width: 100% !important;
            font-size: 1.1rem !important;
            padding: 12px 0 !important;
          }
          .contact-info {
            margin-top: 24px !important;
            font-size: 0.98rem !important;
          }
        }
      `}</style>
    </div>
  );
} 