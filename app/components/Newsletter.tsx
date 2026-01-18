'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribe:', email);
    setEmail('');
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold">
              Join <span style={{ color: '#1a5eff' }}>98,641</span> Monthly Readers.
            </h2>
            <p className="text-xl font-semibold mt-1">Subscribe Today!</p>
          </div>

          <form onSubmit={handleSubmit} className="flex gap-4 w-full md:w-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="px-6 py-3 border border-gray-300 rounded min-w-[300px] focus:outline-none"
              style={{ borderColor: '#1a5eff' }}
              onFocus={(e) => e.target.style.borderColor = '#1a5eff'}
              required
            />
            <button
              type="submit"
              className="text-white px-8 py-3 rounded font-semibold transition-colors"
              style={{ background: '#1a5eff' }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
