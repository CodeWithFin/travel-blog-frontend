import { NextRequest, NextResponse } from 'next/server';
import { getSupabase } from '@/lib/supabase-server';

// Always fetch fresh data so admin changes appear on the homepage
export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const featured = searchParams.get('featured');
    const limit = searchParams.get('limit');
    const offset = searchParams.get('offset');
    const limitNum = limit ? parseInt(limit, 10) : 100;
    const offsetNum = offset ? parseInt(offset, 10) : 0;

    const supabase = getSupabase();
    let query = supabase
      .from('posts')
      .select(`*, categories:category_id(name)`)
      .order('is_featured', { ascending: false })
      .order('created_at', { ascending: false })
      .order('id', { ascending: false })
      .range(offsetNum, offsetNum + limitNum - 1);

    if (featured === 'true') {
      query = query.eq('is_featured', true);
    }

    const { data, error } = await query;
    if (error) throw error;

    const posts = data || [];
    const postIds = posts.map((p: Record<string, unknown>) => p.id).filter(Boolean);

    // Fetch actual comment counts from post_comments so homepage shows real numbers
    let commentCounts: Record<number, number> = {};
    if (postIds.length > 0) {
      const { data: commentsData } = await supabase
        .from('post_comments')
        .select('post_id')
        .in('post_id', postIds);
      const list = commentsData || [];
      list.forEach((row: { post_id: number }) => {
        commentCounts[row.post_id] = (commentCounts[row.post_id] ?? 0) + 1;
      });
    }

    const result = posts.map((post: Record<string, unknown>) => {
      const id = post.id as number;
      const actualCount = id != null ? (commentCounts[id] ?? 0) : 0;
      return {
        ...post,
        category_name: (post.categories as { name?: string } | null)?.name ?? null,
        comments: actualCount,
      };
    });
    return NextResponse.json(result, {
      headers: { 'Cache-Control': 'no-store, max-age=0' },
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch posts', message: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      title,
      excerpt,
      content,
      date,
      category_id,
      location,
      comments,
      image_url,
      is_featured,
      post_type,
    } = body;

    const supabase = getSupabase();
    const { data, error } = await supabase
      .from('posts')
      .insert({
        title,
        excerpt: excerpt ?? '',
        content: content ?? '',
        date,
        category_id: category_id ?? null,
        location,
        comments: comments ?? 0,
        image_url,
        is_featured: is_featured ?? false,
        post_type: post_type ?? 'standard',
      })
      .select()
      .single();

    if (error) throw error;
    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json(
      { error: 'Failed to create post', message: (error as Error).message },
      { status: 500 }
    );
  }
}
