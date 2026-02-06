import { NextRequest, NextResponse } from 'next/server';
import { getSupabase } from '@/lib/supabase-server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');

    const supabase = getSupabase();
    let query = supabase.from('gallery_images').select('*').order('created_at', { ascending: false });
    if (category) query = query.eq('category', category);

    const { data, error } = await query;
    if (error) throw error;
    return NextResponse.json(data ?? []);
  } catch (error) {
    console.error('Error fetching gallery:', error);
    return NextResponse.json(
      { error: 'Failed to fetch gallery images', message: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { image_url, category } = body;
    const supabase = getSupabase();
    const { data, error } = await supabase
      .from('gallery_images')
      .insert({ image_url, category: category ?? 'general' })
      .select()
      .single();
    if (error) throw error;
    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error('Error creating gallery image:', error);
    return NextResponse.json(
      { error: 'Failed to create gallery image', message: (error as Error).message },
      { status: 500 }
    );
  }
}
