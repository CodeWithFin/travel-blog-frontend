'use client';

export default function InstagramFeed() {
  return (
    <div className="relative">
      <div className="flex overflow-hidden">
        {/* Instagram images placeholder */}
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="w-[200px] h-[200px] bg-gray-300 flex-shrink-0" />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <button 
          className="text-white px-6 py-3 rounded font-semibold transition-opacity"
          style={{ background: '#1a5eff' }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
        >
          Follow @instagram
        </button>
      </div>
    </div>
  );
}
