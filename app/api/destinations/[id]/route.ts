import { NextRequest, NextResponse } from 'next/server';
import { getSupabase } from '@/lib/supabase-server';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;
    const supabase = getSupabase();
    const { data, error } = await supabase.from('destinations').select('*').eq('id', id).single();
    if (error) {
      if (error.code === 'PGRST116') return NextResponse.json({ error: 'Destination not found' }, { status: 404 });
      throw error;
    }
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching destination:', error);
    return NextResponse.json(
      { error: 'Failed to fetch destination', message: (error as Error).message },
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
    const { title, date, category, location, comments, continent, image_url } = body;
    const supabase = getSupabase();
    const { data, error } = await supabase
      .from('destinations')
      .update({ title, date, category, location, comments, continent, image_url })
      .eq('id', id)
      .select()
      .single();
    if (error) {
      if (error.code === 'PGRST116') return NextResponse.json({ error: 'Destination not found' }, { status: 404 });
      throw error;
    }
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error updating destination:', error);
    return NextResponse.json(
      { error: 'Failed to update destination', message: (error as Error).message },
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
    const { data, error } = await supabase.from('destinations').delete().eq('id', id).select().single();
    if (error) {
      if (error.code === 'PGRST116') return NextResponse.json({ error: 'Destination not found' }, { status: 404 });
      throw error;
    }
    return NextResponse.json({ message: 'Destination deleted successfully', destination: data });
  } catch (error) {
    console.error('Error deleting destination:', error);
    return NextResponse.json(
      { error: 'Failed to delete destination', message: (error as Error).message },
      { status: 500 }
    );
  }
}
