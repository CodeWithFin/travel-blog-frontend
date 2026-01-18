'use client';

import Link from 'next/link';
import { useState } from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li>
      <Link
        href={href}
        className="text-base font-medium no-underline relative transition-colors duration-300"
        style={{ 
          color: isHovered ? '#ffffff' : '#FFAB00',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
        <span 
          className="absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300"
          style={{ width: isHovered ? '100%' : '0%' }}
        />
      </Link>
    </li>
  );
}
