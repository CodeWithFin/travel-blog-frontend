import { NextRequest, NextResponse } from 'next/server';
import { getSupabase } from '@/lib/supabase-server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const continent = searchParams.get('continent');
    const limit = searchParams.get('limit');

    const supabase = getSupabase();
    let query = supabase.from('destinations').select('*').order('created_at', { ascending: false });
    if (continent) query = query.eq('continent', continent);
    if (limit) query = query.limit(parseInt(limit, 10));

    const { data, error } = await query;
    if (error) throw error;
    return NextResponse.json(data ?? []);
  } catch (error) {
    console.error('Error fetching destinations:', error);
    return NextResponse.json(
      { error: 'Failed to fetch destinations', message: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, date, category, location, comments, continent, image_url } = body;
    const supabase = getSupabase();
    const { data, error } = await supabase
      .from('destinations')
      .insert({ title, date, category, location, comments: comments ?? 0, continent, image_url })
      .select()
      .single();
    if (error) throw error;
    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error('Error creating destination:', error);
    return NextResponse.json(
      { error: 'Failed to create destination', message: (error as Error).message },
      { status: 500 }
    );
  }
}
