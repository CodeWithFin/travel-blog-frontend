import { NextRequest, NextResponse } from 'next/server';
import { getSupabase } from '@/lib/supabase-server';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;
    const supabase = getSupabase();
    const { data, error } = await supabase.from('gallery_images').select('*').eq('id', id).single();
    if (error) {
      if (error.code === 'PGRST116') return NextResponse.json({ error: 'Image not found' }, { status: 404 });
      throw error;
    }
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching image:', error);
    return NextResponse.json(
      { error: 'Failed to fetch image', message: (error as Error).message },
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
    const { image_url, category } = body;
    const supabase = getSupabase();
    const { data, error } = await supabase
      .from('gallery_images')
      .update({ image_url, category })
      .eq('id', id)
      .select()
      .single();
    if (error) {
      if (error.code === 'PGRST116') return NextResponse.json({ error: 'Image not found' }, { status: 404 });
      throw error;
    }
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error updating gallery image:', error);
    return NextResponse.json(
      { error: 'Failed to update gallery image', message: (error as Error).message },
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
    const { data, error } = await supabase.from('gallery_images').delete().eq('id', id).select().single();
    if (error) {
      if (error.code === 'PGRST116') return NextResponse.json({ error: 'Image not found' }, { status: 404 });
      throw error;
    }
    return NextResponse.json({ message: 'Image deleted successfully', image: data });
  } catch (error) {
    console.error('Error deleting gallery image:', error);
    return NextResponse.json(
      { error: 'Failed to delete gallery image', message: (error as Error).message },
      { status: 500 }
    );
  }
}
