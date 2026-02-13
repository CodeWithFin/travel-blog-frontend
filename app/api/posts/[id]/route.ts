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

    // Build update payload with only defined values. Coerce empty string category_id to null
    // so we don't send invalid types to the DB (which can cause the post to break or disappear from lists).
    const updatePayload: Record<string, unknown> = {};
    if (title !== undefined) updatePayload.title = title;
    if (excerpt !== undefined) updatePayload.excerpt = excerpt ?? '';
    if (content !== undefined) updatePayload.content = content ?? '';
    if (date !== undefined) updatePayload.date = date;
    // Only update category_id if a valid value is sent; omit when empty so we don't overwrite with null
    // (which can cause the post to disappear from lists if DB/RLS expects a category).
    if (category_id !== undefined && category_id !== '' && category_id !== null) {
      updatePayload.category_id = Number(category_id);
    } else if (category_id === null) {
      updatePayload.category_id = null;
    }
    if (location !== undefined) updatePayload.location = location ?? '';
    if (comments !== undefined) updatePayload.comments = Number(comments) ?? 0;
    if (image_url !== undefined) updatePayload.image_url = image_url ?? '';
    if (is_featured !== undefined) updatePayload.is_featured = Boolean(is_featured);
    if (post_type !== undefined) updatePayload.post_type = post_type ?? 'standard';

    const supabase = getSupabase();
    const { data, error } = await supabase
      .from('posts')
      .update(updatePayload)
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
