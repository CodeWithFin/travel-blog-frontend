import { NextResponse } from 'next/server';
import { getSupabase } from '@/lib/supabase-server';

/** GET /api/health/ready - Check if Supabase is configured and reachable (for debugging "Could not load posts"). */
export async function GET() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_ANON_KEY;
  const hasApiUrl = Boolean((process.env.NEXT_PUBLIC_API_URL ?? '').trim());

  if (!url || !key) {
    return NextResponse.json(
      {
        ok: false,
        reason: 'missing_env',
        message: 'Add SUPABASE_URL and SUPABASE_ANON_KEY to .env.local, then restart the dev server.',
      },
      { status: 200 }
    );
  }

  if (hasApiUrl) {
    return NextResponse.json(
      {
        ok: false,
        reason: 'external_api_set',
        message:
          'NEXT_PUBLIC_API_URL is set, so the browser calls that URL instead of this app. Remove NEXT_PUBLIC_API_URL from .env.local (or leave it empty) so posts load from this server.',
      },
      { status: 200 }
    );
  }

  try {
    const supabase = getSupabase();
    const { error } = await supabase.from('posts').select('id').limit(1);
    if (error) throw error;
    return NextResponse.json({ ok: true, message: 'Supabase connected. Posts should load.' });
  } catch (e) {
    return NextResponse.json(
      {
        ok: false,
        reason: 'db_error',
        message: (e as Error).message,
      },
      { status: 200 }
    );
  }
}
