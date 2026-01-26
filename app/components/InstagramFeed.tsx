'use client';

export default function InstagramFeed() {
  const images = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&q=80',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&q=80',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&q=80',
    'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=300&q=80',
    'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=300&q=80',
  ];

  return (
    <div className="relative">
      <div className="flex overflow-hidden">
        {images.map((img, i) => (
          <div key={i} className="w-[20%] flex-shrink-0 relative" style={{ height: '210px' }}>
            <img 
              src={img} 
              alt={`Instagram ${i + 1}`}
              className="w-full h-full object-cover"
            />
            {i === 2 && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <button 
                  className="text-white font-semibold transition-opacity"
                  style={{ 
                    background: '#0047FF',
                    borderRadius: '5.6px',
                    padding: '11.2px 22.4px',
                    fontSize: '14px'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                >
                  Follow @ instagram
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
