// Fallback data in case API is not available
// This ensures the UI never breaks even if backend is down

export const fallbackPosts = [
  {
    id: 1,
    title: "A traveler's guide to Penang, Malaysia - Where to Eat, Drink, Sleep and Explore",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra ac erat commodo non leo eget gravida viverra. Phasellus pharetra.",
    date: "Mar 15, 2017",
    category_name: "Tips and Tricks",
    location: "Penang, Malaysia",
    comments: 53,
    image_url: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800&q=80",
    is_featured: true,
  },
];

export const fallbackCategories = [
  { id: 1, name: 'Europe', count: 11 },
  { id: 2, name: 'Mountains', count: 11 },
  { id: 3, name: 'Traveling Video', count: 11 },
  { id: 4, name: 'Beauty of Seas', count: 11 },
  { id: 5, name: 'Cuisine', count: 11 },
  { id: 6, name: 'Guides for traveler', count: 11 },
  { id: 7, name: 'Other', count: 11 },
];

export const fallbackProducts = [
  { 
    id: 1,
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=100&q=80',
    name: 'Apple MacBook Air MJV2ELL/A 13-inch Laptop',
    price: '$514'
  },
  { 
    id: 2,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=100&q=80',
    name: 'Iphone Xs case, Iphone X case, SUPCASE',
    price: '$267'
  },
  { 
    id: 3,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&q=80',
    name: 'Master Sport band for Apple wrist watch',
    price: '$378'
  }
];

export const fallbackSocialStats = [
  { platform: 'facebook', count: '65.5K', label: 'Likes', color: '#1877F2' },
  { platform: 'twitter', count: '105k', label: 'Followers', color: '#1DA1F2' },
  { platform: 'youtube', count: '1.5M', label: 'Subscribers', color: '#FF0000' },
  { platform: 'instagram', count: '85k', label: 'Followers', color: 'linear-gradient(45deg, #833AB4, #FD1D1D, #F77737)' },
];

export const fallbackSettings = {
  countries_count: '70',
  cities_count: '1036',
  subscriber_count: '98641',
};
