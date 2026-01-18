'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  useEffect(() => {
    // Add Font Awesome stylesheet if not already present
    if (!document.querySelector('link[href*="font-awesome"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
      document.head.appendChild(link);
    }
  }, []);

  return (
    <footer className="text-white" style={{ background: '#555555', fontSize: '14px' }}>
      {/* White Header Section */}
      <div style={{ 
        background: '#ffffff', 
        padding: '20px 0'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 20px',
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr',
          gap: '40px',
          alignItems: 'center'
        }}>
          {/* Logo */}
          <div>
            <Image 
              src="/assets/logos/Logo.png" 
              alt="Red Explorers Logo" 
              width={338} 
              height={113}
              style={{ height: 'auto', width: 'auto' }}
            />
          </div>

          {/* Navigation Links - Aligned with gray section columns */}
          <div>
            <a 
              href="#" 
              style={{ color: '#000', fontWeight: '700', fontSize: '16px', textDecoration: 'none', cursor: 'pointer' }}
            >
              Body
            </a>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
            <div>
              <a 
                href="#" 
                style={{ color: '#000', fontWeight: '700', fontSize: '16px', textDecoration: 'none', cursor: 'pointer' }}
              >
                Travel
              </a>
            </div>
            <div>
              <a 
                href="#" 
                style={{ color: '#000', fontWeight: '700', fontSize: '16px', textDecoration: 'none', cursor: 'pointer' }}
              >
                Account
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Gray Section with Content */}
      <div style={{ 
        background: '#555555', 
        padding: '60px 0'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 20px',
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr',
          gap: '40px'
        }}>
          {/* Column 1: About Us / Company Description */}
          <div>
            <p style={{ lineHeight: '1.6', marginBottom: '20px', color: '#fff' }}>
              We are location independent bloggers, digital influencers, small group tour organizers and world travelers with a serious passion for the sun, the sea and adventure.
            </p>
            <p style={{ lineHeight: '1.6', color: '#fff' }}>
              Eight years and 60-something countries later and we are still on the road.
            </p>
          </div>

          {/* Column 2: Contact Information */}
          <div>
            <p style={{ lineHeight: '1.6', marginBottom: '15px', color: '#fff' }}>Add: 221B John hope Street, Lekki, Lagos, Nigeria.</p>
            <p style={{ lineHeight: '1.6', marginBottom: '15px', color: '#fff' }}>T: +234 706 507 8544</p>
            <p style={{ lineHeight: '1.6', marginBottom: '15px', color: '#fff' }}>E: info@redexplorers.com</p>
            <p style={{ lineHeight: '1.6', marginBottom: '15px', color: '#fff' }}>W: www. redexplorers.com</p>
          </div>

          {/* Column 3: Navigation Links (Two Sub-columns) */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
            {/* Sub-column 3a: Travel Links */}
            <div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '15px' }}>
                  <Link href="/my-list" style={{ color: '#fff', textDecoration: 'none', transition: 'opacity 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                    My List
                  </Link>
                </li>
                <li style={{ marginBottom: '15px' }}>
                  <Link href="/my-requests" style={{ color: '#fff', textDecoration: 'none', transition: 'opacity 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                    My Requests
                  </Link>
                </li>
                <li style={{ marginBottom: '15px' }}>
                  <Link href="/my-credits" style={{ color: '#fff', textDecoration: 'none', transition: 'opacity 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                    My Credits
                  </Link>
                </li>
                <li style={{ marginBottom: '15px' }}>
                  <Link href="/my-info" style={{ color: '#fff', textDecoration: 'none', transition: 'opacity 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                    My Info
                  </Link>
                </li>
                <li style={{ marginBottom: '15px' }}>
                  <Link href="/contact" style={{ color: '#fff', textDecoration: 'none', transition: 'opacity 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Sub-column 3b: Account Links */}
            <div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '15px' }}>
                  <Link href="/travel" style={{ color: '#fff', textDecoration: 'none', transition: 'opacity 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                    Travel
                  </Link>
                </li>
                <li style={{ marginBottom: '15px' }}>
                  <Link href="/why-travel" style={{ color: '#fff', textDecoration: 'none', transition: 'opacity 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                    Why Travel
                  </Link>
                </li>
                <li style={{ marginBottom: '15px' }}>
                  <Link href="/become-traveler" style={{ color: '#fff', textDecoration: 'none', transition: 'opacity 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                    Become a Traveler
                  </Link>
                </li>
                <li style={{ marginBottom: '15px' }}>
                  <Link href="/how-it-works" style={{ color: '#fff', textDecoration: 'none', transition: 'opacity 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                    How Its Works
                  </Link>
                </li>
                <li style={{ marginBottom: '15px' }}>
                  <Link href="/traveling-faqs" style={{ color: '#fff', textDecoration: 'none', transition: 'opacity 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                    Traveling FAQs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div style={{ borderTop: '1px solid #777', width: '100%' }}></div>

      {/* Bottom Bar */}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '25px 20px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        fontSize: '13px', 
        color: '#ddd' 
      }}>
        <div>
          <Image 
            src="/assets/logos/sideHustle.png" 
            alt="SideHustle Logo" 
            width={120} 
            height={40}
            style={{ height: 'auto', width: 'auto' }}
          />
        </div>
        
        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="#" style={{ color: '#fff', fontSize: '16px', transition: 'opacity 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" style={{ color: '#fff', fontSize: '16px', transition: 'opacity 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" style={{ color: '#fff', fontSize: '16px', transition: 'opacity 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
            <i className="fab fa-google-plus-g"></i>
          </a>
          <a href="#" style={{ color: '#fff', fontSize: '16px', transition: 'opacity 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>

        <div style={{ color: '#ddd' }}>
          <span>&copy; 2021 RedExplorers. All rights reserved &nbsp;|&nbsp; </span>
          <Link href="/terms" style={{ color: '#ddd', transition: 'opacity 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>Terms</Link>
          <span> &nbsp;|&nbsp; </span>
          <Link href="/privacy" style={{ color: '#ddd', transition: 'opacity 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>Privacy</Link>
          <span> &nbsp;|&nbsp; </span>
          <Link href="/sitemap" style={{ color: '#ddd', transition: 'opacity 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>Site Map</Link>
        </div>
      </div>
    </footer>
  );
}
