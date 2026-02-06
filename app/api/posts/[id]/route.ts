import { NextRequest, NextResponse } from 'next/server';
import { getSupabase } from '@/lib/supabase-server';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = parseInt((await params).id, 10);
    if (Number.isNaN(id)) {
      return NextResponse.json({ error: 'Invalid post id' }, { status: 400 });
    }

    const supabase = getSupabase();
    const { data, error } = await supabase
      .from('posts')
      .select(`*, categories:category_id(name)`)
      .eq('id', id)
      .single();

    if (error || !data) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    const result = {
      ...data,
      category_name: (data.categories as { name?: string } | null)?.name ?? null,
    };
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error fetching post:', error);
    return NextResponse.json(
      { error: 'Failed to fetch post', message: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;
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
      .update({
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
      })
      .eq('id', id)
      .select()
      .single();

    if (error || !data) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error updating post:', error);
    return NextResponse.json(
      { error: 'Failed to update post', message: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;
    const supabase = getSupabase();
    const { data, error } = await supabase.from('posts').delete().eq('id', id).select().single();

    if (error || !data) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }
    return NextResponse.json({ message: 'Post deleted successfully', post: data });
  } catch (error) {
    console.error('Error deleting post:', error);
    return NextResponse.json(
      { error: 'Failed to delete post', message: (error as Error).message },
      { status: 500 }
    );
  }
}
