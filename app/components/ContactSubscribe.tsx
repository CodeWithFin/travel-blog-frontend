'use client';

import { useState } from 'react';

export default function ContactSubscribe() {
  const [subscribeEmail, setSubscribeEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribe:', subscribeEmail);
    setSubscribeEmail('');
    alert('Thank you for subscribing!');
  };

  return (
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
  );
}
