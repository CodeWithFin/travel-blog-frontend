import { NextRequest, NextResponse } from 'next/server';
import { getSupabase } from '@/lib/supabase-server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get('limit');

    const supabase = getSupabase();
    let query = supabase.from('tips').select('*').order('created_at', { ascending: false });
    if (limit) query = query.limit(parseInt(limit, 10));

    const { data, error } = await query;
    if (error) throw error;
    return NextResponse.json(data ?? []);
  } catch (error) {
    console.error('Error fetching tips:', error);
    return NextResponse.json(
      { error: 'Failed to fetch tips', message: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, date, category, location, comments, rating, image_url } = body;
    const supabase = getSupabase();
    const { data, error } = await supabase
      .from('tips')
      .insert({ title, date, category, location, comments: comments ?? 0, rating: rating ?? 0, image_url })
      .select()
      .single();
    if (error) throw error;
    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error('Error creating tip:', error);
    return NextResponse.json(
      { error: 'Failed to create tip', message: (error as Error).message },
      { status: 500 }
    );
  }
}
