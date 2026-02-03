'use client';

import { useEffect, useState } from 'react';
import { postsAPI, commentsAPI } from '@/lib/api';

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

interface Comment {
  id: number;
  post_id: number;
  author_name: string;
  author_email: string;
  content: string;
  created_at: string;
}

interface BlogDetailModalProps {
  postId: number | null;
  onClose: () => void;
}

export default function BlogDetailModal({ postId, onClose }: BlogDetailModalProps) {
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({ author_name: '', author_email: '', content: '' });

  useEffect(() => {
    if (!postId) return;
    loadPostAndComments();
  }, [postId]);

  const loadPostAndComments = async () => {
    if (!postId) return;
    try {
      setLoading(true);
      setError('');
      const [postData, commentsData] = await Promise.all([
        postsAPI.getById(postId),
        commentsAPI.getByPostId(postId).catch(() => []),
      ]);
      setPost(postData);
      setComments(Array.isArray(commentsData) ? commentsData : []);
    } catch (err) {
      console.error('Error loading post:', err);
      setError(err instanceof Error ? err.message : 'Failed to load post');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!postId || !formData.author_name.trim() || !formData.author_email.trim() || !formData.content.trim()) return;
    try {
      setSubmitting(true);
      const newComment = await commentsAPI.add(postId, {
        author_name: formData.author_name.trim(),
        author_email: formData.author_email.trim(),
        content: formData.content.trim(),
      });
      setComments((prev) => [...prev, newComment]);
      setFormData({ author_name: '', author_email: '', content: '' });
    } catch (err) {
      console.error('Error submitting comment:', err);
      setError('Failed to post comment. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (!postId) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="blog-modal-title"
    >
      <div
        className="relative bg-white w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25),0_0_0_1px_rgba(0,0,0,0.05)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white/95 text-gray-600 hover:text-gray-900 hover:bg-white border border-gray-200/80 shadow-sm transition-all duration-200"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="overflow-y-auto flex-1">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-2 border-[#0047FF]/20 border-t-[#0047FF]"></div>
            </div>
          ) : error || !post ? (
            <div className="p-8 text-center">
              <p className="text-gray-600 mb-4">{error || 'Post not found'}</p>
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 bg-[#0047FF] text-white rounded-xl hover:bg-[#003bd9] transition-colors font-medium"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              {/* Hero image - shorter, gradient for readability */}
              <div className="relative h-40 md:h-44 flex-shrink-0 overflow-hidden rounded-t-2xl">
                <img
                  src={post.image_url}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 text-white">
                  <span className="text-xs font-medium tracking-wide text-white/90 uppercase">{post.date} · {post.category_name || 'Travel'}</span>
                  <h1 id="blog-modal-title" className="text-lg md:text-xl font-bold mt-1.5 leading-tight drop-shadow-sm">{post.title}</h1>
                </div>
              </div>

              <div className="p-6 md:p-8 bg-neutral-50/50">
                {/* Meta - accent icon badges */}
                <div className="flex items-center gap-6 text-sm text-gray-600 mb-5">
                  <span className="flex items-center gap-2 text-gray-700">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#FFAB00]/10 text-[#FFAB00]">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    {post.location}
                  </span>
                  <span className="flex items-center gap-2 text-gray-700">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#0047FF]/10 text-[#0047FF]">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                      </svg>
                    </span>
                    {post.comments} Comments
                  </span>
                </div>

                {/* Excerpt */}
                {post.excerpt && (
                  <div className="bg-white border-l-4 border-[#FFAB00] rounded-r-xl p-4 mb-6 shadow-sm">
                    <p className="text-gray-600 italic text-sm md:text-base leading-relaxed">{post.excerpt}</p>
                  </div>
                )}

                {/* Content */}
                <div className="text-gray-700 mb-8 leading-relaxed space-y-4">
                  {post.content ? (
                    post.content.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-[15px] md:text-base">{paragraph}</p>
                    ))
                  ) : (
                    <p className="text-[15px] md:text-base">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra ac erat commodo non leo eget gravida viverra.
                    </p>
                  )}
                </div>

                {/* Comments section */}
                <div className="border-t border-gray-200/80 pt-6 mt-6">
                  <h3 className="text-base font-bold text-gray-900 mb-1 flex items-center gap-2">
                    <span className="w-1 h-5 rounded-full bg-[#0047FF]"></span>
                    Comments ({comments.length})
                  </h3>

                  <ul className="space-y-3 mb-6 mt-4">
                    {comments.length === 0 ? (
                      <li className="text-center py-8 px-4 rounded-xl bg-gray-100/80 text-gray-500 text-sm">
                        No comments yet. Be the first to comment.
                      </li>
                    ) : (
                      comments.map((c) => (
                        <li key={c.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-semibold text-gray-900 text-sm">{c.author_name}</span>
                            <span className="text-xs text-gray-400">
                              {new Date(c.created_at).toLocaleDateString(undefined, { dateStyle: 'medium' })}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 leading-relaxed">{c.content}</p>
                        </li>
                      ))
                    )}
                  </ul>

                  <form onSubmit={handleSubmitComment} className="bg-white rounded-xl p-5 md:p-6 shadow-sm border border-gray-100 space-y-4">
                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Add a comment</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Your name"
                        value={formData.author_name}
                        onChange={(e) => setFormData((prev) => ({ ...prev, author_name: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50/50 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0047FF]/30 focus:border-[#0047FF] focus:bg-white transition-all duration-200"
                        required
                      />
                      <input
                        type="email"
                        placeholder="Your email"
                        value={formData.author_email}
                        onChange={(e) => setFormData((prev) => ({ ...prev, author_email: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50/50 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0047FF]/30 focus:border-[#0047FF] focus:bg-white transition-all duration-200"
                        required
                      />
                    </div>
                    <textarea
                      placeholder="Your comment"
                      value={formData.content}
                      onChange={(e) => setFormData((prev) => ({ ...prev, content: e.target.value }))}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50/50 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0047FF]/30 focus:border-[#0047FF] focus:bg-white transition-all duration-200 resize-none"
                      required
                    />
                    <button
                      type="submit"
                      disabled={submitting}
                      className="px-8 py-3 bg-[#0047FF] text-white rounded-xl font-medium shadow-sm hover:bg-[#003bd9] hover:shadow-md active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-sm transition-all duration-200"
                    >
                      {submitting ? 'Posting...' : 'Post comment'}
                    </button>
                  </form>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
