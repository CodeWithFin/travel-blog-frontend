import { NextRequest, NextResponse } from 'next/server';
import { getSupabase } from '@/lib/supabase-server';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;
    const supabase = getSupabase();
    const { data, error } = await supabase.from('categories').select('*').eq('id', id).single();
    if (error) {
      if (error.code === 'PGRST116') return NextResponse.json({ error: 'Category not found' }, { status: 404 });
      throw error;
    }
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching category:', error);
    return NextResponse.json(
      { error: 'Failed to fetch category', message: (error as Error).message },
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
    const { name, count } = body;
    const supabase = getSupabase();
    const { data, error } = await supabase.from('categories').update({ name, count }).eq('id', id).select().single();
    if (error) {
      if (error.code === 'PGRST116') return NextResponse.json({ error: 'Category not found' }, { status: 404 });
      throw error;
    }
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error updating category:', error);
    return NextResponse.json(
      { error: 'Failed to update category', message: (error as Error).message },
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
    const { data, error } = await supabase.from('categories').delete().eq('id', id).select().single();
    if (error) {
      if (error.code === 'PGRST116') return NextResponse.json({ error: 'Category not found' }, { status: 404 });
      throw error;
    }
    return NextResponse.json({ message: 'Category deleted successfully', category: data });
  } catch (error) {
    console.error('Error deleting category:', error);
    return NextResponse.json(
      { error: 'Failed to delete category', message: (error as Error).message },
      { status: 500 }
    );
  }
}
