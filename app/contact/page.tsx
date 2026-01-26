'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    });
    alert('Thank you for your message! We will get back to you soon.');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div style={{ background: '#FFFFFF' }}>
      {/* Header & Hero Section */}
      <div
        className="relative"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
        }}
      >
        {/* Hero Content */}
        <div className="flex items-center justify-center" style={{ height: '300px' }}>
          <h1 className="text-5xl md:text-6xl font-bold">Contact</h1>
        </div>
      </div>

      {/* Contact Form Section */}
      <section className="py-20" style={{ maxWidth: '800px', margin: '80px auto', padding: '0 20px', textAlign: 'center' }}>
        <h2 
          className="mb-10"
          style={{
            fontSize: '14px',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            color: '#111',
            fontWeight: '600',
          }}
        >
          Please, feel yourself comfortable to fill in our contact form
        </h2>
        
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              required
              style={{
                padding: '15px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '14px',
                outline: 'none',
                color: '#555',
                background: '#fff',
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#0037ff';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#ddd';
              }}
            />
          </div>
          
          <div className="flex flex-col">
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              required
              style={{
                padding: '15px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '14px',
                outline: 'none',
                color: '#555',
                background: '#fff',
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#0037ff';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#ddd';
              }}
            />
          </div>
          
          <div className="flex flex-col">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              style={{
                padding: '15px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '14px',
                outline: 'none',
                color: '#555',
                background: '#fff',
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#0037ff';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#ddd';
              }}
            />
          </div>
          
          <div className="flex flex-col">
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              style={{
                padding: '15px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '14px',
                outline: 'none',
                color: '#555',
                background: '#fff',
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#0037ff';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#ddd';
              }}
            />
          </div>
          
          <div className="flex flex-col col-span-2">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              required
              style={{
                padding: '15px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '14px',
                outline: 'none',
                color: '#555',
                background: '#fff',
                height: '150px',
                resize: 'vertical',
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#0037ff';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#ddd';
              }}
            />
          </div>
          
          <button
            type="submit"
            className="col-span-1 md:col-span-2 justify-self-center mt-5"
            style={{
              background: '#0037ff',
              color: 'white',
              border: 'none',
              padding: '15px 40px',
              fontSize: '16px',
              fontWeight: '600',
              borderRadius: '4px',
              cursor: 'pointer',
              width: '200px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#002ed6';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#0037ff';
            }}
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}
