import { getSupabase } from '@/lib/supabase-server';
import { ABOUT_PAGE_DEFAULTS, type AboutPageContent } from '@/lib/about-defaults';

const ABOUT_KEY = 'about_page';

function deepMerge<T extends Record<string, unknown>>(defaults: T, saved: Partial<T> | null): T {
  if (!saved || typeof saved !== 'object') return { ...defaults };
  const out = { ...defaults };
  for (const key of Object.keys(defaults) as (keyof T)[]) {
    const d = defaults[key];
    const s = saved[key];
    if (Array.isArray(d) && Array.isArray(s)) {
      (out as Record<string, unknown>)[key as string] = s.length ? s : d;
    } else if (s !== undefined && s !== null && typeof s === typeof d) {
      (out as Record<string, unknown>)[key as string] = s;
    }
  }
  return out;
}

/** Server-only: get merged about page content from DB + defaults */
export async function getAboutContent(): Promise<AboutPageContent> {
  const supabase = getSupabase();
  const { data, error } = await supabase
    .from('site_settings')
    .select('value')
    .eq('key', ABOUT_KEY)
    .maybeSingle();
  if (error) throw error;
  const raw = data?.value;
  let parsed: Partial<AboutPageContent> | null = null;
  if (typeof raw === 'string') {
    try {
      parsed = JSON.parse(raw) as Partial<AboutPageContent>;
    } catch {
      parsed = null;
    }
  }
  return deepMerge(
    ABOUT_PAGE_DEFAULTS as unknown as AboutPageContent,
    parsed
  );
}
