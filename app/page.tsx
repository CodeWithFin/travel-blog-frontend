'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Home() {

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[620px] flex flex-col items-center justify-center">
        {/* Background Image - Hiker on mountain */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Hero Content - Centered */}
        <div className="relative z-10 text-center mt-8" style={{ paddingLeft: '35px', paddingRight: '35px' }}>
          {/* Counter */}
          <p className="text-white text-lg tracking-wider mb-4">
            THE COUNTER: <span className="text-[#FFAB00] font-bold">70</span> Countries &nbsp;&nbsp;<span className="text-[#FFAB00] font-bold">1036</span> Cities
          </p>
          
          {/* Main Heading */}
          <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-8">
            Leave your mark on all<br />over the world
          </h1>
          
          {/* CTA Button */}
          <Link
            href="/read-more"
            className="inline-block text-white text-lg font-medium px-16 py-5 transition-all hover:opacity-90"
            style={{
              background: '#0047FF',
              boxShadow: '0px 4px 20px rgba(0, 71, 255, 0.4)'
            }}
          >
            Read More
          </Link>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 z-10">
          <span className="text-white text-sm font-medium">Scroll Down to Continue</span>
          <svg className="w-6 h-6 text-[#0047FF]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>

        {/* Location Pin - Bottom Right */}
        <div className="absolute bottom-6 right-12 z-10">
          <svg className="w-10 h-10 text-[#0047FF]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 bg-[#f8f9fa]">
        <div className="max-w-[1200px] mx-auto" style={{ paddingLeft: '35px', paddingRight: '35px' }}>
          <div className="flex gap-[100px]">
            {/* Left Sidebar - 280px */}
            <aside className="w-[280px] flex-shrink-0 space-y-6">
              {/* About Me Widget */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden" style={{ 
                width: '344.43px', 
                height: '478.82px', 
                opacity: 1,
                marginTop: '48px' 
              }}>
                <div className="flex flex-col h-full" style={{ padding: '32px', paddingTop: '0' }}>
                  <h3 className="text-gray-800 mb-4 text-center" style={{ fontSize: '25.25px', marginTop: '0', fontWeight: 560 }}>About Me</h3>
                  <div className="mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=400&q=80"
                      alt="About Me"
                      className="w-full h-48 object-cover rounded"
                    />
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                  </p>
                  <div className="flex justify-center mt-auto" style={{ marginTop: '24px', marginBottom: '48px' }}>
                    <Link
                      href="/about"
                      className="text-center bg-[#3B5BDB] text-white rounded-md font-medium hover:bg-[#2f4ab8] transition-colors"
                      style={{
                        width: '145.6px',
                        height: '56.8px',
                        opacity: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: `
                          0px 2.77px 6.23px 0px rgba(0, 0, 0, 0.05),
                          0px 6.65px 14.96px 0px rgba(0, 0, 0, 0.07),
                          0px 12.52px 28.17px 0px rgba(0, 0, 0, 0.09),
                          0px 22.34px 50.26px 0px rgba(0, 0, 0, 0.11),
                          0px 41.78px 94px 0px rgba(0, 0, 0, 0.13),
                          0px 100px 225px 0px rgba(0, 0, 0, 0.18)
                        `
                      }}
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>

              {/* Categories Widget */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden" style={{ 
                width: '344.43px', 
                height: '304.7px', 
                opacity: 1,
                marginTop: '48px',
                marginBottom: '48px'
              }}>
                <div style={{ padding: '32px', paddingTop: '0' }}>
                  <h3 className="font-bold text-black text-center mb-4">Categories</h3>
                  <ul className="space-y-3">
                    {[
                      { name: 'Europe', count: '(11)' },
                      { name: 'Mountains', count: '(11)' },
                      { name: 'Traveling Video', count: '(11)' },
                      { name: 'Beauty of Seas', count: '(11)' },
                      { name: 'Cuisine', count: '(11)' },
                      { name: 'Guides for traveler', count: '(11)' },
                      { name: 'Other', count: '(11)' },
                    ].map((cat) => (
                      <li key={cat.name} className="flex justify-between items-center">
                        <Link href={`/category/${cat.name.toLowerCase()}`} className="text-black" style={{ fontFamily: 'Lato', fontWeight: 500, fontSize: '17px', lineHeight: '27.2px', letterSpacing: '0%' }}>
                          {cat.name}
                        </Link>
                        <span className="text-black" style={{ fontFamily: 'Lato', fontWeight: 500, fontSize: '17px', lineHeight: '27.2px', letterSpacing: '0%' }}>{cat.count}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Popular Post Widget */}
              <div className="bg-white shadow-sm overflow-hidden flex items-center justify-center" style={{ 
                width: '299.04px', 
                height: '85.6px', 
                opacity: 1,
                marginTop: '24px',
                marginBottom: '24px'
              }}>
                <h3 className="font-bold text-black text-center" style={{ fontSize: '20.7px' }}>Popular Post</h3>
              </div>

              {/* Popular Post Image Card */}
              <div className="relative rounded-lg shadow-sm overflow-hidden" style={{ 
                width: '299.04px',
                height: '272px',
                marginBottom: '24px'
              }}>
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80)',
                    filter: 'hue-rotate(200deg) saturate(0.8)'
                  }}
                >
                  <div className="absolute inset-0 bg-blue-900/40"></div>
                </div>
                <div className="relative z-10 h-full flex flex-col justify-between" style={{ padding: '24px', paddingTop: '0' }}>
                  <p className="text-white text-sm mb-3" style={{ fontSize: '14px', marginTop: '0', paddingTop: '0' }}>September 17, 2018 - Tips & Tricks</p>
                  <div className="flex-1 flex flex-col items-center justify-center">
                    <h4 className="text-white font-bold text-center" style={{ fontSize: '24px', lineHeight: '1.3' }}>
                      Finding Love & home in<br />Tbilisi, Georgia
                    </h4>
                  </div>
                  <div className="flex gap-3">
                    <button className="bg-white rounded shadow-md w-10 h-10 flex items-center justify-center hover:bg-blue-50 transition-colors">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button className="bg-white rounded shadow-md w-10 h-10 flex items-center justify-center hover:bg-blue-50 transition-colors">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Recent Posts Widget */}
              <div className="bg-white shadow-sm overflow-hidden flex items-center justify-center" style={{ 
                width: '299.04px', 
                height: '85.6px', 
                opacity: 1,
                marginTop: '24px',
                marginBottom: '24px'
              }}>
                <h3 className="font-bold text-black text-center" style={{ fontSize: '20.7px' }}>Recent Post</h3>
              </div>

              {/* Recent Post Cards */}
              <div style={{ marginTop: '48px', marginBottom: '48px' }}>
                {[1, 2, 3].map((i) => (
                  <div key={i} className="overflow-hidden flex gap-3" style={{ marginTop: '16px', marginBottom: '16px' }}>
                    <img 
                      src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&q=80"
                      alt="Recent Post"
                      className="object-cover rounded flex-shrink-0"
                      style={{ width: '70.4px', height: '70.4px' }}
                    />
                    <div className="flex-1 flex flex-col justify-center">
                      <p className="text-gray-500 mb-1" style={{ fontSize: '11px' }}>September 17, 2018 - Tips & Tricks</p>
                      <h4 className="font-bold text-gray-800 leading-tight" style={{ fontSize: '14px' }}>
                        Finding Love & home in Tbilisi,<br />Georgia
                      </h4>
                    </div>
                  </div>
                ))}
              </div>

              {/* Gear I Use Widget */}
              <div className="bg-white rounded-lg overflow-hidden" style={{ 
                width: '344.43px', 
                height: '304.7px', 
                opacity: 1,
                boxShadow: `
                  0px 2.77px 6.23px 0px rgba(0, 0, 0, 0.05),
                  0px 6.65px 14.96px 0px rgba(0, 0, 0, 0.07),
                  0px 12.52px 28.17px 0px rgba(0, 0, 0, 0.09),
                  0px 22.34px 50.26px 0px rgba(0, 0, 0, 0.11),
                  0px 41.78px 94px 0px rgba(0, 0, 0, 0.13),
                  0px 100px 225px 0px rgba(0, 0, 0, 0.18)
                `
              }}>
                <div className="p-6 flex flex-col items-center justify-center h-full text-center" style={{ paddingTop: '0' }}>
                  <h3 className="font-bold text-gray-800 mb-4" style={{ fontSize: '18px', marginTop: '0', paddingTop: '24px' }}>Gear I Use</h3>
                  <h4 className="font-bold text-gray-800 mb-6" style={{ fontSize: '28px' }}>What&apos;s in My Bag??</h4>
                  <p className="text-gray-600 mb-8" style={{ fontSize: '16px', maxWidth: '350px' }}>
                    Unfortunately, there is no &quot;one-size-fits-all&quot; when it comes to travel packing lists.
                  </p>
                  <button className="text-white rounded-md font-medium hover:bg-[#2f4ab8] transition-colors" style={{
                    width: '145.6px',
                    height: '56.8px',
                    opacity: 1,
                    background: '#3B5BDB',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `
                      0px 2.77px 6.23px 0px rgba(0, 0, 0, 0.05),
                      0px 6.65px 14.96px 0px rgba(0, 0, 0, 0.07),
                      0px 12.52px 28.17px 0px rgba(0, 0, 0, 0.09),
                      0px 22.34px 50.26px 0px rgba(0, 0, 0, 0.11),
                      0px 41.78px 94px 0px rgba(0, 0, 0, 0.13),
                      0px 100px 225px 0px rgba(0, 0, 0, 0.18)
                    `
                  }}>
                    View Details
                  </button>
                </div>
              </div>

              {/* Products Widget */}
              <div className="bg-white shadow-sm overflow-hidden flex items-center justify-center" style={{ 
                width: '299.04px', 
                height: '85.6px', 
                opacity: 1,
                marginTop: '24px',
                marginBottom: '24px'
              }}>
                <h3 className="font-bold text-black text-center" style={{ fontSize: '20.7px' }}>Product That I Have</h3>
              </div>

              {/* Product Cards */}
              <div style={{ marginTop: '48px', marginBottom: '48px' }}>
                {[
                  { 
                    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=100&q=80',
                    name: 'Apple MacBook Air MJV2ELL/A 13-inch Laptop',
                    price: '$514'
                  },
                  { 
                    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=100&q=80',
                    name: 'Iphone Xs case, Iphone X case, SUPCASE',
                    price: '$267'
                  },
                  { 
                    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&q=80',
                    name: 'Master Sport band for Apple wrist watch',
                    price: '$378'
                  }
                ].map((product, i) => (
                  <div key={i} className="overflow-hidden flex gap-3" style={{ marginTop: '16px', marginBottom: '16px' }}>
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="object-cover rounded flex-shrink-0"
                      style={{ width: '70.4px', height: '70.4px' }}
                    />
                    <div className="flex-1 flex flex-col justify-center">
                      <h4 className="font-bold text-gray-800 leading-tight mb-1" style={{ fontSize: '14px' }}>
                        {product.name}
                      </h4>
                      <p className="text-[#3B5BDB] font-semibold" style={{ fontSize: '14px' }}>
                        {product.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Get in Touch Widget */}
              <div className="bg-white shadow-sm overflow-hidden flex items-center justify-center" style={{ 
                width: '299.04px', 
                height: '85.6px', 
                opacity: 1,
                marginTop: '24px',
                marginBottom: '24px'
              }}>
                <h3 className="font-bold text-black text-center" style={{ fontSize: '20.7px' }}>Get in Touch</h3>
              </div>

              {/* Social Media Buttons */}
              <div className="grid grid-cols-2 gap-3" style={{ marginTop: '24px', marginBottom: '24px' }}>
                {/* Facebook */}
                <a href="#" className="flex items-center gap-3 rounded-lg text-white shadow-md hover:shadow-lg transition-shadow" style={{ backgroundColor: '#1877F2', paddingLeft: '16px', paddingRight: '16px', paddingTop: '17px', paddingBottom: '17px', height: '54px' }}>
                  <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" style={{ marginLeft: '8px' }}>
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <div className="flex flex-col items-end flex-1">
                    <span className="font-bold" style={{ fontSize: '14px' }}>65.5K</span>
                    <span style={{ fontSize: '12px' }}>Likes</span>
                  </div>
                </a>

                {/* Twitter */}
                <a href="#" className="flex items-center gap-3 rounded-lg text-white shadow-md hover:shadow-lg transition-shadow" style={{ backgroundColor: '#1DA1F2', paddingLeft: '16px', paddingRight: '16px', paddingTop: '17px', paddingBottom: '17px', height: '54px' }}>
                  <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" style={{ marginLeft: '8px' }}>
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                  <div className="flex flex-col items-end flex-1">
                    <span className="font-bold" style={{ fontSize: '14px' }}>105k</span>
                    <span style={{ fontSize: '12px' }}>Followers</span>
                  </div>
                </a>

                {/* YouTube */}
                <a href="#" className="flex items-center gap-3 rounded-lg text-white shadow-md hover:shadow-lg transition-shadow" style={{ backgroundColor: '#FF0000', paddingLeft: '16px', paddingRight: '16px', paddingTop: '17px', paddingBottom: '17px', height: '54px' }}>
                  <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" style={{ marginLeft: '8px' }}>
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <div className="flex flex-col items-end flex-1">
                    <span className="font-bold" style={{ fontSize: '14px' }}>1.5M</span>
                    <span style={{ fontSize: '12px' }}>Subscribers</span>
                  </div>
                </a>

                {/* Instagram */}
                <a href="#" className="flex items-center gap-3 rounded-lg text-white shadow-md hover:shadow-lg transition-shadow" style={{ background: 'linear-gradient(45deg, #833AB4, #FD1D1D, #F77737)', paddingLeft: '16px', paddingRight: '16px', paddingTop: '17px', paddingBottom: '17px', height: '54px' }}>
                  <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" style={{ marginLeft: '8px' }}>
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <div className="flex flex-col items-end flex-1">
                    <span className="font-bold" style={{ fontSize: '14px' }}>85k</span>
                    <span style={{ fontSize: '12px' }}>Followers</span>
                  </div>
                </a>
              </div>
            </aside>

            {/* Main Content Area - Flexible Width */}
            <main className="flex-1 space-y-6">
              {/* Featured Large Post */}
              <article className="bg-white shadow-sm overflow-hidden" style={{ marginTop: '48px', marginBottom: '48px' }}>
                <div className="relative h-[350px]">
                  <img 
                    src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800&q=80"
                    alt="Featured Post"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col" style={{ minHeight: '350px' }}>
                  <div className="flex items-center mb-2" style={{ marginTop: '16px' }}>
                    <div style={{ width: '4px', height: '20px', background: '#FFAB00', marginRight: '8px' }}></div>
                    <p className="text-xs" style={{ color: '#000000' }}>Mar 15, 2017 - Tips and Tricks</p>
                  </div>
                  <h2 className="text-gray-800 mb-3" style={{ fontFamily: 'Lato', fontWeight: 600, fontSize: '31.64px', lineHeight: '46.98px', letterSpacing: '0%', marginTop: '18.4px' }}>
                    A traveler&apos;s guide to Penang, Malaysia - Where to Eat, Drink, Sleep and Explore
                  </h2>
                  <p className="text-gray-600 mb-4 flex-grow" style={{ fontFamily: 'Lato', fontWeight: 500, fontSize: '24px', lineHeight: '40px', letterSpacing: '0%' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra ac erat commodo non leo eget gravida viverra. Phasellus pharetra.
                  </p>
                  <div className="flex items-center justify-between text-sm mt-auto">
                    <span className="flex items-center gap-1 text-[#FFAB00]">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                      Penang, Malaysia
                    </span>
                    <span className="flex items-center gap-1 text-[#FFAB00]">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" /></svg>
                      Comment 53
                    </span>
                  </div>
                </div>
              </article>

              {/* Two Column Grid - Row 1 */}
              <div className="grid md:grid-cols-2 gap-6" style={{ marginTop: '48px', marginBottom: '48px' }}>
                <article className="bg-white shadow-sm overflow-hidden flex flex-col" style={{ width: '321px', height: '458.55px', background: '#FFFFFF', opacity: 1 }}>
                  <img 
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80"
                    alt="Beach"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 flex flex-col flex-grow" style={{ marginTop: '16px' }}>
                    <div className="flex items-center mb-2">
                      <div style={{ width: '4px', height: '20px', background: '#FFAB00', marginRight: '8px' }}></div>
                      <p className="text-xs" style={{ color: '#000000' }}>September 17, 2025 - Tips & Tricks</p>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                      <h3 className="text-gray-800 text-center" style={{ fontFamily: 'Lato', fontWeight: 700, fontSize: '25.31px', lineHeight: '37.58px', letterSpacing: '0%' }}>Have you read The Beach by Alex?</h3>
                    </div>
                    <div className="flex items-center justify-between text-xs" style={{ marginBottom: '16px' }}>
                      <span className="flex items-center gap-1 text-[#FFAB00]">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                        Georgia
                      </span>
                      <span className="flex items-center gap-1 text-[#FFAB00]">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" /></svg>
                        Comment (52)
                      </span>
                    </div>
                  </div>
                </article>

                <article className="bg-white shadow-sm overflow-hidden flex flex-col" style={{ width: '321px', height: '458.55px', background: '#FFFFFF', opacity: 1 }}>
                  <img 
                    src="https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=600&q=80"
                    alt="Philippines"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 flex flex-col flex-grow" style={{ marginTop: '16px' }}>
                    <div className="flex items-center mb-2">
                      <div style={{ width: '4px', height: '20px', background: '#FFAB00', marginRight: '8px' }}></div>
                      <p className="text-xs" style={{ color: '#000000' }}>September 17, 2025 - Tips & Tricks</p>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                      <h3 className="text-gray-800 text-center" style={{ fontFamily: 'Lato', fontWeight: 700, fontSize: '25.31px', lineHeight: '37.58px', letterSpacing: '0%' }}>The writer actually live in Philippines</h3>
                    </div>
                    <div className="flex items-center justify-between text-xs" style={{ marginBottom: '16px' }}>
                      <span className="flex items-center gap-1 text-[#FFAB00]">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                        Georgia
                      </span>
                      <span className="flex items-center gap-1 text-[#FFAB00]">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" /></svg>
                        Comment (52)
                      </span>
                    </div>
                  </div>
                </article>
              </div>

              {/* Video Post - Into Nature's Wild */}
              <article className="bg-white shadow-sm overflow-hidden" style={{ marginTop: '48px', marginBottom: '48px' }}>
                <div className="relative h-[350px]">
                  <img 
                    src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1000&q=80"
                    alt="Nature Wild"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-white/80 text-sm mb-2">Into</p>
                      <h3 className="text-white text-4xl font-bold mb-4">Nature&apos;s<br />WILD</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col" style={{ minHeight: '350px' }}>
                  <div className="flex items-center mb-2" style={{ marginTop: '16px' }}>
                    <div style={{ width: '4px', height: '20px', background: '#FFAB00', marginRight: '8px' }}></div>
                    <p className="text-xs" style={{ color: '#000000' }}>September 17, 2021 - Tips & Tricks</p>
                  </div>
                  <h2 className="text-gray-800 mb-3" style={{ fontFamily: 'Lato', fontWeight: 600, fontSize: '31.64px', lineHeight: '46.98px', letterSpacing: '0%', marginTop: '18.4px' }}>Finding Love & home in Tbilisi, Georgia</h2>
                  <p className="text-gray-600 mb-4 flex-grow" style={{ fontFamily: 'Lato', fontWeight: 500, fontSize: '24px', lineHeight: '40px', letterSpacing: '0%' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra ac erat commodo non leo eget gravida viverra. Phasellus pharetra.
                  </p>
                  <div className="flex items-center justify-between text-sm mt-auto">
                    <span className="flex items-center gap-1 text-[#FFAB00]">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                      Penang, Malaysia
                    </span>
                    <span className="flex items-center gap-1 text-[#FFAB00]">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" /></svg>
                      Comment 53
                    </span>
                  </div>
                </div>
              </article>

              {/* Promotional Banner */}
              <div className="relative rounded-lg overflow-hidden h-[200px]">
                <img 
                  src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1000&q=80"
                  alt="Purchase Banner"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="text-center" style={{ paddingLeft: '35px', paddingRight: '35px' }}>
                    <h3 className="text-white text-2xl font-bold mb-4">
                      Want Me to Purchase Something For<br />You That Isn&apos;t available in your Country?
                    </h3>
                    <Link
                      href="/purchase"
                      className="inline-block bg-[#3B5BDB] text-white px-8 py-3 rounded-md font-medium hover:bg-[#2f4ab8] transition-colors"
                    >
                      View Items
                    </Link>
                  </div>
                </div>
              </div>

              {/* Two Column Grid - Row 2 */}
              <div className="grid md:grid-cols-2 gap-6" style={{ marginTop: '48px', marginBottom: '48px' }}>
                <article className="bg-white shadow-sm overflow-hidden flex flex-col" style={{ width: '321px', height: '458.55px', background: '#FFFFFF', opacity: 1 }}>
                  <img 
                    src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80"
                    alt="Crowds"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 flex flex-col flex-grow" style={{ marginTop: '16px' }}>
                    <div className="flex items-center mb-2">
                      <div style={{ width: '4px', height: '20px', background: '#FFAB00', marginRight: '8px' }}></div>
                      <p className="text-xs" style={{ color: '#000000' }}>September 17, 2021 - Tips & Tricks</p>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                      <h3 className="text-gray-800 text-center" style={{ fontFamily: 'Lato', fontWeight: 700, fontSize: '25.31px', lineHeight: '37.58px', letterSpacing: '0%' }}>Got away from the maddening Crowds</h3>
                    </div>
                    <div className="flex items-center justify-between text-xs" style={{ marginBottom: '16px' }}>
                      <span className="flex items-center gap-1 text-[#FFAB00]">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                        Google
                      </span>
                      <span className="flex items-center gap-1 text-[#FFAB00]">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" /></svg>
                        Comment (40)
                      </span>
                    </div>
                  </div>
                </article>

                <article className="bg-white shadow-sm overflow-hidden flex flex-col" style={{ width: '321px', height: '458.55px', background: '#FFFFFF', opacity: 1 }}>
                  <img 
                    src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&q=80"
                    alt="Matsumoto Castle"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 flex flex-col flex-grow" style={{ marginTop: '16px' }}>
                    <div className="flex items-center mb-2">
                      <div style={{ width: '4px', height: '20px', background: '#FFAB00', marginRight: '8px' }}></div>
                      <p className="text-xs" style={{ color: '#000000' }}>September 17, 2021 - Tips & Tricks</p>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                      <h3 className="text-gray-800 text-center" style={{ fontFamily: 'Lato', fontWeight: 700, fontSize: '25.31px', lineHeight: '37.58px', letterSpacing: '0%' }}>Matsumoto Castle is considered one of</h3>
                    </div>
                    <div className="flex items-center justify-between text-xs" style={{ marginBottom: '16px' }}>
                      <span className="flex items-center gap-1 text-[#FFAB00]">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                        Google
                      </span>
                      <span className="flex items-center gap-1 text-[#FFAB00]">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" /></svg>
                        Comment (40)
                      </span>
                    </div>
                  </div>
                </article>
              </div>

              {/* Two Column Grid - Row 3 */}
              <div className="grid md:grid-cols-2 gap-6" style={{ marginTop: '48px', marginBottom: '48px' }}>
                <article className="bg-white shadow-sm overflow-hidden flex flex-col" style={{ width: '321px', height: '458.55px', background: '#FFFFFF', opacity: 1 }}>
                  <img 
                    src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&q=80"
                    alt="Buildings"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 flex flex-col flex-grow" style={{ marginTop: '16px' }}>
                    <div className="flex items-center mb-2">
                      <div style={{ width: '4px', height: '20px', background: '#FFAB00', marginRight: '8px' }}></div>
                      <p className="text-xs" style={{ color: '#000000' }}>September 17, 2021 - Tips & Tricks</p>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                      <h3 className="text-gray-800 text-center" style={{ fontFamily: 'Lato', fontWeight: 700, fontSize: '25.31px', lineHeight: '37.58px', letterSpacing: '0%' }}>Many buildings especially in Japan</h3>
                    </div>
                    <div className="flex items-center justify-between text-xs" style={{ marginBottom: '16px' }}>
                      <span className="flex items-center gap-1 text-[#FFAB00]">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                        Google
                      </span>
                      <span className="flex items-center gap-1 text-[#FFAB00]">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" /></svg>
                        Comment (40)
                      </span>
                    </div>
                  </div>
                </article>

                <article className="bg-white shadow-sm overflow-hidden flex flex-col" style={{ width: '321px', height: '458.55px', background: '#FFFFFF', opacity: 1 }}>
                  <img 
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80"
                    alt="Deer"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 flex flex-col flex-grow" style={{ marginTop: '16px' }}>
                    <div className="flex items-center mb-2">
                      <div style={{ width: '4px', height: '20px', background: '#FFAB00', marginRight: '8px' }}></div>
                      <p className="text-xs" style={{ color: '#000000' }}>September 17, 2021 - Tips & Tricks</p>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                      <h3 className="text-gray-800 text-center" style={{ fontFamily: 'Lato', fontWeight: 700, fontSize: '25.31px', lineHeight: '37.58px', letterSpacing: '0%' }}>There are roughly 1200 semiwild deer</h3>
                    </div>
                    <div className="flex items-center justify-between text-xs" style={{ marginBottom: '16px' }}>
                      <span className="flex items-center gap-1 text-[#FFAB00]">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                        Google
                      </span>
                      <span className="flex items-center gap-1 text-[#FFAB00]">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" /></svg>
                        Comment (40)
                      </span>
                    </div>
                  </div>
                </article>
              </div>

              {/* Video Post 2 - Into Nature's Wild */}
              <article className="bg-white shadow-sm overflow-hidden" style={{ marginTop: '48px', marginBottom: '48px' }}>
                <div className="relative h-[350px]">
                  <img 
                    src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1000&q=80"
                    alt="Nature Wild"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-white/80 text-sm mb-2">Into</p>
                      <h3 className="text-white text-4xl font-bold mb-4">Nature&apos;s<br />WILD</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col" style={{ minHeight: '350px' }}>
                  <div className="flex items-center mb-2" style={{ marginTop: '16px' }}>
                    <div style={{ width: '4px', height: '20px', background: '#FFAB00', marginRight: '8px' }}></div>
                    <p className="text-xs" style={{ color: '#000000' }}>September 17, 2021 - Tips & Tricks</p>
                  </div>
                  <h2 className="text-gray-800 mb-3" style={{ fontFamily: 'Lato', fontWeight: 600, fontSize: '31.64px', lineHeight: '46.98px', letterSpacing: '0%', marginTop: '18.4px' }}>Finding Love & home in Tbilisi, Georgia</h2>
                  <p className="text-gray-600 mb-4 flex-grow" style={{ fontFamily: 'Lato', fontWeight: 500, fontSize: '24px', lineHeight: '40px', letterSpacing: '0%' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra ac erat commodo non leo eget gravida viverra. Phasellus pharetra.
                  </p>
                  <div className="flex items-center justify-between text-sm mt-auto">
                    <span className="flex items-center gap-1 text-[#FFAB00]">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                      Penang, Malaysia
                    </span>
                    <span className="flex items-center gap-1 text-[#FFAB00]">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" /></svg>
                      Comment 53
                    </span>
                  </div>
                </div>
              </article>

              {/* Two Column Grid - Row 4 */}
              <div className="grid md:grid-cols-2 gap-6" style={{ marginTop: '48px', marginBottom: '48px' }}>
                <article className="bg-white shadow-sm overflow-hidden flex flex-col" style={{ width: '321px', height: '458.55px', background: '#FFFFFF', opacity: 1 }}>
                  <img 
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80"
                    alt="Beach"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 flex flex-col flex-grow" style={{ marginTop: '16px' }}>
                    <div className="flex items-center mb-2">
                      <div style={{ width: '4px', height: '20px', background: '#FFAB00', marginRight: '8px' }}></div>
                      <p className="text-xs" style={{ color: '#000000' }}>September 17, 2025 - Tips & Tricks</p>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                      <h3 className="text-gray-800 text-center" style={{ fontFamily: 'Lato', fontWeight: 700, fontSize: '25.31px', lineHeight: '37.58px', letterSpacing: '0%' }}>Have you read The Beach by Alex?</h3>
                    </div>
                    <div className="flex items-center justify-between text-xs" style={{ marginBottom: '16px' }}>
                      <span className="flex items-center gap-1 text-[#FFAB00]">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                        Georgia
                      </span>
                      <span className="flex items-center gap-1 text-[#FFAB00]">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" /></svg>
                        Comment (52)
                      </span>
                    </div>
                  </div>
                </article>

                <article className="bg-white shadow-sm overflow-hidden flex flex-col" style={{ width: '321px', height: '458.55px', background: '#FFFFFF', opacity: 1 }}>
                  <img 
                    src="https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=600&q=80"
                    alt="Philippines"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 flex flex-col flex-grow" style={{ marginTop: '16px' }}>
                    <div className="flex items-center mb-2">
                      <div style={{ width: '4px', height: '20px', background: '#FFAB00', marginRight: '8px' }}></div>
                      <p className="text-xs" style={{ color: '#000000' }}>September 17, 2025 - Tips & Tricks</p>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                      <h3 className="text-gray-800 text-center" style={{ fontFamily: 'Lato', fontWeight: 700, fontSize: '25.31px', lineHeight: '37.58px', letterSpacing: '0%' }}>The writer actually live in Philippines</h3>
                    </div>
                    <div className="flex items-center justify-between text-xs" style={{ marginBottom: '16px' }}>
                      <span className="flex items-center gap-1 text-[#FFAB00]">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                        Georgia
                      </span>
                      <span className="flex items-center gap-1 text-[#FFAB00]">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" /></svg>
                        Comment (52)
                      </span>
                    </div>
                  </div>
                </article>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}
