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
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-[2fr_1fr_1fr_1fr] items-start gap-4 md:gap-6 lg:gap-[41.6px] px-4 md:px-6 lg:px-[35px]">
          {/* Logo */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
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
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-8 md:gap-6 lg:gap-[41.6px] px-4 md:px-6 lg:px-[35px]">
          {/* Column 1: About Us */}
          <div className="md:col-span-2 lg:col-span-1">
            <p className="text-white/90 leading-relaxed mb-4 text-sm md:text-base">
              We are location independent bloggers, digital influencers, small group tour organizers and world travelers with a serious passion for the sun, the sea and adventure.
            </p>
            <p className="text-white/90 leading-relaxed text-sm md:text-base">
              Eight years and 60-something countries later and we are still on the road.
            </p>
          </div>

          {/* Column 2: Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15.6px' }}>
            <p className="text-white/90 text-sm md:text-base">Add: 221B John hope Street, Lekki, Lagos, Nigeria.</p>
            <p className="text-white/90 text-sm md:text-base">T: +234 706 507 8544</p>
            <p className="text-white/90 text-sm md:text-base">E: info@redexplorers.com</p>
            <p className="text-white/90 text-sm md:text-base">W: www.redexplorers.com</p>
          </div>

          {/* Column 3: Travel Links */}
          <div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '15.6px' }}>
              <li><Link href="/my-list" className="text-white/90 hover:text-white transition-colors text-sm md:text-base">My List</Link></li>
              <li><Link href="/my-requests" className="text-white/90 hover:text-white transition-colors text-sm md:text-base">My Requests</Link></li>
              <li><Link href="/my-credits" className="text-white/90 hover:text-white transition-colors text-sm md:text-base">My Credits</Link></li>
              <li><Link href="/my-info" className="text-white/90 hover:text-white transition-colors text-sm md:text-base">My Info</Link></li>
              <li><Link href="/contact" className="text-white/90 hover:text-white transition-colors text-sm md:text-base">Contact</Link></li>
            </ul>
          </div>

          {/* Column 4: Account Links */}
          <div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '15.6px' }}>
              <li><Link href="/travel" className="text-white/90 hover:text-white transition-colors text-sm md:text-base">Travel</Link></li>
              <li><Link href="/why-travel" className="text-white/90 hover:text-white transition-colors text-sm md:text-base">Why Travel</Link></li>
              <li><Link href="/become-traveler" className="text-white/90 hover:text-white transition-colors text-sm md:text-base">Become a Traveler</Link></li>
              <li><Link href="/how-it-works" className="text-white/90 hover:text-white transition-colors text-sm md:text-base">How Its Works</Link></li>
              <li><Link href="/traveling-faqs" className="text-white/90 hover:text-white transition-colors text-sm md:text-base">Traveling FAQs</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/20" />

      {/* Bottom Bar */}
      <div style={{ background: '#555555', paddingTop: '31.2px', paddingBottom: '31.2px' }}>
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-4 md:px-6 lg:px-[35px]">
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
          <div className="text-white/70 text-center md:text-left text-sm md:text-base lg:text-[18.2px]">
            <span>&copy; 2021 RedExplorers. All rights reserved</span>
            <span className="mx-2">|</span>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <span className="mx-2">|</span>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <span className="mx-2 hidden md:inline">|</span>
            <Link href="/sitemap" className="hover:text-white transition-colors hidden md:inline">Site Map</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
