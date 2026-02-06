import { NextRequest, NextResponse } from 'next/server';
import { getSupabase } from '@/lib/supabase-server';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;
    const supabase = getSupabase();
    const { data, error } = await supabase.from('testimonials').select('*').eq('id', id).single();
    if (error) {
      if (error.code === 'PGRST116') return NextResponse.json({ error: 'Testimonial not found' }, { status: 404 });
      throw error;
    }
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching testimonial:', error);
    return NextResponse.json(
      { error: 'Failed to fetch testimonial', message: (error as Error).message },
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
    const { name, title, content } = body;
    const supabase = getSupabase();
    const { data, error } = await supabase.from('testimonials').update({ name, title, content }).eq('id', id).select().single();
    if (error) {
      if (error.code === 'PGRST116') return NextResponse.json({ error: 'Testimonial not found' }, { status: 404 });
      throw error;
    }
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error updating testimonial:', error);
    return NextResponse.json(
      { error: 'Failed to update testimonial', message: (error as Error).message },
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
    const { data, error } = await supabase.from('testimonials').delete().eq('id', id).select().single();
    if (error) {
      if (error.code === 'PGRST116') return NextResponse.json({ error: 'Testimonial not found' }, { status: 404 });
      throw error;
    }
    return NextResponse.json({ message: 'Testimonial deleted successfully', testimonial: data });
  } catch (error) {
    console.error('Error deleting testimonial:', error);
    return NextResponse.json(
      { error: 'Failed to delete testimonial', message: (error as Error).message },
      { status: 500 }
    );
  }
}
