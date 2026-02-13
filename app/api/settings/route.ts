import { NextRequest, NextResponse } from 'next/server';
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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { key, value } = body;
    if (!key || value === undefined) {
      return NextResponse.json({ error: 'key and value are required' }, { status: 400 });
    }
    const supabase = getSupabase();
    const { error } = await supabase
      .from('site_settings')
      .upsert({ key, value: String(value) }, { onConflict: 'key' });
    if (error) throw error;
    return NextResponse.json({ key, value: String(value) });
  } catch (error) {
    console.error('Error saving setting:', error);
    return NextResponse.json(
      { error: 'Failed to save setting', message: (error as Error).message },
      { status: 500 }
    );
  }
}
