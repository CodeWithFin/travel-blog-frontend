import { NextRequest, NextResponse } from 'next/server';
import { getSupabase } from '@/lib/supabase-server';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;
    const supabase = getSupabase();
    const { data, error } = await supabase.from('products').select('*').eq('id', id).single();
    if (error) {
      if (error.code === 'PGRST116') return NextResponse.json({ error: 'Product not found' }, { status: 404 });
      throw error;
    }
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching product:', error);
    return NextResponse.json(
      { error: 'Failed to fetch product', message: (error as Error).message },
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
    const { name, price, image_url } = body;
    const supabase = getSupabase();
    const { data, error } = await supabase.from('products').update({ name, price, image_url }).eq('id', id).select().single();
    if (error) {
      if (error.code === 'PGRST116') return NextResponse.json({ error: 'Product not found' }, { status: 404 });
      throw error;
    }
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error updating product:', error);
    return NextResponse.json(
      { error: 'Failed to update product', message: (error as Error).message },
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
    const { data, error } = await supabase.from('products').delete().eq('id', id).select().single();
    if (error) {
      if (error.code === 'PGRST116') return NextResponse.json({ error: 'Product not found' }, { status: 404 });
      throw error;
    }
    return NextResponse.json({ message: 'Product deleted successfully', product: data });
  } catch (error) {
    console.error('Error deleting product:', error);
    return NextResponse.json(
      { error: 'Failed to delete product', message: (error as Error).message },
      { status: 500 }
    );
  }
}
