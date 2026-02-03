import Link from 'next/link';

export default function ReadMorePage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative h-[400px] flex flex-col items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Read More</h1>
          <p className="text-lg text-white/90 max-w-xl mx-auto">
            Discover more stories, tips, and destinations from our travels.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-16">
        <div className="prose prose-lg text-gray-700 space-y-6">
          <p className="leading-relaxed">
            Welcome to the read more section. Here you can dive deeper into our travel experiences,
            packing guides, and the gear we use on the road.
          </p>
          <p className="leading-relaxed">
            Explore our blog posts for destination guides, travel tips, and personal stories from
            around the world. Check out the Gear I Use section for the kit we rely on trip after trip.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#0047FF] text-white rounded-lg font-medium hover:bg-[#003bd9] transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/destination"
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Destinations
          </Link>
          <Link
            href="/tips"
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Travel Tips
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            About Us
          </Link>
        </div>
      </section>
    </div>
  );
}
