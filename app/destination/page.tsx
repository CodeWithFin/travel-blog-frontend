'use client';

import { useState } from 'react';
import Newsletter from '../components/Newsletter';
import InstagramFeed from '../components/InstagramFeed';

const destinations = [
  {
    title: 'Finding Love & Home In Tbilisi, Georgia',
    date: 'September 15, 2019',
    category: 'Tips & Tricks',
    location: 'Georgia',
    comments: 25,
    continent: 'Europe',
  },
  {
    title: 'Have you read the Beach by Alex?',
    date: 'September 15, 2019',
    category: 'Tips & Tricks',
    location: 'Georgia',
    comments: 132,
    continent: 'Europe',
  },
  {
    title: 'The writer actually live in philippines',
    date: 'September 15, 2019',
    category: 'Tips & Tricks',
    location: 'Georgia',
    comments: 13,
    continent: 'Asia',
  },
  {
    title: "Honestly it's almost ridiculous how",
    date: 'September 15, 2019',
    category: 'Tips & Tricks',
    location: 'Georgia',
    comments: 53,
    continent: 'Europe',
  },
  {
    title: 'The only way to see the islands',
    date: 'September 15, 2019',
    category: 'Tips & Tricks',
    location: 'Georgia',
    comments: 23,
    continent: 'Europe',
  },
  {
    title: 'Get away from the maddening crowds',
    date: 'September 15, 2019',
    category: 'Tips & Tricks',
    location: 'Georgia',
    comments: 32,
    continent: 'North America',
  },
  {
    title: 'Matsumoto castle is considered one of',
    date: 'September 15, 2019',
    category: 'Tips & Tricks',
    location: 'Georgia',
    comments: 28,
    continent: 'Asia',
  },
  {
    title: 'Many buildings especially in japan',
    date: 'September 15, 2019',
    category: 'Tips & Tricks',
    location: 'Georgia',
    comments: 23,
    continent: 'Asia',
  },
  {
    title: 'There are roughly 1200 semiwild deer',
    date: 'September 15, 2019',
    category: 'Tips & Tricks',
    location: 'Georgia',
    comments: 28,
    continent: 'Asia',
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
      <section className="relative h-[400px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold">Destination</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span style={{ color: '#ffab00' }}>Where do</span> you want to go?
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor
              vestibulum magna sed, convallis ex. Duis vehicula tellus ut sollicitudin Duis
              elementum ultricies nunc elit velit eleifend varius vehicula velit dapibus ut velit eleifund.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mb-12 border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-semibold transition-colors relative ${
                  activeTab === tab
                    ? 'border-b-2'
                    : 'text-gray-600'
                }`}
                style={activeTab === tab ? { color: '#1a5eff', borderColor: '#1a5eff' } : {}}
                onMouseEnter={(e) => {
                  if (activeTab !== tab) e.currentTarget.style.color = '#1a5eff';
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== tab) e.currentTarget.style.color = '#666';
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Destination Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredDestinations.map((dest, i) => (
              <div
                key={i}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gray-300" />
                <div className="p-6">
                  <div className="text-sm mb-2" style={{ color: '#ffab00' }}>
                    {dest.date} - {dest.category}
                  </div>
                  <h3 className="font-bold text-xl mb-4">{dest.title}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{dest.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                      </svg>
                      <span>{dest.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <InstagramFeed />

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
}
