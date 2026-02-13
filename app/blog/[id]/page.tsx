'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { postsAPI, commentsAPI } from '@/lib/api';

interface Comment {
  id: number;
  post_id: number;
  author_name: string;
  author_email: string;
  content: string;
  created_at: string;
}

/** Render a paragraph string, turning **text** into bold. */
function renderTextWithBold(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) => (i % 2 === 1 ? <strong key={i} className="font-semibold text-slate-900">{part}</strong> : part));
}

/** True if block looks like a section heading (e.g. **Where to Eat** or plain "Where to Eat"). */
function isSectionHeading(block: string) {
  const t = block.trim();
  if (!t || t.length > 80) return false;
  // Wrapped in ** (e.g. **Where to Eat**)
  if (/^\*\*.*\*\*$/.test(t) && (t.match(/\*\*/g)?.length ?? 0) === 2) return true;
  // Plain "Where to Eat" style (as stored in DB)
  if (/^Where to (Eat|Drink|Sleep|Explore)$/i.test(t)) return true;
  return false;
}

/** Parse post content into intro paragraphs and sections (e.g. Where to Eat + items). */
function parseContent(content: string): { introBlocks: string[]; sections: { heading: string; items: string[] }[] } {
  const normalized = content.replace(/\r\n/g, '\n').trim();
  const blocks = normalized.split(/\n\n+/).map((b) => b.trim()).filter(Boolean);
  const introBlocks: string[] = [];
  const sections: { heading: string; items: string[] }[] = [];
  let current: { heading: string; items: string[] } | null = null;

  for (const block of blocks) {
    const firstLine = block.split('\n')[0]?.trim() ?? '';
    const headingOnly = !block.includes('\n') && isSectionHeading(block);
    const firstLineIsHeading = block.includes('\n') && isSectionHeading(firstLine);

    if (headingOnly) {
      if (current) sections.push(current);
      current = { heading: block.replace(/\*\*/g, '').trim(), items: [] };
    } else if (firstLineIsHeading) {
      if (current) sections.push(current);
      const rest = block.slice(block.indexOf('\n') + 1).trim();
      const items = rest.split(/\n\n+/).map((s) => s.trim()).filter(Boolean);
      current = { heading: firstLine.replace(/\*\*/g, '').trim(), items };
    } else {
      if (current) current.items.push(block);
      else introBlocks.push(block);
    }
  }
  if (current) sections.push(current);
  return { introBlocks, sections };
}

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
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentForm, setCommentForm] = useState({ author_name: '', author_email: '', content: '' });
  const [submittingComment, setSubmittingComment] = useState(false);
  const [commentError, setCommentError] = useState('');

  useEffect(() => {
    loadPost();
  }, [params.id]);

  useEffect(() => {
    if (!post?.id) return;
    commentsAPI.getByPostId(post.id).then((data) => setComments(Array.isArray(data) ? data : [])).catch(() => setComments([]));
  }, [post?.id]);

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

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!post?.id || !commentForm.author_name.trim() || !commentForm.author_email.trim() || !commentForm.content.trim()) return;
    setCommentError('');
    try {
      setSubmittingComment(true);
      const newComment = await commentsAPI.add(post.id, {
        author_name: commentForm.author_name.trim(),
        author_email: commentForm.author_email.trim(),
        content: commentForm.content.trim(),
      });
      setComments((prev) => [...prev, newComment]);
      setCommentForm({ author_name: '', author_email: '', content: '' });
    } catch (err) {
      console.error('Error submitting comment:', err);
      setCommentError('Failed to post comment. Please try again.');
    } finally {
      setSubmittingComment(false);
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
    <div className="min-h-screen bg-white font-sans" style={{ paddingTop: '9rem' }}>
      <div className="max-w-screen-xl mx-auto px-5 pb-16 md:pb-20 lg:pb-24">
        {/* Title + image: max-w-7xl */}
        <div className="max-w-7xl mx-auto pt-6 md:pt-8">
          <h1 className="text-gray-900 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-tight mb-8 md:mb-12">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 mb-10 hidden">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gray-200 text-gray-700 font-bold text-base">
              R
            </div>
            <span className="text-slate-900 text-xl font-bold">Red Explorers</span>
          </div>

          <div className="w-full overflow-hidden" style={{ paddingLeft: '11%' }}>
            <img
              src={post.image_url}
              alt={post.title}
              className="w-full object-cover object-center block"
              style={{ maxHeight: '480px' }}
            />
          </div>

          {/* Date + Category: right below image */}
          <div className="pt-4 mt-8 text-gray-500 text-[1.05rem]">
            {post.date}
            {post.category_name && (
              <span className="ml-2">· {post.category_name}</span>
            )}
          </div>
        </div>

        {/* Article body: centered max-w-7xl, left-aligned text */}
        <div className="max-w-7xl mx-auto mt-10 md:mt-12 text-left">
          <div className="prose prose-lg lg:prose-xl max-w-none text-base md:text-lg">
            <p className="text-slate-900 leading-relaxed text-[1.25rem] md:text-[1.35rem]">
              {post.excerpt || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra ac erat commodo non leo eget gravida viverra. Phasellus pharetra.'}
            </p>
          </div>

          {/* Article body – intro paragraphs then 2-col grid for Where to Eat/Drink/etc. */}
          <div className="prose prose-lg lg:prose-xl max-w-none mt-10 text-base md:text-lg">
            {post.content ? (() => {
              const { introBlocks, sections } = parseContent(post.content);
              return (
                <>
                  {introBlocks.map((block, index) => (
                    <p key={`intro-${index}`} className="text-slate-700 leading-[1.75] text-[1.1rem] md:text-[1.2rem]">
                      {renderTextWithBold(block)}
                    </p>
                  ))}
                  {sections.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 not-prose">
                      {sections.map((section, idx) => (
                        <div key={idx} className="pt-6 mt-6 first:pt-0 first:mt-0 md:[&:nth-child(2)]:pt-0 md:[&:nth-child(2)]:mt-0">
                          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                            {section.heading}
                          </h3>
                          <div className="space-y-3">
                            {section.items.map((item, i) => (
                              <p key={i} className="text-slate-700 leading-[1.75] text-[1.05rem] md:text-[1.15rem]">
                                {renderTextWithBold(item)}
                              </p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              );
            })() : (
              <p className="text-slate-700 leading-[1.75] text-[1.1rem] md:text-[1.2rem]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra ac erat commodo non leo eget gravida viverra. Phasellus pharetra ac erat commodo non leo eget gravida viverra.
              </p>
            )}
          </div>

          {/* Location & comments – below body */}
          <div className="mt-10 pt-8 flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#FFAB00]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>{post.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#FFAB00]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
              </svg>
              <span>Comment {comments.length}</span>
            </div>
          </div>
        </div>

        {/* Comments section */}
        <div className="max-w-7xl mx-auto mt-12 pt-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 rounded-full bg-[#0037ff]"></span>
            Comments ({comments.length})
          </h3>

          <ul className="space-y-10 mb-8 mt-4">
            {comments.length === 0 ? (
              <li className="text-center py-10 px-4 rounded-xl text-gray-500 text-sm">
                No comments yet. Be the first to comment.
              </li>
            ) : (
              comments.map((c) => (
                <li key={c.id} className="rounded-xl py-6 px-6 md:px-10">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-semibold text-gray-900 text-base md:text-lg">{c.author_name}</span>
                    <span className="text-sm text-gray-400">
                      {new Date(c.created_at).toLocaleDateString(undefined, { dateStyle: 'medium' })}
                    </span>
                  </div>
                  <p className="text-base md:text-[1.0625rem] text-gray-600 leading-relaxed">{c.content}</p>
                </li>
              ))
            )}
          </ul>

          <form onSubmit={handleSubmitComment} className="rounded-xl" style={{ padding: '40px' }}>
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide" style={{ marginBottom: '32px' }}>Add a comment</h4>
            {commentError && <p className="text-sm text-red-600" style={{ marginBottom: '24px' }}>{commentError}</p>}
            <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: '24px', marginBottom: '24px' }}>
              <div className="flex flex-col">
                <input
                  type="text"
                  placeholder="Your name"
                  value={commentForm.author_name}
                  onChange={(e) => setCommentForm((prev) => ({ ...prev, author_name: e.target.value }))}
                  required
                  className="w-full"
                  style={{
                    padding: '15px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '14px',
                    outline: 'none',
                    color: '#555',
                    background: '#fff',
                  }}
                  onFocus={(e) => { e.target.style.borderColor = '#0037ff'; }}
                  onBlur={(e) => { e.target.style.borderColor = '#ddd'; }}
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="email"
                  placeholder="Your email"
                  value={commentForm.author_email}
                  onChange={(e) => setCommentForm((prev) => ({ ...prev, author_email: e.target.value }))}
                  required
                  className="w-full"
                  style={{
                    padding: '15px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '14px',
                    outline: 'none',
                    color: '#555',
                    background: '#fff',
                  }}
                  onFocus={(e) => { e.target.style.borderColor = '#0037ff'; }}
                  onBlur={(e) => { e.target.style.borderColor = '#ddd'; }}
                />
              </div>
            </div>
            <div style={{ marginBottom: '24px' }}>
            <textarea
              placeholder="Your comment"
              value={commentForm.content}
              onChange={(e) => setCommentForm((prev) => ({ ...prev, content: e.target.value }))}
              required
              className="w-full"
              style={{
                padding: '15px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '14px',
                outline: 'none',
                color: '#555',
                background: '#fff',
                height: '150px',
                resize: 'vertical',
              }}
              onFocus={(e) => { e.target.style.borderColor = '#0037ff'; }}
              onBlur={(e) => { e.target.style.borderColor = '#ddd'; }}
            />
            </div>
            <div style={{ marginTop: '16px' }}>
            <button
              type="submit"
              disabled={submittingComment}
              className="w-full sm:w-auto"
              style={{
                background: '#0037ff',
                color: 'white',
                border: 'none',
                padding: '15px 30px',
                borderRadius: '4px',
                fontWeight: '600',
                cursor: submittingComment ? 'not-allowed' : 'pointer',
                opacity: submittingComment ? 0.7 : 1,
              }}
              onMouseEnter={(e) => {
                if (!submittingComment) e.currentTarget.style.background = '#002ed6';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#0037ff';
              }}
            >
              {submittingComment ? 'Posting...' : 'Post comment'}
            </button>
            </div>
          </form>
        </div>

        {/* Bottom: category + back button */}
        <div className="max-w-7xl mx-auto mt-12 pt-6">
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-slate-500">Category</span>
            <span
              className="px-4 py-2 rounded-full text-sm font-medium text-white"
              style={{ backgroundColor: '#FFAB00' }}
            >
              {post.category_name || 'Travel'}
            </span>
          </div>

          <div className="mt-10 mb-20 md:mb-24 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white border-none font-semibold rounded transition-colors cursor-pointer hover:bg-[#002ed6]"
              style={{ background: '#0037ff', padding: '15px 30px' }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
