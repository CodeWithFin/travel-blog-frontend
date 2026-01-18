'use client';

import Link from 'next/link';
import Image from 'next/image';
import NavLink from './NavLink';

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="relative flex items-center justify-between px-12 py-6 w-full">
        {/* Logo - Left Side - Absolutely Positioned */}
        <Link 
          href="/" 
          className="absolute flex items-center no-underline"
          style={{ left: '40px', top: '12.33px' }}
        >
          <Image 
            src="/assets/logos/Logo.png" 
            alt="Red Explorers Logo" 
            width={150} 
            height={40}
            priority
            className="h-10 w-auto"
          />
        </Link>

        {/* Home Button - Absolutely Positioned */}
        <Link
          href="/"
          className="absolute text-white no-underline font-semibold text-base transition-all duration-200 flex items-center justify-center"
          style={{ 
            width: '124px',
            height: '33px',
            top: '12.33px',
            left: '494px',
            opacity: 1,
            transform: 'rotate(0deg)',
            borderRadius: '8px',
            background: '#0336FF'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#002ed6';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#0336FF';
          }}
        >
          Home
        </Link>

        {/* Navigation Links - Right Side */}
        <ul 
          className="flex items-center list-none absolute"
          style={{ 
            gap: '40px',
            left: '658px', // Home button ends at 494px + 124px = 618px, so 618px + 40px gap = 658px
            top: '12.33px'
          }}
        >
          <NavLink href="/about">About us</NavLink>
          <NavLink href="/destination">Destination</NavLink>
          <NavLink href="/tips">Tips</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </ul>
      </nav>
    </header>
  );
}
