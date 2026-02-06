import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabase-server';

const BUCKET = 'images';
const ALLOWED_TYPES = ['image/jpeg', 'image/png'];
const MAX_SIZE = 5 * 1024 * 1024; // 5 MB

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('image');
    if (!file || !(file instanceof File)) {
      return NextResponse.json(
        { error: 'No file uploaded', message: 'Send a file with field name "image" (JPEG or PNG)' },
        { status: 400 }
      );
    }
    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json(
        { error: 'Invalid file type', message: 'Only JPEG and PNG images are allowed' },
        { status: 400 }
      );
    }
    if (file.size > MAX_SIZE) {
      return NextResponse.json(
        { error: 'File too large', message: 'Maximum size is 5 MB' },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const ext = file.name?.match(/\.[^.]+$/)?.[0] ?? (file.type === 'image/png' ? '.png' : '.jpg');
    const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}${ext}`;

    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase.storage
      .from(BUCKET)
      .upload(fileName, buffer, {
        contentType: file.type,
        upsert: false,
      });

    if (error) {
      console.error('Supabase upload error:', error);
      return NextResponse.json({ error: 'Upload failed', message: error.message }, { status: 500 });
    }

    const { data: urlData } = supabase.storage.from(BUCKET).getPublicUrl(data.path);
    return NextResponse.json({ url: urlData.publicUrl });
  } catch (err) {
    console.error('Upload error:', err);
    const message = err instanceof Error ? err.message : 'Upload failed';
    if (message.includes('SUPABASE')) {
      return NextResponse.json({ error: 'Storage not configured', message }, { status: 500 });
    }
    return NextResponse.json({ error: 'Upload failed', message }, { status: 500 });
  }
}
