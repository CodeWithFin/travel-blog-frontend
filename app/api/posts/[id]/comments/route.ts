import { NextRequest, NextResponse } from 'next/server';
import { getSupabase } from '@/lib/supabase-server';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const postId = parseInt((await params).id, 10);
    if (Number.isNaN(postId)) {
      return NextResponse.json({ error: 'Invalid post id' }, { status: 400 });
    }

    const supabase = getSupabase();
    const { data, error } = await supabase
      .from('post_comments')
      .select('id, post_id, author_name, author_email, content, created_at')
      .eq('post_id', postId)
      .order('created_at', { ascending: true });

    if (error) {
      if (error.message.includes('post_comments')) {
        return NextResponse.json([]);
      }
      throw error;
    }
    return NextResponse.json(data ?? []);
  } catch (error) {
    console.error('Error fetching comments:', error);
    return NextResponse.json(
      { error: 'Failed to fetch comments', message: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const postId = parseInt((await params).id, 10);
    if (Number.isNaN(postId)) {
      return NextResponse.json({ error: 'Invalid post id' }, { status: 400 });
    }

    const body = await request.json();
    const { author_name, author_email, content } = body;
    if (!author_name || !author_email || !content) {
      return NextResponse.json(
        { error: 'author_name, author_email, and content are required' },
        { status: 400 }
      );
    }

    const supabase = getSupabase();
    const { data, error } = await supabase
      .from('post_comments')
      .insert({ post_id: postId, author_name, author_email, content })
      .select('id, post_id, author_name, author_email, content, created_at')
      .single();

    if (error) throw error;

    await supabase.rpc('increment_post_comments', { post_id: postId });
    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error('Error adding comment:', error);
    return NextResponse.json(
      { error: 'Failed to add comment', message: (error as Error).message },
      { status: 500 }
    );
  }
}
