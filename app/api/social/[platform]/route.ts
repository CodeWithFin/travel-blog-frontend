import { NextRequest, NextResponse } from 'next/server';
import { getSupabase } from '@/lib/supabase-server';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ platform: string }> }
) {
  try {
    const platform = (await params).platform;
    const supabase = getSupabase();
    const { data, error } = await supabase
      .from('social_stats')
      .select('*')
      .eq('platform', platform)
      .single();
    if (error) {
      if (error.code === 'PGRST116') return NextResponse.json({ error: 'Social platform not found' }, { status: 404 });
      throw error;
    }
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching social stat:', error);
    return NextResponse.json(
      { error: 'Failed to fetch social stat', message: (error as Error).message },
      { status: 500 }
    );
  }
}
