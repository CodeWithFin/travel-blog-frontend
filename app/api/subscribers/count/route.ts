import { NextResponse } from 'next/server';
import { getSupabase } from '@/lib/supabase-server';

export async function GET() {
  try {
    const supabase = getSupabase();
    const { count, error } = await supabase.from('subscribers').select('*', { count: 'exact', head: true });
    if (error) throw error;
    return NextResponse.json({ count: count ?? 0 });
  } catch (error) {
    console.error('Error fetching subscriber count:', error);
    return NextResponse.json(
      { error: 'Failed to fetch subscriber count', message: (error as Error).message },
      { status: 500 }
    );
  }
}
