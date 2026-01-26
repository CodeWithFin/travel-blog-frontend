'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="flex items-center justify-between py-5 max-w-[1400px] mx-auto" style={{ paddingLeft: '81px', paddingRight: '81px' }}>
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/assets/logos/Logo.png" 
            alt="Red Explorers Logo" 
            width={132} 
            height={44}
            priority
            className="h-11 w-auto"
          />
        </Link>

        {/* Center Navigation */}
        <div className="flex items-center" style={{ gap: '73.6px' }}>
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

        {/* Empty div for layout balance */}
        <div className="w-[120px]"></div>
      </nav>
    </header>
  );
}
