import { NextResponse } from 'next/server';
import { getSupabase } from '@/lib/supabase-server';

export async function GET() {
  try {
    const supabase = getSupabase();
    const { data, error } = await supabase
      .from('site_settings')
      .select('*')
      .order('key', { ascending: true });
    if (error) throw error;

    const settings = (data ?? []).reduce((acc: Record<string, string>, item: { key: string; value: string }) => {
      acc[item.key] = item.value;
      return acc;
    }, {});
    return NextResponse.json(settings);
  } catch (error) {
    console.error('Error fetching settings:', error);
    return NextResponse.json(
      { error: 'Failed to fetch settings', message: (error as Error).message },
      { status: 500 }
    );
  }
}
