'use client';

import { useState } from 'react';
import Image from 'next/image';

const destinations = [
  {
    title: 'Finding Love & Home In Tbilisi, Georgia',
    date: 'September 15, 2018',
    category: 'Tips & Tricks',
    location: 'Georgia',
    comments: 25,
    continent: 'Europe',
    image: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=600&q=80',
  },
  {
    title: 'Have you read the Beach by Alex?',
    date: 'September 15, 2018',
    category: 'Tips & Tricks',
    location: 'Georgia',
    comments: 132,
    continent: 'Europe',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80',
  },
  {
    title: 'The writer actually live in philippines',
    date: 'September 15, 2018',
    category: 'Tips & Tricks',
    location: 'Georgia',
    comments: 13,
    continent: 'Asia',
    image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=600&q=80',
  },
  {
    title: "Honestly it's almost ridiculous how",
    date: 'September 15, 2018',
    category: 'Tips & Tricks',
    location: 'Georgia',
    comments: 53,
    continent: 'Europe',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80',
  },
  {
    title: 'The only way to see the islands',
    date: 'September 15, 2018',
    category: 'Tips & Tricks',
    location: 'Georgia',
    comments: 23,
    continent: 'Europe',
    image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&q=80',
  },
  {
    title: 'Get away from the maddening crowds',
    date: 'September 15, 2018',
    category: 'Tips & Tricks',
    location: 'Georgia',
    comments: 32,
    continent: 'North America',
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&q=80',
  },
  {
    title: 'Matsumoto castle is considered one of',
    date: 'September 15, 2018',
    category: 'Tips & Tricks',
    location: 'Georgia',
    comments: 28,
    continent: 'Asia',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80',
  },
  {
    title: 'Many buildings especially in japan',
    date: 'September 15, 2018',
    category: 'Tips & Tricks',
    location: 'Georgia',
    comments: 23,
    continent: 'Asia',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=80',
  },
  {
    title: 'There are roughly 1200 semiwild deer',
    date: 'September 15, 2018',
    category: 'Tips & Tricks',
    location: 'Georgia',
    comments: 28,
    continent: 'Asia',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
  },
];

const tabs = ['South America', 'North America', 'Europe', 'Africa', 'Asia'];

export default function DestinationPage() {
  const [activeTab, setActiveTab] = useState('Europe');

  const filteredDestinations = destinations.filter(
    (dest) => dest.continent === activeTab
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full text-center" style={{ paddingLeft: '35px', paddingRight: '35px' }}>
          <h1 className="text-6xl font-bold">Destination</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white" style={{ paddingTop: '104px', paddingBottom: '104px' }}>
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: '35px', paddingRight: '35px' }}>
          {/* Heading Section */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between" style={{ marginBottom: '62.4px', gap: '41.6px' }}>
            <div className="flex-1">
              <h2 className="font-bold" style={{ 
                fontSize: 'clamp(46.8px, 5vw, 62.4px)',
                marginBottom: '31.2px',
                lineHeight: '1.2'
              }}>
                <span style={{ color: '#FFAB00' }}>Where do</span> you want to go?
              </h2>
            </div>
            <div className="flex-1 max-w-2xl">
              <p style={{ 
                fontFamily: 'Lato',
                fontWeight: 700,
                fontSize: '18px',
                lineHeight: '40px',
                letterSpacing: '2%',
                textAlign: 'justify',
                color: '#000000'
              }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor
                vestibulum magna sed, convallis ex. Duis vehicula tellus ut sollicitudin Duis
                elementum ultricies nunc elit velit eleifend varius vehicula velit dapibus ut velit eleifund.
              </p>
            </div>
          </div>

          {/* Continent Tabs */}
          <div className="mb-12" style={{ paddingLeft: '53px', paddingRight: '26px' }}>
            <div className="flex" style={{ gap: 0 }}>
            {tabs.map((tab, index) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="font-semibold transition-all"
                style={{
                  background: activeTab === tab ? '#0047FF' : '#ffffff',
                  color: activeTab === tab ? '#ffffff' : '#000000',
                  border: '1px solid #000000',
                  borderRadius: 0,
                  padding: '16px 24px',
                  outline: 'none',
                  cursor: 'pointer',
                  fontSize: '16px',
                  flex: '1 1 0',
                  minWidth: 0,
                  width: 0,
                  marginLeft: index > 0 ? '-1px' : 0
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== tab) {
                    e.currentTarget.style.borderColor = '#0047FF';
                    e.currentTarget.style.color = '#0047FF';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== tab) {
                    e.currentTarget.style.borderColor = '#000000';
                    e.currentTarget.style.color = '#000000';
                  }
                }}
              >
                {tab}
              </button>
            ))}
            </div>
          </div>

          {/* Destination Cards Grid */}
          <div className="mb-12" style={{ paddingLeft: '26px', paddingRight: '26px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', justifyContent: 'center', marginTop: '35px' }}>
            {filteredDestinations.map((dest, i) => (
              <div key={i} style={{ position: 'relative', width: '304px', height: '441.6px', margin: '0 auto' }}>
                {/* Image Card */}
                <div style={{ 
                  width: '304px',
                  height: '288px',
                  overflow: 'hidden',
                  position: 'absolute',
                  top: 0,
                  left: 0
                }}>
                  <img 
                    src={dest.image} 
                    alt={dest.title}
                    style={{ 
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
                
                {/* Text Content Card - Overlapping */}
                <div style={{
                  width: '279.28px',
                  height: '241.76px',
                  background: '#FFFFFF',
                  boxShadow: '0px 3.36px 8.392px 0px rgba(0, 0, 0, 0.25)',
                  padding: '19.2px',
                  position: 'absolute',
                  top: '200px',
                  left: '0',
                  borderRadius: '0 0 6.4px 6.4px'
                }}>
                  {/* Orange Vertical Strip */}
                  <div 
                    style={{ 
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      bottom: 0,
                      width: '3.2px',
                      background: '#FFAB00'
                    }}
                  />
                  
                  {/* Date/Category */}
                  <div 
                    className="text-sm"
                    style={{ color: '#FFAB00', marginLeft: '12.8px', fontSize: '11.2px', marginBottom: '9.6px' }}
                  >
                    {dest.date} - {dest.category}
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-bold" style={{ marginLeft: '12.8px', fontSize: '16px', marginBottom: '12.8px' }}>{dest.title}</h3>
                  
                  {/* Horizontal Separator Line */}
                  <div style={{ 
                    marginLeft: '12.8px',
                    marginBottom: '12.8px',
                    borderTop: '1px solid #E5E5E5',
                    width: 'calc(100% - 25.6px)'
                  }}></div>
                  
                  {/* Location and Comments */}
                  <div className="flex items-center text-sm text-gray-600" style={{ marginLeft: '12.8px', fontSize: '11.2px', gap: '19.2px' }}>
                    <div className="flex items-center gap-1">
                      <svg fill="#FFAB00" viewBox="0 0 20 20" style={{ width: '12.8px', height: '12.8px' }}>
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{dest.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg fill="#FFAB00" viewBox="0 0 20 20" style={{ width: '12.8px', height: '12.8px' }}>
                        <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                      </svg>
                      <span>Comment ({dest.comments})</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
