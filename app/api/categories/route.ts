import { NextResponse } from 'next/server';
import { getSupabase } from '@/lib/supabase-server';

export async function GET() {
  try {
    const supabase = getSupabase();
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .order('name', { ascending: true });
    if (error) throw error;
    return NextResponse.json(data ?? []);
  } catch (error) {
    console.error('Error fetching categories:', error);
    return NextResponse.json(
      { error: 'Failed to fetch categories', message: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, count } = body;
    const supabase = getSupabase();
    const { data, error } = await supabase
      .from('categories')
      .insert({ name, count: count ?? 0 })
      .select()
      .single();
    if (error) throw error;
    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error('Error creating category:', error);
    return NextResponse.json(
      { error: 'Failed to create category', message: (error as Error).message },
      { status: 500 }
    );
  }
}
