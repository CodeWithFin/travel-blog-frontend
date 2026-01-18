'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [subscribeEmail, setSubscribeEmail] = useState('');

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

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribe:', subscribeEmail);
    setSubscribeEmail('');
    alert('Thank you for subscribing!');
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
        <Header />
        
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

      {/* Image Strip */}
      <div className="flex flex-wrap w-full" style={{ height: 'auto', minHeight: '200px', overflow: 'hidden' }}>
        <img 
          src="https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" 
          alt="Travel"
          style={{ flex: 1, minWidth: 0, height: '200px', objectFit: 'cover' }}
        />
        <img 
          src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" 
          alt="Travel"
          style={{ flex: 1, minWidth: 0, height: '200px', objectFit: 'cover' }}
        />
        <img 
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" 
          alt="Travel"
          style={{ flex: 1, minWidth: 0, height: '200px', objectFit: 'cover' }}
        />
        <img 
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" 
          alt="Travel"
          style={{ flex: 1, minWidth: 0, height: '200px', objectFit: 'cover' }}
        />
        <img 
          src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" 
          alt="Travel"
          style={{ flex: 1, minWidth: 0, height: '200px', objectFit: 'cover' }}
        />
        <img 
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" 
          alt="Travel"
          style={{ flex: 1, minWidth: 0, height: '200px', objectFit: 'cover' }}
        />
        <img 
          src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" 
          alt="Travel"
          style={{ flex: 1, minWidth: 0, height: '200px', objectFit: 'cover' }}
        />
      </div>

      {/* Subscribe Section */}
      <section 
        className="py-16 px-5 flex flex-col md:flex-row justify-between items-center gap-5 text-center md:text-left"
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          borderBottom: '1px solid #ddd',
        }}
      >
        <div style={{ fontSize: '24px', color: '#111' }}>
          Join <span style={{ color: '#0037ff', fontWeight: 'bold' }}>98,641</span> Monthly Readers.<br />Subscribe Today!
        </div>
        <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
          <input
            type="email"
            value={subscribeEmail}
            onChange={(e) => setSubscribeEmail(e.target.value)}
            placeholder="Email Address"
            required
            className="w-full md:w-auto"
            style={{
              width: '100%',
              maxWidth: '300px',
              padding: '15px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '14px',
              outline: 'none',
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#0037ff';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#ddd';
            }}
          />
          <button
            type="submit"
            className="w-full md:w-auto"
            style={{
              background: '#0037ff',
              color: 'white',
              border: 'none',
              padding: '15px 30px',
              borderRadius: '4px',
              fontWeight: '600',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#002ed6';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#0037ff';
            }}
          >
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
}
