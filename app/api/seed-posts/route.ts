import { NextResponse } from 'next/server';
import { getSupabase } from '@/lib/supabase-server';

/** Hardcoded blog posts from the homepage to seed the database. */
const SEED_POSTS = [
  {
    title: "A traveler's guide to Penang, Malaysia - Where to Eat, Drink, Sleep and Explore",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "2017-03-15",
    location: "Penang, Malaysia",
    image_url: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800&q=80",
    is_featured: true,
  },
  {
    title: "Have you read The Beach by Alex?",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "2025-09-17",
    location: "Georgia",
    image_url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    is_featured: false,
  },
  {
    title: "The writer actually live in Philippines",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "2025-09-17",
    location: "Georgia",
    image_url: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=600&q=80",
    is_featured: false,
  },
  {
    title: "Finding Love & home in Tbilisi, Georgia",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "2021-09-17",
    location: "Penang, Malaysia",
    image_url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1000&q=80",
    is_featured: false,
  },
  {
    title: "Got away from the maddening Crowds",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "2021-09-17",
    location: "Google",
    image_url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80",
    is_featured: false,
  },
  {
    title: "Matsumoto Castle is considered one of",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "2021-09-17",
    location: "Google",
    image_url: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&q=80",
    is_featured: false,
  },
  {
    title: "Many buildings especially in Japan",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "2021-09-17",
    location: "Google",
    image_url: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&q=80",
    is_featured: false,
  },
  {
    title: "There are roughly 1200 semiwild deer",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "2021-09-17",
    location: "Google",
    image_url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1000&q=80",
    is_featured: false,
  },
];

export async function POST() {
  try {
    const supabase = getSupabase();

    // Ensure "Tips and Tricks" category exists
    const { data: categories } = await supabase.from('categories').select('id, name').ilike('name', '%Tips%');
    let categoryId: number | null = categories?.[0]?.id ?? null;
    if (!categoryId && categories?.length === 0) {
      const { data: newCat, error: catError } = await supabase
        .from('categories')
        .insert({ name: 'Tips and Tricks', count: 0 })
        .select('id')
        .single();
      if (catError) throw catError;
      categoryId = newCat?.id ?? null;
    }

    const inserted: { id: number; title: string }[] = [];
    for (const post of SEED_POSTS) {
      const { data, error } = await supabase
        .from('posts')
        .insert({
          title: post.title,
          excerpt: post.excerpt,
          content: post.content,
          date: post.date,
          category_id: categoryId,
          location: post.location,
          comments: 0,
          image_url: post.image_url,
          is_featured: post.is_featured,
          post_type: 'standard',
        })
        .select('id, title')
        .single();
      if (error) throw error;
      if (data) inserted.push(data as { id: number; title: string });
    }

    return NextResponse.json({
      message: `Seeded ${inserted.length} blog posts.`,
      posts: inserted,
    });
  } catch (error) {
    console.error('Error seeding posts:', error);
    return NextResponse.json(
      { error: 'Failed to seed posts', message: (error as Error).message },
      { status: 500 }
    );
  }
}
