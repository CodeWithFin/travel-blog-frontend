import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY!;

/** Server-side Supabase client for API routes. Use only in server code (API routes, server components). */
export function getSupabase() {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('SUPABASE_URL and SUPABASE_ANON_KEY must be set in environment');
  }
  return createClient(supabaseUrl, supabaseAnonKey);
}

/** Supabase client with service role for uploads (needs storage write). Use only in API routes. */
export function getSupabaseAdmin() {
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;
  if (!supabaseUrl || !serviceKey) {
    throw new Error('SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY (or SUPABASE_ANON_KEY) must be set');
  }
  return createClient(supabaseUrl, serviceKey);
}
