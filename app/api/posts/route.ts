import { NextRequest, NextResponse } from 'next/server';
import { getSupabase } from '@/lib/supabase-server';

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
      .order('created_at', { ascending: false })
      .range(offsetNum, offsetNum + limitNum - 1);

    if (featured === 'true') {
      query = query.eq('is_featured', true);
    }

    const { data, error } = await query;
    if (error) throw error;

    const result = (data || []).map((post: Record<string, unknown>) => ({
      ...post,
      category_name: (post.categories as { name?: string } | null)?.name ?? null,
    }));
    return NextResponse.json(result);
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
