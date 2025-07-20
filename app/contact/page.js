'use client';

import { useState, useEffect } from 'react';
import AnimatedFadeInUp from '../components/AnimatedFadeInUp';

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
        padding: '32px 24px 80px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '80px'
        }}>
          <div style={{
            display: 'inline-block',
            backgroundColor: '#f3f4f6',
            color: '#6b7280',
            fontSize: '12px',
            fontWeight: '600',
            padding: '8px 16px',
            borderRadius: '20px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            marginBottom: '24px'
          }}>
            ISAII CONTACT
          </div>
          <h1 style={{
            fontSize: '48px',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '16px'
          }}>
            Get in touch with us today!
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#6b7280',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Contact our sales and support teams for demos, onboarding assistance, or any product inquiries.
          </p>
        </div>

        {/* Contact Information Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px',
          marginBottom: '80px'
        }}>
          {/* Card 1: Message us */}
          <AnimatedFadeInUp>
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            padding: '32px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
            border: '1px solid #e5e7eb',
            textAlign: 'center'
          }}>
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
            <h3 style={{
              fontSize: '20px',
              fontWeight: 'bold',
              color: '#1f2937',
              marginBottom: '12px'
            }}>
              Message us
            </h3>
            <p style={{
              fontSize: '16px',
              color: '#6b7280',
              lineHeight: '1.6',
              marginBottom: '16px'
            }}>
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
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            padding: '32px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
            border: '1px solid #e5e7eb',
            textAlign: 'center'
          }}>
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
            <h3 style={{
              fontSize: '20px',
              fontWeight: 'bold',
              color: '#1f2937',
              marginBottom: '12px'
            }}>
              Contact Us
            </h3>
            <p style={{
              fontSize: '16px',
              color: '#6b7280',
              lineHeight: '1.6',
              marginBottom: '16px'
            }}>
              Let's have a chat - there's nothing quite like talking to another person.
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
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            padding: '32px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
            border: '1px solid #e5e7eb',
            textAlign: 'center'
          }}>
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
            <h3 style={{
              fontSize: '20px',
              fontWeight: 'bold',
              color: '#1f2937',
              marginBottom: '12px'
            }}>
              Address
            </h3>
            <p style={{
              fontSize: '16px',
              color: '#6b7280',
              lineHeight: '1.6',
              marginBottom: '16px'
            }}>
              We'd be delighted to welcome you to our Head Office.
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
                    color: '#374151',
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
                    color: '#374151',
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
                    color: '#374151',
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
                    color: '#374151',
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