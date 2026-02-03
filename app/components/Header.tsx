'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="flex items-center justify-between py-5 max-w-[1400px] mx-auto px-4 md:px-8 lg:px-[81px]">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/assets/logos/Logo.png" 
            alt="Red Explorers Logo" 
            width={132} 
            height={44}
            priority
            className="h-9 md:h-11 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center" style={{ gap: '73.6px' }}>
          <Link
            href="/"
            className={`text-base font-semibold transition-all hover:opacity-90 flex items-center justify-center ${isActive('/') ? '' : 'hover:opacity-80'}`}
            style={isActive('/') ? { 
              width: '124px',
              height: '33px',
              borderRadius: '8px',
              background: '#0336FF',
              color: '#ffffff'
            } : { color: '#FFAB00' }}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`text-base font-semibold transition-all hover:opacity-80 flex items-center justify-center ${isActive('/about') ? '' : ''}`}
            style={isActive('/about') ? {
              width: '124px',
              height: '33px',
              borderRadius: '8px',
              background: '#0336FF',
              color: '#ffffff'
            } : { color: '#FFAB00' }}
          >
            About us
          </Link>
          <Link
            href="/destination"
            className={`text-base font-semibold transition-all hover:opacity-80 flex items-center justify-center ${isActive('/destination') ? '' : ''}`}
            style={isActive('/destination') ? {
              width: '124px',
              height: '33px',
              borderRadius: '8px',
              background: '#0336FF',
              color: '#ffffff'
            } : { color: '#FFAB00' }}
          >
            Destination
          </Link>
          <Link
            href="/tips"
            className={`text-base font-semibold transition-all hover:opacity-80 flex items-center justify-center ${isActive('/tips') ? '' : ''}`}
            style={isActive('/tips') ? {
              width: '124px',
              height: '33px',
              borderRadius: '8px',
              background: '#0336FF',
              color: '#ffffff'
            } : { color: '#FFAB00' }}
          >
            Tips
          </Link>
          <Link
            href="/contact"
            className={`text-base font-semibold transition-all hover:opacity-80 flex items-center justify-center ${isActive('/contact') ? '' : ''}`}
            style={isActive('/contact') ? {
              width: '124px',
              height: '33px',
              borderRadius: '8px',
              background: '#0336FF',
              color: '#ffffff'
            } : { color: '#FFAB00' }}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-[#FFAB00] p-2"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Empty div for desktop layout balance */}
        <div className="hidden lg:block w-[120px]"></div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg">
          <div className="flex flex-col py-4 px-4 space-y-2">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-base font-semibold py-3 px-4 rounded-lg transition-all ${
                isActive('/') ? 'bg-[#0336FF] text-white' : 'text-gray-800 hover:bg-gray-100'
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-base font-semibold py-3 px-4 rounded-lg transition-all ${
                isActive('/about') ? 'bg-[#0336FF] text-white' : 'text-gray-800 hover:bg-gray-100'
              }`}
            >
              About us
            </Link>
            <Link
              href="/destination"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-base font-semibold py-3 px-4 rounded-lg transition-all ${
                isActive('/destination') ? 'bg-[#0336FF] text-white' : 'text-gray-800 hover:bg-gray-100'
              }`}
            >
              Destination
            </Link>
            <Link
              href="/tips"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-base font-semibold py-3 px-4 rounded-lg transition-all ${
                isActive('/tips') ? 'bg-[#0336FF] text-white' : 'text-gray-800 hover:bg-gray-100'
              }`}
            >
              Tips
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-base font-semibold py-3 px-4 rounded-lg transition-all ${
                isActive('/contact') ? 'bg-[#0336FF] text-white' : 'text-gray-800 hover:bg-gray-100'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
