import { NextRequest, NextResponse } from 'next/server';
import { getSupabase } from '@/lib/supabase-server';

export async function GET() {
  try {
    const supabase = getSupabase();
    const { data, error } = await supabase
      .from('contacts')
      .select('*')
      .order('submitted_at', { ascending: false });
    if (error) throw error;
    return NextResponse.json(data ?? []);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch contacts', message: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { first_name, last_name, email, subject, message } = body;
    if (!first_name || !last_name || !email || !subject || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const supabase = getSupabase();
    const { data, error } = await supabase
      .from('contacts')
      .insert({ first_name, last_name, email, subject, message })
      .select()
      .single();
    if (error) throw error;
    return NextResponse.json({ message: 'Contact form submitted successfully', contact: data }, { status: 201 });
  } catch (error) {
    console.error('Error creating contact:', error);
    return NextResponse.json(
      { error: 'Failed to submit contact form', message: (error as Error).message },
      { status: 500 }
    );
  }
}
