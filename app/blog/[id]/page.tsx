'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { postsAPI } from '@/lib/api';

interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category_id: number;
  category_name?: string;
  location: string;
  comments: number;
  image_url: string;
  is_featured: boolean;
}

export default function BlogDetailPage() {
  const params = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    loadPost();
  }, [params.id]);

  const loadPost = async () => {
    try {
      setLoading(true);
      const data = await postsAPI.getById(Number(params.id));
      setPost(data);
    } catch (err) {
      console.error('Error loading post:', err);
      setError('Failed to load blog post');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0047FF] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading post...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-6">{error || 'The blog post you are looking for does not exist.'}</p>
          <Link href="/" className="bg-[#3B5BDB] text-white px-6 py-3 rounded-lg hover:bg-[#2f4ab8] transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f8f9fa] min-h-screen pt-8 md:pt-10">
      {/* Content Card */}
      <section className="pb-12 md:pb-16 lg:pb-20">
        <div className="max-w-[794px] px-4 md:px-8 lg:px-[35px]" style={{ marginLeft: '20%' }}>
          <article 
            className="bg-white overflow-hidden"
            style={{
              opacity: 1,
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
            {/* Hero Image */}
            <div className="relative h-[400px]">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${post.image_url})` }}
              >
                <div className="absolute inset-0 bg-black/40" />
              </div>
            </div>

            {/* Date Badge */}
            <div className="px-6 md:px-12 pt-6">
              <div className="inline-block px-3 py-1 bg-[#FFAB00] text-white text-xs font-medium">
                {post.date} - {post.category_name || 'Travel'}
              </div>
            </div>

            {/* Title */}
            <div className="px-6 md:px-12 pt-4">
              <h1 className="text-gray-900 text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                {post.title}
              </h1>
            </div>

            {/* Excerpt */}
            <div className="px-6 md:px-12 pt-6">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                {post.excerpt || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra ac erat commodo non leo eget gravida viverra. Phasellus pharetra.'}
              </p>
            </div>

            {/* Meta Info */}
            <div className="px-6 md:px-12 pt-6 pb-8 flex items-center justify-between text-sm text-[#FFAB00]">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>{post.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                </svg>
                <span>Comment {post.comments}</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white py-4 mt-10 md:mt-14 lg:mt-16" style={{ display: 'none' }}>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 lg:px-[35px]">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-[#0047FF] hover:underline">Home</Link>
            <span className="text-gray-400">/</span>
            <Link href="/" className="text-[#0047FF] hover:underline">Blog</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">{post.title}</span>
          </div>
        </div>
      </div>

      {/* Additional Content - Hidden for now */}
      <section className="pt-16 md:pt-24 lg:pt-32 pb-12 md:pb-16 lg:pb-20" style={{ display: 'none' }}>
        <div className="max-w-[900px] mx-auto px-4 md:px-8 lg:px-[35px]">
          {/* Excerpt */}
          {post.excerpt && (
            <div className="bg-[#f8f9fa] border-l-4 border-[#FFAB00] p-6 mb-8 rounded">
              <p className="text-lg text-gray-700 italic leading-relaxed">
                {post.excerpt}
              </p>
            </div>
          )}

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-700 leading-relaxed space-y-6">
              {post.content ? (
                post.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-base md:text-lg leading-relaxed">
                    {paragraph}
                  </p>
                ))
              ) : (
                <p className="text-base md:text-lg leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra ac erat commodo non leo eget gravida viverra. Phasellus pharetra ac erat commodo non leo eget gravida viverra.
                </p>
              )}
            </div>
          </div>

          {/* Tags/Category */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-gray-600 font-medium">Category:</span>
              <span className="px-4 py-2 bg-[#3B5BDB] text-white rounded-full text-sm">
                {post.category_name || 'Travel'}
              </span>
            </div>
          </div>

          {/* Share Section */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <span className="text-gray-600 font-medium">Share this post:</span>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 flex items-center justify-center bg-[#1877F2] text-white rounded-full hover:opacity-80 transition-opacity">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center bg-[#1DA1F2] text-white rounded-full hover:opacity-80 transition-opacity">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center bg-[#0A66C2] text-white rounded-full hover:opacity-80 transition-opacity">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-12 text-center">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#3B5BDB] text-white rounded-lg hover:bg-[#2f4ab8] transition-colors font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
