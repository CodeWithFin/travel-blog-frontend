import { NextRequest, NextResponse } from 'next/server';
import { getSupabase } from '@/lib/supabase-server';
import { getAboutContent } from '@/lib/get-about-content';
import type { AboutPageContent } from '@/lib/about-defaults';

const ABOUT_KEY = 'about_page';

export async function GET() {
  try {
    const content = await getAboutContent();
    return NextResponse.json(content);
  } catch (error) {
    console.error('Error fetching about page:', error);
    return NextResponse.json(
      { error: 'Failed to fetch about page', message: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const supabase = getSupabase();
    const value = JSON.stringify(body);
    const { error } = await supabase
      .from('site_settings')
      .upsert({ key: ABOUT_KEY, value }, { onConflict: 'key' });
    if (error) throw error;
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Error saving about page:', error);
    return NextResponse.json(
      { error: 'Failed to save about page', message: (error as Error).message },
      { status: 500 }
    );
  }
}
