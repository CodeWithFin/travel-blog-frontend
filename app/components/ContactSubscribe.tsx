'use client';

import { useState, useEffect } from 'react';
import { subscribersAPI } from '@/lib/api';

export default function ContactSubscribe() {
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscriberCount, setSubscriberCount] = useState<number | null>(null);

  useEffect(() => {
    subscribersAPI.getCount()
      .then((data) => setSubscriberCount(data.count ?? null))
      .catch(() => setSubscriberCount(null));
  }, []);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await subscribersAPI.subscribe(subscribeEmail);
      setSubscribeEmail('');
      alert('Thank you for subscribing!');
    } catch (error) {
      console.error('Subscription error:', error);
      alert('Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
        Join <span style={{ color: '#0037ff', fontWeight: 'bold' }}>{subscriberCount != null ? subscriberCount.toLocaleString() : '98,641'}</span> Monthly Readers.<br />Subscribe Today!
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
          disabled={isSubmitting}
          className="w-full md:w-auto"
          style={{
            background: '#0037ff',
            color: 'white',
            border: 'none',
            padding: '15px 30px',
            borderRadius: '4px',
            fontWeight: '600',
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            opacity: isSubmitting ? 0.7 : 1,
          }}
          onMouseEnter={(e) => {
            if (!isSubmitting) {
              e.currentTarget.style.background = '#002ed6';
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#0037ff';
          }}
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
    </section>
  );
}
