'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  useEffect(() => {
    if (!document.querySelector('link[href*="font-awesome"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
      document.head.appendChild(link);
    }
  }, []);

  return (
    <footer className="text-white" style={{ background: '#555555', fontSize: '18.2px' }}>
      {/* Two horizontal divider lines */}
      <div className="bg-white" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
        <div style={{ width: '100%' }}>
          <div style={{ 
            borderTop: '1px solid #E5E5E5',
            marginBottom: '15.6px',
            width: '100%'
          }}></div>
          <div style={{ 
            borderTop: '1px solid #E5E5E5',
            width: '100%'
          }}></div>
        </div>
      </div>
      
      {/* White Header Section */}
      <div className="bg-white" style={{ paddingTop: '31.2px', paddingBottom: '31.2px' }}>
        <div className="max-w-[1200px] mx-auto grid grid-cols-[2fr_1fr_1fr_1fr] items-start" style={{ gap: '41.6px', paddingLeft: '35px', paddingRight: '35px' }}>
          {/* Logo */}
          <div>
            <Image 
              src="/assets/logos/Logo.png" 
              alt="Red7 Logo" 
              width={130} 
              height={45.5}
              className="w-auto"
              style={{ height: '45.5px' }}
            />
          </div>

          {/* Body Header */}
          <div>
            <span className="text-black font-bold" style={{ fontSize: '16.64px' }}>Body</span>
          </div>

          {/* Travel Header */}
          <div>
            <span className="text-black font-bold" style={{ fontSize: '16.64px' }}>Travel</span>
          </div>

          {/* Account Header */}
          <div>
            <span className="text-black font-bold" style={{ fontSize: '16.64px' }}>Account</span>
          </div>
        </div>
      </div>

      {/* Gray Content Section */}
      <div style={{ background: '#555555', paddingTop: '62.4px', paddingBottom: '62.4px' }}>
        <div className="max-w-[1200px] mx-auto grid grid-cols-[2fr_1fr_1fr_1fr]" style={{ gap: '41.6px', paddingLeft: '35px', paddingRight: '35px' }}>
          {/* Column 1: About Us */}
          <div>
            <p className="text-white/90 leading-relaxed mb-4">
              We are location independent bloggers, digital influencers, small group tour organizers and world travelers with a serious passion for the sun, the sea and adventure.
            </p>
            <p className="text-white/90 leading-relaxed">
              Eight years and 60-something countries later and we are still on the road.
            </p>
          </div>

          {/* Column 2: Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15.6px' }}>
            <p className="text-white/90">Add: 221B John hope Street, Lekki, Lagos, Nigeria.</p>
            <p className="text-white/90">T: +234 706 507 8544</p>
            <p className="text-white/90">E: info@redexplorers.com</p>
            <p className="text-white/90">W: www.redexplorers.com</p>
          </div>

          {/* Column 3: Travel Links */}
          <div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '15.6px' }}>
              <li><Link href="/my-list" className="text-white/90 hover:text-white transition-colors">My List</Link></li>
              <li><Link href="/my-requests" className="text-white/90 hover:text-white transition-colors">My Requests</Link></li>
              <li><Link href="/my-credits" className="text-white/90 hover:text-white transition-colors">My Credits</Link></li>
              <li><Link href="/my-info" className="text-white/90 hover:text-white transition-colors">My Info</Link></li>
              <li><Link href="/contact" className="text-white/90 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 4: Account Links */}
          <div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '15.6px' }}>
              <li><Link href="/travel" className="text-white/90 hover:text-white transition-colors">Travel</Link></li>
              <li><Link href="/why-travel" className="text-white/90 hover:text-white transition-colors">Why Travel</Link></li>
              <li><Link href="/become-traveler" className="text-white/90 hover:text-white transition-colors">Become a Traveler</Link></li>
              <li><Link href="/how-it-works" className="text-white/90 hover:text-white transition-colors">How Its Works</Link></li>
              <li><Link href="/traveling-faqs" className="text-white/90 hover:text-white transition-colors">Traveling FAQs</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/20" />

      {/* Bottom Bar */}
      <div style={{ background: '#555555', paddingTop: '31.2px', paddingBottom: '31.2px' }}>
        <div className="max-w-[1200px] mx-auto flex items-center justify-between" style={{ paddingLeft: '35px', paddingRight: '35px' }}>
          {/* SideHustle Logo */}
          <div>
            <Image 
              src="/assets/logos/sideHustle.png" 
              alt="SideHustle Logo" 
              width={130} 
              height={39}
              className="w-auto"
              style={{ height: '39px' }}
            />
          </div>

          {/* Social Icons */}
          <div className="flex" style={{ gap: '20.8px' }}>
            <a href="#" className="text-white hover:text-white/80 transition-colors">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white hover:text-white/80 transition-colors">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-white/80 transition-colors">
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="#" className="text-white hover:text-white/80 transition-colors">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-white/70" style={{ fontSize: '18.2px' }}>
            <span>&copy; 2021 RedExplorers. All rights reserved</span>
            <span className="mx-2">|</span>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <span className="mx-2">|</span>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <span className="mx-2">|</span>
            <Link href="/sitemap" className="hover:text-white transition-colors">Site Map</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
