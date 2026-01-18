'use client';

import Link from 'next/link';
import Newsletter from './components/Newsletter';
import InstagramFeed from './components/InstagramFeed';

export default function Home() {
  return (
    <div style={{ background: '#FFFFFF' }}>
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center">
          <div className="absolute inset-0" style={{ background: 'rgba(0, 0, 0, 0.3)' }} />
        </div>
        
        <div 
          className="relative z-10 text-center flex flex-col items-center justify-center"
          style={{ 
            width: '1438px',
            height: '250px',
            opacity: 1,
            transform: 'rotate(0deg)'
          }}
        >
          {/* Counter Text */}
          <div className="text-xl font-medium mb-1 tracking-wide uppercase">
            THE COUNTER: <span className="font-bold" style={{ color: '#ffab00' }}>70</span> Countries{' '}
            <span className="font-bold" style={{ color: '#ffab00' }}>1036</span> Cities
          </div>
          
          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl font-bold mb-4 leading-tight" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
            Leave your mark on all<br />over the world
          </h1>
          
          {/* CTA Button */}
          <Link
            href="/destination"
            className="text-white text-center flex items-center justify-center rounded transition-colors"
            style={{ 
              width: '182px',
              height: '71px',
              opacity: 1,
              transform: 'rotate(0deg)',
              background: '#0047FF',
              boxShadow: '0px 2.77px 6.23px 0px rgba(0, 0, 0, 0.05), 0px 6.65px 14.96px 0px rgba(0, 0, 0, 0.07), 0px 12.52px 28.17px 0px rgba(0, 0, 0, 0.09), 0px 22.34px 50.26px 0px rgba(0, 0, 0, 0.11), 0px 41.78px 94px 0px rgba(0, 0, 0, 0.13), 0px 100px 225px 0px rgba(0, 0, 0, 0.18)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#0036c4'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#0047FF'}
          >
            Read More
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3 z-10">
          <span className="text-sm font-medium">Scroll Down to Continue</span>
          <div 
            className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-lg shadow-md"
            style={{ color: '#0047FF' }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        {/* Location Pin */}
        <div 
          className="absolute bottom-10 right-12 text-5xl cursor-pointer transition-transform z-10"
          style={{ 
            color: '#0047FF',
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Sidebar */}
            <div className="lg:col-span-1 space-y-6 relative">
              {/* About Me Card - Absolutely positioned above Categories */}
              <div 
                className="absolute bg-white rounded overflow-hidden z-10"
                style={{
                  width: '438.2314453125px',
                  height: '598px',
                  top: '0px',
                  left: '0px',
                  opacity: 1,
                  transform: 'rotate(0deg)',
                  boxShadow: '0px 2.77px 6.23px 0px rgba(0, 0, 0, 0.05), 0px 6.65px 14.96px 0px rgba(0, 0, 0, 0.07), 0px 12.52px 28.17px 0px rgba(0, 0, 0, 0.09), 0px 22.34px 50.26px 0px rgba(0, 0, 0, 0.11), 0px 41.78px 94px 0px rgba(0, 0, 0, 0.13), 0px 100px 225px 0px rgba(0, 0, 0, 0.18)'
                }}
              >
                <div className="p-6 h-full flex flex-col">
                  <h2 className="text-xl font-bold mb-4 text-gray-700">About Me</h2>
                  <div className="w-full mb-4 overflow-hidden rounded" style={{ height: '200px' }}>
                    <img 
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm text-gray-600 mb-4 flex-grow">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra ac erat commodo non leo eget gravida viverra. Phasellus pharetra.
                  </p>
                  {/* Read More Button */}
                  <Link
                    href="/about"
                    className="text-white text-center flex items-center justify-center rounded transition-colors self-center"
                    style={{ 
                      width: '182px',
                      height: '71px',
                      opacity: 1,
                      transform: 'rotate(0deg)',
                      background: '#0047FF',
                      boxShadow: '0px 2.77px 6.23px 0px rgba(0, 0, 0, 0.05), 0px 6.65px 14.96px 0px rgba(0, 0, 0, 0.07), 0px 12.52px 28.17px 0px rgba(0, 0, 0, 0.09), 0px 22.34px 50.26px 0px rgba(0, 0, 0, 0.11), 0px 41.78px 94px 0px rgba(0, 0, 0, 0.13), 0px 100px 225px 0px rgba(0, 0, 0, 0.18)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#0036c4'}
                    onMouseLeave={(e) => e.currentTarget.style.background = '#0047FF'}
                  >
                    Read More
                  </Link>
                </div>
              </div>

              {/* Categories - Below About Me */}
              <div className="bg-gray-100 p-4 rounded" style={{ marginTop: '620px', position: 'relative', zIndex: 1 }}>
                <h3 className="text-xl font-bold mb-4 text-gray-700">Categories</h3>
                <div className="bg-white p-4 rounded">
                  <ul className="space-y-2">
                    {['Europe', 'Mountains', 'Traveling Video', 'Beauty of Seas', 'Cuisine', 'Guides for traveler', 'Other'].map((cat) => (
                      <li key={cat}>
                        <Link href={`/category/${cat.toLowerCase().replace(/\s+/g, '-')}`} className="flex justify-between text-gray-700 hover:text-blue-600">
                          <span>{cat}</span>
                          <span className="text-gray-400">(11)</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Popular Post */}
              <div className="bg-gray-100 p-4 rounded">
                <h3 className="text-xl font-bold mb-4 text-gray-700">Popular Post</h3>
                <div className="bg-white p-4 rounded">
                  <div className="relative">
                    <div className="w-full h-48 overflow-hidden rounded mb-2">
                      <img 
                        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                        alt="Popular post"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-sm font-semibold">Finding Love & home in Tbilisi, Georgia</h4>
                    <div className="flex gap-2 mt-2">
                      <button className="p-1 bg-gray-200 rounded">←</button>
                      <button className="p-1 bg-gray-200 rounded">→</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Post */}
              <div className="bg-gray-100 p-4 rounded">
                <h3 className="text-xl font-bold mb-4 text-gray-700">Recent Post</h3>
                <div className="bg-white p-4 rounded space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex gap-3">
                      <div className="w-20 h-20 bg-gray-300 rounded flex-shrink-0">
                        <img 
                          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                          alt="Recent post"
                          className="w-full h-full object-cover rounded"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs text-gray-500 mb-1">Sep 15, 2019 - Tips & Tricks</div>
                        <h4 className="text-sm font-semibold">Finding Love & home in Tbilisi, Georgia</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gear I Use */}
              <div className="bg-gray-100 p-4 rounded">
                <h3 className="text-xl font-bold mb-4 text-gray-700">Gear I Use</h3>
                <div className="bg-white p-4 rounded">
                  <h4 className="text-sm font-semibold mb-2">What&apos;s in My Bag??</h4>
                  <p className="text-sm text-gray-600 mb-4">Unfortunately, there are no items to show in this category.</p>
                  <Link
                    href="/gear"
                    className="block w-full text-center text-white py-2 rounded transition-colors"
                    style={{ background: '#0047FF' }}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#0036c4'}
                    onMouseLeave={(e) => e.currentTarget.style.background = '#0047FF'}
                  >
                    View Items
                  </Link>
                </div>
              </div>

              {/* Product That I Have */}
              <div className="bg-gray-100 p-4 rounded">
                <h3 className="text-xl font-bold mb-4 text-gray-700">Product That I Have</h3>
                <div className="bg-white p-4 rounded space-y-4">
                  {[
                    { name: 'Apple Macbook Air MUVZELL/A 13-inch Laptop', price: '$514' },
                    { name: 'iPhone Xs case, iPhone X case, SUPCASE', price: '$267' },
                    { name: 'Master Sport band for Apple watch', price: '$378' },
                  ].map((product, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="w-16 h-16 bg-gray-300 rounded flex-shrink-0" />
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold mb-1">{product.name}</h4>
                        <p className="text-sm font-bold" style={{ color: '#0047FF' }}>{product.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Get In Touch */}
              <div className="bg-gray-100 p-4 rounded">
                <h3 className="text-xl font-bold mb-4 text-gray-700">Get In Touch</h3>
                <div className="bg-white p-4 rounded">
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { name: 'Facebook', color: '#1877F2', followers: '1.7M Followers' },
                      { name: 'Twitter', color: '#1DA1F2', followers: '2.3M Followers' },
                      { name: 'YouTube', color: '#FF0000', followers: '1.5M Subscribers' },
                      { name: 'Instagram', color: '#E4405F', followers: '1.9M Followers' },
                    ].map((social) => (
                      <a
                        key={social.name}
                        href="#"
                        className="p-3 rounded text-white text-center text-xs font-semibold"
                        style={{ background: social.color }}
                      >
                        <div>{social.name}</div>
                        <div className="text-xs mt-1">{social.followers}</div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Featured Article 1 */}
              <article className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="w-full h-96 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                    alt="Yellow van in desert"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm mb-2" style={{ color: '#ffab00' }}>
                    Mar 15, 2017 - Tips and Tricks
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    A traveler&apos;s guide to Penang, Malaysia - Where to Eat, Drink, Sleep and Explore
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra ac erat commodo non leo eget gravida viverra. Phasellus pharetra.
                  </p>
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-1" style={{ color: '#ffab00' }}>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span>Penang, Malaysia</span>
                    </div>
                    <div className="flex items-center gap-1" style={{ color: '#ffab00' }}>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                      </svg>
                      <span>Comment 53</span>
                    </div>
                  </div>
                </div>
              </article>

              {/* Two Smaller Articles */}
              <div className="grid md:grid-cols-2 gap-6">
                <article className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="w-full h-64 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Van on beach"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-xs mb-1" style={{ color: '#ffab00' }}>
                      September 17, 2018 - Tips & Tricks
                    </div>
                    <h4 className="font-bold mb-2">Have you read The Beach by Alex?</h4>
                    <div className="flex items-center gap-4 text-xs">
                      <div className="flex items-center gap-1" style={{ color: '#ffab00' }}>
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span>Google</span>
                      </div>
                      <div className="flex items-center gap-1" style={{ color: '#ffab00' }}>
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                        </svg>
                        <span>Comment 53</span>
                      </div>
                    </div>
                  </div>
                </article>

                <article className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="w-full h-64 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1514565131-fce0801e5785?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="City skyline"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-xs mb-1" style={{ color: '#ffab00' }}>
                      September 17, 2018 - Tips & Tricks
                    </div>
                    <h4 className="font-bold mb-2">The writer actually live in Philippines</h4>
                    <div className="flex items-center gap-4 text-xs">
                      <div className="flex items-center gap-1" style={{ color: '#ffab00' }}>
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span>Google</span>
                      </div>
                      <div className="flex items-center gap-1" style={{ color: '#ffab00' }}>
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                        </svg>
                        <span>Comment 53</span>
                      </div>
                    </div>
                  </div>
                </article>
              </div>

              {/* Video Embed */}
              <article className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative w-full h-96 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                    alt="Video thumbnail"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <div className="text-white text-2xl font-bold text-center">Into Nature&apos;s WILD</div>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-red-600 text-white px-4 py-2 rounded flex items-center gap-2">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                    YouTube
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm mb-2" style={{ color: '#ffab00' }}>
                    September 17, 2018 - Tips & Tricks
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Finding Love & home in Tbilisi, Georgia</h3>
                  <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra ac erat commodo non leo eget gravida viverra. Phasellus pharetra.
                  </p>
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-1" style={{ color: '#ffab00' }}>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span>Penang, Malaysia</span>
                    </div>
                    <div className="flex items-center gap-1" style={{ color: '#ffab00' }}>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                      </svg>
                      <span>Comment 53</span>
                    </div>
                  </div>
                </div>
              </article>

              {/* Purchase Banner */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md relative">
                <div className="w-full h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                    alt="Purchase banner"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="text-center text-white px-8">
                    <h3 className="text-2xl font-bold mb-4">
                      Want Me to Purchase Something For You That Isn&apos;t available in your Country?
                    </h3>
                    <Link
                      href="/purchase"
                      className="inline-block text-white px-6 py-3 rounded transition-colors"
                      style={{ background: '#0047FF' }}
                      onMouseEnter={(e) => e.currentTarget.style.background = '#0036c4'}
                      onMouseLeave={(e) => e.currentTarget.style.background = '#0047FF'}
                    >
                      View Items
                    </Link>
                  </div>
                </div>
              </div>

              {/* More Articles - Two Side by Side */}
              <div className="grid md:grid-cols-2 gap-6">
                <article className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="w-full h-64 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Get away from crowds"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-xs mb-1" style={{ color: '#ffab00' }}>
                      September 17, 2018 - Tips & Tricks
                    </div>
                    <h4 className="font-bold mb-2">Get away from the maddening Crowds</h4>
                    <div className="flex items-center gap-4 text-xs">
                      <div className="flex items-center gap-1" style={{ color: '#ffab00' }}>
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span>Google</span>
                      </div>
                      <div className="flex items-center gap-1" style={{ color: '#ffab00' }}>
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                        </svg>
                        <span>Comment 53</span>
                      </div>
                    </div>
                  </div>
                </article>

                <article className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="w-full h-64 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Matsumoto Castle"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-xs mb-1" style={{ color: '#ffab00' }}>
                      September 17, 2018 - Tips & Tricks
                    </div>
                    <h4 className="font-bold mb-2">Matsumoto Castle is considered one of</h4>
                    <div className="flex items-center gap-4 text-xs">
                      <div className="flex items-center gap-1" style={{ color: '#ffab00' }}>
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span>Google</span>
                      </div>
                      <div className="flex items-center gap-1" style={{ color: '#ffab00' }}>
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                        </svg>
                        <span>Comment 53</span>
                      </div>
                    </div>
                  </div>
                </article>
              </div>

              {/* Another Two Articles */}
              <div className="grid md:grid-cols-2 gap-6">
                <article className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="w-full h-64 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1514565131-fce0801e5785?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Buildings in Japan"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-xs mb-1" style={{ color: '#ffab00' }}>
                      September 17, 2018 - Tips & Tricks
                    </div>
                    <h4 className="font-bold mb-2">Many buildings especially in Japan</h4>
                    <div className="flex items-center gap-4 text-xs">
                      <div className="flex items-center gap-1" style={{ color: '#ffab00' }}>
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span>Google</span>
                      </div>
                      <div className="flex items-center gap-1" style={{ color: '#ffab00' }}>
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                        </svg>
                        <span>Comment 53</span>
                      </div>
                    </div>
                  </div>
                </article>

                <article className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="w-full h-64 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Deer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-xs mb-1" style={{ color: '#ffab00' }}>
                      September 17, 2018 - Tips & Tricks
                    </div>
                    <h4 className="font-bold mb-2">There are roughly 1200 semiwild dear</h4>
                    <div className="flex items-center gap-4 text-xs">
                      <div className="flex items-center gap-1" style={{ color: '#ffab00' }}>
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span>Google</span>
                      </div>
                      <div className="flex items-center gap-1" style={{ color: '#ffab00' }}>
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                        </svg>
                        <span>Comment 53</span>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />

      {/* Instagram Feed */}
      <InstagramFeed />
    </div>
  );
}
