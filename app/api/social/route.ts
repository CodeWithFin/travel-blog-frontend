import { NextResponse } from 'next/server';
import { getSupabase } from '@/lib/supabase-server';

export async function GET() {
  try {
    const supabase = getSupabase();
    const { data, error } = await supabase
      .from('social_stats')
      .select('*')
      .order('platform', { ascending: true });
    if (error) throw error;
    return NextResponse.json(data ?? []);
  } catch (error) {
    console.error('Error fetching social stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch social stats', message: (error as Error).message },
      { status: 500 }
    );
  }
}
