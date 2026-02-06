import { NextRequest, NextResponse } from 'next/server';
import { getSupabase } from '@/lib/supabase-server';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ key: string }> }
) {
  try {
    const key = (await params).key;
    const supabase = getSupabase();
    const { data, error } = await supabase.from('site_settings').select('*').eq('key', key).single();
    if (error) {
      if (error.code === 'PGRST116') return NextResponse.json({ error: 'Setting not found' }, { status: 404 });
      throw error;
    }
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching setting:', error);
    return NextResponse.json(
      { error: 'Failed to fetch setting', message: (error as Error).message },
      { status: 500 }
    );
  }
}
