'use client';

import Link from 'next/link';
import { useState } from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

export default function NavLink({ href, children, isActive = false }: NavLinkProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li>
      <Link
        href={href}
        className="text-base font-medium no-underline relative transition-all duration-200 flex items-center justify-center"
        style={{ 
          color: (isActive || isHovered) ? '#ffffff' : '#FFAB00',
          width: '124px',
          height: '33px',
          borderRadius: '8px',
          background: isActive ? '#0336FF' : 'transparent',
        }}
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
      >
        {children}
      </Link>
    </li>
  );
}
