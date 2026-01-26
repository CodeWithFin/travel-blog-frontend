'use client';

import Link from 'next/link';

const tips = [
  {
    title: 'Going to the Extreme -The Northern Pole',
    date: 'January 15, 2019',
    category: 'Travel Tips',
    location: 'North Pole',
    comments: 12,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Summer Vibes... Where to spend the energy.',
    date: 'January 15, 2019',
    category: 'Travel Tips',
    location: 'North Pole',
    comments: 12,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Smartet cites and how to enjoy them.',
    date: 'January 15, 2019',
    category: 'Travel Tips',
    location: 'North Pole',
    comments: 12,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Going to the wild? What should you pack?',
    date: 'January 15, 2019',
    category: 'Travel Tips',
    location: 'North Pole',
    comments: 12,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Foods to try when you Visit Australia.',
    date: 'January 15, 2019',
    category: 'Travel Tips',
    location: 'North Pole',
    comments: 12,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Beaches And how to enjoy them the most.',
    date: 'January 15, 2019',
    category: 'Travel Tips',
    location: 'North Pole',
    comments: 12,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Road Trip 101 Things you need to know.',
    date: 'January 15, 2019',
    category: 'Travel Tips',
    location: 'North Pole',
    comments: 12,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Water front precautions to take during travels.',
    date: 'January 15, 2019',
    category: 'Travel Tips',
    location: 'North Pole',
    comments: 12,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Going to the Extreme -The Northern Pole',
    date: 'January 15, 2019',
    category: 'Travel Tips',
    location: 'North Pole',
    comments: 12,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
  },
];

export default function TipsPage() {
  return (
    <div style={{ background: '#FFFFFF' }}>
      {/* Hero Section with Dark Green Forest Background */}
      <section className="relative h-[400px] flex items-center justify-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920)',
          }}
        >
          <div className="absolute inset-0" style={{ background: 'rgba(0, 0, 0, 0.4)' }} />
        </div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold">Travel Tips</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-8">
          {/* Featured Article */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Maintaining your <span style={{ color: '#ffab00' }}>privacy</span> during travels.
              </h2>
            </div>
            <div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Molestie aliquam sit lacus, sem vulputate sed magnis eu. Non nec at lobortis enim,
                feugiat fermentum lobortis gravida in. Tellus tincidunt amet, egestas in. Faucibus
                tellus faucibus id magna dolor, turpis dignissim. Facilisis purus nibh vitae arcu. In
                tellus in amet consectetur et purus neque blandit cursus volutpat nisl morbi egestas.
                Adipiscing porta quis turpis ut nulla morbi. Varius id tempor, augue risus. Ornare posuere
                scelerisque ac at. Ut nunc neque ac commodo nulla egestas eros. Ullamcorper a eu nulla
                diam nec pulvinar sit dui nec. Mauris sed vestibulum vitae massa. Ac morbi ut velit sit
                suscipit id. Venenatis scelerisque ut nam ultrices tortor integer. Odio ullamcorper rutrum
              </p>
              <Link 
                href="#" 
                className="font-semibold transition-opacity inline-block" 
                style={{ color: '#ffab00' }}
                onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
              >
                read more
              </Link>
            </div>
          </div>

          {/* Tips Grid - 3x3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: '22px' }}>
            {tips.map((tip, i) => (
              <div
                key={i}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col"
                style={{ borderRadius: '8px', height: '100%', maxWidth: '80%', margin: '0 auto' }}
              >
                {/* Image with rounded top corners only */}
                <div className="w-full overflow-hidden flex-shrink-0" style={{ height: '168px' }}>
                  <img 
                    src={tip.image} 
                    alt={tip.title}
                    className="w-full h-full object-cover"
                    style={{ 
                      borderTopLeftRadius: '8px',
                      borderTopRightRadius: '8px',
                      borderBottomLeftRadius: '0',
                      borderBottomRightRadius: '0'
                    }}
                  />
                </div>
                
                <div className="p-4 flex flex-col flex-grow" style={{ padding: '11px' }}>
                  {/* Date/Category */}
                  <div className="text-gray-500 text-sm" style={{ 
                    paddingTop: '6px',
                    paddingBottom: '6px',
                    fontSize: '10px',
                    marginBottom: '8px'
                  }}>
                    {tip.date} - {tip.category}
                  </div>
                  
                  {/* Blue Title Bar */}
                  <div className="text-white flex-shrink-0" style={{ 
                    background: '#0047FF',
                    padding: '11px',
                    borderRadius: '0',
                    minHeight: '56px',
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '11px',
                    marginLeft: '-11px',
                    marginRight: '-11px',
                    paddingLeft: '11px',
                    paddingRight: '11px'
                  }}>
                    <h3 className="font-bold text-lg leading-tight" style={{ 
                      fontSize: '15.6px',
                      lineHeight: '1.4'
                    }}>
                      {tip.title}
                    </h3>
                  </div>
                  
                  {/* Metadata - Left aligned */}
                  <div className="flex items-center gap-4 text-sm text-black flex-shrink-0" style={{ 
                    marginTop: 'auto',
                    fontSize: '10px'
                  }}>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" style={{ width: '11px', height: '11px' }}>
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{tip.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" style={{ width: '11px', height: '11px' }}>
                        <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                      </svg>
                      <span>{tip.comments} Comment</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        style={{ width: '11px', height: '11px' }}
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span>{tip.rating} of 5</span>
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
