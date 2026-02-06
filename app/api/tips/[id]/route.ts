import { NextRequest, NextResponse } from 'next/server';
import { getSupabase } from '@/lib/supabase-server';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;
    const supabase = getSupabase();
    const { data, error } = await supabase.from('tips').select('*').eq('id', id).single();
    if (error) {
      if (error.code === 'PGRST116') return NextResponse.json({ error: 'Tip not found' }, { status: 404 });
      throw error;
    }
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching tip:', error);
    return NextResponse.json(
      { error: 'Failed to fetch tip', message: (error as Error).message },
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
    const { title, date, category, location, comments, rating, image_url } = body;
    const supabase = getSupabase();
    const { data, error } = await supabase
      .from('tips')
      .update({ title, date, category, location, comments, rating, image_url })
      .eq('id', id)
      .select()
      .single();
    if (error) {
      if (error.code === 'PGRST116') return NextResponse.json({ error: 'Tip not found' }, { status: 404 });
      throw error;
    }
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error updating tip:', error);
    return NextResponse.json(
      { error: 'Failed to update tip', message: (error as Error).message },
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
    const { data, error } = await supabase.from('tips').delete().eq('id', id).select().single();
    if (error) {
      if (error.code === 'PGRST116') return NextResponse.json({ error: 'Tip not found' }, { status: 404 });
      throw error;
    }
    return NextResponse.json({ message: 'Tip deleted successfully', tip: data });
  } catch (error) {
    console.error('Error deleting tip:', error);
    return NextResponse.json(
      { error: 'Failed to delete tip', message: (error as Error).message },
      { status: 500 }
    );
  }
}
