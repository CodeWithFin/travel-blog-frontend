import { NextResponse } from 'next/server';
import { getSupabase } from '@/lib/supabase-server';

export async function GET() {
  try {
    const supabase = getSupabase();
    const { data, error } = await supabase
      .from('subscribers')
      .select('*')
      .order('subscribed_at', { ascending: false });
    if (error) throw error;
    return NextResponse.json(data ?? []);
  } catch (error) {
    console.error('Error fetching subscribers:', error);
    return NextResponse.json(
      { error: 'Failed to fetch subscribers', message: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;
    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const supabase = getSupabase();
    const { data: existing, error: checkError } = await supabase
      .from('subscribers')
      .select('*')
      .eq('email', email)
      .single();

    if (existing && !checkError) {
      return NextResponse.json({ error: 'Email already subscribed' }, { status: 409 });
    }

    const { data, error } = await supabase.from('subscribers').insert({ email }).select().single();
    if (error) throw error;
    return NextResponse.json({ message: 'Successfully subscribed', subscriber: data }, { status: 201 });
  } catch (error) {
    console.error('Error subscribing:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe', message: (error as Error).message },
      { status: 500 }
    );
  }
}
